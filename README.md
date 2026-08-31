# Nihal Singh - Personal Developer & Designer Portfolio

A modern, high-converting personal portfolio website built with clean, zero-dependency **HTML5**, **CSS3**, and **JavaScript**. Designed with a luxury dark theme, warm amber/gold accents (`#f5a623`), glassmorphism stat cards, and an interactive layout matching the reference design.

---

## 🌟 Key Features

- **Hero Section (Reference-Accurate)**:
  - Prominent portrait cutout with radial ambient backlight glow
  - Gold uppercase badge (`HELLO, I'M`) and bold typography
  - Call-to-action buttons: `View My Work ->` (Gold pill) and `Download CV`
  - Mouse scroll animation indicator
  - 3 Glassmorphism Stat Badges (`2+ Years Experience`, `25+ Projects Completed`, `15+ Happy Clients`)
- **Theme Switcher**:
  - Dark Mode (Default) & Light Mode with smooth transition and `localStorage` persistence
- **Comprehensive Sections**:
  - **About Me**: Academic background at Lovely Professional University (B.Tech CSE), core focus areas, and quick details.
  - **Skills & Toolkit**: Java, Python, C++, HTML5, CSS3, JavaScript, MySQL, MongoDB, ESP32 & Embedded C, Git/GitHub, and Problem Solving.
  - **Featured Project Spotlight**: *Voice Controlled PowerPoint Presentation Controller* with interactive circuit dataflow modal.
  - **Certificates & Learning Log**: Infosys Springboard (Python, Cybersecurity), Saylor Academy (CS102), and Coursera (Software Development Methodologies).
  - **Education Timeline**: LPU and MTS Public School with academic details and locations.
  - **Contact & Open Channel**: Direct contact cards with one-click copy buttons for email & phone, social media links, and interactive contact form.
- **Interactive UI**:
  - Project architecture & CV preview modals
  - One-click copy to clipboard with toast notification feedback
  - ScrollSpy active navigation highlighting with golden dot indicator
  - Fully responsive design across Desktop, Tablet, and Mobile screens

---

## 🚀 How to Run Locally

Because this project is built with vanilla web technologies, **no build steps or package installations are required**.

### Method 1: Direct File Open
Simply double-click [`index.html`](file:///C:/Users/Welcome/.gemini/antigravity/scratch/nihal-portfolio/index.html) or right-click -> **Open with Google Chrome / Edge / Firefox**.

### Method 2: VS Code Live Server
1. Open the folder `C:\Users\Welcome\.gemini\antigravity\scratch\nihal-portfolio` in VS Code.
2. Click **Go Live** at the bottom status bar or right-click `index.html` -> **Open with Live Server**.

---

## 🌐 Free Deployment Options

### 1. GitHub Pages
1. Initialize a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. In your GitHub repository, go to **Settings > Pages**.
3. Under **Branch**, select `main` / `root` and click **Save**. Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`.

### 2. Vercel / Netlify
- Drag and drop the `nihal-portfolio` folder into [Netlify Drop](https://app.netlify.com/drop) or import from GitHub on [Vercel](https://vercel.com).

---

## 📁 File Structure

```
nihal-portfolio/
├── index.html            # Main HTML structure with all sections and modals
├── style.css             # Luxury dark/light theme, typography, animations
├── script.js             # Theme toggle, scrollspy, modals, copy tools, form logic
├── README.md             # Project documentation
└── assets/
    └── images/
        ├── favicon.svg       # Monogram gold NS favicon
        ├── nihal-portrait.png # Cropped portrait for hero section
        ├── nihal-original.png # Original full-resolution image
        └── hero-mockup.png   # Reference design mockup
```
