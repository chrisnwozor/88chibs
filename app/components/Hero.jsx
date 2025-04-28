import Image from "next/image";
import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const fetchImages = async () => {
  const query = `*[_type == "hero"][0]{
"imageOne" : images1,
"imageTwo" : images2,
"imageThree" : images3
}`;
  const data = await client.fetch(query);
  return data;
};

const Hero = async () => {
  const data = await fetchImages();

  return (
    <div
      id="home"
      className="w-full px-5 lg:px-8 xl:px-[3%] pt-10 mt-20 md:mt-20 lg:mt-20 text-white"
    >
      <div className="flex items-center">
        <span className="text-4xl md:text-5xl lg:text-6xl mr-5">
          Clothing Brand
        </span>
        <hr className="flex-1 border-[#fff] border-5" />
      </div>
      <div className="my-10 mx-auto max-w-6xl grid grid-cols-auto gap-2">
        <div className="h-[25rem] p-2 border-4 overflow-hidden flex justify-center">
          <Image
            src={urlFor(data.imageOne).url()}
            className="object-contain"
            width={600}
            height={600}
            alt=""
          />
        </div>
        <div className="h-[25rem] p-2 border-4 overflow-hidden flex justify-center">
          <Image
            src={urlFor(data.imageTwo).url()}
            className="object-contain"
            width={600}
            height={600}
            alt=""
          />
        </div>
        <div className="h-[25rem] p-2 border-4 overflow-hidden flex justify-center">
          <Image
            src={urlFor(data.imageThree).url()}
            className="object-contain"
            width={600}
            height={600}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
