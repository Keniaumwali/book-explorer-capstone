
import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <main class="min-h-screen bg-rose-50 text-stone-800">
    <header class="border-b border-rose-100 bg-[#fffaf7]">
      <nav class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <a href="#home" class="text-xl font-bold tracking-wide text-rose-950">
          Explore world of stories<span class="text-amber-600">.</span>
        </a>

        <div class="flex flex-wrap items-center gap-5 text-sm font-medium">
          <a href="#home" class="text-rose-900 hover:text-amber-700">Home</a>
          <a href="#explore" class="text-stone-600 hover:text-rose-800">Explore Books</a>
          <a href="#favorites" class="text-stone-600 hover:text-rose-800">Favorites</a>
          <a href="#about" class="text-stone-600 hover:text-rose-800">About</a>
        </div>
      </nav>
    </header>

    <section id="home" class="mx-auto max-w-7xl px-6 py-16 text-center md:py-24">
      <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
        Your next chapter starts here
      </p>

      <h1 class="text-4xl font-bold leading-tight text-rose-950 md:text-6xl">
        Find a story <br />
        worth falling into.
      </h1>

      <p class="mx-auto mt-5 max-w-xl text-stone-600">
        Discover wonderful books, explore new genres, and keep your
        favorite stories close.
      </p>

      <a
        href="#explore"
        class="mt-8 inline-block rounded-full bg-rose-800 px-7 py-3 font-semibold text-white transition hover:bg-rose-900"
      >
        Explore books
      </a>
    </section>

    <section id="explore" class="mx-auto max-w-7xl px-6 py-12">
      <h2 class="text-2xl font-bold text-rose-950">Explore the collection</h2>
      <p class="mt-2 text-stone-600">Your next favorite read is waiting for you.</p>
     
