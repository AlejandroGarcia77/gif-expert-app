import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";

import "./styles.css";
import { AddCategory } from "./components/AddCategory";

const api_key = "GQd58k9igcc7omsTn8C4zns3BC4i6eOL";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>
);
