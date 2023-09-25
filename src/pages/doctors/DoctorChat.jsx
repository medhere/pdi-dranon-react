import { Divider } from "@mantine/core";
import { IconCircleChevronLeft, IconClipboardData } from "@tabler/icons-react";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const DoctorChat = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const history = useLocation();
  console.log(history);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {false ? (
        <>
          <section class="bg-orange-900 relative place-items-center grid h-screen w-screen gap-4">
            <div class="bg-orange-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>
            <div class="bg-orange-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>
            <div class="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-orange-900 filter mix-blend-overlay h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
            {/* <p className="absolute z-20">please wait</p> */}
          </section>
        </>
      ) : (
        <section className="w-[100%] md:w-[100%]  lg:w-[60%] xl:w-[40%] no-scrollbar">
          <section className="flex flex-col min-h-screen no-scrollbar">
            <div className="flex-1">
              <div className="block fixed inset-x-0 z-10  md:w-[100%]  lg:w-[60%] xl:w-[40%] mx-auto">
                <div className="py-6 flex bg-white mx-2 justify-between items-center">
                  <IconCircleChevronLeft
                    size={28}
                    onClick={() => navigate(-1)}
                    className="cursor-pointer"
                  />
                  <h1 className={`font-bold text-3xl text-blue-950`}>
                    Dr John
                  </h1>
                  <div>
                    <Link to={`/doctor/consultation/1`}>
                      <IconClipboardData
                        size={28}
                        className="cursor-pointer "
                      />
                    </Link>
                  </div>
                </div>
                <Divider className="mb-5" color="#ede1df" />
              </div>
              {/* CHATS */}
              <section className="my-28 mb-48 no-scrollbar">
                <div class="no-scrollbar">
                  <div class="doc-bubble">
                    Thank You for reaching Dr Anonymous. How can i be of service
                    to You?
                  </div>

                  <div class="patient-bubble">
                    I am experiencing a strange feeling in my bank Account.
                  </div>
                  <div class="patient-bubble">It is empty</div>
                </div>
              </section>
            </div>
            {/* CHAT INPUT*/}
            <div class="block fixed inset-x-0 bottom-0 z-10 mb-[55px] w-full justify-between md:w-[100%]  lg:w-[60%] xl:w-[40%] mx-auto">
              <form className="flex-1">
                <label for="chat" class="sr-only">
                  Your message
                </label>
                <div class="flex items-center px-3 py-2 rounded-lg bg-gray-200 ">
                  <button
                    type="button"
                    class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100   -600"
                  >
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 18"
                    >
                      <path
                        fill="currentColor"
                        d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                      />
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                      />
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                      />
                    </svg>
                    <span class="sr-only">Upload image</span>
                  </button>

                  <textarea
                    id="chat"
                    rows="1"
                    class="block mx-4 resize-none p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 outline-none"
                    placeholder="Your message..."
                  ></textarea>

                  <button
                    type="submit"
                    class="inline-flex justify-center p-2 text-orange-600 rounded-full cursor-pointer hover:bg-orange-100 "
                  >
                    <svg
                      class="w-5 h-5 rotate-90"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                    >
                      <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                    </svg>
                    <span class="sr-only">Send message</span>
                  </button>
                </div>
              </form>
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default DoctorChat;
