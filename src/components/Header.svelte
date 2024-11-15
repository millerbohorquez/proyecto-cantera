<script>
  export let goToPage;
</script>


<style>
  header {
      background-color: #0049ff; 
      color: white; 
      padding: 15px 0; 
      background: linear-gradient(135deg, #207cca, #3c6484, #207cca, #5f8cae); 
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
    background: linear-gradient(135deg, #207cca, #3c6484, #207cca, #5f8cae); 
    box-shadow: 0px 0px 5px #5C8BFF,
                0px 0px 30px #5C8BFF,
                0px 0px 90px #5C8BFF;
  
      
  }
  
  </style>







<header>
  <div class="header-container">
    <div class="header-logo">
      <img src="https://linktic.com/media/2024/03/logo-footer.svg" alt="LINKTIC Logo" 
      on:click={() => goToPage('home')} style="cursor: pointer;" />
    </div>
    <div class="header-links">
      <button on:click={() => goToPage('home')} class="header-link">Quiénes somos</button>
      <button on:click={() => goToPage('Solicitud')} class="header-link">Formulario de Solicitud</button>
      <button on:click={() => goToPage('Generalidades')} class="header-link">Stakeholders</button>
      <button on:click={() => goToPage('BackLog')} class="header-link">BackLog de Alto Nivel</button>
    </div>
  </div>
</header>

