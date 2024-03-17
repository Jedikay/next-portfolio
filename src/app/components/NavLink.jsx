import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="my-2 w-full rounded text-center font-medium text-slate-300 hover:text-purple-500 sm:text-xl md:p-0"
    >
      {title}
    </Link>
  )
};

export default NavLink;
