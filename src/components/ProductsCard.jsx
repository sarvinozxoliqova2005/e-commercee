import React, { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LikeProductContext } from "../context/LikeContext";
import { IoIosStar } from "react-icons/io";

const ProductsCard = ({ el }) => {
  const { addToLike, like, removeToLike } = useContext(LikeProductContext);

  return (
    <div
      key={el.id}
      className="relative w-full max-w-[480px] max-[600px]:max-w-[320px] h-[305px] max-[600px]:h-[320px]  border shadow-2xl rounded-md group overflow-hidden mx-auto "
    >
      <img
        className="w-[90px] h-[60px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] p-6 mx-auto"
        src={el.thumbnail}
        alt={el.title}
      />

      {/* <h1 className="text-[20px] sm:text-[22px] md:text-[24px] text-center font-bold mt-2 px-2">
            {el.title}
          </h1> */}

      <p className="text-[12px] sm:text-[16px] md:text-[20px] mt-2 text-center text-gray-500 px-2 line-clamp-2 italic">
        {el.description}
      </p>

      <div className="flex items-center justify-between px-5 mt-3">
        <p className="text-yellow-500 text-[20px] sm:text-[22px] md:text-[24px] font-bold">
          {el.rating}
        </p>
        <p className="text-[#2DA5F3] font-bold text-[20px] sm:text-[22px] md:text-[24px] px-2">
          ${el.price}
        </p>
      </div>

      <p
        className="absolute top-3 right-3 font-bold text-[14px] sm:text-[16px] md:text-[18px] bg-[#EFD33D]
                         w-[60px] sm:w-[70px] md:w-[80px] h-[25px] sm:h-[28px] md:h-[30px] rounded-[5px]
                         flex items-center justify-center"
      >
        {el.discountPercentage} %
      </p>

      <div
        className="absolute inset-0 flex items-center justify-center gap-3
                       bg-black/30 opacity-0 group-hover:opacity-100
                       transition-opacity duration-300"
      >
        {like.find((item) => item.id === el.id) ? (
          <button
            onClick={() => removeToLike(el)}
            className="w-[40px] h-[40px] text-[24px] sm:w-[44px] text-[red] sm:h-[44px]  cursor-pointer bg-[white] rounded-full flex items-center justify-center shadow"
          >
            <FaHeart />
          </button>
        ) : (
          <button
            onClick={() => addToLike(el)}
            className="w-[40px] h-[40px] sm:w-[44px] text-[red] sm:h-[44px]  text-[24px] cursor-pointer bg-[white] rounded-full flex items-center justify-center shadow"
          >
            <FaRegHeart />
          </button>
        )}
        <div className="w-[40px] text-[24px] h-[40px] sm:w-[44px] sm:h-[44px] bg-white cursor-pointer rounded-full flex items-center justify-center shadow">
          <SlBasket />
        </div>

        <Link
          to={`/products/${el.id}`}
          className="w-[40px] h-[40px] text-[24px] sm:w-[44px] sm:h-[44px] bg-[white] cursor-pointer rounded-full flex items-center justify-center shadow"
        >
          <MdOutlineRemoveRedEye />
        </Link>
      </div>
    </div>
  );
};

export default ProductsCard;
