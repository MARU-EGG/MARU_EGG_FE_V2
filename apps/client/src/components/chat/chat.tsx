import { MaruIcon } from '@/assets/svg';

interface ChatProps {
  role: 'user' | 'system';
  children: React.ReactNode;
}

function AdminChat({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex">
      <MaruIcon className="absolute -left-9 top-6" />
      <div className="flex flex-col gap-1">
        <div className="px-3 text-xs text-gray-500">마루에그</div>
        <span className="max-w-72 whitespace-pre-wrap break-words rounded-lg bg-white px-3 py-2 text-sm">
          {children}
        </span>
      </div>
    </div>
  );
}

function UserChat({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end gap-2">
      <span className="bg-primary whitespace-pre-wrap break-words rounded-lg px-3 py-2 text-sm text-white">
        {children}
      </span>
    </div>
  );
}

function Chat({ role, children }: ChatProps) {
  return role === 'system' ? <AdminChat>{children}</AdminChat> : <UserChat>{children}</UserChat>;
}

export default Chat;
