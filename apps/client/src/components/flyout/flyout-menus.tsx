import Flyout from '@/components/flyout/flyout';

interface FlyoutMenuProps {
  menus: { label: string; children: string[] }[];
}

function FlyoutMenus({ menus }: FlyoutMenuProps) {
  return (
    <div className="divide-y rounded-lg border">
      {menus.map((menu, index) => (
        <Flyout key={index}>
          <Flyout.Trigger
            round={index === 0 ? 'round-top' : index === menus.length - 1 ? 'round-bottom' : 'default'}
            label={menu.label}
          />
          <Flyout.Items>
            {menu.children.map((item, itemIndex) => (
              <Flyout.Item key={itemIndex + item}>{item}</Flyout.Item>
            ))}
          </Flyout.Items>
        </Flyout>
      ))}
    </div>
  );
}

export default FlyoutMenus;
