<script lang="ts">
  import type { PageData } from "./$types";
  import FeelingCard from "$lib/components/FeelingCard.svelte";

  export let data: PageData;
</script>

<div id="container">
  <div id="question">
    <h1>كيف تشعر؟</h1>
  </div>

  <section id="feelings">
    {#each data.feelingsList as feeling}
      <FeelingCard title={feeling} to={`/${feeling}`} />
    {/each}
  </section>
</div>

<style lang="scss">
  #container {
    padding: 1rem;
    user-select: none;
    max-width: 600px;
    margin: 0 auto;
  }
  #question {
    background: orange;
    padding: 0 1rem;
  }

  #feelings {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
  }
</style>
