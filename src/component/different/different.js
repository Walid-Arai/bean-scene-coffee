import React from "react";

const data = [
  {
    icon: "/assets/supreme_beans_coffee-beans.png",
    name: "Supreme Beans",
    text: "Beans that provides great taste",
  },
  {
    icon: "/assets/high_quality_badge.png",
    name: "High Quality",
    text: "We provide the highest quality",
  },
  {
    icon: "/assets/Eextraordinary_coffee-cup.png",
    name: "Extra Ordinary",
    text: "Coffee like you have never tasted",
  },
  {
    icon: "/assets/affordable_price_best-price.png",
    name: "Affordable Price",
    text: "Our Coffee prices are easy to afford",
  },
];

const Different = () => {
  return (
    <>
      <section className="font-playfair">
        <div className="relative">
          <img
            src="/assets/coffee_blast_right.png"
            alt=""
            className="absolute bottom-0 md:bottom-[-100px]  right-0 sm:right-1  w-48 md:w-96 pointer-events-none select-none"
          />
        </div>
        <div className="mx-auto px-6 mt-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Why we are diffrent?
            </h2>
            <p className="text-gray-600 text-lg">
              We don’t just make your coffee, we make your day!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 mb-6 container">
              {data.map((data) => {
                return (
                  <div
                    key={data.name}
                    className="bg-primary/10 shadow-sm transition-all duration-300 hover:-translate-y-4 border hover:shadow-2xl hover:bg-primary/30"
                  >
                    <div className="flex justify-center pt-6">
                      <img src={data.icon} alt={data.name} className="" />
                    </div>
                    <div className="text-center py-6 px-4">
                      <h3 className="text-2xl font-semibold text-secondary mb-2">
                        {data.name}
                      </h3>

                      <p className="text-gray-600 text-lg mb-2">{data.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-gray-600 text-lg">
              Great ideas start with great coffee, Lets help you achieve that
            </p>
            <h2 className="text-2xl md:text-2xl font-bold text-secondary mb-1">
              Get started today.
            </h2>
            <a
              href="#joinus"
              className="inline-block btn-primary my-3 text-black font-bold"
            >
              Join US
            </a>
          </div>
        </div>
      </section>

    <section
        className="relative bg-cover  bg-no-repeat font-playfair text-white overflow-hidden"
        style={{ backgroundImage: "url('/assets/banner2_coffee.png')" }}
        >
        <div className="absolute inset-0 bg-secondary/70"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 items-center gap-8 px-6 py-16 lg:py-32 ">
            {/* Left: Text */}
            <div className="space-y-6 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    Get a chance to have an Amazing morning
                </h1>

                <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                    We are giving you are one time opportunity to experience a better life with coffee.
                </p>

                <a
                    href="#ordernow"
                    className="inline-block btn-primary px-6 py-3 mt-2 text-black font-bold"
                >
                    Order Now
                </a>
            </div>
        </div>

        <div className="relative justify-center flex items-end lg:justify-end hidden sm:flex">
          <img
            src="/assets/cup.png"
            alt="Coffee Beans"
            className="absolute bottom-16 right-56  z-10 h-96"
          />
          <img
            src="/assets/coffee_bean.png"   
            alt="Coffee Cup"
            className="absolute bottom-0 h-[450px]"
          />
        </div>
    </section>

    </>
  );
};
export default Different;
