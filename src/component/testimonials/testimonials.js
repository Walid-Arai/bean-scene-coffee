import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Jonny Thomas",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "This platform completely transformed our workflow. The experience is smooth .Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    message:
      "An outstanding solution. The performance and support are unmatched in the industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  }
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const testimonial = testimonials[current];

  return (
    <section className="py-20 font-playfair">
      <div className="mx-auto ">
        <div className="text-center mb-14 container">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our coffee perfection feedback
          </h2>
          <p className="text-gray-600 text-lg">
            Our customers have amazing things to say about us
          </p>
        </div>

        <div className="relative">
          <img
            src="/assets/coffee_blast_right.png"
            alt=""
            className="absolute bottom-[-100px] right-0  w-52 md:w-96 pointer-events-none select-none z-10"
          />
        </div>
        <div className="relative bg-primary/10 py-16 sm:py-16 px-4 sm:px-6 rounded-xl max-w-5xl mx-auto">
          <div className="absolute top-4 md:top-[-10px] left-2 md:left-20 text-9xl sm:text-8xl md:text-[220px] text-secondary">
            “
          </div>
          

          <div className="max-w-3xl mx-auto text-center transition-all duration-500 pb-16 md:pt-8 sm:pb-20 mt-8 sm:mt-10">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 px-2 line-clamp-3">
              {testimonial.message}
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold text-[#5c3b1e]">
              {testimonial.name}
            </h3>

            <p className="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">{testimonial.role}</p>

            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 
             w-30 h-30 rounded-lg object-cover 
             shadow-xl"
            />
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 
               bg-primary p-2 sm:p-4 md:p-6 rounded-lg shadow 
               hover:scale-110 transition"
          >
            <i class="fa-solid fa-arrow-left"></i>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 
               bg-primary p-2 sm:p-4 md:p-6 rounded-lg shadow 
               hover:scale-110 transition"
          >
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="relative">
          <img
            src="/assets/coffee_blast.png"
            alt=""
            className="absolute bottom-0 md:bottom-[-60px] left-0  w-52 md:w-96 pointer-events-none select-none z-10"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;