<nav class="navbar" class:hide-items={!opened}>
  <ul>
    <li><a href="#Home">Home</a></li>
    <li><a href="#Curriculum">Curriculum</a></li>
    <li><a href="#History">History</a></li>
    <li><a href="#Hobbies">Hobbies</a></li>
  </ul>
  <a href="#ToggleNavbar" class="toggle-button"
    on:click="{()=>opened=!opened}"
    on:focusout="{()=>opened=false}">Toggle</a>
</nav>

<script lang="ts">
  let opened = false;
</script>

<style>
  .navbar {
    --clr-background: var(--clr-lightest);
    --clr-text: #fff;

    color: var(--clr-text);
    background-color: var(--clr-background);

    display: flex;
    flex-direction: column;

    font-size: 1.2rem;
    padding: 0.5em;

    position: relative;
  }

  .navbar > *:not(.toggle-button) {
    max-height: 10rem;
    transition: all 200ms;
  }

  .navbar > ul {
    display: flex;
    flex-direction: column;
    padding: 0.5em;
    list-style: none;
  }

  .navbar > ul > li {
    padding: 0.25em 0.9em;
    border: 0.15em solid #0000;
    border-radius: 0.2em;
    transition: all 200ms;
  }

  .navbar > ul > li:hover {
    border-color: #fff;
  }

  a, a:hover, a:visited, a:link, a:focus {
    color: var(--clr-text);
    text-decoration: none;
  }

  .toggle-button {
    padding: 0.4em;
    height: 100%;
    display: block;
    margin-left: auto;
  }

  @media (max-width: 499px) {
    .navbar.hide-items > *:not(.toggle-button) {
      flex: 0;
      max-height: 0;
      padding-top: 0;
      padding-bottom: 0;
      margin-top: 0;
      margin-bottom: 0;
      overflow: hidden;
    }
  }
  @media (min-width: 500px) {
    .navbar {
      flex-direction: row;
    }

    .navbar > ul {
      flex-direction: row;
    }

    .toggle-button {
      display: none;
    }
  }
</style>
