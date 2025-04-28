"use client";
import Image from "next/image";
import { SignedOut, SignedIn, SignInButton } from "@clerk/nextjs";

import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Loading from "./Loading";
import { data } from "../lib/fetchProducts";

const Product = () => {
  
  return (
    <div
      id="product"
      className="w-full px-5 lg:px-8 xl:px-[3%] py-10 md:mt-20 lg:mt-20 text-white"
    >
      <div className="flex items-center">
        <span className="text-4xl md:text-5xl lg:text-6xl mr-5">Products</span>
        <hr className="flex-1 border-[#fff] border-5" />
      </div>
      <div className="my-10 mx-auto max-w-6xl grid grid-cols-auto gap-2">
        {data.map((item, index) => (
          <div key={index}>
            <div className="h-[25rem] p-2 border-4 overflow-hidden flex justify-center">
              <Image
                src={urlFor(item.chibsproductImage).url()}
                className="object-contain"
                width={600}
                height={600}
                alt=""
              />
            </div>
            <div className="mt-3">
              <span className="text-2xl">{item.chibsSerial}</span>
            </div>
            <div className="mt-3">
              <h4 className="text-2xl">N {item.chibsprice}</h4>
            </div>
            <SignedOut>
              <SignInButton mode="modal">
                <div className="text-3xl mt-3 border flex justify-center p-3 hover:bg-[#ff8c00] cursor-pointer">
                  BUY NOW
                </div>
              </SignInButton>
            </SignedOut>
            {data ? (
              <SignedIn>
                <Link href={`/product/${item.slugCurrent}`}>
                  <div className="text-3xl mt-3 border flex justify-center p-3 hover:bg-[#ff8c00] cursor-pointer">
                    BUY NOW
                  </div>
                </Link>
              </SignedIn>
            ) : (
              <div className="flex justify-center border-4 p-2">
                <Loading />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
