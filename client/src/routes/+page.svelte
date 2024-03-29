<script lang="ts">
	import type { MoviesType } from './+page.server';
	import MovieCategory from './MovieCategory.svelte';
	import NetflixOriginals from './NetflixOriginals.svelte';
	import NewRealizes from './NewRealizes.svelte';
	export let data;
	export let error: any;
	let movies: MoviesType[] = data.data;
</script>

<article class="container">
	<NewRealizes {movies} {error} />
	<NetflixOriginals/>
	<MovieCategory category="Trending"/>
	<MovieCategory category="Top Rated"/>
	<MovieCategory category="Action Movies"/>
	<MovieCategory category="Comedy"/>
	<MovieCategory category="Documentary"/>
</article>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<style>
	.container {
	}
</style>