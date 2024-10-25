<script>
  import Header from '../components/Header.svelte';  
  import Footer from '../components/Footer.svelte';  
  import Form1 from '../components/Form1.svelte';
  import Form2 from '../components/Form2.svelte';
  import Form3 from '../components/Form3.svelte';
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
  {:else if currentPage === 'form1'}
    <Form1 {goToPage} />
  {:else if currentPage === 'form2'}
    <Form2 />
  {:else if currentPage === 'form3'}
    <Form3 {goToPage} />
  {/if}
</main>

<Footer />