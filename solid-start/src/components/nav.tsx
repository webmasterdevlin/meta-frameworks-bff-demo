import { A } from "@solidjs/router";

function Nav() {
  return (
    <header class="header">
      <nav class="inner">
        <A href="/" end>
          <strong>Home</strong>
        </A>
        <A href="/about">
          <strong>About</strong>
        </A>
        <A href="/books">
          <strong>Books</strong>
        </A>
      </nav>
    </header>
  );
}

export default Nav;
