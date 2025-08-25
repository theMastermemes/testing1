# Codex of Realms

A fantasy wiki built with Docusaurus + Pagefind search, featuring original D&D-style content including races, classes, spells, creatures, and world lore.

## 🌟 Features

- **Rich Fantasy Content**: Original races (Valdari, Ironborn, Shadowkin), classes (Wardkeeper, Lorekeeper), spells, bestiary, and more
- **Full-Text Search**: Powered by Pagefind for fast, offline search across all content
- **Fantasy Theme**: Custom styling with hero section, sigil, and immersive design
- **Cross-References**: Interconnected lore with links between races, regions, deities, and equipment
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## 🏗️ Local Development

### Prerequisites
- Node.js 18+ 

### Installation

```bash
npm install
```

### Start Development Server

```bash
npm run dev
# or
npm start
```

This opens `http://localhost:3000` with hot reload for development.

### Build with Search

```bash
npm run build
```

This builds the site and automatically runs Pagefind to generate search indices.

## 📁 Content Structure

```
docs/
├── races/           # Valdari, Ironborn, Shadowkin
├── classes/         # Wardkeeper, Lorekeeper, etc.
├── spells/          # Ward Magic, Shadow Weaving
├── bestiary/        # Forest Spirits, creatures
├── regions/         # Territories and locations
├── deities/         # Gods and divine beings
├── equipment/       # Weapons, armor, magical items
└── house-rules/     # Campaign modifications
```

## ✏️ Adding Content

1. **Create new pages**: Add `.md` or `.mdx` files in the appropriate `docs/` subfolder
2. **Use frontmatter**: Include `title` and `sidebar_position` for proper navigation
3. **Cross-reference**: Link to other pages using `[text](/docs/folder/page)` format
4. **Include tables**: Use markdown tables for stat blocks and info boxes

### Example Page Structure:

```md
---
title: New Race
sidebar_position: 5
---

# New Race

Brief description of the race.

## Racial Traits

| Trait | Description |
|-------|-------------|
| **Size** | Medium |
| **Speed** | 30 feet |

## Relations with Other Races

- **[Valdari](/docs/races/valdari)**: Friendly relations
```

## 🔍 Search

The site includes:
- **Homepage Search**: Quick search widget on the main page
- **Dedicated Search Page**: Full search interface at `/search`
- **Auto-indexing**: All content is automatically indexed during build

## 🚀 Deployment

### GitHub Pages (Automatic)

Pushes to `main` branch automatically deploy via GitHub Actions to GitHub Pages.

### Manual Deployment

```bash
npm run build
npm run serve  # Test locally
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build site with Pagefind search
- `npm run serve` - Serve built site locally
- `npm run clear` - Clear Docusaurus cache

## 🎨 Customization

- **Styling**: Edit `src/css/custom.css` for theme changes
- **Hero Section**: Modify `src/pages/index.tsx` and sigil at `static/img/sigil.svg`
- **Navigation**: Update `docusaurus.config.ts` navbar and `sidebars.ts`

## 📋 Next Steps

See `TODO.md` for planned features and content expansion ideas.

---

Built with [Docusaurus](https://docusaurus.io/) and [Pagefind](https://pagefind.app/)
