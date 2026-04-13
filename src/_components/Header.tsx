import NextLink from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <NextLink href="#">Home</NextLink>
        <NextLink href="#">About</NextLink>
        <NextLink href="#">Contact</NextLink>
      </nav>
    </header>
  );
}
