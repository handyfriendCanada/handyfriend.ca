"use client";

import React, { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RadioButton from "@/ui/RadioButton";
import InputPhone from "@/ui/InputPhone";
import Button from "@/ui/Button";
import Modal from "@/ui/Modal";
import Input from "@/ui/Input";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const validationSchema = [
  yup.object({
    firstName: yup.string().required("Name is required"),
  }),
  yup.object({
    email: yup
      .string()
      .required("Email name is required")
      .matches(
        /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,7})+$/,
        "Please enter a valid email address"
      ),
    number: yup.string(),
  }),
  yup.object({
    communicationMethod: yup
      .string()
      .required("The contact method field is required"),
  }),
  yup.object({
    timeToCall: yup.string().required("The time field is required"),
  }),
  yup.object({
    jobDone: yup.string().required("The time field is required"),
  }),
];

const Booking = ({ secondary }: { secondary?: boolean }) => {
  const [isOpened, setOpened] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);
  const [activeStep, setActiveStep] = useState(0);

  const currentValidationSchema = validationSchema[activeStep];
  const methods = useForm({
    shouldUnregister: false,
    defaultValues: {
      firstName: "",
      // @ts-ignore
      email: "",
      number: "",
      communicationMethod: "",
      timeToCall: "",
      jobDone: "",
    },
    // @ts-ignore
    resolver: yupResolver(currentValidationSchema),
    mode: "onChange",
  });
  const {
    handleSubmit,
    trigger,
    control,
    watch,
    formState: { errors },
  } = methods;
  // @ts-ignore
  let isMethodPhoneCall = watch("communicationMethod") === "phone";

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) {
      if (page === 3 && !isMethodPhoneCall) {
        paginate(2);
        setActiveStep((prevActiveStep) => prevActiveStep + 2);
      } else if (page === 5) {
        paginate(1);
      } else {
        paginate(1);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
  };

  const handleBack = () => {
    if (page === 5 && !isMethodPhoneCall) {
      paginate(-2);
      setActiveStep((prevActiveStep) => prevActiveStep - 2);
    } else {
      if (activeStep === 0) {
        paginate(-1);
      } else {
        paginate(-1);
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      }
    }
  };

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // @ts-ignore
  const onSubmit = (data, event) => {
    event.preventDefault();
    handleNext();
    const response = fetch("/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: 
        `Get a free quote
          \nFirst Name: ${data.firstName}
          \nEmail: ${data.email}
          \nNumber: ${data.number}
          \nPreferred communication method: ${data.communicationMethod}
          \nPreferred time to call: ${data.timeToCall}
          \nPreferred job done: ${data.jobDone}
        `
      }),
    });
  };

  const openModal = () => {
    setOpened(true);
  };

  return (
    <div>
      {secondary ? (
        <Button className="text-lg" secondary onClick={openModal}>
          Get a free quote
        </Button>
      ) : (
        <Button className="text-lg" primary onClick={openModal}>
          Get a free quote
        </Button>
      )}
      <Modal isOpened={isOpened} onClose={() => setOpened(false)}>
        <div className="flex flex-col gap-10 h-full overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <div className="overflow-hidden">
              {page === 0 && (
                <motion.div
                  className="overflow-hidden"
                  key={"start-booking"}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                  }}
                >
                  <div className="flex flex-col items-center gap-8">
                    <h4 className="text-2xl text-center font-semibold">
                      Do you want to make an appointment?
                    </h4>
                    <Button primary onClick={() => paginate(1)}>
                      Continue
                    </Button>
                  </div>
                </motion.div>
              )}

              {page !== 0 && (
                <motion.form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-10 overflow-hidden"
                  key={"booking"}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="overflow-hidden"
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.3 },
                    }}
                  >
                    {page === 1 && (
                      <div className="flex flex-col gap-2">
                        <h5 className="text-lg font-semibold">
                          What is your name?
                        </h5>
                        <Controller
                          name="firstName"
                          control={control}
                          render={({ field }) => (
                            <Input
                              label="Name"
                              error={errors.firstName?.message}
                              {...field}
                            />
                          )}
                        />
                      </div>
                    )}

                    {page === 2 && (
                      <div className="flex flex-col gap-2">
                        <h5 className="text-lg font-semibold">
                          How can we contact you?
                        </h5>

                        <div className="flex items-start flex-col sm:flex-row justify-between gap-3">
                          <Controller
                            //  @ts-ignore
                            name="email"
                            control={control}
                            render={({ field }) => (
                              <Input
                                label="Email"
                                type="email"
                                // @ts-ignore
                                error={errors.email?.message}
                                {...field}
                              />
                            )}
                          />

                          <Controller
                            // @ts-ignore
                            name="number"
                            control={control}
                            render={({ field }) => (
                              <InputPhone
                                label="Phone number"
                                // @ts-ignore
                                error={errors.number?.message}
                                {...field}
                              />
                            )}
                          />
                        </div>
                      </div>
                    )}
                    {page === 3 && (
                      <div className="flex flex-col gap-2">
                        <h5 className="text-lg font-semibold">
                          Preferred method of communication
                        </h5>
                        <div className="flex flex-col gap-2">
                          <div className="p-1 flex flex-col md:flex-row md:gap-10">
                            <Controller
                              // @ts-ignore
                              name="communicationMethod"
                              control={control}
                              render={({ field }) => (
                                <RadioButton
                                  {...field}
                                  checked={field.value === "phone"}
                                  value="phone"
                                  // @ts-ignore
                                  isError={errors.communicationMethod}
                                  label="Phone call"
                                />
                              )}
                            />
                            <Controller
                              // @ts-ignore
                              name="communicationMethod"
                              control={control}
                              render={({ field }) => (
                                <RadioButton
                                  {...field}
                                  checked={field.value === "email"}
                                  value="email"
                                  // @ts-ignore
                                  isError={errors.communicationMethod}
                                  label="Email"
                                />
                              )}
                            />
                            <Controller
                              // @ts-ignore
                              name="communicationMethod"
                              control={control}
                              render={({ field }) => (
                                <RadioButton
                                  {...field}
                                  // @ts-ignore
                                  isError={errors.communicationMethod}
                                  checked={field.value === "text"}
                                  value="text"
                                  label="Text message"
                                />
                              )}
                            />
                          </div>
                          {/* @ts-ignore */}
                          {errors.communicationMethod && (
                            <p className="text-sm text-red-600">
                              {/* @ts-ignore */}
                              {errors.communicationMethod?.message}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {page === 4 && (
                      <div className="flex flex-col gap-2">
                        <h5 className="text-lg font-semibold">
                          Best time to call you
                        </h5>
                        <div className="flex flex-col gap-2">
                          <div className="p-1 flex flex-col">
                            <Controller
                              // @ts-ignore
                              name="timeToCall"
                              control={control}
                              render={({ field }) => (
                                <RadioButton
                                  {...field}
                                  // @ts-ignore
                                  isError={errors.timeToCall}
                                  checked={field.value === "morning"}
                                  value="morning"
                                  label="Morning 8am - 12am"
                                />
                              )}
                            />
                            <Controller
                              // @ts-ignore
                              name="timeToCall"
                              control={control}
                              render={({ field }) => (
                                <RadioButton
                                  {...field}
                                  // @ts-ignore
                                  isError={errors.timeToCall}
                                  checked={field.value === "afternoon"}
                                  value="afternoon"
                                  label="Afternoon 12pm - 4pm"
                                />
                              )}
                            />
                            <Controller
                              // @ts-ignore
                              name="timeToCall"
                              control={control}
                              render={({ field }) => (
                                <RadioButton
                                  {...field}
                                  // @ts-ignore
                                  isError={errors.timeToCall}
                                  checked={field.value === "evening"}
                                  value="evening"
                                  label="Evening 4pm - 8pm"
                                />
                              )}
                            />
                          </div>

                          {/* @ts-ignore */}
                          {errors.timeToCall && (
                            <p className="text-sm text-red-600">
                              {/* @ts-ignore */}
                              {errors.timeToCall?.message}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                    {page === 5 && (
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                          <h5 className="text-lg font-semibold">
                            When do you want the job to be done?
                          </h5>
                          <div className="p-1 flex flex-col">
                            <Controller
                              // @ts-ignore
                              name="jobDone"
                              control={control}
                              render={({ field }) => (
                                <RadioButton
                                  {...field}
                                  // @ts-ignore
                                  isError={errors.jobDone}
                                  checked={field.value === "asap"}
                                  label="As soon as possible"
                                  value="asap"
                                />
                              )}
                            />
                            <Controller
                              // @ts-ignore
                              name="jobDone"
                              control={control}
                              render={({ field }) => (
                                <RadioButton
                                  {...field}
                                  // @ts-ignore
                                  isError={errors.jobDone}
                                  checked={field.value === "1-4_days"}
                                  label="1 to 4 days"
                                  value="1-4_days"
                                />
                              )}
                            />
                            <Controller
                              // @ts-ignore
                              name="jobDone"
                              control={control}
                              render={({ field }) => (
                                <RadioButton
                                  {...field}
                                  // @ts-ignore
                                  isError={errors.jobDone}
                                  checked={field.value === "1-4_weeks"}
                                  label="A week to a few weeks"
                                  value="1-4_weeks"
                                />
                              )}
                            />
                            <Controller
                              // @ts-ignore
                              name="jobDone"
                              control={control}
                              render={({ field }) => (
                                <RadioButton
                                  {...field}
                                  // @ts-ignore
                                  isError={errors.jobDone}
                                  checked={field.value === "gathering_info"}
                                  label="Just gathering information"
                                  value="gathering_info"
                                />
                              )}
                            />
                          </div>
                        </div>
                        {/* @ts-ignore */}
                        {errors.jobDone && (
                          <p className="text-sm text-red-600">
                            {/* @ts-ignore */}
                            {errors.jobDone?.message}
                          </p>
                        )}
                      </div>
                    )}
                    {page === 6 && (
                      <div className="flex flex-col items-center gap-5">
                        <h5 className="text-center text-xl font-semibold text-green-600">
                          We will contact you as soon as possible.
                        </h5>

                        <Button type="button" onClick={() => setOpened(false)}>
                          Close
                        </Button>
                      </div>
                    )}
                  </motion.div>
                  {page !== 6 && (
                    <div className="w-full flex justify-center items-center gap-2">
                      <Button
                        type="button"
                        className="next"
                        onClick={handleBack}
                      >
                        <div className="flex gap-1">
                          <ArrowLongLeftIcon className="size-6 text-black" />
                          Back
                        </div>
                      </Button>

                      {page === 5 && (
                        <Button id="submitBtn" type="submit">
                          <div className="flex gap-1">
                            Okay
                            <CheckIcon className="size-6 text-black" />
                          </div>
                        </Button>
                      )}

                      {page !== 5 && (
                        <Button
                          id="clickBtn"
                          type="button"
                          onClick={handleNext}
                        >
                          <div className="flex gap-1">
                            Next
                            <ArrowLongRightIcon className="size-6 text-black" />
                          </div>
                        </Button>
                      )}
                    </div>
                  )}
                </motion.form>
              )}
            </div>
          </AnimatePresence>
        </div>
      </Modal>
    </div>
  );
};

export default Booking;
