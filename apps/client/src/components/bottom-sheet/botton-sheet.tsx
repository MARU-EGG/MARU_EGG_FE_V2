import { useAnimation } from '@/hooks/use-animation.hooks';

interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function BottomSheet({ open, onClose, children }: BottomSheetProps) {
  const { shouldRender, onTransitionEnd, animationTrigger } = useAnimation(open);

  if (!shouldRender) return null;

  return (
    <div
      onTransitionEnd={onTransitionEnd}
      onClick={onClose}
      className={`animate-fadein absolute inset-0 z-30 bg-black/60 transition-opacity duration-300 ${animationTrigger ? 'opacity-100' : 'opacity-0'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`animate-slideUp absolute bottom-0 z-40 h-80 w-full overflow-y-auto rounded-t-2xl bg-white px-4 py-6 transition-transform duration-300 ${animationTrigger ? 'translate-y-0' : 'translate-y-full'}`}
      >
        {children}
      </div>
    </div>
  );
}

export default BottomSheet;
