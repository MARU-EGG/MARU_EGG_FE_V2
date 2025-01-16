import { ReloadIcon } from '@/assets/svg';
import IconButton from '@/components/icon-button/icon-button';

function Header() {
  return (
    <header className="sticky top-0 z-10 h-16 w-full bg-white">
      <div className="flex h-full items-center justify-center px-4">
        <h1 className="text-primary text-title flex-1 text-center">명지대 입학처 챗봇</h1>
        <IconButton aria-label="새로고침">
          <ReloadIcon />
        </IconButton>
      </div>
    </header>
  );
}

export default Header;
