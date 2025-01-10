
import React, { useEffect, useRef, useState } from 'react'
import Bookcard from "../book/BookCard.jsx";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';


function Topsellers() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");
  const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"];


  useEffect(() => {
    fetch("/books.json") // Ensure this path matches your file location in the public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setBooks(data))
  }, []);

  const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase());

  console.log(filteredBooks, "books")

  return (

    <div className='py-10'>
      <h2 className="mt-1 text-2xl font-semibold">Top Sellers</h2>
      <div className="flex items-center mt-0 font-semibold">
        <div>
          <select
            name="Categories"
            id="category"
            className="border bg-[#d3cece] border-gray-300 rounded-md px-4 py-2 focus:outline-none w-full mt-1 object-cover"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>

        </div>
      </div>


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
          filteredBooks.length > 0 ? filteredBooks.map((book, index) => {
            return (
              <SwiperSlide key={index}>
                <Bookcard book={book} />
              </SwiperSlide>

            )
          }
          ) : null
        }

      </Swiper>

    </div>
  )
}

export default Topsellers
