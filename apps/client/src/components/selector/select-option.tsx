import React from 'react';
import { ArrowDownIcon } from '@/assets/svg';

interface SelectOptionProps {
  style?: 'default' | 'checkbox' | 'dropDown';
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
}

function SelectOption({ style = 'default', onClick, children }: SelectOptionProps) {
  if (style === 'default')
    return (
      <div onClick={onClick} className="cursor-pointer px-4 py-3 text-sm transition-colors hover:bg-gray-100">
        {children}
      </div>
    );
  if (style === 'checkbox')
    return (
      <div
        onClick={onClick}
        className="flex cursor-pointer items-center gap-2 px-4 py-3 text-sm transition-colors hover:bg-gray-100"
      >
        <div className="h-4 w-4 rounded-sm border"></div>
        <div>{children}</div>
      </div>
    );

  if (style === 'dropDown')
    return (
      <div className="cursor-pointer px-4 py-3 text-sm">
        <div
          onClick={onClick}
          className="flex items-center justify-between rounded-md border p-2 text-gray-400 transition-colors hover:bg-gray-100"
        >
          <div>{children}</div>
          <ArrowDownIcon />
        </div>
      </div>
    );
}

export default SelectOption;
