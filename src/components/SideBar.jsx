import { useDispatch } from "react-redux";
import {
  filterNameA,
  filterNameZ,
  filterRatingLow,
  filterRatingHigh,
  filterPriceHigh,
  filterPriceLow,
} from "../features/productList/productSlice";
const SideBar = () => {
  const dispatch = useDispatch();
  const NameFilterA = () => {
    dispatch(filterNameA());
  };
  const NameFilterZ = () => {
    dispatch(filterNameZ());
  };
  const ratingFilter = () => {
    dispatch(filterRatingLow());
  };
  const ratingFilteHigh = () => {
    dispatch(filterRatingHigh());
  };
  const priceFilterHigh = () => {
    dispatch(filterPriceHigh());
  };
  const priceFilterLow = () => {
    dispatch(filterPriceLow());
  };

  return (
    <div className="w-1/4 h-[80vh] hidden my-4 rounded-xl shadow-lg p-6 py-7 lg:block bg-white">
      <h1 className="font-bold text-xl">Filter ⬇⬆</h1>
      <div className="flex flex-col items-start text-lg gap-2 mt-5">
        <div className="flex flex-col gap-2">
          <h1>Name</h1>
          <div className="flex gap-2 justify-center">
            <button
              onClick={NameFilterA}
              type="button"
              className="bg-gray-200 p-1 px-4 rounded-lg hover:text-white hover:bg-blue-600 transtion-all duration-200">
              ( A - Z )
            </button>
            <button
              onClick={NameFilterZ}
              type="button"
              className="bg-gray-200 p-1 px-4 rounded-lg hover:text-white hover:bg-red-600 transtion-all duration-200">
              ( Z - A )
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1>Rating</h1>
          <div className="flex gap-2 justify-center">
            <button
              onClick={ratingFilteHigh}
              type="button"
              className="bg-gray-200 p-1 px-4 rounded-lg hover:text-white hover:bg-blue-600 transtion-all duration-200">
              ⭐5
            </button>
            <button
              onClick={ratingFilter}
              type="button"
              className="bg-gray-200 p-1 px-4 rounded-lg hover:text-white hover:bg-red-600 transtion-all duration-200">
              ⭐1
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1>Price</h1>
          <div className="flex flex-col gap-2 justify-center">
            <button
              onClick={priceFilterLow}
              type="button"
              className="bg-gray-200 p-1 px-5 rounded-lg hover:text-white hover:bg-blue-600 transtion-all duration-200 text-lg text-left">
              Minimum price
            </button>
            <button
              onClick={priceFilterHigh}
              type="button"
              className="bg-gray-200 p-1 px-5 rounded-lg hover:text-white hover:bg-red-600 transtion-all duration-200 text-lg text-left">
              Maximum price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
