import { cn } from '@/utils/style';

interface PresetButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function PresetButton({ children, ...props }: PresetButtonProps) {
  const buttonClasses = cn(
    'cursor-pointer rounded-lg border border-category_border bg-white px-4 py-3 text-black transition-colors',
    'hover:border-primary hover:text-primary',
    'focus:border-primary focus:text-primary',
    'disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400',
    'disabled:hover:border-gray-200 disabled:hover:text-gray-400',
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}

export default PresetButton;
