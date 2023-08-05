/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Button from "./Button";

const brandsData = [
  "https://roatek.vercel.app/brands/paystack.svg",
  "https://roatek.vercel.app/brands/kuda.svg",
  "https://roatek.vercel.app/brands/flutterwave.svg",
  "https://roatek.vercel.app/brands/slack.svg",
];
const Hero = () => {
  return (
    <div className="dark:bg-darker lg:overflow-auto" id="home">
      <div className="mx-auto max-w-6xl px-4 md:px-12 lg:px-6 xl:px-0">
        <div className="relative ml-auto pt-20 xl:pt-36">
          <div className="gap-12 md:flex md:items-center">
            <div className="text-center sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2">
              <h1 className="text-5xl font-black text-gray-800 md:text-6xl xl:text-7xl">
                Achieve Your Goals With Easy Loans
              </h1>
              <div className="">
                <p className="mt-8 text-lg text-gray-700 dark:text-gray-100">
                  Odio incidunt nam sit illum. Voluptas doloribus asperiores
                  quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
                </p>
                <div className="mt-12 flex justify-center gap-4 sm:gap-6 md:justify-start ">
                  <Link href="/register">
                    <Button> Get started</Button>
                  </Link>
                  <Link href="/register">
                    <Button color="secondary"> Learn more</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative mt-20 md:mt-0 md:w-2/5 lg:w-3/5">
              <div className="-ml-6 md:-mr-72 lg:mr-0">
                <img
                  className="h-full object-cover object-left "
                  src="/heroImage.webp"
                  alt="heroImage screenshot"
                  width="1628"
                  height="1233"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 text-center md:mt-32 lg:mt-20 xl:mt-16">
            <span className="text-sm font-semibold tracking-wider text-gray-800 dark:text-white">
              TRUSTED BY YOUR FAVORED TOP TECHS COMPANIES
            </span>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 brightness-75 contrast-200 grayscale  sm:justify-between lg:gap-24">
              {brandsData.map((item, index) => (
                <img
                  key={index}
                  className="h-8 w-auto lg:h-14"
                  src={item}
                  loading="lazy"
                  alt="Brands"
                  width="100"
                  height=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
