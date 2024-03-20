import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="w-full my-2 font-medium text-center rounded text-slate-300 hover:text-purple-500 sm:text-xl md:p-0"
    >
      {title}
    </Link>
  );
};

export default NavLink;
