# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



<!-- From here Starts  -->

React Test Project (Home, Login & Product Pages)

This is a React application built with Vite, featuring a Home Page, Login Page, and a Product Page.
The UI is organized into reusable sections (Header, Banner, First Section, Footer). The project is deployed on Vercel.

🚀 Installation & Execution Instructions
Prerequisites

Node.js (>= 16.x recommended)

npm or yarn

STEPS ARE:
# 1. Clone the repository
git clone https://github.com/your-username/react-test.git
cd react-test/my-app

# 2. Install dependencies
npm install
# or
yarn install

# 3. Start development server
npm run dev
# or
yarn dev

# 4. Open in browser
http://localhost:5173   # Default Vite port

# 5. Build for production
npm run build


✅ Dependencies in Your Project

@fortawesome/react-fontawesome
For using scalable vector icons in React (great for UI/UX, login form icons, etc.).

@tailwindcss/vite
Tailwind CSS plugin for Vite integration (utility-first CSS framework).

lucide-react
Icon library similar to Heroicons, lightweight and customizable.

react / react-dom
Core React libraries for building and rendering UI components.

react-icons
Popular icon library with multiple icon sets (Material, FontAwesome, etc.).

react-router-dom
For client-side routing (Home, Login, Product pages).

tailwindcss
Utility-first CSS framework for rapid UI development.

✅ DevDependencies

@eslint/js, eslint, eslint-plugin-react-hooks, eslint-plugin-react-refresh
For linting React code and ensuring code quality.

@types/react, @types/react-dom
TypeScript type definitions for React (useful even if not using TypeScript yet).

@vitejs/plugin-react
React plugin for Vite (enables JSX/TSX support, Fast Refresh, etc.).


PRIJECT STRUCTURE IS :
my-app/
│── public/                   # Static assets
│── src/
│   ├── assets/               # Images, fonts, static resources
│   ├── Components/
│   │   ├── Pages/            # Application pages
│   │   │   ├── HomePage.jsx        # Home page layout
│   │   │   ├── LoginPage.jsx       # Login form page
│   │   │   ├── ProductPages.jsx    # Product details / listing
│   │   ├── Section/          # Reusable UI sections
│   │   │   ├── BannerSection.jsx
│   │   │   ├── FirstSection.jsx
│   │   │   ├── FooterSection.jsx
│   │   │   ├── Header.jsx
│   ├── App.css               # Global styles
│   ├── App.jsx               # Root component, routes setup
│   ├── index.css             # Entry styles
│   ├── main.jsx              # Entry point
│── index.html                # HTML template
│── package.json              # Dependencies & scripts
│── vite.config.js            # Vite configuration
│── vercel.json               # Vercel deployment configuration
│── README.md                 # Documentation


🛠 Implementation Assumptions & Decisions

Routing

Implemented with react-router-dom.

Pages: Home, Login, Product.

Component Reusability

Sections like Header, Footer, Banner are separate for clean structure.

Login Page

Includes form validation (both fields required).

Eye toggle for password visibility.

Styling

Tailwind CSS for rapid UI development.

Reusable utility classes keep styles consistent.

Deployment

Deployed on Vercel with continuous deployment enabled.

📦 Justification for Libraries Used

react-router-dom → Enables multiple pages (Home, Login, Product) with smooth navigation.

tailwindcss + @tailwindcss/vite → Utility-first styling, faster development, responsive design.

react-icons + lucide-react + @fortawesome/react-fontawesome → Provides a wide range of icons for forms, navigation, and UI components.

vite + @vitejs/plugin-react → Chosen for fast development builds and optimized production output.

eslint & plugins → Ensures clean, maintainable, and bug-free code.

🌐 Live Demo

🔗 https://test-page12.vercel.app/