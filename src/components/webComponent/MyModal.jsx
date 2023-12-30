import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import modalPic from "../../assets/images/modal.jpg";
import { XHR } from "../../libs/request";
import { Link } from "react-router-dom";
import { useTimeout } from "@mantine/hooks";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [subscription, setSubscription] = useState({});

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const fetchSubscriptions = async () => {
    await XHR("get", "subscriptions")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setSubscription(res.data);
      })
      .then(() => {
        setTimeout(() => {
          if (subscription.status == "Active") {
            closeModal();
          } else {
            openModal();
          }
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   useEffect(() => {}, []);
  return (
    <>
      {/* <div className=" inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                  <section class="overflow-hidden rounded-lg shadow-2xl">
                    <img
                      alt="Trainer"
                      src={modalPic}
                      class="h-32 w-full object-cover md:h-full"
                    />

                    <div class="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                      <p class="text-sm font-semibold uppercase tracking-widest">
                        Run with the pack
                      </p>

                      <h2 class="mt-6 font-black uppercase">
                        <span class="text-4xl font-black sm:text-5xl lg:text-6xl">
                          Get 5% off
                        </span>

                        <span class="mt-2 block text-sm">
                          On your Subscription
                        </span>
                      </h2>

                      <Link
                        class="mt-8 inline-block w-full bg-orange-500 py-4 text-sm font-bold uppercase tracking-widest text-white"
                        to="/settings/subscription"
                      >
                        Get Discount
                      </Link>

                      <p class="mt-8 text-xs font-medium uppercase text-gray-400">
                        Offer valid until 24th March, 2024
                      </p>
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
