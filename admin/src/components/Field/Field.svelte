<script>
  export let label;
</script>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">{ label }</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded">
        <slot></slot>
      </p>
    </div>
  </div>
</div>