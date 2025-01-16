interface ItemProps {
  onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
}

function Item({ onClick, children }: ItemProps) {
  return (
    <>
      <div
        onClick={onClick}
        className="hover:bg-primary group relative w-64 p-2 first:rounded-t-lg last:rounded-b-lg hover:text-white"
      >
        {children}
        <div className="bg-image-tree-right absolute inset-0 opacity-0 group-hover:opacity-100" />
      </div>
    </>
  );
}

export default Item;
