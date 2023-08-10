<script>
  import "$lib/style/app.css";
  import Icon from "@iconify/svelte";
</script>

<svelte:head>
  <title>قاعدة بيانات المشاعر</title>
</svelte:head>

<nav>
  <ul>
    <li>
      <a href="/">
        <!-- <Icon icon="teenyicons:forward-solid" color="wheat" /> -->
        الرئيسية
      </a>
    </li>
    <li>
      <a href="/اتصل-بنا">
        <!-- <Icon icon="teenyicons:forward-solid" color="wheat" /> -->
        اتصل بنا
      </a>
    </li>
  </ul>
</nav>

<slot />

<footer>
  <p>صيفة للانتاج الفني 2023. جميع الحقوق محفوظة.</p>
</footer>

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
