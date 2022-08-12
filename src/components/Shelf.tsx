export default function Shelf({ children }: { children: React.ReactNode }) {
  return (
    <div className="bookshelf">
      <div className="book-grid">
        <ul>
          {children}
        </ul>

        <div className="shelf-shadows"></div>
        <div className="shelf"></div>
      </div>
    </div>
  );
}