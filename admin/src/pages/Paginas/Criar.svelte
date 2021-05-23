<script>
  import { criaPagina } from '../../actions/database.js';
  import { upload } from '../../actions/upload.js';

  import Page from "../../containers/Page/Page.svelte";
  import Modal from "../../components/Modal/Modal.svelte";
  import Field from "../../components/Field/Field.svelte";

  let pagina = {
    ativo: false
  };
  let alert;
  let files;
  let uploading;
  let error;

  const handleUpload = async () => {
    error = null;
    if (files[0].size > 50000000) { // 50MB
      error = 'Tamanho máximo permitido é de 50MB.';
      return;
    }
    uploading = true;
    pagina.imagem = await upload(files[0]);
    uploading = false;
  }

  const handleCreate = async () => {
    alert = "Adicionando...";
    try {
      await criaPagina(pagina);
      alert = "Página adicionada!";
    } catch (error) {
      alert = `Erro ao adicionar página: ${error}`;
    }
  }

  const close = () => alert = null;
</script>

{#if alert}
  <Modal
    { alert }
    { close }
  />
{/if}

<Page title="Criar Página">
  <div class="box">
    <div class="field is-horizontal">
      <div class="content">
        <h3>Informações da página:</h3>
      </div>
    </div>
    <Field label="Ativa">
      <div class="select">
        <select bind:value={pagina.ativo}>
          <option value={false}>Não</option>
          <option value={true}>Sim</option>
        </select>
      </div>
    </Field>
    <Field label="Seção">
      <div class="select">
        <select bind:value={pagina.secao}>
          <option value="produtos">Produtos</option>
          <option value="como-funciona">Como Funciona</option>
        </select>
      </div>
    </Field>
    <Field label="Título">
      <input bind:value={pagina.titulo} class="input" type="text" placeholder="ReiQueijão Vegano">
    </Field>
    <Field label="Preço">
      <input bind:value={pagina.preco} class="input" type="text" placeholder="15">
    </Field>
    <Field label="Imagem">
      <p class="control is-expanded">
        <input bind:files on:change={handleUpload} class="input" type="file" accept="image/gif, image/jpeg">
      </p>
      {#if error}
        <br>
        <div class="error notification is-danger is-small">
        { error }
        </div>
      {/if}
      {#if uploading}
        <br>
        <p class="control is-expanded">
          Fazendo upload
          <progress class="progress is-small is-primary"></progress>
        </p>
      {/if}
      {#if pagina.imagem}
       <br>
        <div>
          <img width="300" src={pagina.imagem} alt=""/>
        </div>
        <button on:click={() => pagina.imagem = null}>
          Remover imagem
        </button>
      {/if}
    </Field>
    <Field label="Linha de Apoio">
      <input bind:value={pagina.linhaDeApoio} class="input" type="text" placeholder=" Feito de castanha de caju e aipim, cremoso e sem conservantes. ">
    </Field>
    <Field label="Destaque">
      <input bind:value={pagina.destaque} class="input" type="text" placeholder="Quantidade: 268ml 👑 Valor: R$ 15,00">
    </Field>
    <Field label="Descrição Um">
      <textarea bind:value={pagina.descricao1} class="textarea"></textarea>
    </Field>
    <Field label="Descrição Dois">
      <textarea bind:value={pagina.descricao2} class="textarea"></textarea>
    </Field>
    <div class="control has-text-right">
      <button
        on:click={handleCreate}
        class="button is-primary"
      >
        Adicionar página
      </button>
    </div>
  </div>

</Page>