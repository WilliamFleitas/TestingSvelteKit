<script lang="ts">
	type CategoryType =
		| 'Trending'
		| 'Top Rated'
		| 'Action Movies'
		| 'Comedy'
		| 'Documentary'
		| 'netflixOriginals';

	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import type { MoviesType } from './+page.server';
	import { onMount } from 'svelte';
	import CurrentMovie from './CurrentMovie.svelte';

	export let category: CategoryType;
	let categoryError;
	let categoryResults: MoviesType[] = [];
	const carrouselOptions = {
		type: 'loop',
		perPage: 4,
		perMove: 1,
		drag: true,
		pagination: false,
		breakpoints: {
			1100: {
				perPage: 4
			},
			850: {
				perPage: 3
			},
			500: {
				perPage: 2
			},
			400: {
				perPage: 1
			}
		}
	};
	let hoveredIndex: number | null = null;

	function handleHover(index: number) {
		hoveredIndex = index;
	}

	function handleMouseOut() {
		hoveredIndex = null;
	}

	let currentMovie: MoviesType | null;

	let showModal: boolean = false;

	function openModal(movieId: number) {
		currentMovie = categoryResults.find((item) => item.id === movieId) || null;
		showModal = true;
	}

	function handleModalClose() {
		currentMovie = null;
		showModal = false;
	}
	onMount(async () => {
		try {
			const response = await fetch(`/api/getCategoryBy/${category}`);
			if (response.ok) {
				const data = await response.json();
				categoryResults = data.data;
			} else {
				throw new Error('There was an error fetching the data');
			}
		} catch (error: any) {
			categoryError = error.message;
		}
	});
</script>

<aside class="moviesContainer">
	<header class="header">
		<h2>{category}</h2>
	</header>

	{#if categoryResults.length > 0}
		<Splide options={carrouselOptions}>
			{#each categoryResults as movie, index}
				<SplideSlide>
					<button on:click={() => openModal(movie.id)} class="imgContainer">
						<img
							class={`miniatureImg ${index === hoveredIndex ? 'hovered ' : ''}`}
							src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
							alt={movie.title}
							on:mouseenter={() => handleHover(index)}
							on:mouseleave={handleMouseOut}
						/>
					</button>
				</SplideSlide>
			{/each}
		</Splide>
	{/if}

	<div>
		<CurrentMovie {showModal} {currentMovie} on:close={handleModalClose} />
	</div>
</aside>

<style>
	.moviesContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0px 0px;
	}
	.header h2 {
		font-size: larger;
		font-weight: 500;
		padding: 6px 10px 0px 10px;
		margin: 0;
	}
	.imgContainer {
		justify-content: center;
		align-items: center;
		align-self: center;
		display: flex;
		height: 12rem;
		background-color: transparent;
		border: none;
		outline: none;
	}
	.miniatureImg {
		vertical-align: none;
		width: 20.6rem;
		height: 11rem;
		object-fit: fill;
		transition: 0.2s ease-in;
		border-radius: 3px;
		overflow: hidden;
	}
	.hovered {
		transform: scale(1.1);
		position: relative;
		z-index: 100;
		border: 1.4px solid rgba(0, 0, 0, 0.893);
		max-height: 11rem;
		border-radius: 3px;
	}
</style>
