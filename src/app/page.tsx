import Link from "next/link";
import { posts } from "./blog/data";

export default function Home() {
	return (
		<div className="flex flex-col gap-12">
			<section className="flex flex-col gap-6">
				<h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
					Posts
				</h2>

				{posts.length > 0 ? (
					<ul className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
						{posts.map((post) => (
							<li key={post.id} className="py-8 first:pt-0">
								<article className="flex flex-col gap-3">
									<div className="flex items-baseline justify-between gap-4">
										<h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
											<Link
												href={`/blog/${post.id}`}
												className="transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
											>
												{post.title}
											</Link>
										</h3>
										<span className="shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
											{post.date}
										</span>
									</div>

									<p className="text-zinc-700 dark:text-zinc-400 leading-7">
										{post.description}
									</p>

									<div className="flex flex-wrap items-center gap-2">
										{post.tags.map((tag) => (
											<span
												key={tag}
												className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 ring-1 ring-inset ring-zinc-500/10 dark:bg-zinc-800 dark:text-zinc-400 dark:ring-zinc-400/20"
											>
												{tag}
											</span>
										))}
									</div>

									<Link
										href={`/blog/${post.id}`}
										className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
									>
										Read more &rarr;
									</Link>
								</article>
							</li>
						))}
					</ul>
				) : (
					<p className="text-zinc-700 dark:text-zinc-400">No posts found.</p>
				)}
			</section>
		</div>
	);
}
