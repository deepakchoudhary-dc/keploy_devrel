import Tutorial from "./tutorial.mdx";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-12 sm:px-8">
      <article className="mdx-content">
        <Tutorial />
      </article>
    </main>
  );
}
