<script>
  export let pagina;

  $: id = pagina.id;
  $: titulo = pagina.titulo;
  $: ativo = pagina.ativo;
</script>

<tr>
  <td>
    <a href="/#/painel/paginas/{id}">
      {titulo}
    </a>
  </td>
  <td>{ativo}</td>
  <td>
    <a href="/#/painel/paginas/{id}">
      Editar
    </a>
  </td>
</tr>