import OfferSection from "@/components/Home/Offers/OfferSection";
import Carousel from "@/components/Carousel/Carousel";
import BannerSection from "./Offers/BannerSection";
import { getAllProducts, getCarouselData } from "@/services/productService";

const HomeSection = async () => {
  const slides = await getCarouselData();
  const offers = await getAllProducts();
  return (
    <section>
      <div className="flex flex-col items-center">
        <div className="w-full h-[200px] md:h-1/2">
          <Carousel slides={slides} />
        </div>
      </div>

      <div>
        <h1 id="offers" className="ml-5 my-3 font-semibold text-2xl">
          Best Offers:
        </h1>
        <OfferSection productsData={offers} />
      </div>

      <div className="my-6">
        <h1 className="ml-5 my-3 font-semibold text-2xl">
          Most Selling Products
        </h1>
        <BannerSection />
      </div>
    </section>
  );
};

export default HomeSection;
