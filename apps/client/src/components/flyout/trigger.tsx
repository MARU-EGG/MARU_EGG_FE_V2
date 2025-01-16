import { useFlyoutContext } from '@components/flyout/flyout-context';
import { cn } from '@/utils/style';

interface TirggerProps {
  children: React.ReactNode;
  className: string;
}

function Trigger({ children, className }: TirggerProps) {
  const { isOpen, setIsOpen } = useFlyoutContext();
  return (
    <div onMouseLeave={() => setIsOpen(false)} onMouseOver={() => setIsOpen(true)}>
      <div className={cn('p-2', isOpen ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white', className)}>
        {children}
        <div
          className={cn('bg-image-tree-right absolute inset-0', isOpen ? 'opacity-100' : 'opacity-0 hover:opacity-100')}
        />
      </div>
    </div>
  );
}

export default Trigger;
