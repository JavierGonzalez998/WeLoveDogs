import "./normalize.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarContainer from "./components/navbar/Navbar";
import Index from "./pages/Index";
import Dogs from "./pages/Dogs";
import Error from "./pages/404";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const index = createBrowserRouter([
    {
      path: "/",
      element: <NavbarContainer><Index/></NavbarContainer>
    },
    {
      path: "/dogs/:breed",
      element: <NavbarContainer><Dogs/></NavbarContainer>
    },
    {
      path: "/404",
      element: <NavbarContainer><Error/></NavbarContainer>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={index} />
    </div>
  )
}

export default App
