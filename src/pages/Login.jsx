import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { customFetch } from "../utils";
import { loginUser } from "../features/user/userSlice";
import { toast } from "react-toastify";

export const action =
    (store) =>
    async ({ request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        try {
            const response = await customFetch.post("/auth/local", data);
            store.dispatch(loginUser(response.data));
            toast.success("Login successful!");
            return redirect("/");
        } catch (error) {
            const errorMessage =
                error?.response?.data?.error?.message ||
                "please double check your credentials";
            toast.error(errorMessage);
            return null;
        }
    };

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginAsGuestUser = async () => {
        try {
            const response = await customFetch.post("/auth/local", {
                identifier: "test@test.com",
                password: "secret",
            });
            dispatch(loginUser(response.data));
            toast.success("Welcome Guest!");
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("Guest user login error, please try again!");
        }
    };

    return (
        <section className="h-screen grid place-items-center">
            <Form
                method="post"
                className="card w-96 p-8 bg-base-100 shadow-lg flex-col gap-y-4"
            >
                <h4 className="text-center text-3xl font-bold">Login</h4>
                <FormInput type="email" label="email" name="identifier" />
                <FormInput type="password" label="password" name="password" />
                <div className="mt-4">
                    <SubmitBtn text="Login" />
                </div>

                <button
                    type="button"
                    className="btn btn-secondary btn-block uppercase"
                    onClick={loginAsGuestUser}
                >
                    Guest User
                </button>
                <p className="text-center">
                    Not a member yet?{" "}
                    <Link
                        to="/register"
                        className="ml-2 link link-hover link-primary capitalize"
                    >
                        register
                    </Link>
                </p>
            </Form>
        </section>
    );
};

export default Login;
