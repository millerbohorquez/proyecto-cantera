import App from './containers/App.svelte';


const app = new App({
	target: document.body,
	props: {
		name: 'Miller Bohorquez'
	}
});

export default app;