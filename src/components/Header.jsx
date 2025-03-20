import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userState.user);

    const handleLogout = () => {
        dispatch(logoutUser());
        // dispatch(clearCart()); - uncomment this if you want to clear cart on logout
        navigate("/");
    };

    return (
        <header className="bg-neutral py-2 text-neutral-content">
            <div className="align-element flex justify-center sm:justify-end">
                {user ? (
                    <div className="flex gap-x-2 sm:gap-x-8 items-center">
                        {/* USER */}
                        <p className="text-xs sm:text-sm">
                            Hello, {user.username}
                        </p>
                        <button
                            className="btn btn-xs btn-outline btn-primary"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="flex gap-x-6 justify-center items-center">
                        {/* LINKS */}
                        <Link
                            to="/login"
                            className="link link-hover text-xs sm:text-sm"
                        >
                            Sign In / Guest
                        </Link>
                        <Link
                            to="/register"
                            className="link link-hover text-xs sm:text-sm"
                        >
                            Create Account
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
