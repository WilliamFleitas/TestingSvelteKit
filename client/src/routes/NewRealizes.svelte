<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import type { MoviesType } from './+page.server';
	export let movies: MoviesType[];
	export let error;
	const carrouselOptions = {
		pagination: false,
		type: 'loop',
		autoplay: true,
		perPage: 1,
		drag: true,
		arrows: false,
		interval: 5000
	};
</script>

<section class="moviesContainer">
	<Splide options={carrouselOptions}>
		{#each movies as movie}
			<SplideSlide>
				<div class="imgContainer">
					<img
						class="miniatureImg"
						src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
						alt={movie.title}
					/>
					<span class="testShadow"></span>
					<div class="infoContainer">
						<h1 style="font-size: 2.6rem;">{movie.title}</h1>

						<p style="max-height: 5.6rem; overflow-y:scroll;scrollbar-width: none;">
							{movie.overview}
						</p>

						<div class="buttonContainer">
							<button class="playButton">
								<svg
									style={'color: rgb(237, 229, 229); width: 1rem; height: 1rem;'}
									version="1.1"
									id="Capa_1"
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									viewBox="0 0 17.804 17.804"
									xml:space="preserve"
									><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g><g id="SVGRepo_iconCarrier">
										<g>
											<g id="c98_play">
												<path
													d="M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313 c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04 c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z"
												></path>
											</g> <g id="Capa_1_78_"> </g>
										</g>
									</g></svg
								>
								Play
							</button>
							<button class="infoButton">More Info</button>
						</div>
					</div>
					<span class="testShadow2"></span>
				</div>
			</SplideSlide>
		{/each}
	</Splide>
</section>

<style>
	.moviesContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.miniatureImg {
		vertical-align: none;
		min-width: 100%;
		max-height: 30rem;
		object-fit: fill;
	}
	.imgContainer {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
	.testShadow {
		background: linear-gradient(90deg, #111111 20%, transparent);
		width: 40%;
		padding-top: 3rem;
		height: 40rem;
		padding-left: 5rem;
		z-index: 100;
		position:absolute;
	}
	.testShadow2 {
		background: linear-gradient(270deg, #111111 25%, transparent);
		width: 40%;
		padding-top: 3rem;
		height: 40rem;
		padding-left: 5rem;
		z-index: 100;
		position:absolute;
		right:0;
	}
	.infoContainer {
		position: absolute;
		z-index: 150;
		width: 30rem;
		height: fit-content;
		padding: 10px 40px;
		top: 6rem;
	}
	.buttonContainer {
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}
	.playButton {
		flex-direction: row;
		display: flex;
		min-height: 1.3rem;
		padding: 0.5rem 1.8rem;
		background-color: rgb(239, 231, 232);
		gap: 0.6rem;
		font-weight: 600;
		border-radius: 2px;
		border: none;
		transition: background-color 0.5s ease;
	}
	.playButton:hover {
		background-color: rgb(190, 14, 14);
	}
	.infoButton {
		flex-direction: row;
		display: flex;
		min-height: 1.3rem;
		padding: 0.5rem 1.8rem;
		background-color: rgba(239, 231, 232, 0.66);
		gap: 0.6rem;
		font-weight: 600;
		border-radius: 2px;
		border: none;
	}
	.infoButton:hover {
		background-color: rgb(239, 231, 232);
	}
	.spanBlur {
		background-color: rgb(239, 239, 239);
		width: 100%;
		height: 0.4rem;
		display: flex;
		filter: blur(0px);
	}
	
</style>
