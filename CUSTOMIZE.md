# How to Customize Your CV

## Quick Start

1. **Edit your CV content**: Open `src/content/cv.md` and update your information
2. **Run locally**: `npm run dev` and visit `http://localhost:5173`
3. **Export PDF**: Click the "Export PDF" button in the top-right corner

## Updating Your Information

### Personal Details

Edit the frontmatter section at the top of `src/content/cv.md`:

```markdown
---
name: "Your Name"
title: "Your Job Title"
email: "your.email@example.com"
phone: "+1 (555) 123-4567"
location: "Your City, Country"
github: "github.com/yourusername"
linkedin: "linkedin.com/in/yourusername"
website: "yourwebsite.com"
---
```

### CV Content

Below the frontmatter, write your CV using standard Markdown:

```markdown
## Summary
Your professional summary...

## Experience

### Job Title | Company Name
**Jan 2022 - Present** | Location

- Achievement 1
- Achievement 2

### Previous Job | Previous Company
**Jan 2020 - Dec 2021** | Location

- Achievement 1

## Technical Skills

**Languages:** Go, TypeScript, Python

**Frameworks:** Node.js, React

## Education

### Degree Name
**University Name** | Year - Year

- GPA: 3.8/4.0
```

## Styling Tips

### Section Headers

Use `## Heading` for main sections. They'll automatically get a colored accent bar.

### Job Titles

Use `### Job Title | Company` for job entries.

### Dates and Locations

Use bold for dates: `**Jan 2022 - Present** | Location`

### Skills Lists

Group skills with bold labels:
```markdown
**Languages:** Go, TypeScript, Python
**Frameworks:** Node.js, React
```

### Bullet Points

Regular markdown lists automatically get styled with arrow bullets (▹):
```markdown
- First achievement
- Second achievement
```

### Code/Technical Terms

Use backticks for technical terms or inline code:
```markdown
Built APIs using `Go` and deployed on `Kubernetes`
```

## Color Customization

Edit `src/index.css` to change the color scheme:

```css
:root {
  --primary: 222.2 47.4% 11.2%;        /* Main accent color */
  --muted-foreground: 215.4 16.3% 46.9%; /* Secondary text */
  --border: 214.3 31.8% 91.4%;         /* Border color */
}
```

Values are in HSL format: `hue saturation% lightness%`

## Deploying to GitHub Pages

1. Create a repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
3. Enable GitHub Pages in repository settings (select "GitHub Actions" as source)
4. Your site will be at: `https://yourusername.github.io/your-repo/`

## Tips

- Keep sections concise and focused
- Use strong action verbs in bullet points
- Quantify achievements when possible (e.g., "improved performance by 50%")
- Update the `title` in `index.html` to customize your page title
- Test the PDF export regularly to ensure it looks good
- The design is optimized for 1-2 pages

## Need Help?

Check the main README.md for full documentation or open an issue on GitHub.
