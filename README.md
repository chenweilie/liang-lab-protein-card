# Liang Lab Protein Card

> Protein structure visualization card generator for **Liang Lab**, School of Biological Sciences, NTU.
> Input a protein ID → 3D render → export a branded card for group meetings, papers, and social media.

**Live site:** https://liang-lab-protein-card.pages.dev

---

## Features

- **3D structure viewer** powered by [Mol*](https://molstar.org/) — rotate, zoom, and pan in the browser
- **PDB & AlphaFold support** — enter any RCSB PDB ID or UniProt accession
- **6 colour modes** — by chain, pLDDT confidence, secondary structure, B-factor, hydrophobicity, or uniform
- **4 representation styles** — cartoon, surface, ball & stick, ribbon
- **One-click card export** — composites the 3D view with protein metadata into a PNG (1200 px square, 16:9, or A4)
- **5 lab protein presets** — 5CZR, 3SY8, 4F5D, 3KLN, 2VEA; click to load instantly
- **Side-by-side compare view** — load two structures and compare apo/holo, WT/mutant, etc.

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 + TypeScript |
| Build tool | Vite 6 |
| 3D rendering | Mol* (`molstar`) |
| Styling | Tailwind CSS v3 |
| Routing | React Router v6 |
| Card export | Canvas API (no server) |
| Hosting | Cloudflare Pages |

All data is fetched client-side from public APIs — no backend required.

---

## Local development

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Setup

```bash
git clone https://github.com/chenweilie/liang-lab-protein-card.git
cd liang-lab-protein-card
npm install
npm run dev
```

Open http://localhost:5173.

### Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build locally |

---

## Project structure

```
liang-lab-protein-card/
├── public/
│   ├── favicon.svg          # SVG icon
│   └── _redirects           # Cloudflare Pages SPA redirect rule
├── src/
│   ├── types/index.ts       # Shared TypeScript types
│   ├── data/presets.ts      # Preset protein list (PDB IDs + metadata)
│   ├── services/api.ts      # RCSB PDB, AlphaFold DB, UniProt API calls
│   ├── utils/cardExport.ts  # Canvas-based card compositor
│   ├── components/
│   │   ├── MolstarViewer.tsx    # Mol* 3D canvas wrapper (lazy-loaded)
│   │   ├── ControlPanel.tsx     # Colour / style / export controls
│   │   ├── Navbar.tsx           # Top navigation + search
│   │   ├── PresetGrid.tsx       # Homepage protein card grid
│   │   └── CardExportModal.tsx  # Export preview & download modal
│   └── pages/
│       ├── HomePage.tsx     # Preset grid landing page
│       ├── ViewerPage.tsx   # Single protein viewer (?id=XXXX)
│       └── ComparePage.tsx  # Side-by-side compare (?a=XXXX&b=YYYY)
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.app.json
```

---

## Adding a preset protein

Edit `src/data/presets.ts` and append an entry to the `PRESET_PROTEINS` array:

```ts
{
  pdbId: '1TIM',
  displayName: 'Triosephosphate Isomerase',
  description: 'Classic TIM-barrel enzyme.',
  organism: 'Homo sapiens',
},
```

Commit and push — Cloudflare Pages will rebuild and deploy automatically.

---

## Data sources

All APIs are public and require no authentication.

| Source | URL pattern | Used for |
|--------|-------------|----------|
| RCSB PDB structure | `https://files.rcsb.org/download/{ID}.cif` | mmCIF structure file |
| RCSB PDB metadata | `https://data.rcsb.org/rest/v1/core/entry/{ID}` | Name, method, resolution |
| RCSB polymer entity | `https://data.rcsb.org/rest/v1/core/polymer_entity/{ID}/1` | Organism |
| AlphaFold DB | `https://alphafold.ebi.ac.uk/api/prediction/{UNIPROT_ID}` | Predicted structure URL |
| UniProt | `https://rest.uniprot.org/uniprotkb/{UNIPROT_ID}?format=json` | Protein name, function |

---

## Deployment

### Automatic (recommended)

Every push to `main` triggers a new Cloudflare Pages build automatically — no manual steps required.

```
git add .
git commit -m "your message"
git push
```

Cloudflare will build with `npm run build` and serve from `dist/`.

### Manual (Wrangler CLI)

```bash
npm run build
npx wrangler pages deploy dist/ --project-name liang-lab-protein-card --branch main
```

### Custom domain

In the Cloudflare Dashboard → **Pages** → `liang-lab-protein-card` → **Custom domains**, add your domain (e.g. `proteincard.lianglab.org`). Cloudflare handles the SSL certificate automatically.

### Build settings (already configured in Cloudflare)

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node.js version | 18 |

---

## Mol* notes

Mol* is lazy-loaded — it is not included in the initial page bundle. The homepage loads in < 2 s; the 3D viewer chunk (~815 KB gzipped) is fetched only when a protein page is opened.

The viewer is embedded headlessly (no Mol* UI chrome). All controls (colour, representation, export) are our own React UI.

### Colour themes

| Mode | Mol* theme name | Notes |
|------|----------------|-------|
| By Chain | `chain-id` | Default |
| By pLDDT | `plddt-confidence` | AlphaFold structures only |
| Secondary Structure | `secondary-structure` | α-helix / β-sheet / loop |
| By B-factor | `uncertainty` | Experimental structures only |
| Hydrophobicity | `hydrophobicity` | |
| Uniform | `uniform` | Single colour |

### Representation types

| Label | Mol* type |
|-------|-----------|
| Cartoon | `cartoon` |
| Surface | `gaussian-surface` |
| Ball & Stick | `ball-and-stick` |
| Ribbon | `backbone` |
