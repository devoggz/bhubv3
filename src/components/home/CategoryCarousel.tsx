"use client";

import { CategoryTypes } from "@/types";
import { Swiper, SwiperSlide, Navigation } from "../ui/slider";
import CategoryCard from "../ui/cards/CategoryCard";
import ActionIcon from "../ui/action-icon";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export default function CategoryCarousel({ data }: any) {
  return (
    <div className="group/section relative">
      <Swiper
        loop={true}
        modules={[Navigation]}
        autoplay={false}
        slidesPerView={4}
        spaceBetween={-36}
        navigation={{
          nextEl: ".destination-button-next",
          prevEl: ".destination-button-prev",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          390: {
            slidesPerView: 1.4,
            spaceBetween: 16,
          },

          430: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },

          580: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          840: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {data?.map((item: CategoryTypes, index: number) => (
          <SwiperSlide key={`category-${index}`}>
            <CategoryCard
              slug={item.slug}
              name={item.name}
              thumbnail={item.thumbnail}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      {/* <ActionIcon
        rounded="full"
        color="invert"
        className="destination-button-prev invisible absolute left-[25px] top-1/2 z-10 flex -translate-y-1/2 shadow-md !transition-all group-hover/section:visible group-hover/section:left-0 lg:-translate-x-1/2 lg:-translate-y-1/2"
      >
        <ChevronLeftIcon className="h-auto w-5" />
      </ActionIcon>
      <ActionIcon
        rounded="full"
        color="invert"
        className="destination-button-next invisible absolute right-[25px] top-1/2 z-10 flex -translate-y-1/2 shadow-md !transition-all group-hover/section:visible group-hover/section:right-4 sm:group-hover/section:right-6 lg:group-hover/section:-right-[19px]"
      >
        <ChevronRightIcon className="h-auto w-5" />
      </ActionIcon> */}
    </div>
  );
}
