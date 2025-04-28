import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const query = `*[_type == "chibsproduct" && slug.current == $id][0]{
    chibsproductImage,
    chibsprice,
    chibsSerial
}`;

const productPage = async ({ params }) => {
  const { id } = params;
  const product = await client.fetch(query, { id });

  if (!product) {
    notFound();
  }

  return (
    <div className="text-white px-5 md:px-20 py-20 h-screen flex justify-center gap-6">
      <div className=" p-2 flex justify-center items-center">
        <Image
          src={urlFor(product.chibsproductImage).url()}
          alt=""
          width={400}
          height={400}
          objectFit="contain"
        />
      </div>
      <div className="h-[100%] w-[50%] p-2 flex flex-col justify-around px-0 md:px-4">
        <div className="w-[100%] h-20 text-[1.5rem] flex items-center md:text-[2rem] lg:text-[2rem] sm:text-[1.5rem]">
          <h6>Price: N {product.chibsprice}</h6>
        </div>
        <div className="w-[100%] h-50 py-4 text-[0.7rem] md:text-[2rem] lg:text-[2rem] leading-4 sm:text-[1.5rem] md:leading-9 sm:leading-6 md:h-90 sm:h-90">
          <h6>
            Discover timeless style with the 88 Chibs T-shirt — where comfort
            meets quality. Crafted from ultra-soft, breathable fabric, this
            T-shirt keeps you feeling cool and looking sharp, whether you're
            lounging or out with friends. With a tailored fit and durable
            stitching, it’s built to stand the test of time.<br></br>
            Serial No:{" "}
            <span className="text-[#ff8c00]">{product.chibsSerial}</span>
          </h6>
        </div>
        {product ? (<Link href={`/product/${id}/order`}>
          <div className="w-[100%] h-20 text-[1.5rem] md:text-[2rem] lg:text-[2rem] sm:text-[1.5rem] flex justify-center items-center border-4 border-white hover:bg-[#ff8c00]">
            <h6>ORDER NOW</h6>
          </div>
        </Link>):(<div className="flex justify-center border-4 p-2">
                <Loading />
              </div>)}
        
      </div>
    </div>
  );
};

export default productPage;
