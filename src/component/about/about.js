

const About = () =>{
    return(
    <>
        <section className="relative container font-playfair bg-white md:mt-10 grid grid-cols-1 sm:grid-cols-2 overflow-hidden">
            <div className="p-6 pt-20 relative z-10">
            
            <h1 className="font-bold text-4xl md:text-5xl mb-4 text-secondary pb-4">
                Discover the best Coffee
            </h1>

            <p className="leading-8 text-gray-600 pb-4 font-playfair text-lg">
                Bean Scene is a coffee shop that provides you with quality coffee
                that helps boost your productivity and helps build your mood.
                Having a cup of coffee is good, but having a cup of real coffee is greater.
                There is no doubt that you will enjoy this coffee more than others you have ever tasted.
            </p>

            <a
                href="#ordernow"
                className="inline-block btn-primary my-3 text-black font-bold"
            >
                Learn More
            </a>
            </div>
            

            <div className="flex items-center justify-center relative z-10">
            <img
                src="/assets/cup-_coffee_out_coffee_beans.png"
                className="w-full md:max-w-lg mx-auto"
                alt="Coffee cup with beans"
            />
            </div>

        </section>
        <div className="relative">
          <img
            src="/assets/coffee_blast_left.png"
            alt=""
            className="absolute bottom-[-60px] left-0  w-60 md:w-96 pointer-events-none select-none z-10"
          />


          
        </div>
    </>
    )
}
export default About;