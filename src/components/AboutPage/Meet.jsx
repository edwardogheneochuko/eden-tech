import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import your staff data
import staff from '../../data/staffs';

const Meet = () => {
  return (
    <div className="bg-neutral-900 min-h-dvh py-10">
      <div className="grid md:grid-cols-[2fr_3fr] text-white px-10 gap-2 space-y-3">
        <h1 className="text-4xl md:text-5xl md:leading-tight font-bold">
          Meet our team of industry experts
        </h1>
        <p className="md:mt-20">
          With a proven track record in cloud computing, our management team brings together a wealth of experiences in technology,
          business strategy, and innovation to drive our company's success.
        </p>
      </div>

      <div className="px-10 mt-10">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {staff.map(member => (
            <SwiperSlide key={member.id}>
              <div className="bg-white/10 p-8 rounded-2xl text-center space-y-4 backdrop-blur-md shadow-lg">
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover mb-3"
                  />
                )}
                <h3 className="font-semibold text-lg text-white">{member.name}</h3>
                <p className="text-amber-300">{member.role}</p>
                <p className="text-sm text-gray-300">{member.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Meet;
