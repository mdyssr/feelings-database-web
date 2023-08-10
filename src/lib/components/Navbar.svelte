<nav>
  <ul>
    <li>
      <a href="/">
        <!-- <Icon icon="teenyicons:forward-solid" color="wheat" /> -->
        الرئيسية
      </a>
    </li>
    <li>
      <a href="/عن-التطبيق">
        <!-- <Icon icon="teenyicons:forward-solid" color="wheat" /> -->
        عن التطبيق
      </a>
    </li>
    <li>
      <a href="/تواصل-معنا">
        <!-- <Icon icon="teenyicons:forward-solid" color="wheat" /> -->
        تواصل معنا
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

      &:hover {
        opacity: 0.8;
      }
    }
  }
</style>
