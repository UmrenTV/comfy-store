import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";

const url = "products";

export const loader = async ({ request }) => {
    // const params = new URL(request.url).searchParams;
    // const search = params.get("search"); // this is approach for one by one
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ]); // this is a one liner approach
    const response = await customFetch(url, { params }); // then we can just pass them as object named params, coz axios expects params object anyways.
    const products = response.data.data;
    const meta = response.data.meta;
    return { products, meta, params };
};

const Products = () => {
    const { products, meta } = useLoaderData();
    return (
        <>
            <Filters />
            <ProductsContainer />
            <PaginationContainer />
        </>
    );
};

export default Products;
