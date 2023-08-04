import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
const BannerSlider = () => {
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <Slider {...settings}>
      <div key="1" >
        <Link href="/category">
        <img
          src="1673242643463-image (1).jpg"
          alt=""
          className="w-full h-auto object-fill rounded-xl lg:h-[25.5rem]"
        />
        </Link>
      </div>
      <div key="2" >
        <Link href="/category">
        <img
          src="1673275094382-image.jpg"
          alt=""
          className="w-full h-auto object-fill rounded-xl lg:h-[25.5rem]"
        />
        </Link>
      </div>
      
      <div key="3">
        <Link href="/category">
        <img
          src="1677488322744-image.jpg"
          alt=""
          className="w-full h-auto object-fill rounded-xl lg:h-[25.5rem]"
        />
        </Link>
      </div>
      
    </Slider>
  );
};

export default BannerSlider;
