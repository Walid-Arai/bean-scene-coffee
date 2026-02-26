import React from "react";

function Footer() {
  return (
    <>
    <div
      className="relative w-full h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('assets/banner2_coffee.png')",
      }}
    >
      <div className="absolute inset-0 bg-secondary/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6 font-playfair">
        <h1 className="text-white text-2xl md:text-5xl font-bold mb-4 ">
          Subscribe to get the Latest News
        </h1>

        <p className="text-gray-200 text-sm md:text-lg  mb-8">
          Don’t miss out on our latest news, updates, tips and special offers
        </p>

        {/* Input + Button */}
        <div className="flex  items-center justify-center ps-16 pe-16">
          <input
            type="email"
            placeholder="Enter your mail"
            className="w-full px-4 py-3 rounded-md rounded-r-none focus:outline-none"
          />
          <button className="px-6 py-3 bg-primary hover:bg-primary/60 text-secondary  rounded-md rounded-l-none transition font-bold">
            Subscribe
          </button>
          
        </div>
      </div>
    </div>
        <div className="relative">
          <img
            src="/assets/coffee_pngwing_left.png"
            alt=""
            className="absolute bottom-[-50px] md:bottom-[-150px] left-0  w-24 sm:w-36 md:w-60 lg:w-80 pointer-events-none select-none z-10"
          />
        </div>
        <div className="relative">
          <img
            src="/assets/coffee_pngwing_right.png 
            "
            alt=""
            className="absolute bottom-[-50px] md:bottom-[-150px] right-0  w-24 sm:w-36 md:w-60 lg:w-80 pointer-events-none select-none z-10"
          />
        </div>
    <footer className="relative text-white pt-20 md:pt-48 pb-10 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: "url('assets/fotter_image.png')",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#442808] via-[#633B0C] to-secondary/70"></div>

      {/* Content */}
      <div className="container relative mx-auto px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 font-playfair z-20">
        
        {/* Column 1 */}
        <div className="">
          <h2 className="text-5xl font-clicker mb-6">Bean Scene</h2>
          <p className="text-md leading-relaxed mb-6 text-gray-200">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s.
          </p>

          <div className="flex gap-8 text-white text-2xl">
            <a href="https://www.facebook.com" target="blank"><i className="fa-brands fa-facebook cursor-pointer hover:scale-110 transition"></i></a>
            <a href="https://www.instagram.com" target="blank"><i className="fa-brands fa-instagram cursor-pointer hover:scale-110 transition"></i></a>
            <a href="https://www.youtube.com" target="blank"><i className="fa-brands fa-youtube cursor-pointer hover:scale-110 transition"></i></a>
            <a href="https://www.twitter.com" target="blank"><i className="fa-brands fa-twitter cursor-pointer hover:scale-110 transition"></i></a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-bold mb-6">About</h3>
          <ul className="space-y-1 text-white text-lg">
            <li className="hover:text-white cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-300">Menu</li>
            <li className="hover:text-white cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-300">Features</li>
            <li className="hover:text-white cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-300">News & Blogs</li>
            <li className="hover:text-white cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-300">Help & Supports</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-bold mb-6">Company</h3>
          <ul className="space-y-1 text-white text-lg">
            <li className="hover:text-white cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-300">How we work</li>
            <li className="hover:text-white cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-300">Terms of service</li>
            <li className="hover:text-white cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-300">Pricing</li>
            <li className="hover:text-white cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-300">FAQ</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <ul className="space-y-3 text-gray-200 text-lg leading-relaxed">
            <div className="flex items-center rounded-lg gap-1">
              Akshya Nagar 1st Block 1st Cross, <br />
              Ramamurthy nagar, Bangalore-560016
            </div>
            <div className="flex items-center rounded-lg ">+1 202-918-2132</div>
            <div className="flex items-center rounded-lg ">beanscene@mail.com</div>
            <div className="flex items-center rounded-lg">www.beanscene.com</div>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;