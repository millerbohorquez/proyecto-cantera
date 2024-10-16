<script>
  import Form1 from './Form1.svelte';
  import Form2 from './Form2.svelte';
  import Form3 from './Form3.svelte';
  import Home from './Home.svelte';

  let currentPage = 'home';

  function goToPage(page) {
    currentPage = page;
  }
</script>

<header>
  <div class="header-container">
    <div class="header-logo">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS61dDyABV1Kvs4dK0JE9YUCrrhBJ2JHOlMw&s" alt="LINKTIC Logo" 
      on:click={() => goToPage('home')} style="cursor: pointer;" />
    </div>
    <div class="header-links">
      <button on:click={() => goToPage('home')} class="header-link">Quiénes somos</button>
      <button on:click={() => goToPage('form1')} class="header-link">Formulario de Solicitud</button>
      <button on:click={() => goToPage('form2')} class="header-link">Stakeholders</button>
      <button on:click={() => goToPage('form3')} class="header-link">BackLog de Alto Nivel</button>
    </div>
  </div>
</header>

{#if currentPage === 'home'}
  <Home />
{:else if currentPage === 'form1'}
  <Form1 {goToPage} />
{:else if currentPage === 'form2'}
  <Form2 />
{:else if currentPage === 'form3'}
  <Form3 {goToPage} />
{/if}



<style>
header {
    background-color: #0049ff; 
    color: white; 
    padding: 15px 0; 
}

.header-container {
    display: flex;
    justify-content: space-between; 
    align-items: center;
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 0 20px; 
}

.header-logo img {
    height: 40px; 
}

.header-links {
    display: flex; 
    gap: 20px; 
}

.header-link {
    cursor: pointer; 
    color: white; 
    background: none;
    border: none;
    padding: 10px;
    font-size: 16px;
}

.header-link:hover {
    text-decoration: underline; 
}

button {
    background-color: #0049ff;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
    margin-left: 10px;
}
button:hover {
    background-color: #003bb5;
    box-shadow: 0px 0px 5px #5C8BFF,
                0px 0px 30px #5C8BFF,
                0px 0px 90px #5C8BFF;

    
}

</style>
