'use client';
import { Radio } from '@material-tailwind/react';
import React from 'react';

interface IRadioButton {
  checked: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  isError?: boolean;
}

const RadioButton = React.forwardRef<HTMLInputElement, IRadioButton>(
  ({ checked, value, onChange, label, isError }, ref) => {
    return (
      <div>
{/*         @ts-ignore */}
        <Radio
          ref={ref}
          onChange={onChange}
          checked={checked}
          value={value}
          label={label}
          color={isError ? 'red' : 'gray'}
          className={isError ? 'border-red-600' : ''}
          labelProps={{
            className: isError ? 'text-red-600' : '',
          }}
        />
      </div>
    );
  },
);

export default RadioButton;
