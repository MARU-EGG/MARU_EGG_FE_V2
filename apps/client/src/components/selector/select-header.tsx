import React from 'react';

function SelectorHeader({ children }: { children: React.ReactNode }) {
  return <div className="bg-primary bg-image-tree-right text-title p-4 text-white">{children}</div>;
}

export default SelectorHeader;
