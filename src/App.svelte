<script>
  import Form1 from './Form1.svelte';
  import Form2 from './Form2.svelte';
  import Home from './Home.svelte';

  let currentPage = 'home';

  function goToPage(page) {
    currentPage = page;
  }
</script>

<main>
  {#if currentPage === 'home'}
    <Home />
    <strong>Formulario 1 <a href="#" on:click|preventDefault={() => goToPage('form1')}>FORMULARIO DE SOLICITUD</a></strong>
  {:else if currentPage === 'form1'}
    <Form1 />
    <strong>Formulario 2 <a href="#" on:click|preventDefault={() => goToPage('form2')}>GENERALIDADES DEL PROYECTO</a></strong>
  {:else if currentPage === 'form2'}
    <Form2 />
    <strong>¿Quieres volver a la página principal? <a href="#" on:click|preventDefault={() => goToPage('home')}>Volver al inicio</a></strong>
  {/if}
</main>