import axios from "@/config/axios.config";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getProducts = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("/products");
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.log("error in getting products");
      setIsLoading(false);
    }
  };

  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="container">
      <ul className="products">
        {products.map(({ id, image, title, category, price }) => {
          return (
            <li key={id} className="card">
              <div className="card-head">
                <Image src={image} width={200} height={200} alt={title} />
              </div>
              <div className="card-body">
                <div>
                  <h3>{title}</h3>
                  <h2>{category}</h2>
                  <div className="money">
                    <svg
                      className="money-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                      />
                    </svg>
                    <p>${price}</p>
                  </div>
                </div>
                <div>
                  <hr />
                  <button>More details</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
