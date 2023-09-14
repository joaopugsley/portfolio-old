"use client"

import { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export type CarouselProps = {
  images: string[]
  className?: string
  rounded?: boolean
}

const Carousel = ({ images, className, rounded }: CarouselProps): JSX.Element => {

  const [currentImage, setCurrentImage] = useState<number>(0);

  const nextImage = () => {
    let next = currentImage + 1;
    if(next > (images.length - 1)) {
      next = 0;
    }
    setCurrentImage(next);
  };

  const previousImage = () => {
    let previous = currentImage - 1;
    if(previous < 0) {
      previous = (images.length - 1);
    }
    setCurrentImage(previous);
  }

  return (
    <div className={`relative flex justify-center items-center ${className}`}>
      {
        images.length > 1 ? (
          <>
            <button onClick={previousImage} className="absolute left-4 outline-0 w-6 h-6 md:w-8 md:h-8 rounded-md bg-gradient-to-r from-violet-500 to-blue-700 flex justify-center items-center">
              <AiOutlineArrowLeft/>
            </button>
            <button onClick={nextImage} className="absolute right-4 outline-0 w-6 h-6 md:w-8 md:h-8 rounded-md bg-gradient-to-r from-violet-500 to-blue-700 flex justify-center items-center">
            <AiOutlineArrowRight/>
            </button>
            <div className="absolute bottom-3 flex flex-row space-x-2">
              {
                images.map((_, i) => (
                  <div key={"carousel-image-" + i} className={`w-[5px] h-[5px] rounded-full ${currentImage === i ? "bg-white" : "bg-gray-500"}`}/>
                ))
              }
            </div>
          </>
        ) : null
      }
      <img alt="" src={images[currentImage]} className={`w-full h-full ${rounded ? "rounded-lg object-cover" : null}`}/>
    </div>
  )

}

export default Carousel;