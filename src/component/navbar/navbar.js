import React, { useState } from "react";

const navMenus = [
  {
    name: "Home",
    link: "/#",
  },
  {
    name: "Menu",
    link: "/#about",
  },
  {
    name: "About Us",
    link: "/#services",
  },
  {
    name: "Contact Us",
    link: "/#contact",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav
        className="relative text-white bg-cover bg-center bg-no-repeat p-3"
        style={{ backgroundImage: "url('/assets/Banner_coffee_image.png')" }}
      >
        <div className="absolute inset-0 bg-black/20 "></div>
        <div className="container flex justify-between items-center py-3 sm:py-0">
          <h1 className="font-clicker text-lg md:text-4xl z-10">Bean Scene</h1>
          <div className="hidden sm:block z-10">
            <ul className="flex items-center  gap-4 text-white font-playfair">
              {navMenus.map((navMenu, index) => {
                return (
                  <li key={index}>
                    <a
                      className="px-2 py-4 md:py-6 inline-block cursor-pointer z-10 hover:underline "
                      href={navMenu.link}
                    >
                      {navMenu.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
            <div className="flex items-center gap-4 z-10 text-sm">
            <a href="#signin" className=" underline">
                Sign In
            </a>
            <a href="#signin" className="btn-primary text-secondary">
                SignUp
            </a>
            </div>
          {/* Mobile Responsive Menu */}
          <div className="sm:hidden z-20">
            <div className="flex items-center gap-4 text-sm md:text-md ">
              <i
                className="fa-solid fa-bars text-2xl cursor-pointer "
                onClick={toggleMenu}
              ></i>
            </div>
            {showMenu && (
              <div className="fixed font-playfair top-20 bg-secondary text-white shadow-md rounded-b-xl  left-0 w-full z-10 py-0 h-full">
                <ul className="flex flex-col items-center gap-4 shadow-lg p-10 rounded-2xl bg-primary/50">
                  {navMenus.map((navMenu, index) => {
                    return (
                      <li key={index} className="w-full p-2 rounded-lg hover:bg-secondary/20 transition-all duration-300 ">
                        <a
                          className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                          href={navMenu.link}
                          onClick={() => setShowMenu(false)}
                        >
                          {navMenu.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
        <section className="w-full ">
          <div className="container grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-16 sm:py-0 text-white font-playfair">
            <div className="z-10">
              <div className="grid justify-items-center sm:justify-items-start space-y-4">
                <p className="text-xl">We’ve got your morning covered with</p>
                <p className="text-9xl md:text-[220px] w-full font-clicker">Coffee</p>
                <p className="text-center sm:text-left text-xl">
                  It is best to start your day with a cup of coffee. Discover
                  the best flavours coffee you will ever have.
                  We provide the best for our customers.
                </p>
                <a
                  href="#rodernow"
                  className="inline-block btn-primary !my-3 text-black font-bold"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};
export default Navbar;
