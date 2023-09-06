import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {router} from "./router/index.tsx"
import {PartialRouterItem} from "./types";

function App() {
    const renderRoutes = (routes: PartialRouterItem[]) => {
        return routes.map((route) => {
            if (!route.children) {
                return <Route key={route.path} path={route.path} element={route.element}/>;
            } else {
                return (
                    <Route key={route.path} path={route.path} element={route.element}>
                        {renderRoutes(route.children)}
                    </Route>
                );
            }
        });
    };

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {
                         renderRoutes(router)
                    }
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
