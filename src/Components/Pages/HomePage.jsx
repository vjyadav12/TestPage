import img from "../../assets/successful-handsome-man-by-car.jpg";
import BannerSection from "./BannerSection";
import SeasonSelection from "./FirstSection";
import ProductGrid from "./ProductPages";

const HomePage = () => {
  return (
    <>
      <div
  className="h-[100vh] bg-cover bg-center relative"
  style={{
    backgroundImage: "url('https://res.cloudinary.com/dnfqytupo/image/upload/v1756583266/successful-handsome-man-by-car_npztcy.jpg')"
  }}
>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/90"></div>

        {/* Text Content */}
        <div
          className="absolute z-10 text-white text-right 
                      bottom-20 right-5 
                      sm:bottom-28 sm:right-10 
                      md:bottom-32 md:right-20 
                      lg:bottom-40 lg:right-40"
        >
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[Snasm Regular]">
            Performance-Ready
          </h1>
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[Snasm Regular] mt-2">
            Apparel for Work & Beyond
          </h1>
        </div>
      </div>

      <SeasonSelection />
      <ProductGrid/>
      <ProductGrid/>
      <BannerSection/>

    </>
  );
};

export default HomePage;
