# ⚡ Durgesh Kalel – Premium Animated Developer Portfolio

> **"Turning Creative Ideas Into Digital Experiences."**

A visually stunning, futuristic, fully responsive developer portfolio built for **Durgesh Kalel** (Creative Developer | Programmer | Tech Enthusiast from Maharashtra, India). Inspired by modern Awwwards-winning developer portfolios, it combines deep navy & black cyberpunk aesthetics, neon cyan and purple accents, glassmorphism UI, interactive Three.js 3D particle background, smooth audio feedback, and rich project case studies.

---

## 🌟 Key Features

### 1. 🌌 Design & Visual Concept
- **Dark Futuristic Aesthetic:** Sleek deep navy (`#040714`), neon cyan (`#00F0FF`), and electric purple (`#A855F7`) glows.
- **Glassmorphism UI:** Frosted glass panels with `backdrop-filter: blur()`, subtle glowing borders, and responsive hover elevations.
- **Interactive 3D Elements:** Native Three.js canvas featuring a 1,200-particle starfield constellation and floating wireframe geometries that respond to mouse coordinates.
- **Accessibility First:** Integrated `prefers-reduced-motion` compliance, semantic HTML5, and screen-reader accessibility.
- **Dark / Light Theme Toggle:** Futuristic cyber dark theme by default, with a crystal light mode toggle.

### 2. 🚀 Hero Section
- **Dynamic Typewriter:** Animated text smoothly cycling between:
  - *Creative Developer*
  - *Programmer*
  - *Game Developer*
  - *Tech Enthusiast*
- **3D Parallax Profile Card:** Interactive floating avatar card responding to 3D mouse tilt.
- **Status Badges:** Pulsing *"Available for Opportunities"* live status indicator.
- **Quick Actions:** *"View Projects"* (smooth scroll) and *"Download Resume"* (interactive modal).
- **Social Connectors:** Verified GitHub and LinkedIn links.

### 3. 👨‍💻 About Me & Philosophy
- **Authentic Bio:** Details Durgesh's background in Maharashtra, India, and his passion for web, mobile, and game development.
- **Education Section:** Clean academic card showcasing Computer Science foundation, algorithms, and architectures without fabricated qualifications.
- **Core Pillars:** Clean Architecture, Real-World Focus, and Agile Prototyping.
- **Technical Passion Areas:** Game loops, Kotlin native apps, data privacy, and modern web UI/UX.

### 4. 🛠️ Interactive Skills Section
- **Categories:** Programming, Frontend, Backend, Database, Game Dev, Tools.
- **Category Filter Bar:** One-click filtering with glowing active pill indicators.
- **Authentic Proficiency:** Tiers (Advanced, Proficient, Intermediate) with animated level bars.
- **Real-Time Calibration Slider:** Allows Durgesh to calibrate skill metrics in real-time.

