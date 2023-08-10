<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  import Icon from "@iconify/svelte";
</script>

<div class="container">
  <a href="/" class="back">
    <Icon icon="ic:twotone-arrow-forward" color="#333;" />
    <div class="text">رجوع</div>
  </a>
  <div class="title">
    <div class="name">
      {data.feeling}
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
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 2rem;

    .name {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  .back {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 8px;
    font-size: 1rem;
    color: #333;
  }
</style>
