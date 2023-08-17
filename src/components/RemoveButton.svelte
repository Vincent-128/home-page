<script script lang="ts">
  let width: string
</script>

<div class="container">
  <div style:width>
      <button class="remove" on:click>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
          />
      </svg>
    </button>
  </div>
</div>

<style>
  .remove {
    all: unset;
    height: 20px;
    width: 20px;
    border-radius: 5px;
    float: right;
  }

  .remove:hover {
    background-color: var(--error1);
  }

  .remove:hover svg {
    fill: var(--error4);
  }

  svg {
    height: 100%;
    width: 100%;
    fill: var(--background4);
  }

  .text {
    color: var(--text-background);
    margin-right: 10px;
  }
</style>