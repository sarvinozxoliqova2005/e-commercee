import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import useGet from '../../hooks/useGet';
import SwiperCard from '../../components/SwiperCard';
import { IoIosStar } from 'react-icons/io';

const SinglePage = () => {
    const {id} = useParams("id");
    const {data , loading} = useGet({url: `products/${id}`})
    const item = data.data;

    if (loading) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 99999,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="https://cdn.dribbble.com/userupload/22768185/file/original-828abbdb6d63e8e7726ddb64d40a0cc1.gif"
        alt="Loading"
        style={{ width: "100%" , height:"100%" }}
      />
    </div>
  );
}
  return (
    <div className='grid grid-cols-2 pt-[100px] container mx-auto max-w-[1400px] w-full'>
        <div>
           <SwiperCard images={item.images}/>
        </div>
        
        <div className='px-10 mt-5'>
          <div className='flex items-center'>
          <NavLink className="flex items-center w-[100px]">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </NavLink>
          <p className='font-bold text-[18px] text-yellow-500'>{item.rating} Star Rating</p>
        </div>
        <h1 className='text-[24px] font-bold mt-3'>"{item.title}"</h1>
          <h1 className='text-[18px] text-[gray] mt-5 italic '>{item.description}</h1>
          <div className='flex items-center justify-between mt-5'>
            <a className='flex items-center gap-2' href="">
              <h1 className='text-[gray] font-bold text-[20px]'>Category:</h1>
              <p className='font-bold text-[18px]'>{item.category}</p>
            </a>
          <a className='flex items-center gap-2' href="">
            <p className='text-[gray] font-bold text-[20px]'>Tags:</p>
            <h1 className='font-bold text-[18px]'>{item.tags}</h1>
          </a>
        </div>
         <div className='flex items-center gap-5 mt-5'>
           <p className='text-[#2DA5F3] text-[24px] font-bold'>${item.price}</p>
           <p className='w-[80px] h-[30px] bg-[#EFD33D] font-bold text-[20px] flex items-center justify-center'>{item.discountPercentage}%</p>
         </div>
        </div>
    </div>
  )
}

export default SinglePage