import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { KeyboardProvider } from "@/contexts/KeyboardContext";

function App() {
  return (
    <KeyboardProvider>
      <RouterProvider router={router} />
    </KeyboardProvider>
  );
}

export default App;
