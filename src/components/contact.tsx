"use client";

import React from "react";
import Image from "next/image";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/ui/Input";
import InputPhone from "@/ui/InputPhone";
import Button from "@/ui/Button";
import Textarea from "@/ui/Textarea";

import ContactImage from "@/assets/contact.png";

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  number: yup
    .string()
    .required("Phone number is required")
    .matches(/^\+1-\d{3}-\d{3}-\d{4}$/, "Please enter a valid phone number"),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,7})+$/,
      "Please enter a valid email address"
    ),
  message: yup.string().required("Please describe your question"),
});

const Contact = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      number: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (data: any) => {
    const response = fetch("/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: 
        `Contact us
        Name: ${data.firstName}
        Phone: ${data.number}
        Email: ${data.email}
        Message: ${data.message}
        `
      }),
    });
  };

  return (
    <div className="px-5 bg-lightBG flex justify-center py-7 sm:py-20 lg:py-28">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-screen-container w-full flex flex-col gap-11"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 xl:gap-[70px]">
          <div className="justify-start items-center lg:flex hidden">
            <Image
              quality={100}
              width={728}
              height={632}
              className="rounded-[30px]"
              src={ContactImage}
              alt="tools"
            />
          </div>
          <div className="h-full xs:max-w-[768px] lg:max-w-none basis-auto md:basis-1/2 w-full flex flex-col gap-5 lg:gap-10">
            <h3
              id="contacts"
              className="scroll-m-[100px] xl:scroll-m-[140px] text-black text-[32px] sm:text-5xl font-semibold leading-[67px]"
            >
              Contact us
            </h3>
            <div className="h-full w-full flex flex-col justify-between gap-[30px] lg:gap-[47px]">
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="First name"
                    error={errors.firstName?.message}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="email"
                    label="Email"
                    error={errors.email?.message}
                  />
                )}
              />

              <Controller
                name="number"
                control={control}
                render={({ field }) => (
                  <InputPhone
                    {...field}
                    label="Your number"
                    error={errors.number?.message}
                  />
                )}
              />

              <div className="pt-5">
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <Textarea
                      {...field}
                      label="Message"
                      error={errors.message?.message}
                      placeholder="Write a message"
                    />
                  )}
                />
              </div>
              <div className="flex justify-start items-start gap-8 xl:gap-[70px]">
                {/* <div className="hidden lg:block basis-1/2" /> */}
                <div className="basis-auto lg:basis-1/2">
                  <Button type="submit" className="inline" primary>
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
