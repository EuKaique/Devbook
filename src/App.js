import { Typography } from "@mui/material";
import { BookListContainer } from "./components/BookListContainer";

function App() {
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">Olá, mundo!</Typography>
      <BookListContainer />
    </>
  );
}

export default App;