### 5. 🎮 Featured Projects
1. **Gravity Runner (Unity, C#, 2D Game Development):**
   - Invertible gravity mechanics, moving obstacles, mobile touch controls, and level progression.
2. **Home Crew (Kotlin, Jetpack Compose, Firebase):**
   - Community service marketplace connecting citizens with nearby plumbers, electricians, and tradespeople.
   - Tagline: *"Your home. Our helping hands."*
3. **ShadowX Coders (HTML, CSS, JavaScript, Firebase):**
   - High-security cyberpunk authentication portal featuring Google OAuth and token persistence.
4. **Print Shop Data Leak Prevention (Hackathon Concept):**
   - Privacy-first document protection framework with self-purging print tokens and forensic watermarks.
- **Case Study Modal:** Interactive popups detailing architecture, features, and source repositories.

### 6. ⏳ My Journey Timeline
- Vertical animated cyber timeline tracing the progression:
  1. *Programming Learning Journey* (Logic & algorithms in Python/C#)
  2. *First Website Development* (Semantic HTML, responsive CSS, JavaScript)
  3. *Game Development with Unity* (2D physics and mobile game loops)
  4. *Android Application Development* (Kotlin & Jetpack Compose native architecture)
  5. *Hackathon Projects* (Rapid prototyping & security solutions)
  6. *Future Development Goals* (Three.js 3D, scalable cloud systems, AI integrations)

### 7. 🏆 Achievements & Certificates
- Verified credential cards with modal inspector for hackathons, web development, Unity game development, and Android app architecture.

### 8. 📬 Contact Section
- **Form:** Name, Email, Subject, and Message with strict client-side validation.
- **Firebase Firestore Ready:** Automatically pushes to Cloud Firestore when credentials are provided, or seamlessly records into local browser storage in demo mode.
- **Confetti & Cyber Sound:** Interactive celebration upon successful dispatch.
- **Direct Email Copy:** Instant clipboard copy with feedback.

### 9. 📄 Developer Resume & CV
- Full-featured modal displaying Durgesh Kalel's complete resume.
- Native **"Print / Save PDF"** support with dedicated `@media print` stylesheet.

### 10. 🎵 Web Audio Synthesis
- Built-in sound effects engine using the HTML5 Web Audio API (zero external MP3 assets, zero load delay, toggleable on/off).

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) + Custom Glassmorphism CSS |
| **3D Graphics** | [Three.js](https://threejs.org/) (Particle Constellations & Wireframes) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Celebrations** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Backend / DB** | [Firebase](https://firebase.google.com/) Firestore & Local Storage Vault |
| **Hosting** | [Vercel](https://vercel.com/) |

---

## 📂 Project Directory Structure

```text
durgesh-portfolio/
├── public/
│   └── favicon.svg                  # Futuristic glowing DK monogram
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── durgesh-avatar.svg   # 3D Cyberpunk developer portrait
│   │       └── projects/
│   │           ├── gravity-runner.svg
│   │           ├── home-crew.svg
│   │           ├── shadowx-coders.svg
│   │           └── print-shop-leak.svg
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky glass nav, progress bar, audio toggle
│   │   ├── Hero.jsx                 # Dynamic typewriter, 3D tilt avatar, CTA
│   │   ├── About.jsx                # Introduction, education, core pillars
│   │   ├── Skills.jsx               # Category filters, calibration slider
│   │   ├── Projects.jsx             # Featured projects grid & filters
│   │   ├── ProjectModal.jsx         # Case study detail modal
│   │   ├── Journey.jsx              # Vertical animated timeline
│   │   ├── Certificates.jsx         # Verified credentials inspector
│   │   ├── Contact.jsx              # Validated form + Firebase / local vault
│   │   ├── Footer.jsx               # Quick links, live Maharashtra IST clock, back-to-top
│   │   ├── CustomCursor.jsx         # Neon follower cursor
│   │   ├── Preloader.jsx            # Cyber initialization sequence
│   │   ├── ThreeBackground.jsx      # Three.js 3D particles & wireframes
│   │   ├── ResumeModal.jsx          # Interactive & printable Developer CV
│   │   ├── NotFound.jsx             # 404 Error screen
│   │   └── ThemeContext.jsx         # Dark / Light theme provider
│   ├── data/
│   │   └── portfolioData.js         # Single source of truth for all content
│   ├── firebase/
│   │   └── firebaseConfig.js        # Firestore client with graceful fallback
│   ├── styles/
│   │   └── index.css                # Tailwind imports, scrollbar, neon utilities
│   ├── utils/
│   │   └── audio.js                 # Web Audio API sound synthesis
│   ├── App.jsx                      # Main root composition
│   ├── App.css                      # Keyframes & print stylesheets
│   └── main.jsx                     # Vite React entrypoint
├── index.html                       # SEO meta tags, Google Fonts & JSON-LD Schema
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js                   # Chunking & performance optimization
└── vercel.json                      # Vercel deployment & security headers
```

---

## 💻 Installation & Local Development

### 1. Prerequisites
- Node.js (v18 or later recommended)
- npm or pnpm

### 2. Clone or Navigate to Directory
```bash
cd D:\apps\durgesh-portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the live portfolio!

### 5. Production Build
```bash
npm run build
```
Creates an optimized, tree-shaken, and minified production build in the `dist/` directory.

---

## 🔒 Firebase Firestore Setup (Optional)

The contact form is configured to work **immediately** in offline/demo mode by saving submissions safely into `localStorage`. 

To connect to your live Firebase Cloud Firestore:

1. Create a project at [console.firebase.google.com](https://console.firebase.google.com/).
2. Enable **Firestore Database** in test or production mode.
3. Copy `.env.example` to `.env` and fill in your keys:
   ```env
   VITE_FIREBASE_API_KEY="AIzaSy..."
   VITE_FIREBASE_AUTH_DOMAIN="durgesh-portfolio.firebaseapp.com"
   VITE_FIREBASE_PROJECT_ID="durgesh-portfolio"
   VITE_FIREBASE_STORAGE_BUCKET="durgesh-portfolio.appspot.com"
   VITE_FIREBASE_MESSAGING_SENDER_ID="123456789012"
   VITE_FIREBASE_APP_ID="1:123456789012:web:abcdef"
   ```
4. Recommended Firestore Security Rules:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /contacts/{document} {
         // Allow anyone to submit a contact message
         allow create: if request.resource.data.name is string 
                      && request.resource.data.email is string
                      && request.resource.data.message is string;
         // Only authenticated admin can read or delete messages
         allow read, update, delete: if request.auth != null;
       }
     }
   }
   ```

---

## 🚀 Vercel Deployment Guide

Deploying this portfolio to Vercel takes less than 2 minutes:

### Option A: Using Vercel Web Dashboard (Recommended)
1. Push this repository to your GitHub account (`https://github.com/durgeshkalel/durgesh-portfolio`).
2. Log in to [vercel.com](https://vercel.com/) and click **"Add New..." > "Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect `Vite` settings (as pre-configured in `vercel.json`):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. *(Optional)* Add your Firebase environment variables under the **Environment Variables** tab.
6. Click **Deploy**. Your portfolio will be live worldwide with SSL and CDN edge caching!

### Option B: Using Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## 👤 Developer Profile

- **Name:** Durgesh Kalel
- **Title:** Creative Developer | Programmer | Tech Enthusiast
- **Location:** Maharashtra, India
- **GitHub:** [github.com/durgeshkalel](https://github.com/durgeshkalel)
- **LinkedIn:** [linkedin.com/in/durgeshkalel](https://linkedin.com/in/durgeshkalel)
- **Email:** `durgeshkalel.dev@gmail.com`
