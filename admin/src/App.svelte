<script>
  import { onMount } from 'svelte';
  import Router, { wrap, push } from 'svelte-spa-router'

  import { user } from './store/store.js';
  import { verifyUserSession } from './actions/session.js';

  import Login from './pages/Login.svelte';
  import NotFound from './pages/404.svelte';

  import ListarPaginas from './pages/Paginas/Listar.svelte';
  import CriarPagina from './pages/Paginas/Criar.svelte';
  import EditarPagina from './pages/Paginas/Editar.svelte';
  import ListarImagem from './pages/Imagens/Listar.svelte';
  import CriarImagem from './pages/Imagens/Criar.svelte';
  import EditarImagem from './pages/Imagens/Editar.svelte';

  import './styles/Caju.scss';

  const protectedRoute = Component => wrap(
    Component,
    user,
    (detail) => {
      return $user;
    }
  );

  onMount(() => {
    verifyUserSession();
  });

  const routes = {
    '/login': Login,
    '/painel': protectedRoute(ListarPaginas),
    '/painel/paginas': protectedRoute(ListarPaginas),
    '/painel/paginas/criar': protectedRoute(CriarPagina),
    '/painel/paginas/:id': protectedRoute(EditarPagina),
    '/painel/imagens': protectedRoute(ListarImagem),
    '/painel/imagens/criar': protectedRoute(CriarImagem),
    '/painel/imagens/:id': protectedRoute(EditarImagem),
    '/': Login,
    '*': NotFound
  }
</script>

<Router
  {routes}
  on:conditionsFailed={
    () => push('/login')
  }
/>
