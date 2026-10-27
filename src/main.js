
import './style.css';
import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from './favorites.js';

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

      <a href="#explore"
        class="mt-8 inline-block rounded-full bg-rose-800 px-7 py-3 font-semibold text-white transition hover:bg-rose-900">
        Explore books
      </a>
    </section>

    <section id="explore" class="mx-auto max-w-7xl px-6 py-12">
      <h2 class="text-2xl font-bold text-rose-950">Explore the collection</h2>
      <p class="mt-2 text-stone-600">Your next favorite read is waiting for you.</p>

      <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        <!-- Book 1 -->
        <article class="book-card overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          data-title="Pride and Prejudice" data-author="Jane Austen"
          data-cover="https://covers.openlibrary.org/b/id/10521270-M.jpg"
          data-category="Classic Romance">
          <img src="https://covers.openlibrary.org/b/id/10521270-M.jpg"
            alt="Pride and Prejudice book cover" class="h-64 w-full bg-rose-100 object-contain p-4" />
          <div class="p-5">
            <p class="text-xs font-semibold uppercase tracking-wider text-amber-700">Classic Romance</p>
            <h3 class="mt-2 text-lg font-bold text-rose-950">Pride and Prejudice</h3>
            <p class="mt-1 text-sm text-stone-500">Jane Austen</p>
            <button type="button" aria-label="Add Pride and Prejudice to favorites"
              class="favorite-button mt-4 rounded-full border border-rose-200 px-4 py-2 text-sm text-rose-800 hover:bg-rose-50">
              Add to Favorite
            </button>
          </div>
        </article>

        <!-- Book 2 -->
        <article class="book-card overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          data-title="The Great Gatsby" data-author="F. Scott Fitzgerald"
          data-cover="https://covers.openlibrary.org/b/id/8231856-M.jpg"
          data-category="Classic Fiction">
          <img src="https://covers.openlibrary.org/b/id/8231856-M.jpg"
            alt="The Great Gatsby book cover" class="h-64 w-full bg-rose-100 object-contain p-4" />
          <div class="p-5">
            <p class="text-xs font-semibold uppercase tracking-wider text-amber-700">Classic Fiction</p>
            <h3 class="mt-2 text-lg font-bold text-rose-950">The Great Gatsby</h3>
            <p class="mt-1 text-sm text-stone-500">F. Scott Fitzgerald</p>
            <button type="button" aria-label="Add The Great Gatsby to favorites"
              class="favorite-button mt-4 rounded-full border border-rose-200 px-4 py-2 text-sm text-rose-800 hover:bg-rose-50">
              Add to Favorite
            </button>
          </div>
        </article>

        <!-- Book 3 -->
        <article class="book-card overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          data-title="Little Women" data-author="Louisa May Alcott"
          data-cover="https://covers.openlibrary.org/b/id/10523338-M.jpg"
          data-category="Family & Fiction">
          <img src="https://covers.openlibrary.org/b/id/10523338-M.jpg"
            alt="Little Women book cover" class="h-64 w-full bg-rose-100 object-contain p-4" />
          <div class="p-5">
            <p class="text-xs font-semibold uppercase tracking-wider text-amber-700">Family & Fiction</p>
            <h3 class="mt-2 text-lg font-bold text-rose-950">Little Women</h3>
            <p class="mt-1 text-sm text-stone-500">Louisa May Alcott</p>
            <button type="button" aria-label="Add Little Women to favorites"
              class="favorite-button mt-4 rounded-full border border-rose-200 px-4 py-2 text-sm text-rose-800 hover:bg-rose-50">
              Add to Favorite
            </button>
          </div>
        </article>

        <!-- Book 4 -->
        <article class="book-card overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          data-title="Alice's Adventures in Wonderland" data-author="Lewis Carroll"
          data-cover="https://covers.openlibrary.org/b/id/10521258-M.jpg"
          data-category="Fantasy">
          <img src="https://covers.openlibrary.org/b/id/10521258-M.jpg"
            alt="Alice's Adventures in Wonderland book cover" class="h-64 w-full bg-rose-100 object-contain p-4" />
          <div class="p-5">
            <p class="text-xs font-semibold uppercase tracking-wider text-amber-700">Fantasy</p>
            <h3 class="mt-2 text-lg font-bold text-rose-950">Alice's Adventures in Wonderland</h3>
            <p class="mt-1 text-sm text-stone-500">Lewis Carroll</p>
            <button type="button" aria-label="Add Alice's Adventures in Wonderland to favorites"
              class="favorite-button mt-4 rounded-full border border-rose-200 px-4 py-2 text-sm text-rose-800 hover:bg-rose-50">
              Add to Favorite
            </button>
          </div>
        </article>

        <!-- Book 5 -->
        <article class="book-card overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          data-title="Frankenstein" data-author="Mary Shelley"
          data-cover="https://covers.openlibrary.org/b/id/10521267-M.jpg"
          data-category="Gothic Fiction">
          <img src="https://covers.openlibrary.org/b/id/10521267-M.jpg"
            alt="Frankenstein book cover" class="h-64 w-full bg-rose-100 object-contain p-4" />
          <div class="p-5">
            <p class="text-xs font-semibold uppercase tracking-wider text-amber-700">Gothic Fiction</p>
            <h3 class="mt-2 text-lg font-bold text-rose-950">Frankenstein</h3>
            <p class="mt-1 text-sm text-stone-500">Mary Shelley</p>
            <button type="button" aria-label="Add Frankenstein to favorites"
              class="favorite-button mt-4 rounded-full border border-rose-200 px-4 py-2 text-sm text-rose-800 hover:bg-rose-50">
              Add to Favorite
            </button>
          </div>
        </article>

        <!-- Book 6 -->
        <article class="book-card overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          data-title="Dracula" data-author="Bram Stoker"
          data-cover="https://covers.openlibrary.org/b/id/10521262-M.jpg"
          data-category="Mystery & Gothic">
          <img src="https://covers.openlibrary.org/b/id/10521262-M.jpg"
            alt="Dracula book cover" class="h-64 w-full bg-rose-100 object-contain p-4" />
          <div class="p-5">
            <p class="text-xs font-semibold uppercase tracking-wider text-amber-700">Mystery & Gothic</p>
            <h3 class="mt-2 text-lg font-bold text-rose-950">Dracula</h3>
            <p class="mt-1 text-sm text-stone-500">Bram Stoker</p>
            <button type="button" aria-label="Add Dracula to favorites"
              class="favorite-button mt-4 rounded-full border border-rose-200 px-4 py-2 text-sm text-rose-800 hover:bg-rose-50">
              Add to Favorite
            </button>
          </div>
        </article>

        <!-- Book 7 -->
        <article class="book-card overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          data-title="The Adventures of Sherlock Holmes" data-author="Arthur Conan Doyle"
          data-cover="https://covers.openlibrary.org/b/id/10521264-M.jpg"
          data-category="Detective Fiction">
          <img src="https://covers.openlibrary.org/b/id/10521264-M.jpg"
            alt="The Adventures of Sherlock Holmes book cover" class="h-64 w-full bg-rose-100 object-contain p-4" />
          <div class="p-5">
            <p class="text-xs font-semibold uppercase tracking-wider text-amber-700">Detective Fiction</p>
            <h3 class="mt-2 text-lg font-bold text-rose-950">The Adventures of Sherlock Holmes</h3>
            <p class="mt-1 text-sm text-stone-500">Arthur Conan Doyle</p>
            <button type="button" aria-label="Add The Adventures of Sherlock Holmes to favorites"
              class="favorite-button mt-4 rounded-full border border-rose-200 px-4 py-2 text-sm text-rose-800 hover:bg-rose-50">
              Add to Favorite
            </button>
          </div>
        </article>

        <!-- Book 8 -->
        <article class="book-card overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          data-title="The Secret Garden" data-author="Frances Hodgson Burnett"
          data-cover="https://covers.openlibrary.org/b/id/10521269-M.jpg"
          data-category="Children's Fiction">
          <img src="https://covers.openlibrary.org/b/id/10521269-M.jpg"
            alt="The Secret Garden book cover" class="h-64 w-full bg-rose-100 object-contain p-4" />
          <div class="p-5">
            <p class="text-xs font-semibold uppercase tracking-wider text-amber-700">Children's Fiction</p>
            <h3 class="mt-2 text-lg font-bold text-rose-950">The Secret Garden</h3>
            <p class="mt-1 text-sm text-stone-500">Frances Hodgson Burnett</p>
            <button type="button" aria-label="Add The Secret Garden to favorites"
              class="favorite-button mt-4 rounded-full border border-rose-200 px-4 py-2 text-sm text-rose-800 hover:bg-rose-50">
              Add to Favorite
            </button>
          </div>
        </article>

      </div>
    </section>

    <section id="favorites" class="mx-auto max-w-7xl px-6 py-10">
      <h2 class="text-2xl font-bold text-rose-950">Your favorite books</h2>
      <p class="mt-2 text-stone-600">Books you save will be easy to find here.</p>

      <div id="favorites-list" class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <p class="text-stone-500">You haven't added any favorite books yet.</p>
      </div>
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


