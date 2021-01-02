<script>
import Example from './components/Example.svelte'
import Form from './components/form.svelte'

</script>

<main>
	<Example></Example>
	<Form></Form>
</main>

<style>
	
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	 
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>