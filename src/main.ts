import App from './App.svelte';
import ConstructionMessage from './ConstructionMessage.svelte';

const underConstruction = true;

let app;
if (underConstruction) {
	app = new ConstructionMessage({
		target: document.body,
	});
} else {
	app = new App({
		target: document.body,
		props: {
			name: 'world'
		}
	});
}

export default app;
