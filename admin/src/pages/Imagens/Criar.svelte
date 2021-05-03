<script>
  import { onMount } from 'svelte';
  import { criaImagem, listaPaginas } from '../../actions/database.js';
  import { upload } from '../../actions/upload.js';
  import { paginas } from '../../store/store.js';

  import Page from "../../containers/Page/Page.svelte";
  import Modal from "../../components/Modal/Modal.svelte";
  import Field from "../../components/Field/Field.svelte";

  $: listPaginas = $paginas;

  let imagem = {
    ativo: true
  };
  let alert;
  let files;
  let uploading;
  let error;

  onMount(() => {
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

  const handleCreate = async () => {
    alert = "Adicionando...";
    try {
      await criaImagem(imagem);
      alert = "Imagem adicionada!";
    } catch (error) {
      alert = `Erro ao adicionar imagem: ${error}`;
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

<Page title="Criar Imagem">
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
        on:click={handleCreate}
        class="button is-primary"
      >
        Adicionar página
      </button>
    </div>
  </div>
</Page>