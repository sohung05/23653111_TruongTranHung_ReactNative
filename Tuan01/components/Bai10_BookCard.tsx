import {
  View,
  Text,
  Button,
  Image,
} from "react-native";
import { createContext, useContext, useState } from "react";

interface Book {
  title: string;
  price: number;
  image: string;
}

interface BookCardContextType {
  book: Book;
  isFavorite: boolean;
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookCardContext = createContext<BookCardContextType | null>(null);

function useBookCard() {
  const context = useContext(BookCardContext);

  if (!context) {
    throw new Error("BookCard phải được sử dụng bên trong BookCard");
  }

  return context;
}

interface BookCardProps {
  book: Book;
  children: React.ReactNode;
}

function BookCard({ book, children }: BookCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <BookCardContext.Provider
      value={{
        book,
        isFavorite,
        setIsFavorite,
      }}
    >
      <View>
        {children}
      </View>
    </BookCardContext.Provider>
  );
}

function Cover() {
  const { book } = useBookCard();

  return (
    <Image
      source={{ uri: book.image }}
      style={{
        width: 100,
        height: 100,
      }}
    />
  );
}

function Title() {
  const { book } = useBookCard();

  return <Text>Tên sách: {book.title}</Text>;
}

function Price() {
  const { book } = useBookCard();

  return <Text>Giá: {book.price} VNĐ</Text>;
}

function FavoriteButton() {
  const {
    isFavorite,
    setIsFavorite,
  } = useBookCard();

  return (
    <Button
      title={isFavorite ? "♥ Đã thích" : "♡ Yêu thích"}
      onPress={() => setIsFavorite(!isFavorite)}
    />
  );
}

BookCard.Cover = Cover;
BookCard.Title = Title;
BookCard.Price = Price;
BookCard.FavoriteButton = FavoriteButton;

export default BookCard;