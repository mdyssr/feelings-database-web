<script>
  import "$lib/style/app.css";
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<svelte:head>
  <title>قاعدة بيانات المشاعر</title>
</svelte:head>

<Navbar />

<slot />

<Footer />

<style lang="scss">
  nav {
    height: 3rem;
    background-color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    color: wheat;
    padding: 0.5rem;
    margin-bottom: 3rem;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    gap: 1rem;
    padding: 0;
  }

  a {
    text-decoration-line: none;
    color: wheat;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;

    &:hover {
      opacity: 0.8;
    }
  }
</style>
