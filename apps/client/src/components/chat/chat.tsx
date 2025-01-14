import { MaruIcon } from '@/assets/svg';

interface ChatProps {
  role: 'user' | 'system';
  children: React.ReactNode;
}

function Chat({ role, children }: ChatProps) {
  const styles = {
    system: {
      container: 'flex gap-2 relative',
      message: 'bg-white text-black',
    },
    user: {
      container: 'flex gap-2 justify-end',
      message: 'bg-primary text-white',
    },
  };

  return (
    <div className={`${styles[role].container}`}>
      {role === 'system' ? <MaruIcon className="absolute -left-9 top-6" /> : null}
      <div className="flex flex-col gap-2">
        {role === 'system' ? <div className="px-3 text-xs text-gray-500">마루에그</div> : null}
        <div className={`max-w-72 rounded-lg px-3 py-2 text-sm ${styles[role].message}`}>{children}</div>
      </div>
    </div>
  );
}

export default Chat;
