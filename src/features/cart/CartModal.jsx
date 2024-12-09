import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  plusItem,
  minusItem,
  totalPriceCart,
} from "../cart/cartSlice";
const CartModal = ({ isClose }) => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(totalPriceCart);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const cartItem = useSelector(selectCartItems);

  const handlePlusItems = (item) => {
    dispatch(plusItem(item));
  };
  const handleMinusItems = (item) => {
    dispatch(minusItem(item));
  };

  return (
    <div className="absolute flex z-50 w-full h-screen bg-black bg-opacity-50 top-0 right-0">
      <div className="fixed flex flex-col justify-between gap-3 py-7 top-[25vh] left-[7vh] md:top-[25vh] md:left-[22vh] lg:top-[25vh] lg:left-[70vh] p-5 bg-white w-[400px] md:w-[600px] h-[400px] shadow-xl rounded-lg ">
        <h1 className="text-2xl text-center text-[#b20710] font-bold">Cart</h1>
        {cartItem.length === 0 ? (
          <h1 className="text-2xl text-center font-bold text-gray-600">
            Cart is empty
          </h1>
        ) : (
          <div className="flex flex-col overflow-y-scroll">
            {cartItem.map((item) => (
              <div
                key={item.id}
                className="flex flex-col border mb-2 p-3 rounded-lg mx-3">
                <div className="flex items-center gap-7">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover"
                  />
                  <div className="flex flex-col gap-2">
                    <span>{item.title}</span>
                    <span>${item.totalPrice}</span>
                  </div>
                </div>
                <div className="flex items-center mx-2 gap-2">
                  <button
                    onClick={() =>
                      handleMinusItems({ id: item.id, price: item.price })
                    }>
                    -
                  </button>
                  <span className="text-sm text-[#b20710] ">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      handlePlusItems({ id: item.id, price: item.price })
                    }>
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <h1 className="text-xl -mb-5 text-center font-bold">
          Total Price: ${totalPrice}
        </h1>
        <div className="flex items-center justify-center gap-2 mt-7">
          <button
            className="w-[150px] rounded-lg py-1 bg-red-600 text-white"
            onClick={isClose}>
            close
          </button>
          <button
            className="w-[150px] rounded-lg py-1 bg-green-900 text-white"
            onClick={isClose}>
            whatshap
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
