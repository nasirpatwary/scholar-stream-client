import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import Container from "../shared/Container";
import { testimonials } from "../utils/customToastify";
const Testimonials = () => {
  return (
    <Container className="mt-20">
      <h3 className="text-2xl md:text-3xl font-bold text-center text-secondary dark:text-gray-200">
        What Students Say About Us
      </h3>

      <p className="mt-3 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Real experiences from students who found trusted scholarship opportunities
        through our platform.
      </p>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={24}
        speed={1500}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-12"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-full p-6 rounded-2xl bg-base-200 dark:bg-gray-950 shadow-md hover:shadow-lg transition">
              
              {/* Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Message */}
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                “{item.message}”
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-4">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Testimonials;
