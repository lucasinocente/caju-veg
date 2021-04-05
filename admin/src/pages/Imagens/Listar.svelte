<script>
  import { onMount } from 'svelte';
  import { listaImagens } from '../../actions/database.js';
  import { imagens } from '../../store/store.js';

  import Page from "../../containers/Page/Page.svelte";
  import TabelaImagens from "../../components/TabelaImagens/Table.svelte";

  $: list = $imagens;

  onMount(() => {
    listaImagens();
  });
</script>

<Page title="Imagens">
  <div class="box">
    <TabelaImagens { list }/>
  </div>
</Page>