
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("Main.tsx executing...");

const rootElement = document.getElementById("root");

if (rootElement) {
  console.log("Root element found, creating React root...");
  try {
    const root = createRoot(rootElement);
    console.log("React root created, rendering App...");
    root.render(<App />);
    console.log("App rendered successfully!");
  } catch (error) {
    console.error("Error rendering the application:", error);
    // Display a fallback UI in case of rendering errors
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <h2>Something went wrong</h2>
        <p>There was an error loading the application. Please try refreshing the page.</p>
        <button onclick="location.reload()">Refresh Page</button>
      </div>
    `;
  }
} else {
  console.error("Root element not found! Check if the HTML has a div with id='root'");
}
