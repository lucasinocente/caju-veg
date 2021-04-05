<script>
  export let alert;
  export let close;
</script>

<div
  on:click={close}
  class="modal is-active"
>
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content has-text-centered">
            <p class="title is-4">{ alert }</p>
            <button
              on:click={close}
              class="button is-primary"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button
    on:click={close}
    class="modal-close is-large"
    aria-label="close">
  </button>
</div>