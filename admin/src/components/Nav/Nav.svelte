<script>
  import { signOut } from "../../actions/session.js";
  import { user } from "../../store/store.js";
  let isActive = false;
</script>

<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="/#/painel">
        <strong>Caju Cozinha Independente</strong>
      </a>

      <span
        on:click={() => isActive = !isActive}
        role="button"
        class="navbar-burger burger"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </span>
    </div>
    <div
      class:is-active={isActive}
      class="navbar-end navbar-menu"
    >
      <a class="navbar-item" href="/#/painel/paginas/criar">
        <strong>
          + Nova Página
        </strong>
      </a>
      <a class="navbar-item" href="/#/painel/paginas">
        Páginas
      </a>
      <span
        on:click={signOut}
        class="navbar-item"
      >
        Sair
      </span>
    </div>
  </div>
</nav>

<style>
.navbar-item {
  cursor: pointer;
}

.navbar-brand {
  font-size: 20px;
}
</style>