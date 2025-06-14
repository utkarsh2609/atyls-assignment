const Header = () => {
  return (
    <header className="w-full text-gray-800 p-2 flex items-center justify-between bg-white shadow-md">
      <h3 className="text-base font-semibold">foo-rum</h3>
      <nav>
        <div className="flex gap-2.5 font-medium p-1">
          Login
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
          </svg>

        </div>
      </nav>
    </header>
  );
}
export default Header;