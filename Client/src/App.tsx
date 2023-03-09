import React, {FC} from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Products from "./pages/products";
import Service from "./pages/service";
import Footer from "./components/footer";

export enum RoutesEnum {
    HOME = "/",
    Products = "/products",
    Service = "/service",
}

export type RouteType = {
    path: RoutesEnum;
    Component: FC;
};

const RouteData:RouteType[] = [
    {
        path: RoutesEnum.HOME,
        Component: Home,
    },
    {
        path: RoutesEnum.Products,
        Component: Products,
    },
    {
        path: RoutesEnum.Service,
        Component: Service,
    }
]

const App = () => {

  return (
    <div className="App">
      <Navbar/>
        <Routes>
        {RouteData.map(({path, Component}, index) => (
            <Route key={index} path={path} element={<Component/>}/>
        ))}
        </Routes>
    </div>
  );
}

export default App;
