import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { BsSendCheckFill } from 'react-icons/bs';
import { FaTimesCircle } from 'react-icons/fa';

const FeedbackModal = ({isOpen, closeModal}) => {

  return (
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
          <div className="fixed inset-0 bg-black bg-opacity-25" />
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Admin Feedback
                </Dialog.Title>

                <div className="mt-2 border-t">
                  {/* <p className="text-sm text-gray-500 mt-3">
                    Your payment has been successfully submitted. We’ve sent
                    you an email with all of the details of your order.
                  </p> */}
                  <div className="form-control mt-3">
                    <label className="label pl-0" htmlFor="message">
                      <span className="label-text text-md md:text-[16px]">Message</span>
                    </label>
                    <textarea id="message" name="message" rows="6" className="input input-bordered focus:outline-teal-500 focus:border-teal-200 focus:ring-teal-400 text-[14px] h-auto" placeholder="Enter your message"></textarea>
                  </div>
                </div>

                <div className="mt-4 flex gap-2 justify-end items-center">
                  {/* <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Close
                  </button> */}
                  <button onClick={closeModal} type="button" className="flex text-sm justify-center items-center text-white bg-gradient-to-br from-slate-500 to-slate-600 transition-all hover:duration-300 hover:from-slate-600 hover:to-slate-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-slate-200 dark:focus:ring-slate-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700">
                    <FaTimesCircle className='gr-icon w-4 h-4 mr-2' />
                    Close
                  </button>
                  <button type="button" className="flex text-sm justify-center items-center text-white bg-gradient-to-br from-blue-500 to-blue-600 transition-all hover:duration-300 hover:from-blue-600 hover:to-blue-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700">
                    <BsSendCheckFill className='gr-icon w-4 h-4 mr-2' />
                    Send Feedback
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FeedbackModal;