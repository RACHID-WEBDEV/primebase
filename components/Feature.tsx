/* eslint-disable @next/next/no-img-element */
import React from "react";

const Feature = () => {
  return (
    <div className="relative pt-32 md:pt-44 ">
      <div className="mx-auto max-w-6xl px-4 md:px-12 lg:px-6 xl:px-0">
        <div className="mx-auto md:w-3/5">
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            Your Path to Financial Freedom
          </h2>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
            apiente optio repellendus atque illum odio! Fugiat at expedita
            deserunt dolorum molestias.
          </p>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="relative grid rounded-3xl border border-gray-200 p-1 dark:border-gray-800 lg:grid-cols-2">
            <div className="absolute inset-0 hidden h-max dark:block lg:my-auto">
              <div
                aria-hidden="true"
                className="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-70 2xl:mx-auto 2xl:max-w-6xl"
              >
                <div className="h-60 bg-gradient-to-br from-defaultColor to-purple-400 blur-3xl dark:from-blue-700"></div>
                <div className="h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600"></div>
              </div>
            </div>
            <div>
              <div className="relative flex h-full flex-col items-center justify-center gap-6 p-8 py-16 lg:py-8">
                <img
                  className="w-12"
                  src="/favIcon.png"
                  alt="primebase icon illustration"
                  width="512"
                  height="512"
                  loading="lazy"
                />
                <div className="mx-auto text-center sm:w-3/5">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Customizable Payment Plans
                  </h2>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Tailor-made payment plans that align with borrowers
                    financial situations, allowing them to choose from various
                    repayment options such as fixed or flexible installments.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative grid overflow-hidden rounded-[1.25rem] bg-gray-100 p-1 sm:grid-cols-2">
              <div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer">
                <div className="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="m-auto h-6 w-6 text-gray-700 dark:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Identity Verification
                  </h2>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                    nobis dicta.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer">
                <div className="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700">
                  <svg
                    className="m-auto h-6 w-6 text-gray-700 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3.93 15.88 15.88 3.93M11.101 18.28l1.2-1.2M13.793 15.589l2.39-2.39"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m3.601 10.239 6.64-6.64c2.12-2.12 3.18-2.13 5.28-.03l4.91 4.91c2.1 2.1 2.09 3.16-.03 5.28l-6.64 6.64c-2.12 2.12-3.18 2.13-5.28.03l-4.91-4.91c-2.1-2.1-2.1-3.15.03-5.28ZM2 21.998h20"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Instant Payments
                  </h2>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                    nobis dicta.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer">
                <div className="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700">
                  <svg
                    className="m-auto h-6 w-6 text-gray-700 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 9.5v5M5 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.25 16.75v.93c0 .35-.18.68-.49.86L4 19"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 15.2V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v6c0 3.5-2 5-5 5H8.5"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Payment Reminders
                  </h2>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                    nobis dicta.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer">
                <div className="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="m-auto h-6 w-6 text-gray-700 dark:text-white"
                  >
                    <path
                      d="M2 2v17c0 1.66 1.34 3 3 3h17"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m5 17 4.59-5.36c.76-.88 2.11-.94 2.93-.11l.95.95c.82.82 2.17.77 2.93-.11L21 7"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Credit Monitoring
                  </h2>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                    nobis dicta.
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

export default Feature;
