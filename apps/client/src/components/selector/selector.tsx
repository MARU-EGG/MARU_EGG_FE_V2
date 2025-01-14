import React from 'react';
import SelectorHeader from '@/components/selector/select-header';
import SelectOption from '@/components/selector/select-option';

function Selector({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-category_border w-56 divide-y overflow-hidden rounded-lg border bg-white">{children}</div>
  );
}

Selector.Header = SelectorHeader;
Selector.Option = SelectOption;

export default Selector;
