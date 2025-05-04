# Ashon Shakya Portfolio

A modern, single-page React application showcasing Ashon Shakya's portfolio as a versatile Software Engineer and creative professional. The application features a sleek black and orange theme, built with Tailwind CSS, and includes sections for About, Skills, Resume, Projects, Renders, and Contact. The design incorporates subtle animations and a responsive layout, with skills listed without percentages as per requirements.

## Features

- **Modern Design**: Black and orange theme with a clean, professional layout.
- **Responsive Navigation**: Fixed sidebar with scroll-based active section highlighting.
- **Sections**:
  - Hero: Introduction with social links.
  - About: Bio and personal details with a profile image.
  - Skills: Grid of skills without percentages.
  - Resume: Education and work experience in a two-column layout.
  - Projects: Showcase of projects with logos and iframes for interactive demos.
  - Renders: Gallery of 3D renders created with Blender.
  - Contact: Location and email details.
- **Animations**: Fade-in effects for section headings and hover transformations for interactive elements.
- **Tech Stack**: React, Tailwind CSS, Boxicons, and JavaScript.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A modern web browser (Chrome, Firefox, etc.)

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd ashon-shakya-portfolio
   ```

2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Configure Tailwind CSS**

   Ensure Tailwind CSS is set up in your project. Create a `tailwind.config.js` file:

   ```js
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

   Add the following to your `src/index.css`:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   @keyframes fadeIn {
     from {
       opacity: 0;
       transform: translateY(20px);
     }
     to {
       opacity: 1;
       transform: translateY(0);
     }
   }
   .animate-fade-in {
     animation: fadeIn 1s ease-out;
   }
   ```

4. **Include Boxicons**

   Add the Boxicons CDN to your `public/index.html`:

   ```html
   <link
     href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
     rel="stylesheet"
   />
   ```

   Alternatively, install Boxicons via npm:

   ```bash
   npm install boxicons
   ```

   Then import in your `src/index.js` or `src/App.jsx`:

   ```js
   import "boxicons/css/boxicons.min.css";
   ```

5. **Set Up Assets**

   Place all required images in the `public/assets/img/` or `src/assets/img/` directory, including:

   - `profile-img.jpg`
   - Project logos: `gallimaps_logo.png`, `health_research_logo.png`, `sxg_logo.png`
   - Portfolio renders: `bowl2.png`, `bulb.png`, `chair11.png`, `couch2.png`, `curtain.png`, `donut4.png`, etc.

   Ensure paths in `App.jsx` match your asset location (e.g., `assets/img/gallimaps_logo.png`).

6. **Run the Development Server**

   ```bash
   npm start
   ```

   Or with yarn:

   ```bash
   yarn start
   ```

   The app will be available at `http://localhost:3000`.

## Project Structure

```
ashon-shakya-portfolio/
├── public/
│   ├── index.html
│   └── assets/
│       └── img/
│           ├── profile-img.jpg
│           ├── gallimaps_logo.png
│           └── ...
├── src/
│   ├── App.jsx
│   ├── index.js
│   ├── index.css
│   └── assets/
│       └── img/ (optional, if assets are in src)
├── tailwind.config.js
├── package.json
└── README.md
```

- **`App.jsx`**: Main React component containing all sections and reusable components (NavItem, SocialLink, SkillItem, etc.).
- **`index.css`**: Tailwind CSS setup and custom animations.
- **`public/assets/img/`**: Static images for profile, projects, and renders.

## Dependencies

- **React**: `^18.2.0`
- **React DOM**: `^18.2.0`
- **Tailwind CSS**: `^3.4.0`
- **Boxicons**: `^2.1.4` (via CDN or npm)

Install dependencies with:

```bash
npm install react react-dom tailwindcss
```

## Usage

- Navigate through sections using the fixed sidebar.
- Hover over navigation items, skills, projects, or renders for interactive animations.
- Click project links to visit external sites or view iframes for interactive demos.
- Use the contact section to find email and location details.

## Notes

- **Bootstrap Icons**: The contact section uses Bootstrap Icons (`bi-geo-alt`, `bi-envelope`). If you prefer Boxicons, replace with `bx-map` and `bx-envelope` in `App.jsx`. Alternatively, include Bootstrap Icons CSS:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
  />
  ```

- **Asset Paths**: Adjust image paths in `App.jsx` if your assets are in a different directory (e.g., `public/assets/` vs. `src/assets/`).
- **Production Build**: To create a production build, run:

  ```bash
  npm run build
  ```

- **Deployment**: Deploy the build folder to a static hosting service like Vercel, Netlify, or GitHub Pages.

## Contributing

Feel free to submit issues or pull requests for improvements. Ensure changes align with the black and orange theme and maintain the modern, animated design.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- **Email**: dingosloth@gmail.com
- **Website**: [ashonshakya.com.np](https://ashonshakya.com.np)
- **LinkedIn**: [Ashon Shakya](https://www.linkedin.com/in/ashon-shakya)
- **Instagram**: [hellion_de_lord](https://www.instagram.com/hellion_de_lord/)

---

Built with ❤️ by Ashon Shakya
