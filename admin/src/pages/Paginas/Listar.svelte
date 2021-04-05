<script>
  import { onMount } from 'svelte';
  import { listaPaginas } from '../../actions/database.js';
  import { paginas } from '../../store/store.js';

  import Page from "../../containers/Page/Page.svelte";
  import TabelaPaginas from "../../components/TabelaPaginas/Table.svelte";

  $: list = $paginas;

  onMount(() => {
    listaPaginas();
  });
</script>

<Page title="Páginas Caju Cozinha Independente">
  <div class="box">
    <TabelaPaginas { list }/>
  </div>
</Page>