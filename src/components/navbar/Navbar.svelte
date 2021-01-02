
<script>
    import Router from 'svelte-spa-router'
import {routes} from '../../../routes/router'
import login  from '../../views/Login.svelte'
</script>


<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="logo" width="112" height="28">
      </a>
  
      <a href role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a href class="navbar-item">
          Home
        </a>
  
        <a href class="navbar-item">
          Documentation
        </a> 

        
       
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a href class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a href="{{login}}" class="button is-light">
              Log in
            </a>

            <a href class="button is-light">
                Contact
              </a>

          </div>
        </div>
      </div>
    </div>
  </nav>
  <Router {routes}/>
