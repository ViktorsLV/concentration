import { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';

import Button from './Button';

const Alert = ({ toggleAlert, turnCount, open }) => {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={toggleAlert}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-center text-white align-middle transition-all transform border-2 border-white shadow-xl bg-primary rounded-2xl">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 capitalize">
                    Game Completed! 🎉
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-gray-200 text-md">You completed the game in {turnCount} turns!</p>
                  </div>

                  <div className="mt-4">
                    <Button text="Play again" onClick={toggleAlert} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Alert;
