# CV/Resume Site

A modern, minimalist CV/Resume website built with React, TypeScript, Tailwind CSS, and shadcn/ui. Designed specifically for Backend and Blockchain Engineers.

## Features

- **Markdown-Based Content**: Edit your CV by simply updating the `src/content/cv.md` file
- **PDF Export**: One-click export to PDF with proper formatting
- **Minimalist Design**: Clean, professional layout focused on content
- **Blockchain/Backend Themed**: Special styling elements for technical profiles
- **Light Mode Only**: Optimized for professional appearance
- **Easy Deployment**: Ready to deploy to GitHub Pages
- **TypeScript**: Full type safety throughout the application
- **Responsive**: Works on all device sizes

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your CV.

### Customize Your CV

Edit the file `src/content/cv.md` to update your information:

```markdown
---
name: "Your Name"
title: "Backend & Blockchain Engineer"
email: "your.email@example.com"
phone: "+1 (555) 123-4567"
location: "Your City, Country"
github: "github.com/yourusername"
linkedin: "linkedin.com/in/yourusername"
website: "yourwebsite.com"
---

## Summary

Your professional summary here...

## Experience

### Job Title | Company Name
**Dates** | Location

- Achievement 1
- Achievement 2
```

The frontmatter (between `---`) contains your contact information, and the markdown content below contains your CV sections.

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with your optimized site.

## Deploy to GitHub Pages

1. Create a new GitHub repository
2. Push your code to the repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Build and deployment", select "GitHub Actions" as the source

4. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your site on every push to the main branch

5. Your CV will be available at: `https://yourusername.github.io/your-repo/`

## Project Structure

```
cv-site/
├── src/
│   ├── components/
│   │   ├── CV.tsx              # Main CV component
│   │   └── ui/                 # Reusable UI components
│   │       ├── button.tsx
│   │       └── separator.tsx
│   ├── content/
│   │   └── cv.md               # Your CV content (EDIT THIS!)
│   ├── lib/
│   │   ├── markdown.ts         # Markdown parsing utilities
│   │   ├── pdf.ts              # PDF export functionality
│   │   └── utils.ts            # Utility functions
│   ├── App.tsx
│   ├── index.css               # Global styles
│   └── main.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Tech Stack

- **React 19**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality UI components
- **react-markdown**: Markdown rendering
- **gray-matter**: Frontmatter parsing
- **html2canvas + jsPDF**: PDF export
- **Lucide React**: Beautiful icons

## Customization

### Styling

The design uses Tailwind CSS with custom color variables defined in `src/index.css`. You can customize colors by modifying the CSS variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... more variables */
}
```

### Fonts

The site uses:
- **Inter**: For general text (modern, readable)
- **JetBrains Mono**: For code and technical elements

Fonts are loaded from Google Fonts in `index.html`. You can change them in `tailwind.config.js`.

### Layout

Modify the CV layout in `src/components/CV.tsx`. The component uses:
- Section headers with accent bars
- Custom icons for contact information
- Special bullet points (▹) for lists
- Blockchain-inspired geometric accent in the header

## PDF Export

Click the "Export PDF" button in the top-right corner to download your CV as a PDF. The export:
- Maintains all styling and formatting
- Uses A4 page size
- Handles multi-page content automatically
- Hides the export button in the PDF

## License

MIT - Feel free to use this template for your own CV!

## Contributing

Issues and PRs welcome!
