# Rajendra Ladkat - Personal Website

A modern, dynamic portfolio website built with Next.js, React, and Tailwind CSS, showcasing expertise as a DevOps & Cloud Infrastructure Consultant.

🌐 **Live Site**: [https://rajendraladkat1919.github.io](https://rajendraladkat1919.github.io)

## 🚀 Features

- **Modern Design**: Beautiful, responsive UI built with Tailwind CSS
- **Dynamic & Interactive**: Built with Next.js and React for enhanced user experience
- **SEO Optimized**: Built-in SEO metadata and optimization
- **Fast Loading**: Optimized for performance with Next.js static generation
- **Mobile Responsive**: Fully responsive design that works seamlessly on all devices
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Smooth Animations**: Smooth scrolling and hover effects
- **GitHub Integration**: Automatic deployment via GitHub Actions

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **GitHub Pages** - Hosting platform (static export)

## 📋 Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager
- Git

## 🏃‍♂️ Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/rajendraladkat1919/rajendraladkat1919.github.io.git
   cd rajendraladkat1919.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **View the site**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Update Content

- Edit `app/page.tsx` to modify the main page content
- Update `app/layout.tsx` to change site metadata and SEO settings
- Modify components in the `components/` directory

### Styling

- Tailwind CSS configuration: `tailwind.config.js`
- Global styles: `app/globals.css`
- Component-specific styles can be added using Tailwind classes

### Add New Pages

Create new files in the `app/` directory:
- `app/about/page.tsx` → `/about`
- `app/blog/page.tsx` → `/blog`

## 🚢 Deployment

### GitHub Pages (Static Export)

The site is configured for static export and can be deployed to GitHub Pages:

1. **Build the site**
   ```bash
   npm run build
   ```

2. **The `out/` directory contains the generated static files**

3. **Deploy to GitHub Pages**
   - Push the `out/` directory contents to the `gh-pages` branch, or
   - Use GitHub Actions to automate deployment (see below)

### GitHub Actions (Automated Deployment)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Alternative Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `out/` folder or connect via Git
- **AWS S3 + CloudFront**: Upload `out/` to S3 and serve via CloudFront
- **Any static hosting**: The `out/` directory can be deployed anywhere

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   └── Section.tsx         # Reusable section component
├── public/                 # Static assets (images, etc.)
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server (requires build first)
- `npm run lint` - Run ESLint

## 🎨 Features in Detail

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly navigation

### Performance
- Static site generation for fast loading
- Optimized images and assets
- Code splitting and lazy loading

### SEO
- Meta tags and Open Graph support
- Semantic HTML structure
- Sitemap generation (can be added)

## 📧 Contact

- **Email**: raladevops1@gmail.com
- **LinkedIn**: [rajendra-ladkat-b337a350](https://linkedin.com/in/rajendra-ladkat-b337a350)
- **GitHub**: [rajendraladkat1919](https://github.com/rajendraladkat1919)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal website, but suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

---

Built with ❤️ using Next.js, React, and Tailwind CSS
