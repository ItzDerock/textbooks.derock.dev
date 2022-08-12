import { GradeBook } from "../types/Mainifest";

export default function Book({ book }: { book: GradeBook }) {
  return (
    <li>
      <a href={book.href}>
        <img src={book.thumbnail} alt={book.alt} />
      </a>
    </li>
  );
}