export default function About() {
	return (
		<div className="flex flex-col gap-12">
			<section>
				<h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
					About Me
				</h1>
				<div className="mt-8 space-y-6 text-lg leading-8 text-zinc-700 dark:text-zinc-400">
					<p>Hello, Francisco here.</p>
					<p>
						Experienced software engineer working on the things I love, and I
						enjoy spending time learning new things.
					</p>
					<div>
						<p>The topics I like are:</p>
						<p className="mt-3 text-zinc-900 dark:text-zinc-100">
							Programming · 3D · Robotics · Computer vision · Game development
						</p>
					</div>
					<p>
						Sometimes I like to start small videogame projects and play them.
					</p>
				</div>
			</section>
		</div>
	);
}
