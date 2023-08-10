<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  import Icon from "@iconify/svelte";
</script>

<div class="container">
  <div class="top">
    <a href="/" class="back">
      <Icon icon="ic:twotone-arrow-forward" color="#000;" />
      <div class="text">رجوع</div>
    </a>
    <div class="title">
      <div class="name">
        {data.feeling}
      </div>
    </div>
  </div>
  <div class="content">{data.content}</div>
</div>

<style lang="scss">
  .container {
    padding: 1rem;
  }

  .back {
    margin-bottom: 2rem;
  }

  .title {
    background-color: aquamarine;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;

    .name {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  .back {
    display: flex;
    justify-content: right;
    align-items: self-end;
    gap: 8px;
    font-size: 1rem;
    color: #000;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }

  .content {
    margin-top: 2rem;
  }

  @media (min-width: 412px) {
    .top {
      display: flex;
      justify-content: stretch;
      align-items: center;
      background-color: aquamarine;
      padding: 0 1rem;

      .back {
        flex-grow: 1;
        justify-content: right;
      }

      .title {
        flex-grow: 1;

        background-color: transparent;
        justify-content: right;
      }
    }
  }
</style>
