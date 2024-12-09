import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../cart/cartSlice"; // dispatch
import { ProductItemsAll, productAll } from "../productList/productSlice";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar";
import Loading from "../../components/Loading";

const ProductList = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const products = useSelector(ProductItemsAll);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dispatch(productAll(data));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  const handleRoute = (id) => {
    navigate(`/Product/${id}`);
  };

  return (
    <div className="w-full h-full">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex gap-6 w-full h-full">
          <SideBar />
          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
            {products.length === 0 ? (
              <h1 className="text-2xl mx-auto text-center font-bold text-gray-600">
                No products found
              </h1>
            ) : (
              products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white group rounded-lg border shadow-md p-4 pb-8 w-[50vh] md:w-[55vh] xl:w-[48vh] 2xl:w-[47vh] mr-[100vh]">
                  <div className="relative w-[80%] h-[350px] my-auto mx-auto overflow-hidden">
                    <img
                      className="w-full object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                  <div className="flex flex-col gap-6 ">
                    <h3 className="font-bold text-4xl ml-2 mt-10">
                      ${product.price}
                    </h3>
                    <button
                      onClick={() => handleRoute(product.id)}
                      type="button"
                      className="h-10 text-lg w-full text-left px-2 hover:text-[#b20710] hover:font-bold">
                      {product.title.length >= 25
                        ? `${product.title.slice(0, 25)}...`
                        : product.title}
                    </button>
                    <div className="flex gap-2 items-center text-lg">
                      <h1 className="text-lg text-gray-500 ml-2">
                        {product.category}
                      </h1>
                      <h1>⭐{product.rating.rate}</h1>
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      type="button"
                      className="bg-[#b20710] hover:bg-[#5c1b1e] text-white font-bold py-2 mb-5 px-4 rounded">
                      Add to cart
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
