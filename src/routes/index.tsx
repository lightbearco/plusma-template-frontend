import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="grid min-h-screen place-items-center px-6 py-12">
			<section className="w-full max-w-2xl space-y-6 text-center">
				<div className="space-y-2">
					<div className="flex items-center justify-center">
						<div className="flex justify-center">
							<PlusmaBloom className="h-16 w-16" />
						</div>
						<h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
							Plusma
						</h1>
					</div>
					<p className="text-muted-foreground">
						A simple starting point for your next page.
					</p>
					<p className="text-muted-foreground">
						Start chatting to shape the template into your product.
					</p>
				</div>
			</section>
		</main>
	);
}

function PlusmaBloom({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			width="220"
			height="220"
			viewBox="0 0 220 220"
			fill="none"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Plusma bloom mark</title>
			<g transform="translate(110 110)" fill="hotpink">
				<rect x="-10" y="-70" width="20" height="40" rx="4" />
				<rect
					x="-10"
					y="-70"
					width="20"
					height="40"
					rx="4"
					transform="rotate(51.4286)"
				/>
				<rect
					x="-10"
					y="-70"
					width="20"
					height="40"
					rx="4"
					transform="rotate(102.8571)"
				/>
				<rect
					x="-10"
					y="-70"
					width="20"
					height="40"
					rx="4"
					transform="rotate(154.2857)"
				/>
				<rect
					x="-10"
					y="-70"
					width="20"
					height="40"
					rx="4"
					transform="rotate(205.7143)"
				/>
				<rect
					x="-10"
					y="-70"
					width="20"
					height="40"
					rx="4"
					transform="rotate(257.1429)"
				/>
				<rect
					x="-10"
					y="-70"
					width="20"
					height="40"
					rx="4"
					transform="rotate(308.5714)"
				/>
			</g>
		</svg>
	);
}
