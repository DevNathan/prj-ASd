import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { KeyboardProvider } from "@/contexts/KeyboardContext";
import { LoadingScreenProvider } from "@/contexts/LoadingScreenContext";

function App() {
  return (
    <LoadingScreenProvider>
      <KeyboardProvider>
        <RouterProvider router={router} />
      </KeyboardProvider>
    </LoadingScreenProvider>
  );
}

export default App;
