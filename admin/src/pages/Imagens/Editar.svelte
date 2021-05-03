<script>
  import { onMount } from 'svelte';
  import { carregaImagem, editaImagem, listaPaginas } from '../../actions/database.js';
  import { upload } from '../../actions/upload.js';
  import { paginas } from '../../store/store.js';

  import Page from "../../containers/Page/Page.svelte";
  import Modal from "../../components/Modal/Modal.svelte";
  import Field from "../../components/Field/Field.svelte";

  export let params = {}

  $: listPaginas = $paginas;

  let imagem = {};
  let alert;
  let files;
  let uploading;
  let error;

  onMount(async () => {
    imagem = await carregaImagem(params.id);
    listaPaginas();
  });

  const handleUpload = async () => {
    error = null;
    if (files[0].size > 50000000) { // 50MB
      error = 'Tamanho máximo permitido é de 50MB.';
      return;
    }
    uploading = true;
    imagem.imagem = await upload(files[0]);
    uploading = false;
  }

  const handleEdit = async () => {
    alert = "Atualizando...";
    try {
      await editaImagem(imagem);
      alert = "Imagem atualizada!";
    } catch (error) {
      alert = `Erro ao atualizar a imagem: ${error}`;
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

{#if imagem}
<Page title="Editar Imagem">
  <div class="box">
    <div class="field is-horizontal">
      <div class="content">
        <h3>Informações da imagem:</h3>
      </div>
    </div>
    <Field label="Ativa">
      <div class="select">
        <select bind:value={imagem.ativo}>
          <option value={false}>Não</option>
          <option value={true}>Sim</option>
        </select>
      </div>
    </Field>
    <Field label="Página">
      <div class="select">
        <select bind:value={imagem.pagina}>
          {#each listPaginas as pagina}
            <option value={pagina}>{pagina.titulo}</option>
          {/each}
        </select>
      </div>
    </Field>
    <Field label="Legenda">
      <input bind:value={imagem.legenda} class="input" type="text" placeholder="ReiQueijão Vegano">
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
      {#if imagem.imagem}
       <br>
        <div>
          <img width="300" src={imagem.imagem} alt=""/>
        </div>
        <button on:click={() => imagem.imagem = null}>
          Remover imagem
        </button>
      {/if}
    </Field>
    <div class="control has-text-right">
      <button
        on:click={handleEdit}
        class="button is-primary"
      >
        Editar Imagem
      </button>
    </div>
  </div>
</Page>
{/if}

<style>
  .error.notification {
    padding: 10px;
  }
</style>