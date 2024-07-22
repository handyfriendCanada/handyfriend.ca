'use client';
import React, { memo } from 'react';
import cx from 'clsx';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Input as InputUI } from '@material-tailwind/react';
import InputMask from 'react-input-mask';

interface IInput {
  icon?: React.ReactNode;
  label?: string;
  placeholder?: string;
  type?: string;
  id?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null | boolean;
  value?: string | number;
  onClear?: () => void;
}

const InputPhone = React.forwardRef(
  (
    { label, icon, placeholder, type, id, name, onChange, error, value, onClear }: IInput,
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
          <InputMask mask='+1-999-999-9999' value={value} onChange={onChange}>
            {/* @ts-ignore */}
            {(inputProps: any) => {
              return (
                <InputUI
                  ref={ref}
                  {...inputProps}
                  type='tel'
                  size='lg'
                  variant='standard'
                  label={label}
                  placeholder={placeholder}
                  className='text-base md:text-xl font-semibold text-black'
                  error={isError}
                  labelProps={{
                    className: 'text-sm',
                  }}
                />
              );
            }}
          </InputMask>
          {isEmpty && (
            <button onClick={handleClear} className='absolute top-1/2 right-3 -translate-y-1/2'>
              {<XMarkIcon className='w-5 h-5' />}
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

export default memo(InputPhone);
