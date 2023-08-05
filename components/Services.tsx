/* eslint-disable @next/next/no-img-element */
import React from "react";

const Services = () => {
  return (
    <div className="pt-32 md:pt-44" id="solution">
      <div className="mx-auto max-w-6xl px-4 md:px-12 lg:px-6 xl:px-0">
        <div className="flex-row-reverse items-center justify-between space-y-12 text-gray-600 md:flex md:gap-6 lg:gap-12 lg:space-y-0">
          <div className="relative ml-auto h-full md:w-1/2">
            <img
              src="/featureImage.webp"
              alt="Freature Image"
              width="1174"
              height="1134"
            />
          </div>

          <div className="md:w-1/2 lg:w-[47%]">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
              Fast and Flexible Loans Tailored to You
            </h2>
            <p className="my-12 text-gray-600 dark:text-gray-300">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia. <br />
              <br />
              Vitae error, quaerat officia delectus voluptatibus explicabo quo
              pariatur impedit, at reprehenderit aliquam a ipsum quas
              voluptatem. Quo pariatur asperiores eum amet.
            </p>
            <div className="space-y-4 divide-y divide-gray-100 dark:divide-gray-800">
              <div className="mt-8 flex gap-4 md:items-center">
                <div className="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900">
                  <svg
                    className="m-auto h-6 w-6 text-gray-700
                      dark:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 5.56h10"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.22 2h5.56C21.56 2 22 2.44 22 4.2v4.11c0 1.76-.44 2.2-2.22 2.2h-5.56c-1.78 0-2.22-.44-2.22-2.2V4.2c0-1.76.44-2.2 2.22-2.2Z"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17.06h10"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeMiterlimit="{10}"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.22 13.5h5.56c1.78 0 2.22.44 2.22 2.2v4.11c0 1.76-.44 2.2-2.22 2.2H4.22c-1.78 0-2.22-.44-2.22-2.2V15.7c0-1.76.44-2.2 2.22-2.2ZM22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-5/6">
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Multiple Payment Options
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Asperiores nemo possimus nesciunt quam mollitia.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 pt-4 md:items-center">
                <div className="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900">
                  <svg
                    className="m-auto h-6 w-6 text-gray-700
                      dark:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.995 13.7h.01M8.294 13.7h.01M8.294 16.7h.01"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-5/6">
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Grace Period and Flexibility
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Asperiores nemo possimus nesciunt quam mollitia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
