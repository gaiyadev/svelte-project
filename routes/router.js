import Home from '../src/views/Home.svelte'
import Login from '../src/views/Login.svelte'

const routes = {
    // Exact path
    '/': Home,
    '/login': Login,

    // This is optional, but if present it must be the last
    // '*': NotFound,
}
export { routes }
