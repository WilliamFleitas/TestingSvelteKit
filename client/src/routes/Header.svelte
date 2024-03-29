<script>
	import { page } from '$app/stores';
	import profileImg from '../lib/userAvatar.png';
	console.log('as', $page.url);
	$: currentPath = $page.url.pathname;
</script>

<header class="header">
	<section class="mainSection">
		<strong class="icon">Notflix</strong>
		<ul class="routesNav">
			<li>
				<a class="a" href="/" class:selected={currentPath === '/'}>Home</a>
			</li>
			<li>
				<a class="a" href="/about" class:selected={currentPath === '/about'}>TV Shows</a>
			</li>
			<li>
				<a class="a" href="/sverdle" class:selected={currentPath.startsWith('/sverdle')}>Series</a>
			</li>
		</ul>
	</section>
	
	<section class="routesNav">
		<svg
			style={'color: rgb(189, 180, 180); width: 1.2rem; height: 1.2rem;'}
			fill="rgb(237, 229, 229)"
			version="1.1"
			id="Capa_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 488.4 488.4"
			xml:space="preserve"
			><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g><g id="SVGRepo_iconCarrier">
				<g>
					<g>
						<path
							d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"
						></path>
					</g>
				</g>
			</g></svg
		>
		<strong style={'color: rgb(189, 180, 180); font-weight:400; font-size: 1rem;'}>User2</strong>
		<svg
			style={'color: rgb(237, 229, 229); width: 1.2rem; height: 1.2rem;'}
			fill="rgb(237, 229, 229)"
			version="1.1"
			id="Capa_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 611.999 611.999"
			xml:space="preserve"
			><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g><g id="SVGRepo_iconCarrier">
				<g>
					<g>
						<g>
							<path
								d="M570.107,500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203 C381.969,34,347.883,0,306.001,0c-41.883,0-75.968,34.002-76.121,75.849c-70.682,29.804-120.425,99.801-120.425,181.203v84.578 c-0.046,3.181-2.522,129.251-67.561,158.622c-7.409,3.347-11.481,11.412-9.768,19.36c1.711,7.949,8.74,13.626,16.871,13.626 h164.88c3.38,18.594,12.172,35.892,25.619,49.903c17.86,18.608,41.479,28.856,66.502,28.856 c25.025,0,48.644-10.248,66.502-28.856c13.449-14.012,22.241-31.311,25.619-49.903h164.88c8.131,0,15.159-5.676,16.872-13.626 C581.586,511.664,577.516,503.6,570.107,500.254z M484.434,439.859c6.837,20.728,16.518,41.544,30.246,58.866H97.32 c13.726-17.32,23.407-38.135,30.244-58.866H484.434z M306.001,34.515c18.945,0,34.963,12.73,39.975,30.082 c-12.912-2.678-26.282-4.09-39.975-4.09s-27.063,1.411-39.975,4.09C271.039,47.246,287.057,34.515,306.001,34.515z M143.97,341.736v-84.685c0-89.343,72.686-162.029,162.031-162.029s162.031,72.686,162.031,162.029v84.826 c0.023,2.596,0.427,29.879,7.303,63.465H136.663C143.543,371.724,143.949,344.393,143.97,341.736z M306.001,577.485 c-26.341,0-49.33-18.992-56.709-44.246h113.416C355.329,558.493,332.344,577.485,306.001,577.485z"
							></path>
							<path
								d="M306.001,119.235c-74.25,0-134.657,60.405-134.657,134.654c0,9.531,7.727,17.258,17.258,17.258 c9.531,0,17.258-7.727,17.258-17.258c0-55.217,44.923-100.139,100.142-100.139c9.531,0,17.258-7.727,17.258-17.258 C323.259,126.96,315.532,119.235,306.001,119.235z"
							></path>
						</g>
					</g>
				</g>
			</g></svg
		>
		<img
			style={'color: rgb(189, 180, 180); width: 1.4rem; height: 1.4rem; border-radius: 2px;'}
			src={profileImg}
			alt={'User miniature profile'}
		/>
	</section>
</header>

<style>
	.icon {
		letter-spacing: 0.2rem;
	}
	.header {
		display: flex;
		flex-direction: row;
		padding: 0px 40px;
		margin: 0;
		height: 3.4rem;
		filter: blur(0.3px);
		background-color: transparent;
		justify-content: space-between;
		align-items: center;
		text-align: start;
		color: rgb(190, 14, 14);
	}
	.routesNav {
		font-weight: lighter;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-self: center;
		text-align: center;
		align-items: center;
		gap: 0px 1.5rem;
		padding: 0;
		font-weight: bold;
		list-style: none;
		text-decoration: none;
		list-style-type: none;
	}
	.mainSection {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-self: center;
		text-align: center;
		align-items: center;
		gap: 0px 3rem;
		padding: 0;
		list-style: none;
		text-decoration: none;
		list-style-type: none;
	}
	.a {
		font-style: none;
		text-decoration: none;
		color: rgb(121, 117, 117);
		font-weight:500;
		font-size: 1rem;
	}
	.a.selected {
		color: rgb(189, 180, 180);
	}
	.a:active {
		color: rgb(189, 180, 180);
	}
</style>
