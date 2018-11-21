import Link from "next/link";

const Nav = () => (
  <div>
    <Link href="/sell">
      <a>You are a ...</a>
    </Link>
    <Link href="/">
      <a>You are also a ...</a>
    </Link>
  </div>
);

export default Nav;
