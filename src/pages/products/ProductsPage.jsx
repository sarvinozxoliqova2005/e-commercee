import React, { act, useEffect, useState } from "react";
import useGet from "../../hooks/useGet";
import ProductsCard from "../../components/ProductsCard";
import axios from "axios";

const ProductsPage = () => {
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);
  const [total , setTotal] = useState(0);
  const [products , setProdutcs] = useState([]);
  const pageNumbers = [];
  const [page , setPage] = useState ([]);
  const [active , setActive] = useState(1);
  const [category, setCategory] = useState("");
  
  
  const {data} = useGet({url: "products/category-list"})
  const categories = data.data;

  async function getData () {
    try {
      const res = await axios.get (`https://dummyjson.com/products/${category ? `category/${category}` : ""}?limit=20&skip=${skip}`)
      setProdutcs(res?.data?.products);
      setTotal(res.data.total)
    } catch (error) {
      console.log(error);
    }
  }

    const countPagination = Math.ceil(total / 20);


  useEffect (() => {
    getData()
  } , [skip , category] )

  for (let i = 1; i <= countPagination; i++) {
    pageNumbers.push(i);
  }

  return (
    <section>
      <div className="container mx-auto max-w-[1400px] w-full px-5 ">
        <aside className="max-w-[312px] border-[2px] border-gray-300 fixed top-[165px] pt-[30px] w-full">
          <div className="px-5">
            <h1 className="text-[24px] font-bold">Category</h1>
            <ul className="mt-5 flex flex-col gap-3 h-screen pb-[280px] overflow-y-scroll">
              {
                categories?.map((el) => (
                  <li className="flex gap-3">
                <input
                  name="category"
                  className="w-[30px] "
                  id={el}
                  type="radio"
                  placeholder=""
                  value={el}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label className="text-[20px] font-bold" htmlFor={el}>
                  {el}
                </label>
              </li>
                ))
              }
            </ul>
          </div>
        </aside>
        <div className="pl-[332px] grid grid-cols-4 gap-5 pt-[80px]">
          {products?.map((el) => (
            <ProductsCard el={el} />
          ))}
        </div>
        <div className="flex items-center ml-[430px] justify-center mb-10 mt-10 gap-2">
         {
          skip === 0 ? "" :  <button  
           onClick={() => setSkip((prev) => prev - 20) } className="bg-blue-500  font-bold px-5 py-2 text-[24px] text-white rounded-lg cursor-pointer">
            Prev
          </button>
         }
          <ul className="flex items-center gap-2">
            {pageNumbers?.map((el) => (
              <li 
              onClick={() => {setSkip(el * 20 - 20)}}
               className={` border-[2px] ${skip === el * 20 -20 ?"bg-blue-600 , text-white" : "border-[blue]"} border-[blue] px-5 py-1.5 text-[24px] cursor-pointer rounded-lg font-bold text-[blue]`}>
                {el}
              </li>
            ))}
          </ul>
         {
          skip === 180 ? "" :  <button 
          onClick={() => setSkip((prev) => prev + 20)} className="bg-blue-500 font-bold px-5 py-2 text-[24px] text-white rounded-lg cursor-pointer">
            Next
          </button>
         }
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
