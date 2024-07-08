"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TopAnime = ({ api }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper popular-content"
      >
        {api.data.map((data) => {
          return (
            <SwiperSlide
              key={data.mal_id}
              className="movie-box cursor-pointer"
              id="swipe"
            >
              <Link href={`/${data.mal_id}`}>
                <img
                  src={data.images.jpg.image_url}
                  width={100}
                  height={100}
                  alt="..."
                  className="movie-box-img"
                />
                <div className="box-text">
                  <h2 className="movie-title font-bold">{data.title}</h2>
                  <span className="movie-type">{data.score}</span>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TopAnime;
