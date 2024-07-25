import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header>
      <nav className="h-24 flex items-center justify-between px-24">
        <Image
          width={75}
          height={75}
          src={"/assets/images/logo.svg"}
          alt={"our logo"}
        />

        <ul className="flex gap-5">
          <li>
            <Link href={"/"}>Plans</Link>
          </li>
          <li>
            <Link href={"/"}>Calcuator</Link>
          </li>{" "}
          <li>
            <Link href={"/"}>Shop</Link>
          </li>{" "}
          <li>
            <Link href={"/"}>App</Link>
          </li>
        </ul>

        <button className="bg-white text-black font-bold px-6 py-6 rounded-md">
          <p>App Coming Soon</p>
        </button>
      </nav>
    </header>
  );
}

export default Header;
