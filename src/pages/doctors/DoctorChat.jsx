import { Divider } from "@mantine/core";
import { IconCircleChevronLeft } from "@tabler/icons-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorChat = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="w-[100%] md:w-[100%]  lg:w-[60%] xl:w-[40%] no-scrollbar">
        <section className="flex flex-col min-h-screen no-scrollbar">
          <div className="flex-1">
            <div className="block fixed inset-x-0 z-10  md:w-[100%]  lg:w-[60%] xl:w-[40%] mx-auto">
              <div className="py-6 flex bg-white justify-between items-center">
                <IconCircleChevronLeft
                  size={28}
                  onClick={() => navigate(-1)}
                  className="cursor-pointer ml-2"
                />
                <h1 className={`font-bold text-3xl text-blue-950`}>Dr John</h1>
                <div></div>
              </div>
              <Divider className="mb-5" color="#ede1df" />
            </div>
            {/* CHATS */}
            <section className="my-28 mb-48 no-scrollbar">
              <div class="no-scrollbar">
                <div class="clearfix">
                  <div class="bg-orange-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
                    this is a basic mobile chat layout, build with tailwind css
                  </div>
                </div>

                <div class="clearfix">
                  <div class="bg-orange-300 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
                    It will be used for a full tutorial about building a chat
                    app with vue, tailwind and firebase.
                  </div>
                </div>

                <div class="clearfix">
                  <div class="bg-green-300 ml-auto w-3/4 mx-4 my-4 p-2 rounded-lg clearfix">
                    check my twitter to see when it will be released.
                  </div>
                </div>
                <div class="clearfix">
                  <div class="bg-orange-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
                    this is a basic mobile chat layout, build with tailwind css
                  </div>
                </div>
                <div class="clearfix">
                  <div class="bg-orange-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
                    this is a basic mobile chat layout, build with tailwind css
                  </div>
                </div>

                <div class="clearfix">
                  <div class="bg-orange-300 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
                    It will be used for a full tutorial about building a chat
                    app with vue, tailwind and firebase.
                  </div>
                </div>

                <div class="clearfix">
                  <div class="bg-green-300 ml-auto w-3/4 mx-4 my-4 p-2 rounded-lg clearfix">
                    check my twitter to see when it will be released.
                  </div>
                </div>
                <div class="clearfix">
                  <div class="bg-orange-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
                    this is a basic mobile chat layout, build with tailwind css
                  </div>
                </div>

                <div class="clearfix">
                  <div class="bg-orange-300 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
                    It will be used for a full tutorial about building a chat
                    app with vue, tailwind and firebase.
                  </div>
                </div>

                <div class="clearfix">
                  <div class="bg-green-300 ml-auto w-3/4 mx-4 my-4 p-2 rounded-lg clearfix">
                    check my twitter to see when it will be released.
                  </div>
                </div>
                <div class="clearfix">
                  <div class="bg-orange-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
                    this is a basic mobile chat layout, build with tailwind css
                  </div>
                </div>

                <div class="clearfix">
                  <div class="bg-orange-300 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
                    It will be used for a full tutorial about building a chat
                    app with vue, tailwind and firebase.
                  </div>
                </div>

                <div class="clearfix">
                  <div class="bg-green-300 ml-auto w-3/4 mx-4 my-4 p-2 rounded-lg clearfix">
                    check my twitter to see when it will be released.
                  </div>
                </div>
                <div class="clearfix">
                  <div class="bg-orange-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
                    this is a basic mobile chat layout, build with tailwind css
                  </div>
                </div>

                <div class="clearfix">
                  <div class="bg-orange-300 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
                    It will be used for a full tutorial about building a chat
                    app with vue, tailwind and firebase.
                  </div>
                </div>

                <div class="clearfix">
                  <div class="bg-green-300 ml-auto w-3/4 mx-4 my-4 p-2 rounded-lg clearfix">
                    check my twitter to see when it will be released.
                  </div>
                </div>
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
    </>
  );
};

export default DoctorChat;
