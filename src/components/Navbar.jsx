import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="bg-black/90">
      <div className=" h-[5rem] flex items-center justify-between px-4 md:max-w-[90vw] mx-auto">
        <div className="flex items-center">
          <Link to="/" className="md:text-[16px] pl-2 text-white font-bold">
            VOOIZ - Video Chat App
          </Link>
        </div>

        <div className="">
          <ul className="text-white font-bold flex items-center gap-4 cursor-pointer">
            <li>About Us</li>
            <li>Product</li>
            <li>Blogs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
