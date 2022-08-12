import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import grades from "../data/shelves.json";

type GradeCardProps = {
  name: string;
  friendlyName: string;
};

const Home: NextPage = () => {
  if(typeof window !== "undefined") {
    const grade = window.localStorage.getItem("grade");
    if(grade) {
      // Router.push(`/grade/${grade}`);
      window.location.href = `/grade/${grade}`;
      return <></>;
    }
  }

  return (
    <>
      <Head>
        <title>Textbooks!</title>
        <meta name="description" content="Quickly get access to all the textbooks you'll need." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-200">
          Select Grade
        </h1>
        <p className="text-2xl text-gray-400">You will only need to select it once, your choice will be saved.</p>
        <div className={`grid gap-3 pt-3 mt-3 text-center md:grid-cols-${grades.length} lg:w-2/3`}>
          {
            grades.map(({ title, grade }) => (
              <GradeCard key={grade} name={grade} friendlyName={title} />
            ))
          }
        </div>

        <a 
          className="text-center underline text-violet-500 decoration-dotted underline-offset-2 text-xs hover:cursor-pointer mt-5"
          href="https://github.com/ItzDerock/textbooks.derock.dev">
          View Source on Github
        </a>
      </main>
    </>
  );
};

const GradeCard = ({
  name,
  friendlyName,
}: GradeCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105 hover:cursor-pointer">
      <h2 className="text-lg text-gray-300">{friendlyName}</h2>
      <Link
        href={`/grade/${name}`}
        target="_blank"
        rel="noreferrer"
      >
        <span className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2">
          Select
        </span>
      </Link>
    </section>
  );
};

export default Home;
