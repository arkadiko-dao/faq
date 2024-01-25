import Image from "next/image";
import Link from "next/link";
import { getAllQuestions } from "@/lib/api";

export default async function Home() {
  const questions = await getAllQuestions();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[700px] before:w-[800px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[2580px] after:w-[150px] after:translate-x-1/5 after:bg-gradient-conic after:from-indigo-200 after:via-indigo-200 after:rotate-[70deg] after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-indigo-700 before:dark:opacity-5 after:dark:from-indigo-900 after:dark:via-indigo-500 after:dark:opacity-60 z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/arkadiko.svg"
          alt="Arkadiko Finance Logo"
          width={214}
          height={43}
          priority
        />
        <p className="text-xl font-bold border border-indigo-50/50 rounded-xl px-2 py-1 ml-2 mt-1 bg-gradient-radial from-indigo-200/10 to-indigo-500/20">
          FAQ
        </p>
      </div>

      <ul className="mt-16 mb-32 grid gap-8 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
        {questions.map((question) => {
          const { id, html, title } = question;
          return (
            <li
              key={id}
              className="relative group rounded-lg border px-5 py-4 transition-colors bg-gray-100 dark:border-neutral-700 hover:dark:border-neutral-800 dark:bg-neutral-800/30"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>{title}</h2>
              <div dangerouslySetInnerHTML={{ __html: html }} />

              <Link
                className="absolute bottom-0 right-0 !bg-transparent border-t !rounded-r-none !rounded-b-none rounded-tl-lg border-l dark:border-neutral-700 hover:dark:border-neutral-800 invisible group-hover:visible transition ease-in-out duration-200"
                href={`/q/${id}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
