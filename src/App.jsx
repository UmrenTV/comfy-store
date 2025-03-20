import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
    HomeLayout,
    Landing,
    Error,
    Products,
    SingleProduct,
    Cart,
    About,
    Register,
    Login,
    Checkout,
    Orders,
} from "./pages";

import { ErrorElement } from "./components";
import { store } from "./store";

// loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./pages/Orders";

// actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckoutForm";

// actions

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
                errorElement: <ErrorElement />,
                loader: landingLoader,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "products",
                element: <Products />,
                errorElement: <ErrorElement />,
                loader: productsLoader,
            },
            {
                path: "products/:id",
                element: <SingleProduct />,
                errorElement: <ErrorElement />,
                loader: singleProductLoader,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "checkout",
                element: <Checkout />,
                loader: checkoutLoader(store),
                action: checkoutAction(store),
            },
            {
                path: "Orders",
                element: <Orders />,
                loader: ordersLoader(store),
            },
        ],
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <Error />,
        action: registerAction,
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
        action: loginAction(store),
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};
export default App;
