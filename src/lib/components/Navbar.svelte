<nav>
  <ul>
    <li>
      <a href="/" data-sveltekit-replacestate>
        <!-- <Icon icon="teenyicons:forward-solid" color="wheat" /> -->
        الرئيسية
      </a>
    </li>
    <li>
      <a href="/عن-التطبيق" data-sveltekit-replacestate>
        <!-- <Icon icon="teenyicons:forward-solid" color="wheat" /> -->
        عن التطبيق
      </a>
    </li>
    <li>
      <a href="/اتصل-بنا" data-sveltekit-replacestate>
        <!-- <Icon icon="teenyicons:forward-solid" color="wheat" /> -->
        اتصل بنا
      </a>
    </li>
  </ul>
</nav>

<style lang="scss">
  nav {
    height: 3rem;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    gap: 1rem;
    padding: 0.5rem 1rem;
    background-color: #333;

    a {
      color: #fff;
    }
  }
</style>
