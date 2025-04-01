import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="justify-center flex space-x-4 text-xl mt-4">
      <Link className="border border-black p-2 rounded-sm hover:text-2xl duration-150"href="/2023">2023</Link>
      <Link className="border border-black p-2 rounded-sm hover:text-2xl duration-150" href="/2024">2024</Link>
    </nav>
  );
};

export default Navbar;