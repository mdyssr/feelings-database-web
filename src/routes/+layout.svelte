<script lang="ts">
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
