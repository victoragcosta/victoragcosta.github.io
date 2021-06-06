<script lang="ts">
	import NavBar from "./components/NavBar.svelte";
</script>

<header>
	<NavBar />
</header>

<main>
	<h1>Eita</h1>
	<p>Eita preula <a href="https://svelte.dev">AAAAAAAA</a></p>
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
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
