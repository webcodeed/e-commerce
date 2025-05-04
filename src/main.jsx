import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login.jsx"
import Content from "./Content.jsx"
import ItemDetails from "./ItemDetails.jsx"
import Section from "./Section.jsx"
import Categories from "./Categories.jsx"
import Sort from "./Sort.jsx"
import { AuthProvider } from "./AuthContext.jsx"
import Carts from "./Carts.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Content />,
                children: [
                    { index: true, element: <Section /> },
                    {
                        path: "/category/:slug",
                        element: <Categories />,
                    },
                    {
                        path: "/items/:sortBy/:order",
                        element: <Sort />,
                    },
                ],
            },
            {
                path: "/items/:id",
                element: <ItemDetails />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/cart",
                element: <Carts />
            },
        ],
    },
])

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>
)
