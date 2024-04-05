import { Typography } from "@mui/material";
export const BookList = ({books}) => {
    return (
        <div data-test="book-list">
            {
                books.map((book) => (
                    <div className="book-item">
                        <Typography 
                            className="titles" 
                            component="h5" 
                            variant="h5"
                        >
                            {book.name}
                        </Typography>
                    </div>
                ))
            }
        </div>
    )
}