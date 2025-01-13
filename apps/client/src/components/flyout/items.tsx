import { ReactNode } from 'react';
import { useFlyoutContext } from '@components/flyout/flyout-context';

function Items({ children }: { children: ReactNode }) {
  const { isOpen, setIsOpen } = useFlyoutContext();
  return isOpen ? (
    <div onMouseOver={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className="absolute left-56 top-0">
      <div className="ml-3 divide-y rounded-lg border">{children}</div>
    </div>
  ) : null;
}

export default Items;
