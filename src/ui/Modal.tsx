'use client';

import { Dialog, DialogPanel } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { memo } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface IModal {
  children: React.ReactNode | string;
  isOpened: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpened, onClose }: IModal): JSX.Element => (
  <AnimatePresence>
    {isOpened && (
      <Dialog static open={isOpened} onClose={onClose} className='relative z-50'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 bg-[#000]/55'
        />
        <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
          <DialogPanel
            as={motion.div}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className='overflow-hidden max-w-2xl w-full space-y-4 bg-white p-3 rounded-2xl'>
            <div className='flex flex-col gap-2'>
              <div className='flex justify-end'>
                <button className='p-2' onClick={onClose}>
                  <XMarkIcon className='size-6 text-black' />
                </button>
              </div>
              <div className=''>{children}</div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    )}
  </AnimatePresence>
);

export default memo(Modal);
