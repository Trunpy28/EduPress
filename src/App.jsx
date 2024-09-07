import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import UserBasePage from "./pages/BasePage/UserBasePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            if (!route.adminManage) {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<UserBasePage><Page /></UserBasePage>}
                />
              );
            } else return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.page}
                />
              );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
