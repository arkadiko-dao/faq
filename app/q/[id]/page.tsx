import { getQuestionById, getAllQuestions } from "@/lib/api";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const { title } = await getQuestionById(id);
  return {
    title,
  };
}

export default async function Question({
  params: { id },
}: {
  params: { id: string };
}) {
  const { html, title } = await getQuestionById(id);
  return (
    <div className="flex min-h-screen justify-center items-center">
      <article className="w-full max-w-3xl group rounded-lg border px-5 py-4 transition-colors bg-gray-100 dark:border-neutral-700 hover:dark:border-neutral-800 dark:bg-neutral-800/30">
        <h1 className="mb-3 text-2xl font-semibold">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const questions = await getAllQuestions();

  return questions.map((q) => ({
    id: q.id,
  }));
}
