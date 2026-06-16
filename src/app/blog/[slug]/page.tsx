import { posts } from "../data";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Required for `output: 'export'`: pre-render one HTML file per post slug.
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.id }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.id === slug);

  if (!post) {
    return (
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Post not found
        </h1>
      </div>
    );
  }

  return (
    <article className="flex flex-col gap-8 max-w-none">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
          <time dateTime={post.date}>{post.date}</time>
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 ring-1 ring-inset ring-zinc-500/10 dark:bg-zinc-800 dark:text-zinc-400 dark:ring-zinc-400/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="prose prose-zinc dark:prose-invert max-w-none mt-8">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
