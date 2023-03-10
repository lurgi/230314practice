interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  return (
    <div>
      <div className="fixed top-0 flex max-w-xl justify-center w-full py-3 border-b-2">
        <div></div>
        {title ? <div>{title}</div> : null}
      </div>
      {children}
      <nav></nav>
    </div>
  );
}
