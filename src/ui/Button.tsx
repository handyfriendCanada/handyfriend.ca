'use client';

import React, { ButtonHTMLAttributes, memo } from 'react';
import cxls from 'clsx';

interface IButton
  extends React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  id?: string;
  children?: JSX.Element | string;
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  blue?: boolean;
  black?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  loading?: boolean;
  semiDanger?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  id,
  primary,
  secondary,
  danger,
  onClick,
  blue,
  black,
  type,
  className,
  loading,
  semiDanger,
  disabled,
  ...props
}: IButton): JSX.Element => (
  <button
    {...props}
    id={id}
    disabled={disabled || loading}
    type={type}
    onClick={onClick}
    className={cxls(
      'relative inline-flex px-7 py-3 text-center select-none items-center justify-center font-medium rounded-[32px] transition-all duration-300',
      {
        'text-black bg-main border-2 border-main text-lg font-semibold hover:text-white': primary,
        'text-black bg-main border-2 border-black text-lg font-semibold hover:text-white hover:border-white':
          secondary,
        'text-white bg-blue-400 border-2 border-blue-400': blue,
        'text-lg font-semibold text-white bg-black border-2 border-black hover:text-main': black,
        'text-gray-50 bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 border-transparent':
          danger,
        'text-red-500 border-red-600 hover:bg-red-600 hover:text-white dark:text-red-300 dark:hover:text-red-400 dark:border-red-500 border-1':
          semiDanger,
      },
      className,
    )}>
    {children}
  </button>
);

export default memo(Button);
