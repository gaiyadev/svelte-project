<script>
    import Router from 'svelte-spa-router'
import {routes} from '../../routes/router'
</script>
<div class="container">
    <div class="notification is-primary">
      This container is <strong>centered</strong> on desktop and larger viewports.
    </div>
  </div>
  <Router {routes}/>

 