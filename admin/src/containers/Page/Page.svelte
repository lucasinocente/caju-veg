<script>
  import { location } from 'svelte-spa-router'
  import Nav from "../../components/Nav/Nav.svelte"
  import { user } from '../../store/store.js';

  export let title;
</script>

<Nav />
<div class="container">
  <section class="hero">
    <div class="hero-body">
      <h1 class="title">
        { title }
      </h1>
    </div>
  </section>
  <slot></slot>
</div>