import { SVGProps } from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactElement<SVGProps<SVGSVGElement>>;
}

function IconButton({ children, ...props }: IconButtonProps) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

export default IconButton;
