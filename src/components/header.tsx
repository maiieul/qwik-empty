import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header>
      <Link href="/1">route 1</Link>
      <br />
      <Link href="/2">route 2</Link>
      <br />
      <Link href="/3">route 3</Link>
      <br />
    </header>
  );
});
