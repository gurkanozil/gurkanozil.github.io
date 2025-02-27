# Portfolio - Gürkan Mahmut Özil

This repository contains the source code for my personal portfolio website, showcasing my skills, projects, and experience as a Full Stack Web Developer. The website is built using modern web technologies, focusing on a clean, responsive, and user-friendly design.

## Live Demo

You can view the live website here:
![Github Deploy](https://deploy-badge.vercel.app/?url=https%3A%2F%2Fgurkanozil.github.io%2F&logo=github&name=github)[gurkanozil.github.io/](https://gurkanozil.github.io/)

here:
![Netlify Deploy](https://deploy-badge.vercel.app/?url=https%3A%2F%2Fgurkanozil.netlify.app%2F&logo=netlify&name=netlify)[gurkanozil.netlify.app/](https://gurkanozil.netlify.app/)

and here:
![Vercel Deploy](https://deploy-badge.vercel.app/?url=https%3A%2F%2Fgurkanozil.vercel.app%2F&logo=vercel&name=vercel)[gurkanozil.vercel.app/](https://gurkanozil.vercel.app/)

## Features

- **Responsive Design:** The website is fully responsive and works seamlessly across various devices (desktops, tablets, and mobile phones).
- **Dark/Light Mode:** Users can toggle between dark and light themes based on their preference. This is implemented using a custom hook and stores the preference in local storage.
- **Smooth Scrolling:** Navigation between sections is enhanced with smooth scrolling for a better user experience.
- **Project Showcase:** Displays a curated list of personal projects with details, links to GitHub repositories, and live demos (where available). Each project card includes a modal for viewing larger images.
- **Skills Section:** Highlights technical skills and proficiency levels using interactive progress bars (on larger screens) and icons.
- **About Me Section:** Provides a brief personal and professional background.
- **Contact Information:** Includes links to LinkedIn, GitHub, and email for easy contact.
- **Animated Sparkles:** Uses `tsparticles` to add subtle animated sparkles to the background, enhancing the visual appeal.
- **Framer Motion Animations:** Leverages `framer-motion` for smooth animations and transitions throughout the website.

## Technologies Used

The project is built using the following technologies:

- **Frontend:**

  - **React.js:** A JavaScript library for building user interfaces.
  - **TypeScript:** A superset of JavaScript that adds static typing.
  - **Vite:** A fast build tool and development server.
  - **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
  - **Framer Motion:** A library for creating animations and interactions.
  - **React Icons:** A library for including icons.
  - **tsparticles:** For the background particle effects.
  - **Radix UI:** For accessible dialog/modal components.
  - **Lucide React:** For additional icons.

- **Deployment:**
  - **GitHub Pages:** Used for hosting the static website.
  - **GitHub Actions:** Automates the build and deployment process to GitHub Pages.

## Project Structure

The codebase is organized as follows:

- **`src/`**: Contains the main source code for the application.
  - **`components/`**: Reusable React components.
    - **`About.tsx`**: The About Me section.
    - **`Contact.tsx`**: The Contact section.
    - **`Footer.tsx`**: The footer component.
    - **`Header.tsx`**: The header/navigation bar.
    - **`Hero.tsx`**: The hero section.
    - **`ProjectCard.tsx`**: Component for displaying individual projects.
    - **`Projects.tsx`**: The Projects section, managing project cards.
    - **`Skills.tsx`**: The Skills section.
    - **`ThemeToggle.tsx`**: Component for toggling between dark/light mode.
    - **`ProjectModal.tsx`**: Component that shows a modal with a larger image.
  - **`hooks/`**: Custom React hooks.
    - **`useTheme.ts`**: Custom hook for managing the theme (dark/light mode).
    - **`useScroll.ts`**: Custom hook to add smooth scrolling
  - **`App.tsx`**: The main application component.
  - **`index.css`**: Global CSS styles.
  - **`main.tsx`**: The entry point of the application.
- **`public/`**: Contains static assets.
- **`vite.config.ts`**: Configuration file for Vite.

## Local Development

To run the project locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/gurkanozil/gurkanozil.github.io.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd gurkanozil.github.io
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Deployment

The website is automatically deployed to GitHub Pages, Vercel and Netlify using GitHub Actions. Any push to the `main` branch triggers a new deployment. The workflow is defined in `.github/workflows/deploy.yml`.

Vercel and Netlify deployment is done through the GUI on their respective websites.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## Contact

For any inquiries or questions, feel free to reach out to me through the contact information provided on the website.
