import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("Main.tsx is loading...");
console.log("Document root element:", document.getElementById("root"));

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Root element not found!");
  } else {
    console.log("Creating React root...");
    const root = createRoot(rootElement);
    console.log("Rendering App component...");
    root.render(<App />);
    console.log("App rendered successfully!");
  }
} catch (error) {
  console.error("Error during app initialization:", error);
}
