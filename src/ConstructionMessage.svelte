<main>
	<h1>Hello!</h1>
	<h2>This website is under construction</h2>
	<p>Made with <a href="https://svelte.dev">Svelte</a></p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: var(--clr-lightest);
		font-size: 4em;
		font-weight: 100;
	}

	h2 {
		font-size: 2em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
