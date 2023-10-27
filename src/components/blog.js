import React from "react";
import S1 from "./asset/s1.png";
import FL from "./asset/Flags.png";
import vector from "./asset/Vector 2.png";
import Share from "./asset/share-alt.png";
import Like from "./asset/Frame 5374.png";
import Comment from "./asset/Comment Alt Lines.png";
import Image from "./asset/Image.png";

export default function () {
  return (
    <div>
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 lg:py-4 bg-white">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative text-4xl font-bold">Blog</span>
              <img src={vector} className=" absolute w-[162.5px] h-[15.44px]" />
            </span>{" "}
          </h2>
          <p className="text-base font-notosans text-gray-400 md:text-lg">
            Encuentra los artículos relacionados a tu sector y entérate de las
            ultimas noticias.
          </p>
        </div>
        <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
          <div className="relative flex flex-col  duration-300 bg-white rounded shadow-sm hover:shadow-lg hover:scale-105 transition duration-400 cursor-pointer">
            <div className="relative w-full h-48 overflow-hidden">
              <div className="relative group">
                <img
                  src={S1}
                  className="object-cover w-full h-full rounded-t transform scale-100 group-hover:scale-125 transition-transform duration-400 cursor-pointer"
                  alt="Plan"
                />
              </div>
            </div>
            <img
              src={Image}
              alt="avatar"
              className="absolute m-1  top-[164px] object-cover w-16 h-16 rounded-full "
            />

            <div className=" px-16">
              <div className=" mx-auto">
                <div className="flex gap-8">
                  <div>
                    <h4 className=" font-bold text-sm">Cristian Fernandez</h4>
                    <p className=" text-xs">Derecho Penal</p>
                  </div>
                  <img src={FL} style={{ width: "30px", height: "30px" }} />
                </div>
                <div class="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-yellow-500 w-5 h-auto fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-yellow-500 w-5 h-auto fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-yellow-500 w-5 h-auto fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-yellow-500 w-5 h-auto fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-yellow-500 w-5 h-auto fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-grow p-3 border border-t-0 rounded-b">
              <div>
                <div className="text-lg font-semibold">Title of blog post</div>
                <p className="text-sm text-gray-400">
                  Etiam volutpat sem vitae erat consectetur tincidunt.
                  Pellentesque mattis purus sed odio vehicula, vitae maximus
                  nulla venenatis. Duis posuere turpis turpis, nec mollis nulla
                  tincidunt sodales.
                </p>
              </div>
              <br />
              <div className=" flex gap-4 p-0">
                <span class=" w-[80px] bg-white px-2 text-gray-500 text-sm font-medium inline-flex   rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
                  Pill labels
                </span>
                <span class=" w-[80px] bg-white px-2 text-gray-500 text-sm font-medium inline-flex rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
                  Pill labels
                </span>
                <span class="px-2 w-[80px]  bg-white text-gray-500 text-sm font-medium inline-flex items-center  rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
                  Pill labels
                </span>
              </div>
              <br />
              <hr className="text-black " />
              <br />
              <div class="flex justify-between p-1">
                <div class="flex gap-2">
                  <img src={Comment} class=" w-8 h-8" />
                  <span className=" left-0 text-gray-400 py-1">123</span>
                </div>

                <div class="flex gap-2">
                  <img src={Like} class="w-8 h-8" />

                  <span className=" py-1 text-gray-400">340</span>
                </div>

                <div class="flex gap-3 top-6">
                  <button class="flex items-center gap-2 px-2 py-1 rounded-md   border-2 border-black bg-white hover:bg-black hover:text-white focus:outline-none">
                    <span className=" text-sm">Compartir</span>

                    <img src={Share} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col duration-300 bg-white rounded shadow-sm hover:shadow-lg hover:scale-105 transition duration-400 cursor-pointer">
            <div className="relative w-full h-48 overflow-hidden">
              <div className="relative group">
                <img
                  src={S1}
                  className="object-cover w-full h-full rounded-t transform scale-100 group-hover:scale-125 transition-transform duration-400 cursor-pointer"
                  alt="Plan"
                />
              </div>
            </div>
            <img
              src={Image}
              alt="avatar"
              className="absolute m-1  top-[164px] object-cover w-16 h-16 rounded-full "
            />

            <div className=" px-16">
              <div className=" mx-auto">
                <div className="flex gap-8">
                  <div>
                    <h4 className=" font-bold text-sm">Cristian Fernandez</h4>
                    <p className=" text-xs">Derecho Penal</p>
                  </div>
                  <img src={FL} style={{ width: "30px", height: "30px" }} />
                </div>
                <div class="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-yellow-500 w-5 h-auto fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-yellow-500 w-5 h-auto fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-yellow-500 w-5 h-auto fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-yellow-500 w-5 h-auto fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-yellow-500 w-5 h-auto fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-grow p-3 border border-t-0 rounded-b">
              <div>
                <div className="text-lg font-semibold">Title of blog post</div>
                <p className="text-sm text-gray-400">
                  Etiam volutpat sem vitae erat consectetur tincidunt.
                  Pellentesque mattis purus sed odio vehicula, vitae maximus
                  nulla venenatis. Duis posuere turpis turpis, nec mollis nulla
                  tincidunt sodales.
                </p>
              </div>
              <br />
              <div className=" flex gap-4 p-0">
                <span class=" w-[80px] bg-white px-2 text-gray-500 text-sm font-medium inline-flex   rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
                  Pill labels
                </span>
                <span class=" w-[80px] bg-white px-2 text-gray-500 text-sm font-medium inline-flex rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
                  Pill labels
                </span>
                <span class="px-2 w-[80px]  bg-white text-gray-500 text-sm font-medium inline-flex items-center  rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
                  Pill labels
                </span>
              </div>
              <br />
              <hr className="text-black " />
              <br />
              <div class="flex justify-between p-1">
                <div class="flex gap-2">
                  <img src={Comment} class=" w-8 h-8" />
                  <span className=" left-0 text-gray-400 py-1">123</span>
                </div>

                <div class="flex gap-2">
                  <img src={Like} class="w-8 h-8" />

                  <span className=" py-1 text-gray-400">340</span>
                </div>

                <div class="flex gap-3 top-6">
                  <button class="flex items-center gap-2 px-2 py-1 rounded-md   border-2 border-black bg-white hover:bg-black hover:text-white focus:outline-none">
                    <span className=" text-sm">Compartir</span>

                    <img src={Share} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col  duration-300 bg-white rounded shadow-sm hover:shadow-lg hover:scale-105 transition duration-400 cursor-pointer">
            <div className="relative w-full h-48 overflow-hidden">
              <div className="relative group">
                <img
                  src={S1}
                  className="object-cover w-full h-full rounded-t transform scale-100 group-hover:scale-125 transition-transform duration-400 cursor-pointer"
                  alt="Plan"
                />
              </div>
            </div>
            <img
              src={Image}
              alt="avatar"
              className="absolute m-1  top-[164px] object-cover w-16 h-16 rounded-full "
            />

            <div className=" px-16">
              <div className=" mx-auto">
                <div className="flex gap-8">
                  <div>
                    <h4 className=" font-bold text-sm">Cristian Fernandez</h4>
                    <p className=" text-xs">Derecho Penal</p>
                  </div>
                  <img src={FL} style={{ width: "30px", height: "30px" }} />
                </div>
                <div class="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-yellow-500 w-5 h-auto fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-yellow-500 w-5 h-auto fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-yellow-500 w-5 h-auto fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-yellow-500 w-5 h-auto fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-yellow-500 w-5 h-auto fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-grow p-3 border border-t-0 rounded-b">
              <div>
                <div className="text-lg font-semibold">Title of blog post</div>
                <p className="text-sm text-gray-400">
                  Etiam volutpat sem vitae erat consectetur tincidunt.
                  Pellentesque mattis purus sed odio vehicula, vitae maximus
                  nulla venenatis. Duis posuere turpis turpis, nec mollis nulla
                  tincidunt sodales.
                </p>
              </div>
              <br />
              <div className=" flex gap-4 p-0">
                <span class=" w-[80px] bg-white px-2 text-gray-500 text-sm font-medium inline-flex   rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
                  Pill labels
                </span>
                <span class=" w-[80px] bg-white px-2 text-gray-500 text-sm font-medium inline-flex rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
                  Pill labels
                </span>
                <span class="px-2 w-[80px]  bg-white text-gray-500 text-sm font-medium inline-flex items-center  rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
                  Pill labels
                </span>
              </div>
              <br />
              <hr className="text-black " />
              <br />
              <div class="flex justify-between p-1">
                <div class="flex gap-2">
                  <img src={Comment} class=" w-8 h-8" />
                  <span className=" left-0 text-gray-400 py-1">123</span>
                </div>

                <div class="flex gap-2">
                  <img src={Like} class="w-8 h-8" />

                  <span className=" py-1 text-gray-400">340</span>
                </div>

                <div class="flex gap-3 top-6">
                  <button class="flex items-center gap-2 px-2 rounded-md   border-2 border-black bg-white hover:bg-black hover:text-white focus:outline-none">
                    <span className=" text-sm">Compartir</span>

                    <img src={Share} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
