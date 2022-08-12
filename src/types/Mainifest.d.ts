export type GradeManifest = {
    grade: string;
    books: GradeBook[];
    title: string;
};

export type GradeManifestParsed = {
    grade: string;
    title: string;
    books: GradeBook[][];
}

export type GradeBook = {
    alt: string;
    thumbnail: string;
    href: string;
}