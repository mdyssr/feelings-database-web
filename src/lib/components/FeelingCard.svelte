<script lang="ts">
  export let title: string;
  export let to: string;
</script>

<a href={to}>
  <div class="feeling">{title}</div>
</a>

<style lang="scss">
  a {
    min-width: 2rem;
    max-width: 200px;
    min-height: 1rem;
    background-color: black;
    box-shadow: 5px 5px violet;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    color: white;
    text-decoration-line: none;

    &:hover {
      transform: translate(2px, 2px);
    }
  }
</style>
