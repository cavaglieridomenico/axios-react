import { useEffect } from "react";
import getData from "../axios/interceptors";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const response = await getData("/react-store-products");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};

export default Interceptors;
