import { useFlyoutContext } from '@components/flyout/flyout-context';

type RoundType = 'round-top' | 'round-bottom' | 'default';

interface TirggerProps {
  label: string;
  round?: RoundType;
}
const round: Record<RoundType, string> = {
  'round-top': 'rounded-t-lg',
  'round-bottom': 'rounded-b-lg',
  default: 'rounded-none',
};

function Trigger({ label, round: roundType = 'default' }: TirggerProps) {
  const { isOpen, setIsOpen } = useFlyoutContext();
  return (
    <div onMouseLeave={() => setIsOpen(false)} onMouseOver={() => setIsOpen(true)}>
      <div
        className={`p-2 ${round[roundType]} ${isOpen ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
      >
        {label}
        <div
          className={`bg-image-tree-right absolute inset-0 ${isOpen ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`}
        />
      </div>
    </div>
  );
}

export default Trigger;
