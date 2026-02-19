const { chromium } = require('playwright-core');
const fs = require('fs');
const https = require('https');
const http = require('http');

async function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);
    client.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Status Code: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();
  
  try {
    console.log('访问页面...');
    await page.goto('https://dr.ntu.edu.sg/entities/person/Liang-Zhao-Xun/selectedpublications', {
      waitUntil: 'networkidle',
      timeout: 60000
    });
    
    await page.waitForTimeout(5000);
    
    const html = await page.content();
    fs.writeFileSync('data/page_full.html', html);
    console.log('✓ 页面HTML已保存到 data/page_full.html');
    
    const textContent = await page.evaluate(() => document.body.innerText);
    fs.writeFileSync('data/personal_info.txt', textContent);
    console.log('✓ 个人信息文本已保存到 data/personal_info.txt');
    
    const images = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs
        .map(img => ({
          src: img.src,
          alt: img.alt,
          className: img.className,
          width: img.width,
          height: img.height
        }))
        .filter(img => {
          const photoKeywords = ['photo', 'profile', 'avatar', 'portrait', 'person'];
          const isLikelyPhoto = photoKeywords.some(kw => 
            (img.src && img.src.toLowerCase().includes(kw)) ||
            (img.alt && img.alt.toLowerCase().includes(kw)) ||
            (img.className && img.className.toLowerCase().includes(kw))
          );
          return isLikelyPhoto || (img.width > 100 && img.height > 100);
        });
    });
    
    console.log(`找到 ${images.length} 张可能的图片`);
    
    let photoDownloaded = false;
    for (let i = 0; i < Math.min(images.length, 3); i++) {
      const img = images[i];
      if (img.src) {
        try {
          const ext = img.src.split('.').pop().split('?')[0] || 'jpg';
          const safeExt = ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext.toLowerCase()) ? ext : 'jpg';
          const filepath = `data/photo_${i + 1}.${safeExt}`;
          await downloadFile(img.src, filepath);
          console.log(`✓ 照片 ${i + 1} 已下载: ${img.src}`);
          photoDownloaded = true;
        } catch (e) {
          console.log(`✗ 下载失败: ${img.src} - ${e.message}`);
        }
      }
    }
    
    if (!photoDownloaded) {
      console.log('⚠ 未能下载到照片');
    }
    
    await browser.close();
    console.log('\n完成！');
    
  } catch (error) {
    console.error('错误:', error);
    await browser.close();
    process.exit(1);
  }
})();