import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="grid min-h-screen place-items-center px-6 py-12">
			<section className="w-full max-w-3xl rounded-2xl border border-border/70 bg-background/90 px-6 py-10 text-center shadow-sm sm:px-10 sm:py-14">
				<h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
					Welcome to Plusma!
				</h1>
				<h2>Start chatting on the left side to build new features</h2>
			</section>
		</main>
	);
}
