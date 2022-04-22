import { useEffect } from "react";
import getProducts from "../axios/custom";

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    const response = await getProducts("/react-store-products");
    console.log(response);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
