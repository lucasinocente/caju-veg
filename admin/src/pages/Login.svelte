<script>
  import { push } from 'svelte-spa-router';
  import { signIn } from '../actions/session.js'
  import { user, error } from "../store/store.js";

  user.subscribe(() => {
    $user && push('/painel')
  })

  let email;
  let password;
</script>

<div class="login-page">
  <form class="box">
    <div class="field">
      <div class="content">
        <h2 class="has-text-centered">Caju Cozinha Independente</h2>
        <p>Faça login para continuar:</p>
      </div>
    </div>
    <div class="field">
      <label class="label">E-mail</label>
      <div class="control">
        <input
          bind:value={email}
          class="input"
          type="text"
          placeholder="seu_email@gmail.com"
        >
      </div>
    </div>
    <div class="field">
      <label class="label">Senha</label>
      <div class="control">
        <input
          bind:value={password}
          class="input"
          type="password"
          placeholder="******"
        >
      </div>
    </div>
    {#if $error}
      <div class="field">
        <div class="notification is-danger is-light">
          {$error}
        </div>
      </div>
    {/if}
    <div class="field">
      <div class="control">
        <button
          on:click|preventDefault={() => signIn(email, password)}
          class="button is-primary is-fullwidth"
        >
          Entrar
        </button>
      </div>
    </div>
  </form>
</div>

<style>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #F6A32A;
  }

  .box {
    border: 2px solid #F6A32A;
    width: 320px;
  }
</style>