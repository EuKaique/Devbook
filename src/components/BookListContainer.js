import { useBookList } from "../hooks/useBookList";
import { BookList } from "./BookList";

export const BookListContainer = () => {
  const {books, loading, error} = useBookList([])

  return (
    <>
      <BookList 
        books={books} 
        loading={loading} 
        error={error}
      />
    </>
  );
}
