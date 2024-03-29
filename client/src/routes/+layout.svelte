<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="container">
	<div class="nav">
		<Header />
	</div>
	<main>
		<slot />
	</main>

</div>

<style>
	.container {
		display:flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
	}
	.nav {
		position: absolute;
		top: 0;
		z-index: 20;
		width: 100%;
	}
</style>

