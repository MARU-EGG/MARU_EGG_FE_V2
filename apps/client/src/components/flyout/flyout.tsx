import { useState } from 'react';
import { FlyoutContext } from '@components/flyout/flyout-context';
import Item from '@components/flyout/item';
import Items from '@components/flyout/items';
import Trigger from '@components/flyout/trigger';

interface FlyoutProps {
  children: React.ReactNode;
}

function Flyout({ children }: FlyoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FlyoutContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative w-56">
        <div className="relative">{children}</div>
      </div>
    </FlyoutContext.Provider>
  );
}

Flyout.Trigger = Trigger;
Flyout.Items = Items;
Flyout.Item = Item;

export default Flyout;
