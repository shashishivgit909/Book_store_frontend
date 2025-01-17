import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import BookCard from '../book/BookCard';
import { useGetAllBooksQuery } from '../../redux/features/books/bookApis.js';

function Recomended() {
 
const {data:books=[],isError,error}=useGetAllBooksQuery();
console.log(books , isError,"boks in recomed")
  return (
    <div className='py-10'>
      <h1 className='mt-1 text-2xl font-semibold'>Recomended for you</h1>

      <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={30}

        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          books.length > 0 ? books.slice(1, 16).map((book, index) => {
            
            return (
              <SwiperSlide key={index}>
                <BookCard book={book} />
              </SwiperSlide>

            )
          }
          ) : null
        }

      </Swiper>
    </div>
  )
}

export default Recomended
