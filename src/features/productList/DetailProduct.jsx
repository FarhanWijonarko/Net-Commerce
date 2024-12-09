import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const DetailProduct = () => {
  const { id } = useParams();
  const [loading, setIsLoading] = useState(false);
  const [dataDetail, setDataDetail] = useState({});
  console.log("dataDetail", dataDetail);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setDataDetail(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex gap-8 mt-[18vh]">
          <img
            className="w-[50vh] h-[60vh] rounded-lg shadow-xl"
            src={dataDetail.image}
            alt={dataDetail.title}
          />
          <div className="flex flex-col gap-1 px-[7vh] p-10 w-[190vh] h-[70vh] rounded-lg shadow-xl bg-white">
            <h1 className="text-2xl font-bold">{dataDetail.title}</h1>
            <div className="flex gap-2 text-lg">
              <p>{dataDetail.category || "Unknown"} -</p>
              <p>
                ⭐{dataDetail.rating?.rate === 0 ? 0 : dataDetail.rating?.rate}
              </p>
              <p className="text-gray-600">
                ({" "}
                {dataDetail.rating?.count === 0 ? 0 : dataDetail.rating?.count}{" "}
                User )
              </p>
            </div>
            <h2 className="text-4xl font-bold mt-5">${dataDetail.price}</h2>
            <p className="text-lg font-bold text-[#b20710] mt-5">
              Description product
            </p>
            <p className="text-lg text-justify w-[100vh]">
              {dataDetail.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailProduct;
