import { Menu, Youtube, Search } from "lucide-react";
import { FC, useRef } from "react";

const TopNav: FC = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (!searchInputRef.current?.value) return;

  }

  return (
    <>
      <header aria-label="Site Header" className="border-b-2 border-gray-300">
        <div className="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <div className="flex items-center align-middle">
            <div className="p-3">
              <Menu />
            </div>
            <div className="flex text-xl font-semibold">
              <Youtube className="m-2" color="red" />
              <span className="my-auto">Youtube</span>
            </div>
          </div>
          <div className="inline-flex items-center p-4 m-2 space-x-3">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search something.."
              className="w-full h-8 px-3 text-left bg-gray-300 rounded-md"
            />
            <Search onClick={handleSearch}/>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopNav;
