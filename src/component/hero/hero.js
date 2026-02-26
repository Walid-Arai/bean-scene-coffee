const data = [
  { image: "/assets/Cappuccino.png", name: "Cappuccino", ingredient: "Coffee 50% | Milk 50%", price: "$8.50" },
  { image: "/assets/Chai Latte.png", name: "Chai Latte", ingredient: "Coffee 50% | Milk 50%", price: "$8.50" },
  { image: "/assets/Macchiato.png", name: "Macchiato", ingredient: "Coffee 50% | Milk 50%", price: "$8.50" },
  { image: "/assets/Expresso.png", name: "Expresso", ingredient: "Coffee 50% | Milk 50%", price: "$8.50" },
];

const Hero = () => {
  return (
    <>
      <section className="container py-20 font-playfair">
        <div className="mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Enjoy a new blend of coffee style
            </h2>
            <p className="text-gray-600 text-lg">
              Explore all flavours of coffee with us. There is always a new cup worth experiencing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {data.map((item) => (
              <div key={item.name} className="bg-primary/10 shadow-sm transition-all duration-300 hover:-translate-y-4 border hover:shadow-2xl">
                <img src={item.image} alt={item.name} className="w-full h-60 object-cover"/>

                <div className="text-center py-6 px-4">
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {item.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-2">
                    {item.ingredient}
                  </p>

                  <p className="text-secondary font-bold mb-4">
                    {item.price}
                  </p>

                  <button className="bg-primary text-black px-6 py-2 rounded-full transition absolute botttom-[-20px] -translate-x-1/2 font-bold">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;