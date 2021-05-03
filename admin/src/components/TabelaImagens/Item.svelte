<script>
  export let imagem;

  $: id = imagem.id;
  $: pagina = imagem.pagina;
  $: legenda = imagem.legenda;
  $: ativo = imagem.ativo;
</script>

<tr>
  <td>
    <a href="/#/painel/imagens/{id}">
      {legenda}
    </a>
  </td>
  <td>{pagina.titulo}</td>
  <td>{ativo}</td>
  <td>
    <a href="/#/painel/imagens/{id}">
      Editar
    </a>
  </td>
</tr>