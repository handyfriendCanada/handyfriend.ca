'use client';

import React from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import clsx from 'clsx';

const AccordionItem = ({ title, children, isOpen, onClick }: any) => {
  return (
    // @ts-ignore
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
      className='mb-2 rounded-3xl overflow-hidden bg-white border border-[#151515] px-3 sm:px-10'>
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
  );
};

const Questions = () => {
  const [open, setOpen] = React.useState(null);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <div className='px-5 py-10 sm:pt-[150px] sm:pb-[170px] bg-white flex justify-center'>
      <div className='max-w-screen-container flex flex-col gap-8 sm:gap-14'>
        <h3
          id='questions'
          className='scroll-m-[100px] xl:scroll-m-[200px] text-center text-black text-[32px] sm:text-5xl font-semibold leading-[30px] xs:leading-[67px]'>
          Have any quetions?
        </h3>
        <div className='flex flex-col md:flex-row items-start justify-center gap-1 sm:gap-6'>
          <div className='flex-1 flex flex-col gap-1 sm:gap-4'>
            <AccordionItem
              title='What types of services do you offer?'
              isOpen={open === 1}
              onClick={() => handleOpen(1)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iure. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </AccordionItem>
            <AccordionItem
              title='How much experience do you have in this field?'
              isOpen={open === 2}
              onClick={() => handleOpen(2)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iure.
            </AccordionItem>
            <AccordionItem
              title='Are you licensed and insured?'
              isOpen={open === 5}
              onClick={() => handleOpen(5)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iure.
            </AccordionItem>
            <AccordionItem
              title='Can you provide references or examples of previous work?'
              isOpen={open === 7}
              onClick={() => handleOpen(7)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iure.
            </AccordionItem>
            <AccordionItem
              title='How do you determine the cost of a job?'
              isOpen={open === 9}
              onClick={() => handleOpen(9)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iure.
            </AccordionItem>
          </div>
          <div className='flex-1 flex flex-col gap-1 sm:gap-4'>
            <AccordionItem
              title='What is your availability, and how soon can you start a project?'
              isOpen={open === 4}
              onClick={() => handleOpen(4)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iure.
            </AccordionItem>
            <AccordionItem
              title='Do you supply your own tools and materials?'
              isOpen={open === 3}
              onClick={() => handleOpen(3)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iure. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Consequatur sapiente autem
              doloremque ratione odit non ullam sint alias eaque? Earum voluptatem magni fugiat ab
              iste consectetur natus reiciendis nostrum quisquam explicabo accusamus, harum odit
              illo incidunt odio quasi sequi totam ducimus pariatur? Delectus quaerat culpa, quod
              qui fugiat perferendis rem voluptatum impedit sit ducimus distinctio nobis iste vel
              consequuntur totam id hic libero! Odit ipsam excepturi veniam? Ex, ipsam architecto
              adipisci fuga unde excepturi pariatur natus sit facilis eum hic nostrum veritatis!
              Iure facilis error possimus pariatur quas, cum ullam hic incidunt assumenda quos aut
              impedit porro repudiandae velit rerum.
            </AccordionItem>
            <AccordionItem
              title='How long will it take to complete my project?'
              isOpen={open === 6}
              onClick={() => handleOpen(6)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iure.
            </AccordionItem>
            <AccordionItem
              title='Do you offer any guarantees or warranties on your work?'
              isOpen={open === 8}
              onClick={() => handleOpen(8)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iure. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Soluta nulla accusamus vitae quas
              quisquam neque deleniti consectetur nihil rerum eveniet, quos consequuntur quae,
              magnam eaque nobis minima perspiciatis facilis iure aliquam mollitia suscipit ipsum
              expedita officiis? Tempora illum quam reiciendis et? Quis doloremque possimus aut unde
              harum, laborum optio cumque accusantium dignissimos nulla itaque ad architecto
              temporibus quibusdam facere facilis aspernatur necessitatibus ipsam! Quas, cum eius!
              Facere porro, accusantium iste eligendi at possimus! Voluptatem quaerat consectetur,
              alias debitis blanditiis impedit in provident corrupti a vitae tempore ipsam eaque,
              voluptas cum delectus accusamus rerum odio! Qui amet accusantium quos maiores
              incidunt.
            </AccordionItem>
            <AccordionItem
              title='How do you handle cleanup?'
              isOpen={open === 10}
              onClick={() => handleOpen(10)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iure.
            </AccordionItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
