'use client';

import React from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import clsx from 'clsx';
import AnimatedText from './animatedText';
import { motion } from 'framer-motion';

const AccordionItem = ({ variants, title, children, isOpen, onClick }: any) => {
  return (
    // @ts-ignore
    <motion.div variants={variants}>
      <Accordion
        icon={
          <svg
            className={clsx(
              'h-[14px] w-[14px] sm:h-[18px] sm:w-[18px] transition-all',
              isOpen && 'rotate-45',
            )}
            width='15'
            height='15'
            viewBox='0 0 19 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M18.476 11.912H11.276V19.184H7.28V11.912H0.116V8.132H7.28V0.823998H11.276V8.132H18.476V11.912Z'
              fill='#FFD705'
            />
          </svg>
        }
        open={isOpen}
        className='mb-2 rounded-3xl overflow-hidden bg-white border border-[#151515] px-10 sm:px-3'>
        {/* @ts-ignore */}
        <AccordionHeader
          onClick={onClick}
          className={`text-black opacity-100 text-[14px] sm:text-xl font-medium border-b-0 transition-all ${
            isOpen ? 'text-main hover:!text-main' : ''
          }`}>
          {title}
        </AccordionHeader>
        <AccordionBody className='pt-0 text-[14px] sm:text-base font-normal'>
          {children}
        </AccordionBody>
      </Accordion>
    </motion.div>
  );
};

const itemVariantsLeft = {
  initial: { opacity: 0, x: -500 },
  view: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'linear',
    },
  },
};

const itemVariantsRight = {
  initial: { opacity: 0, x: 500 },
  view: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'linear',
    },
  },
};

const Questions = () => {
  const [open, setOpen] = React.useState(null);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <div className='px-5 py-10 sm:pt-[150px] sm:pb-[170px] bg-white flex justify-center'>
      <div className='overflow-hidden max-w-screen-container flex flex-col gap-8 sm:gap-14'>
        <h3
          id='questions'
          className='scroll-m-[100px] xl:scroll-m-[200px] text-center text-black text-[32px] sm:text-5xl font-semibold leading-normal xs:leading-[67px]'>
          <AnimatedText text='Frequently Asked Questions' />
          <p className='text-[16px] lg:text-[22px] md:text-[18px] mx-auto font-light leading-normal'>
            If the FAQ below does not answer your questions, feel free to get in touch or email us
            at <a href='mailto:contact@handyfriend.ca'>contact@handyfriend.ca</a>
          </p>
        </h3>
        <div className='overflow-hidden flex flex-col md:flex-row items-start justify-center gap-1 sm:gap-6'>
          <motion.div
            variants={{
              initial: { opacity: 0, x: '-100%' },
              view: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.1,
                },
              },
            }}
            initial='initial'
            whileInView='view'
            viewport={{ once: true }}
            className='flex-1 flex flex-col gap-1 sm:gap-4'>
            <AccordionItem
              variants={itemVariantsLeft}
              title='Can you do small tasks?'
              isOpen={open === 1}
              onClick={() => handleOpen(1)}>
              No job is too small for us – whether it&apos;s changing a hard-to-reach lightbulb,
              fixing a door knob, or working through a to-do list around your space.
            </AccordionItem>
            <AccordionItem
              variants={itemVariantsLeft}
              title='What kind of projects can you do?'
              isOpen={open === 2}
              onClick={() => handleOpen(2)}>
              Our work scope is broad. However, we do not handle rewiring electrical systems,
              extensive plumbing, or structural repairs.
              <br />
              We specialize in smaller renovation projects like installations, repairs, mounting,
              tiling, painting, and installing drywall and storage systems. We also offer some
              landscaping services.
            </AccordionItem>
            <AccordionItem
              variants={itemVariantsLeft}
              title='Do you offer services in my area?'
              isOpen={open === 5}
              onClick={() => handleOpen(5)}>
              We provide services in the following areas of Toronto & Gta
            </AccordionItem>
            <AccordionItem
              variants={itemVariantsLeft}
              title='Do you work in the evenings, weekends, or holidays?'
              isOpen={open === 7}
              onClick={() => handleOpen(7)}>
              Yes, we operate 24/7, 365 days a year. For services outside our regular business hours
              (8 AM - 6 PM, Mon-Fri) and on some holidays, we charge an additional fee.
            </AccordionItem>
            <AccordionItem
              variants={itemVariantsLeft}
              title='Do I need to provide any materials?'
              isOpen={open === 9}
              onClick={() => handleOpen(9)}>
              While we provide all necessary materials and supplies, we recommend that you purchase
              specific items like faucets, light fixtures, or curtain rods to ensure you get exactly
              what you want. Please consult with our specialist before purchasing to ensure
              compatibility.
            </AccordionItem>
            <AccordionItem
              variants={itemVariantsLeft}
              title='Are your handymen trained?'
              isOpen={open === 11}
              onClick={() => handleOpen(11)}>
              We only hire specialists with 5+ years of experience. All new hires undergo a
              comprehensive training program to ensure they can tackle any challenge. Additionally,
              they receive regular training every 3-6 months to upgrade their skills.
            </AccordionItem>
          </motion.div>
          <motion.div
            variants={{
              initial: { opacity: 0, x: '100%' },
              view: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.1,
                },
              },
            }}
            initial='initial'
            whileInView='view'
            viewport={{ once: true }}
            className='flex-1 flex flex-col gap-1 sm:gap-4'>
            <AccordionItem
              variants={itemVariantsRight}
              title='Do your handymen bring all the tools for the job?'
              isOpen={open === 4}
              onClick={() => handleOpen(4)}>
              Absolutely! Our handymen come fully equipped with all the necessary tools to tackle
              any repair or installation you need.
            </AccordionItem>
            <AccordionItem
              variants={itemVariantsRight}
              title='Are you insured?'
              isOpen={open === 3}
              onClick={() => handleOpen(3)}>
              Yes, we carry $2 million in general liability insurance.
            </AccordionItem>
            <AccordionItem
              variants={itemVariantsRight}
              title='What are your rates?'
              isOpen={open === 6}
              onClick={() => handleOpen(6)}>
              • Hourly rate: $99 for the first hour + $49 for each additional hour
              <br />• Project-based pricing: Get an online quote or an in-house estimate.
            </AccordionItem>
            <AccordionItem
              variants={itemVariantsRight}
              title='How many handymen will come?'
              isOpen={open === 8}
              onClick={() => handleOpen(8)}>
              One handyman will come for smaller to mid-sized jobs. Larger or more complex jobs may
              require additional handymen to complete the work.
            </AccordionItem>
            <AccordionItem
              variants={itemVariantsRight}
              title='What forms of payment do you accept?'
              isOpen={open === 10}
              onClick={() => handleOpen(10)}>
              We accept:
              <br />
              • Cheques
              <br />
              • e-Transfer
              <br />
              • Cash
              <br />
              <br />
              We do not accept:
              <br />
              • MasterCard
              <br />
              • Visa
              <br />• American Express
            </AccordionItem>
            <AccordionItem
              variants={itemVariantsRight}
              title='Any other questions?'
              isOpen={open === 12}
              onClick={() => handleOpen(12)}>
              Contact us!
            </AccordionItem>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
