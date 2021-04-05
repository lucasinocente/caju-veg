<script>
  import Item from './Item.svelte';

  export let list;
</script>

<div class="table-container">
  <table class="table is-bordered is-fullwidth is-hoverable">
    <thead class="thead is-bold">
      <tr>
        <th>Nome</th>
        <th>Ativo</th>
        <th>Editar</th>
      </tr>
    </thead>
    <tbody>
      {#each list as pagina}
        <Item { pagina } />
      {/each}
    </tbody>
  </table>
</div>