const favoritesList = document.querySelector('#favorites-list');

// Display saved books in the Favorites section
function renderFavorites() {
  const favorites = getFavorites();

  if (favorites.length === 0) {
    favoritesList.innerHTML = `
      <p class="text-stone-500">
        You haven't added any favorite books yet.
      </p>
    `;
    return;
  }

  favoritesList.innerHTML = favorites.map((book) => `
    <article class="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm">
      <img
        src="${book.cover}"
        alt="${book.title} book cover"
        class="h-64 w-full bg-rose-100 object-contain p-4"
      />
      <div class="p-5">
        <p class="text-xs font-semibold uppercase tracking-wider text-amber-700">
          ${book.category}
        </p>
        <h3 class="mt-2 text-lg font-bold text-rose-950">${book.title}</h3>
        <p class="mt-1 text-sm text-stone-500">${book.author}</p>
        <button
          type="button"
          class="remove-favorite mt-4 rounded-full border border-rose-200 px-4 py-2 text-sm text-rose-800 hover:bg-rose-50"
          data-title="${book.title}"
        >
          Remove Favorite
        </button>
      </div>
    </article>
  `).join('');
}

// Show the current favorites when the page loads
renderFavorites();

const bookCards = document.querySelectorAll('.book-card');

function updateFavoriteButtons() {
  const favorites = getFavorites();

  bookCards.forEach((card) => {
    const favoriteButton = card.querySelector('.favorite-button');
    const isFavorite = favorites.some(
      (book) => book.title === card.dataset.title
    );

    favoriteButton.textContent = isFavorite
      ? 'Added to Favorites'
      : 'Add to Favorite';
  });
}

bookCards.forEach((card) => {
  const favoriteButton = card.querySelector('.favorite-button');

  favoriteButton.addEventListener('click', () => {
    const book = {
      title: card.dataset.title,
      author: card.dataset.author,
      cover: card.dataset.cover,
      category: card.dataset.category,
    };

    const favorites = getFavorites();
    const isFavorite = favorites.some(
      (favorite) => favorite.title === book.title
    );

    if (isFavorite) {
      removeFavorite(book.title);
    } else {
      addFavorite(book);
    }

    renderFavorites();
    updateFavoriteButtons();
  });
});

favoritesList.addEventListener('click', (event) => {
  const removeButton = event.target.closest('.remove-favorite');

  if (!removeButton) return;

  removeFavorite(removeButton.dataset.title);
  renderFavorites();
  updateFavoriteButtons();
});

updateFavoriteButtons();
