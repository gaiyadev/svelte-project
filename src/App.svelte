<script>
import Navbar from './components/navbar/Navbar.svelte'
import Slider from './components/slider/Slider.svelte'
import Router from 'svelte-spa-router'
import {routes} from '../routes/router'
</script>

<main>
	<Navbar></Navbar>
	<br> <br>
	<Slider></Slider>
	<Router {routes}/>

</main>

  
