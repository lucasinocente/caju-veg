<script>
  import Item from './Item.svelte';

  export let list;
</script>

<div class="table-container">
  <table class="table is-bordered is-fullwidth is-hoverable">
    <thead class="thead is-bold">
      <tr>
        <th>Legenda</th>
        <th>Página</th>
        <th>Ativo</th>
        <th>Editar</th>
      </tr>
    </thead>
    <tbody>
      {#each list as imagem}
        <Item { imagem } />
      {/each}
    </tbody>
  </table>
</div>