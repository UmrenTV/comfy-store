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
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "product/:id",
                element: <SingleProduct />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "checkout",
                element: <Checkout />,
            },
            {
                path: "Orders",
                element: <Orders />,
            },
        ],
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

const App = () => {
    return (
        <RouterProvider router={router}>
            <div>
                <h1 className="prose-2xl">Hello World!</h1>
                <button className="btn btn-soft btn-secondary">Click Me</button>
            </div>
        </RouterProvider>
    );
};
export default App;