<div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
  <article class="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <img src="https://covers.openlibrary.org/b/id/10521270-M.jpg" alt="Pride and Prejudice book cover" class="h-64 w-full bg-rose-100 object-contain p-4" />
    <div class="p-5">
      <p class="text-xs font-semibold uppercase tracking-wider text-amber-700">Classic Romance</p>
      <h3 class="mt-2 text-lg font-bold text-rose-950">Pride and Prejudice</h3>
      <p class="mt-1 text-sm text-stone-500">Jane Austen</p>
      <button type="button" aria-label="Add Pride and Prejudice to favorites" class="mt-4 rounded-full border border-rose-200 px-4 py-2 text-sm text-rose-800 hover:bg-rose-50">♡ Favorite</button>
    </div>
  </article>

  <article class="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <img src="https://covers.openlibrary.org/b/id/8231856-M.jpg" alt="The Great Gatsby book cover" class="h-64 w-full bg-rose-100 object-contain p-4" />
    <div class="p-5">
      <p class="text-xs font-semibold uppercase tracking-wider text-amber-700">Classic Fiction</p>
      <h3 class="mt-2 text-lg font-bold text-rose-950">The Great Gatsby</h3>
      <p class="mt-1 text-sm text-stone-500">F. Scott Fitzgerald</p>
      <button type="button" aria-label="Add The Great Gatsby to favorites" class="mt-4 rounded-full border border-rose-200 px-4 py-2 text-sm text-rose-800 hover:bg-rose-50">♡ Favorite</button>
    </div>
  </article>

  <article class="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <img src="https://covers.openlibrary.org/b/id/10523338-M.jpg" alt="Little Women book cover" class="h-64 w-full bg-rose-100 object-contain p-4" />
    <div class="p-5">
      <p class="text-xs font-semibold uppercase tracking-wider text-amber-700">Family & Fiction</p>
      <h3 class="mt-2 text-lg font-bold text-rose-950">Little Women</h3>
      <p class="mt-1 text-sm text-stone-500">Louisa May Alcott</p>
      <button type="button" aria-label="Add Little Women to favorites" class="mt-4 rounded-full border border-rose-200 px-4 py-2 text-sm text-rose-800 hover:bg-rose-50">♡ Favorite</button>
    </div>
  </article>

  <article class="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <img src="https://covers.openlibrary.org/b/id/10521258-M.jpg" alt="Alice's Adventures in Wonderland book cover" class="h-64 w-full bg-rose-100 object-contain p-4" />
    <div class="p-5">
      <p class="text-xs font-semibold uppercase tracking-wider text-amber-700">Fantasy</p>
      <h3 class="mt-2 text-lg font-bold text-rose-950">Alice's Adventures in Wonderland</h3>
      <p class="mt-1 text-sm text-stone-500">Lewis Carroll</p>
      <button type="button" aria-label="Add Alice's Adventures in Wonderland to favorites" class="mt-4 rounded-full border border-rose-200 px-4 py-2 text-sm text-rose-800 hover:bg-rose-50">♡ Favorite</button>
    </div>
  </article>

  <article class="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <img src="https://covers.openlibrary.org/b/id/10521267-M.jpg" alt="Frankenstein book cover" class="h-64 w-full bg-rose-100 object-contain p-4" />
    <div class="p-5">
      <p class="text-xs font-semibold uppercase tracking-wider text-amber-700">Gothic Fiction</p>
      <h3 class="mt-2 text-lg font-bold text-rose-950">Frankenstein</h3>
      <p class="mt-1 text-sm text-stone-500">Mary Shelley</p>
      <button type="button" aria-label="Add Frankenstein to favorites" class="mt-4 rounded-full border border-rose-200 px-4 py-2 text-sm text-rose-800 hover:bg-rose-50">♡ Favorite</button>
    </div>
  </article>

  <article class="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <img src="https://covers.openlibrary.org/b/id/10521262-M.jpg" alt="Dracula book cover" class="h-64 w-full bg-rose-100 object-contain p-4" />
    <div class="p-5">
      <p class="text-xs font-semibold uppercase tracking-wider text-amber-700">Mystery & Gothic</p>
      <h3 class="mt-2 text-lg font-bold text-rose-950">Dracula</h3>
      <p class="mt-1 text-sm text-stone-500">Bram Stoker</p>
      <button type="button" aria-label="Add Dracula to favorites" class="mt-4 rounded-full border border-rose-200 px-4 py-2 text-sm text-rose-800 hover:bg-rose-50">♡ Favorite</button>
    </div>
  </article>

  <article class="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <img src="https://covers.openlibrary.org/b/id/10521264-M.jpg" alt="The Adventures of Sherlock Holmes book cover" class="h-64 w-full bg-rose-100 object-contain p-4" />
    <div class="p-5">
      <p class="text-xs font-semibold uppercase tracking-wider text-amber-700">Detective Fiction</p>
      <h3 class="mt-2 text-lg font-bold text-rose-950">The Adventures of Sherlock Holmes</h3>
      <p class="mt-1 text-sm text-stone-500">Arthur Conan Doyle</p>
      <button type="button" aria-label="Add The Adventures of Sherlock Holmes to favorites" class="mt-4 rounded-full border border-rose-200 px-4 py-2 text-sm text-rose-800 hover:bg-rose-50">♡ Favorite</button>
    </div>
  </article>

  <article class="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <img src="https://covers.openlibrary.org/b/id/10521269-M.jpg" alt="The Secret Garden book cover" class="h-64 w-full bg-rose-100 object-contain p-4" />
    <div class="p-5">
      <p class="text-xs font-semibold uppercase tracking-wider text-amber-700">Children's Fiction</p>
      <h3 class="mt-2 text-lg font-bold text-rose-950">The Secret Garden</h3>
      <p class="mt-1 text-sm text-stone-500">Frances Hodgson Burnett</p>
      <button type="button" aria-label="Add The Secret Garden to favorites" class="mt-4 rounded-full border border-rose-200 px-4 py-2 text-sm text-rose-800 hover:bg-rose-50">♡ Favorite</button>
    </div>
  </article>
</div>

    </section>

    <section id="favorites" class="mx-auto max-w-7xl px-6 py-10">
      <h2 class="text-2xl font-bold text-rose-950">Your favorite books</h2>
      <p class="mt-2 text-stone-600">Books you save will be easy to find here.</p>
    </section>

    <section id="about" class="mx-auto max-w-7xl px-6 py-10">
      <h2 class="text-2xl font-bold text-rose-950">About this project</h2>
      <p class="mt-2 max-w-2xl text-stone-600">
        Explore world of stories helps readers discover books, search for
        new adventures, and save the stories they love.
      </p>
    </section>

    <footer class="mt-12 border-t border-rose-100 bg-[#fffaf7] px-6 py-6 text-center text-sm text-stone-500">
      Made for readers who believe every story matters.
    </footer>
  </main>
`;

console.log('Explore world of stories. is ready!');
