'use client'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import Booking from './booking'

export default function Discount() {
  const [show, setShow] = useState(true)
  const [open, setOpen] = useState(false)

  if (!show) {
    return
  }
  return (
    <div className="fixed z-[999] bottom-0 left-[50%] -translate-x-[50%] w-[100%] isolate flex items-center gap-x-6 overflow-hidden bg-[#ff3535] px-3 md:px-6 py-3.5 sm:px-3.5 sm:before:flex-1">
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          // className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#9847fb] to-[#00fff2] opacity-30"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          // className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#f9e959] to-[#fd35a0] opacity-30"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-white mx-auto text-center">
          <strong className="font-semibold md:inline hidden">Discount</strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 h-0.5 w-0.5 fill-current hidden md:inline"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          <span className='text-white font-semibold '>🔧 Limited-Time Offer:</span>
          {' '}
          <br className='block 1xs:hidden' />
          25% Off All Services!
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex-none mx-auto rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Get a free quote <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 md:p-3 focus-visible:outline-offset-[-4px]"
          onClick={() => setShow(false)}
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="h-5 w-5 text-gray-900" />
        </button>
      </div>
      <Booking withOutBtn open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
