import React, { memo } from "react";
import cx, { clsx } from "clsx";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface ITextarea {
  value?: string | number;
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id?: string;
  type?: string;
  className?: string;
  error?: string | boolean;
  name?: string;
  disabled?: boolean;
  onClear?: () => void;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, ITextarea>(
  (
    {
      label,
      placeholder,
      type,
      id,
      name,
      className,
      onChange,
      error,
      value,
      disabled,
      onClear,
    },
    ref
  ) => {
    const identifier = `textarea-${id || name || type}`;
    const isError = !!error;
    const isEmpty = !!value;

    const handleClear = () => {
      if (onClear) {
        onClear();
      }

      onChange &&
        onChange({
          target: { value: "", name: identifier },
        } as React.ChangeEvent<HTMLTextAreaElement>);
    };

    return (
      <div className={className}>
        {/* <div className='mt-1 relative'> */}
        <div className="flex flex-col-reverse gap-1">
          <textarea
            ref={ref}
            rows={8}
            name={identifier}
            id={identifier}
            className={cx(
              "pr-8 peer text-sm md:text-x font-semibold text-[#455a64] resize-none p-4 rounded-[10px] border border-[#b0bec5] focus:border-black focus:text-dark shadow-sm block w-full focus:outline-none",
              {
                "border-red-300 text-red-900 placeholder-red-300": isError,
                "cursor-text": disabled,
              }
            )}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
          />
          {label && (
            <label
              htmlFor={identifier}
              className={clsx(
                isError && "text-red-600 peer-focus:text-black",
                "text-[#607d8b] peer-focus:text-black"
              )}
            >
              {label}
            </label>
          )}
        </div>
        {isEmpty && (
          <button onClick={handleClear} className="absolute top-3 right-3">
            {<XMarkIcon className="w-5 h-5" />}
          </button>
        )}
        {isError && (
          <div className="absolute top-3 right-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden
            />
          </div>
        )}
        {/* </div> */}
        {isError && (
          <p className="mt-2 text-sm text-red-600" id="email-error">
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default memo(Textarea);
