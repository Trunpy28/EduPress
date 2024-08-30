import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            return (
              <Route key={route.path} path={route.path} element={<Page />} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
