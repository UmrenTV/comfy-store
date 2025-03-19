import axios from "axios";

const url = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
    baseURL: url,
});

export const formatPrice = (price) => {
    const dollarsAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format((price / 100).toFixed(2));
    return dollarsAmount;
};

// function that generates options based on a number passed as an argument
export const generateAmountOptions = (number) => {
    // you pass a length of the array, and then callback function what to do with each item
    // we don't use the value of the item, coz in this case we don't care, we just need the index
    return Array.from({ length: number }, (_, index) => {
        const amount = index + 1;
        return (
            <option value={amount} key={amount}>
                {amount}
            </option>
        );
    });
};
