# G.M. Özil's Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations powered by Framer Motion and custom styling.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15.0 and TypeScript
- **Responsive Design**: Fully responsive layout that works on all devices
- **Animations**: Smooth page transitions and hover effects using Framer Motion
- **Custom Styling**: Tailored design with custom color scheme and Geist font family
- **Dark Mode**: Built-in dark mode support
- **Optimized Images**: Next.js image optimization
- **Automated Deployment**: GitHub Actions workflow for automatic deployment

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [GitHub Pages](https://pages.github.com/) - Hosting
- [GitHub Actions](https://github.com/features/actions) - CI/CD

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/gurkanozil/gurkanozil.github.io.git
   cd gurkanozil.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📦 Project Structure

```
gurkanozil.github.io/
├── src/
│ ├── app/
│ │ ├── layout.tsx # Root layout component
│ │ ├── page.tsx # Home page component
│ │ └── globals.css # Global styles
│ └── ...
├── public/
│ └── headshot.png # Profile image
├── .github/
│ └── workflows/ # GitHub Actions workflows
└── ...
```

## 🔧 Configuration

The project includes several configuration files:

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.json` - ESLint rules

## 🚀 Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions. The workflow is triggered on push to the main branch.

To deploy manually:

```bash
npm run deploy
```

## 🎨 Customization

### Colors
The site uses a custom color scheme defined in the Tailwind configuration:

```typescript
colors: {
  'forest': {
    500: '#2D5A27',
    600: '#224420',
  },
}
```

### Fonts
The site uses the Geist font family, with both sans-serif and monospace variants:
- Geist Sans for general text
- Geist Mono for code and monospaced text


## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/gurkanozil/gurkanozil.github.io/issues).

## 📞 Contact

- LinkedIn: [gurkanozil](https://linkedin.com/in/gurkanozil)
- GitHub: [@gurkanozil](https://github.com/gurkanozil)
```
