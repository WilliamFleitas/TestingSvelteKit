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
	let categoryError;
	let categoryResults: MoviesType[] = [];
	const carrouselOptions = {
		type: 'loop',
		perPage: 5,
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
			const response = await fetch(`/api/getCategoryBy/netflixOriginals`);
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
		<h2 style="">Netflix Originals</h2>
	</header>

	{#if categoryResults.length > 0}
		<Splide options={carrouselOptions}>
			{#each categoryResults as movie, index}
				<SplideSlide>
					<button on:click={() => openModal(movie.id)} class="imgContainer">
						<img
							class={`miniatureImg ${index === hoveredIndex ? 'hovered ' : ''}`}
							src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
							alt={movie.title}
							on:mouseenter={() => handleHover(index)}
							on:mouseleave={handleMouseOut}
						/>
					</button>
				</SplideSlide>
			{/each}
		</Splide>
	{:else}
		<strong>hola</strong>
	{/if}

	<div>
		<CurrentMovie {showModal} {currentMovie} on:close={handleModalClose}/>
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
		padding: 14px 10px 0px 10px;
		margin: 0;
	}
	.imgContainer {
		min-height: 24.4rem;
		justify-content: center;
		align-items: center;
		align-self: center;
		display: flex;
		background-color: transparent;
		border: none;
		outline: none;
	}
	.miniatureImg {
		vertical-align: none;
		width: 16.4rem;
		max-height: 22rem;
		object-fit: fill;
		transition: 0.2s ease-in;
	}
	.hovered {
		transform: scale(1.2);
		position: relative;
		z-index: 100;
		max-height: 20rem;
		border: 1.8px solid rgba(43, 41, 41, 0.893);
	}
</style>
