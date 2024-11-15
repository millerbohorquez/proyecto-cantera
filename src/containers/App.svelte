<script>
  import Header from '../components/Header.svelte';  
  import Footer from '../components/Footer.svelte';  
  import Solicitud from '../components/Solicitud.svelte';
  import Generalidades from '../components/Generalidades.svelte';
  import BackLog from '../components/BackLog.svelte';
  import Home from '../components/Home.svelte';

  let currentPage = 'home';

  function goToPage(page) {
    currentPage = page;
  }
</script>


<Header {goToPage} /> 

<main>
  {#if currentPage === 'home'}
    <Home />
  {:else if currentPage === 'Solicitud'}
    <Solicitud {goToPage} />
  {:else if currentPage === 'Generalidades'}
    <Generalidades />
  {:else if currentPage === 'BackLog'}
    <BackLog {goToPage} />
  {/if}
</main>

<Footer />





<style>



:global(body){

  font-family: 'Arial', sans-serif; 
  padding: 0;
  margin: 0;
}

</style>