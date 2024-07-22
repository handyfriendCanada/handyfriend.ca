'use client';
import React, { memo, forwardRef } from 'react';
import cx from 'clsx';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Input as InputUI } from '@material-tailwind/react';

interface IInput {
  icon?: React.ReactNode;
  label?: string;
  placeholder?: string;
  type?: string;
  id?: string;
  pattern?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null | boolean;
  value?: string | number;
  onClear?: () => void;
  isOptional?: boolean;
}

const Input = forwardRef<HTMLInputElement, IInput>(
  (
    { label, icon, placeholder, type, id, pattern, name, onChange, error, value, onClear },
    ref,
  ): JSX.Element => {
    const identifier = id || name || type;
    const isError = !!error;
    const isEmpty = !!value;

    const handleClear = () => {
      if (onClear) {
        onClear();
      }

      onChange &&
        onChange({
          target: { value: '', name: identifier },
        } as React.ChangeEvent<HTMLInputElement>);
    };

    return (
      <div className='w-full'>
        <div
          className={cx('relative', {
            'mt-1': label,
          })}>
          <div className='absolute top-1/2 left-3 -translate-y-1/2'>{icon && icon}</div>
          {/* @ts-ignore */}
          <InputUI
            ref={ref}
            type={type}
            value={value}
            onChange={onChange}
            size='lg'
            name={name}
            autoComplete='on'
            pattern={pattern}
            variant='standard'
            label={label}
            placeholder={placeholder}
            className='md:text-xl font-semibold text-black pr-10'
            error={isError}
            labelProps={{
              className: 'text-sm',
            }}
          />
          {isEmpty && (
            <button onClick={handleClear} className='absolute top-1/2 right-3 -translate-y-1/2'>
              <XMarkIcon className='w-5 h-5' />
            </button>
          )}

          {isError && !isEmpty && (
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
              <ExclamationCircleIcon className='h-5 w-5 text-red-500' aria-hidden />
            </div>
          )}
        </div>
        {isError && <p className='mt-2 text-sm text-red-600'>{error}</p>}
      </div>
    );
  },
);

export default memo(Input);
