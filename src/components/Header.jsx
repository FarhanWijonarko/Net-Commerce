import cart from "../assets/cart.svg";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { totalProductCart } from "../features/cart/cartSlice";
import { searchItems } from "../features/productList/productSlice";
import CartModal from "../features/cart/CartModal";
import ResponsiveSidebar from "./ResponsiveSidebar";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const totalQuantity = useSelector(totalProductCart);

  const handleSearch = (value) => {
    dispatch(searchItems(value));
  };

  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex md:items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsOpenSideBar(!isOpenSideBar)}
              className="relative rounded-xl bg-[#b20710] p-2 px-4 text-gray-100 block lg:hidden">
              =
            </button>
            {isOpenSideBar ? (
              <ResponsiveSidebar className="block lg:hidden" />
            ) : (
              ""
            )}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-3xl font-bold text-[#b20710]">
              Net-Commerce
            </button>
          </div>
          <div className="flex items-center gap-4">
            <input
              className="px-5 w-full hidden md:block md:w-72 lg:w-96 py-2 border rounded-full"
              type="text"
              placeholder="Search......"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="relative rounded-full bg-[#b20710] p-2 text-gray-100 ">
              {totalQuantity ? (
                <span className="absolute -top-3 -right-2 w-6 h-6 rounded-full bg-white border-2 text-[#b20710] text sm flex items-center justify-center">
                  {totalQuantity}
                </span>
              ) : null}
              <img src={cart} alt="cart" className="w-6 h-6" />
            </button>
            {isOpen ? <CartModal isClose={() => setIsOpen(!isOpen)} /> : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
