
const STORAGE_KEY = 'book-explorer-favorites';

// Get saved favorites from localStorage
export function getFavorites() {
  const savedFavorites = localStorage.getItem(STORAGE_KEY);
  return savedFavorites ? JSON.parse(savedFavorites) : [];
}

// Add a book to favorites
export function addFavorite(book) {
  const favorites = getFavorites();

  const alreadyFavorite = favorites.some(
    (favorite) => favorite.title === book.title
  );

  if (alreadyFavorite) {
    return favorites;
  }

  const updatedFavorites = [...favorites, book];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites));

  return updatedFavorites;
}

// Remove a book from favorites
export function removeFavorite(bookTitle) {
  const favorites = getFavorites();

  const updatedFavorites = favorites.filter(
    (favorite) => favorite.title !== bookTitle
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites));

  return updatedFavorites;
}
