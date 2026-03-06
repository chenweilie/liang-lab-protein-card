# liang-lab-protein-card

AI-powered system that connects protein structure databases, 3D visualization models, and automated card export workflows to solve a real operational problem in academic research communication.

This project demonstrates how AI data pipelines can be integrated into practical scientific presentation systems rather than used as isolated visualization demos.

## Problem

Many research labs still rely on manual processes to create protein structure visualizations for papers, posters, and presentations.

Example scenario:
- Researchers need to generate branded protein structure cards for publications and lab meetings
- Manual 3D rendering, formatting, and export from tools like PyMOL is time-consuming and requires expertise
- No automated pipeline exists to go from a protein ID to a publication-ready card

The goal of this project is to demonstrate how AI and automated data pipelines can produce scientific visualizations end-to-end.

## Solution Overview

This system connects protein structure databases (PDB/AlphaFold) with 3D rendering logic and automated card export actions.

High-level workflow:
```
Input Source (Protein ID / PDB / UniProt Accession)
       ↓
AI Processing (Mol* 3D structure rendering)
       ↓
Decision Logic (Colour mode / Representation style selection)
       ↓
Automation Trigger (Canvas compositing pipeline)
       ↓
System Action (PNG card export — 1200px, 16:9, A4)
```

The architecture demonstrates how a data retrieval and rendering pipeline can be embedded into a larger scientific communication workflow.

## Architecture

**Input Layer**
- RCSB PDB ID input
- UniProt accession lookup
- AlphaFold structure fetch
- 5 preset lab protein structures

**AI Processing Layer**
- Mol* (`molstar`) 3D structure rendering engine
- pLDDT confidence visualization
- Secondary structure and hydrophobicity analysis
- Side-by-side apo/holo structural comparison

**Automation Layer**
- React component-based card generation
- Real-time parameter updates
- Colour mode and representation switching

**Execution Layer**
- Canvas API compositing (no server required)
- One-click PNG export (1200px square, 16:9, A4)
- Cloudflare Pages deployment pipeline

**Architecture Diagram:**
```
 Protein ID Input
       ↓
  PDB / AlphaFold API
       ↓
  Mol* 3D Rendering
       ↓
 Card Compositing
       ↓
 PNG Export / Download
```

## Tech Stack

**AI / ML**
- Mol* (`molstar`) molecular visualization
- AlphaFold pLDDT confidence mapping
- RCSB PDB REST API

**Frontend**
- React 18 + TypeScript
- Vite 6 build tool
- Tailwind CSS v3
- React Router v6

**Automation**
- Canvas API (client-side image export)
- Cloudflare Pages (CI/CD deployment)
- No backend required — fully client-side

**Infrastructure**
- Cloudflare Pages (edge hosting)
- GitHub Actions (CI/CD)
- Public API data sources only

## Example Use Cases

This architecture can support:
- Academic lab protein structure presentation cards
- Publication figure generation
- Conference poster preparation
- Lab website structure showcases
- Structural biology teaching materials

## Results

Example performance metrics:
- Protein ID to rendered 3D card: < 5 seconds
- One-click export generates publication-ready PNG
- Replaces hours of manual PyMOL rendering and formatting
- Deployed at https://liang-lab-protein-card.pages.dev

This project demonstrates how AI visualization pipelines can drive practical operational efficiency in scientific communication.

## Demo

Example workflow:
1. User enters protein PDB ID or UniProt accession
2. System fetches structure data from RCSB / AlphaFold API
3. Mol* renders interactive 3D visualization in browser
4. User selects colour mode, representation style, and card format
5. One click exports branded card as PNG for immediate use

*Add screenshots, GIFs, or demo videos here.*

**Live site:** https://liang-lab-protein-card.pages.dev

## Repository Structure

```
liang-lab-protein-card/
├── src/
│   ├── components/     # React card components
│   ├── pages/          # Route pages
│   └── utils/          # API + export logic
├── public/
├── data/               # Lab protein presets
├── index.html
└── README.md
```

## Quick Start

Clone the repository
```bash
git clone https://github.com/chenweilie/liang-lab-protein-card
```

Install dependencies
```bash
npm install
```

Run the project
```bash
npm run dev
```

## Future Improvements

Possible extensions:
- Batch export for multiple proteins
- Automated comparison card generation
- Integration with lab publication database
- Animated GIF export for presentations
- AI-generated structure annotation captions

## Author

William Chen  
Applied AI Engineer | AI Integration | Automation Systems

**LinkedIn:** https://linkedin.com/in/william-chen-98264938  
**GitHub:** https://github.com/chenweilie
