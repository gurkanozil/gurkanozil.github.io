import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./hooks/useTheme";

// Target the root element for React rendering
const rootElement = document.getElementById("root");

// Check if the root element exists before attempting to render
if (rootElement) {
  // Create a root for React to render into
  const root = createRoot(rootElement);

  // Render the application within StrictMode and ThemeProvider
  root.render(
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>
  );
} else {
  // Log an error if the root element is not found
  console.error(
    "Root element with id 'root' not found. Ensure it exists in your HTML."
  );
}
