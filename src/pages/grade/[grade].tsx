import Head from "next/head";
import Router from "next/router";
import { useEffect, useState } from "react";
import Book from "../../components/Book";
import Shelf from "../../components/Shelf";
import { getAllShelves } from "../../lib/Shelves";
import { GradeBook, GradeManifestParsed } from "../../types/Mainifest";

type GradeShelvesProps = {
  data: GradeManifestParsed
  allGrades: string[]
}

export default function GradeShelf({ data }: GradeShelvesProps) {
  useEffect(() => {
    window.localStorage.setItem("grade", data.grade);
  }, [data.grade]);

  return (
    <div>
      <Head>
        <title>Textbooks - {data.title}</title>
      </Head>

      {
        data.books.map((shelf, i) => (
          <Shelf key={i}>
            {
              shelf.map((book, ii) => (
                <Book key={ii} book={book} />
              ))
            }
          </Shelf>
        ))
      }

      <p className="text-center underline text-violet-500 decoration-dotted underline-offset-2 text-sm hover:cursor-pointer" onClick={() => {
        window.localStorage.removeItem("grade");
        Router.push("/");
      }}>
        Go home
      </p>
    </div>
  );
}

export function getStaticPaths() {
  const paths = getAllShelves();
  return {
    paths: paths.map(data => ({
      params: {
        grade: data.grade
      }
    })),

    fallback: false
  }
}

export function getStaticProps({ params }: { params: { grade: string } }) {
  const shelves = getAllShelves();
  const grade   = shelves.find(data => data.grade === params.grade)!;
  const data    = [] as GradeBook[][];

  for (let i = 0; i < grade.books.length; i += 3) {
    data.push(grade.books.slice(i, i + 3));
  }

  return {
    props: {
      data: {
        grade: grade.grade,
        title: grade.title,
        books: data
      },
      allGrades: shelves.map(data => data.grade)
    }
  }
}