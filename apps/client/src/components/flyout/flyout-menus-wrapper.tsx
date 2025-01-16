interface FlyoutMenuProps {
  children: React.ReactNode;
}

function FlyoutMenusWrapper({ children }: FlyoutMenuProps) {
  return <div className="border-category_border divide-y rounded-lg border">{children}</div>;
}

export default FlyoutMenusWrapper;
