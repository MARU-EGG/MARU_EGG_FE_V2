function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh items-center justify-center bg-[#EEEE]">
      <div className="mobile:h-full mobile:min-h-[480px] mobile:min-w-[320px] mobile:rounded-none desktop:h-[780px] desktop:max-w-[390px] desktop:rounded-3xl desktop:border desktop:border-gray-200 desktop:shadow-2xl relative flex h-full w-full flex-col overflow-hidden border bg-[#E7E7E7]">
        {children}
      </div>
    </div>
  );
}

export default Layout;
