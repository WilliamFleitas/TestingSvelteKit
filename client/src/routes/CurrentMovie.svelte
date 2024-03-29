<script lang="ts">
	import type { MoviesType } from './+page.server';
	import { createEventDispatcher } from 'svelte';
	export let currentMovie: MoviesType | null;
	export let showModal: boolean;

	const dispatch = createEventDispatcher();

	function closeModal() {
		dispatch('close');
	}
	$: {
		console.log(currentMovie);
	}
</script>

{#if showModal && currentMovie}
	<div class="popupContainer">
		<span class="shadowFilter"></span>
		<img
			class="img"
			src={`https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path}`}
			alt={currentMovie.title}
		/>
		<div class="infoContainer">
			<h2 style="font-size: 2.6rem; padding:0; margin:0;">{currentMovie.title || currentMovie.original_name}</h2>
            <div style="display:flex; flex-direction:row; font-size: 1.2rem; font-weight: 400; gap: 10px; padding: 10px;">
                <small style="color:green;">{currentMovie.vote_average} Rate</small>
                <small>{currentMovie.first_air_date || currentMovie.release_date}</small>
            </div>
			<p style="max-height: 5.6rem; overflow-y:scroll;scrollbar-width: none;">
				{currentMovie.overview}
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

		<button
			style="position: absolute; top:0;  right:0; z-index: 100; border:none; font-size:20px;padding: 4px 15px; background-color:transparent;color:white;"
			on:click={closeModal}>X</button
		>
	</div>
{/if}

<style>
	.popupContainer {
		display: flex;
		flex-direction: column;
		justify-content: end;
		position: relative;
	}
	.img {
		max-height: 28rem;
		object-fit: contain;
		align-self: flex-end;
	}
	.shadowFilter {
		background: linear-gradient(90deg, #111111 55%, transparent);
		width: 85%;
		height: 100%;
		z-index: 100;
		position: absolute;
	}
	.infoContainer {
		position: absolute;
		z-index: 150;
		max-width: 50rem;
		height: fit-content;
		padding: 10px 40px;
		top: 4rem;
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
</style>
