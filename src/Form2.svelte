<script>
    import { createForm } from "svelte-forms-lib";

    let showMessage = false;

    let accordions = {
        rq: false,
        Diseño: false,
        Arqui: false,
        Infra: false,
        ciber: false,
        DesarrolloNC: false,
        DesarrolloDEV: false,
        Datos: false,
        Automa: false, 
        Calidad: false, 
        Metodologias: false, 
        Copy: false,
        Diseno: false,
        Estra: false,
        Forma: false,
        Audio: false
    };

    const { form, errors, handleChange, handleSubmit } = createForm({
        initialValues: {
            nombreRQ: '',
            cargoRQ: '',
            nombreDiseno: '',
            cargoDiseno: '',
            nombreArquitectura: '',
            cargoArquitectura: '',
            nombreInfraestructura: '',
            cargoInfraestructura: '',
            nombreCiberseguridad: '',
            cargoCiberseguridad: '',
            nombreDesarrolloNC: '',
            cargoDesarrolloNC: '',
            nombreDesarrollo: '',
            cargoDesarrollo: '',
            nombreDatos: '',
            cargoDatos: '',
            nombreAUT: '',
            cargoAUT: '',
            nombreQA: '',
            cargoQA: '',
            nombreMetodologias: '',
            cargoMetodologias: '',
            nombreCopy: '',
            cargoCopy: '',
            nombreDisenoGrafico: '',
            cargoDisenoGrafico: '',
            nombreEstrategia: '',
            cargoEstrategia: '',
            nombreFormacion: '',
            cargoFormacion: '',
            nombreAudiovisual: '',
            cargoAudiovisual: ''
        },
        validate: values => {
            let errs = {};

            const requiredFields = [
                'nombreRQ', 'cargoRQ', 
                'nombreDiseno', 'cargoDiseno', 
                'nombreArquitectura', 'cargoArquitectura', 
                'nombreDesarrollo', 'cargoDesarrollo', 
                'nombreMetodologias', 'cargoMetodologias'
            ];

            requiredFields.forEach(field => {
                if (values[field] === "") {
                    errs[field] = "Este campo es requerido";
                }
            });

            return errs;
        },
        onSubmit: () => {
            showMessage = true;
            setTimeout(() => {
                showMessage = false;
            }, 3000);
        }
    });
    function toggleAccordion(section) {
        accordions[section] = !accordions[section];
    }   
    
    
</script>

<style>


    .main-container {
        background-color: #E0E0E0;
        background-size: cover;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 55px; 
        box-sizing: border-box; 
    }

    .right {
        width: 120%;
        height: 90%;
        max-width: 1000px;
        background: #f2f8ff;
        border-radius: 25px;
        padding: 30px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      
        
    }

    .title-section {
        text-align: center;
        margin-bottom: 30px;
    }

    .title {
        font-weight: bold;
        font-size: 25px;
        font-family: "Open Sans", sans-serif;
        color: #04132a;
    }

    form {
        height: 50%;
        display: grid;
        grid-template-columns: (4,4fr);
        gap: 5px;
    }

    .form-group {
        display: flex;
        width: 100%;
        flex-direction: column;
        
    }

    .form-label {
        font-weight: bold;
        text-align: center;
    }

    .fields-container {
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap; 
    }

    select, input {
        border: none;
        outline: none;
        background: none;
        font-size: 14px;
        color: black;
        padding: 5px;
        border: 2px solid #636363;
        border-radius: 10px;
        width: 100%;
        box-sizing: border-box;
    }

    select:hover, input:hover {
        border: 1px solid #5C8BFF;
        cursor: pointer;
    }

    .envio {
        width: 100%;
        max-width: 200px;
        height: 45px;
        margin: 20px auto;
        font-weight: bold;
        font-size: 20px;
        cursor: pointer;
        color: #E0E0E0;
        border: none;
        background: #0049ff;
        border-radius: 25px;
        margin-top: 50px;
        
    }

    .envio:hover {
        box-shadow: 0px 0px 5px #5C8BFF,
                    0px 0px 30px #5C8BFF,
                    0px 0px 50px #5C8BFF;
        background: #5C8BFF;
        transition: all .3s;
    }

    .mensajeError {
        color: rgb(255, 47, 47);
        font-size: smaller;
        font-weight: bold;
        font-family: 'Arial', sans-serif;
        text-align: left;
        margin-top: 5px;
    }

    .col{
        display: flex;
        gap: 2rem;

    }

    footer {
        background-color: black;
        color: rgb(240, 239, 239);
        padding: 20px;
        text-align: center;
       
        
    }

    .footer-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
    }

    .footer-logo img {
        height: 40px; 
        margin-right: 10px;
        cursor: pointer; 
    }

    .footer-links {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 10px;
        font-size: 14px;
        cursor: pointer; 
    }

    .footer-link {
        margin: 0 15px;
        cursor: default; 
        color: rgb(240, 239, 239);
        cursor: pointer; 
    }

    .footer-link:hover {
        text-decoration: underline;
        cursor: pointer; 
    }

    .footer-copyright {
        font-size: 12px;
    }
    .accordion-button {
        padding: 0.25rem 0.5rem; 
        font-size: 0.875rem; 
        margin-left: 0.5rem; 
        border: none;
        border-radius: 10px;
        background-color: transparent; 
        cursor: pointer; 
        transition: color 0.3s; 

    }
    
    .accordion-button:hover {
        color: blue; 
    }
    .negrita{
        font-size: 16px;
    }
    em{
        color: red;
    }

    .accordion-button{
       resize: vertical;
      
    }


/*EStilos acordiones*/

    .container {
    width: 100%;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex-wrap: wrap;
    
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    
    margin: 0;
    padding: 0;
  }

  .toggle-button {
    background: none;
    border: none;
    cursor: pointer;
  }

  .arrow {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }

  .rotate {
    transform: rotate(180deg);
  }

  .content {
    margin-top: 20px;
  }

  .input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  select.input-field {
    padding-right: 30px;
  }
  
</style>

<div class="main-container">
    
    <div class="right">
        <section>
            <div id="confirmationMessage" style="{showMessage ? 'display: block;' : 'display: none;'}">
                <p>Formulario enviado correctamente. ¡Gracias!</p>
            </div>
        </section>

        <section class="title-section">
            <h2 class="title">GENERALIDADES DEL PROYECTO</h2>
        </section>

        <form  on:submit={handleSubmit}>

            
                
            <section class="col">
            
                <div class="container">
                <div class="header">
                    <h3><em>*</em> Requerimentos (RQ)</h3>
                    <button class="accordion-button" type="button" on:click={() => toggleAccordion('rq')}>
                        <svg class={`arrow ${accordions.rq ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                          </svg>
                    </button>
                </div>

                    {#if accordions.rq}
                    <div class="content">
                        <div>
                            <label class="form-label" for="nombreRQ">Nombre</label>
                            <input list="nombreRQOptions" id="nombreRQ" bind:value={$form.nombreRQ} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un nombre" required />
                            <datalist id="nombreRQOptions">
                                <option value="">Seleccione un nombre</option>
                                <option value="Miller">Miller</option>
                                <option value="Jorge">Jorge</option>
                                <option value="Chrystian">Chrystian</option>
                            </datalist>
                            {#if $errors.nombreRQ}
                                <small class="mensajeError">{$errors.nombreRQ}</small>
                            {/if}
                        </div>
                        <div>
                            <label class="form-label" for="cargoRQ">Cargo</label>
                            <input list="responsableOptions" id="nombreResponsable" bind:value={$form.nombreResponsable} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un responsable" required />
                            <datalist id="responsableOptions">
                                <option value="">Seleccione un cargo</option>
                                <option value="Junior">Junior</option>
                                <option value="Semi senior">Semi senior</option>
                                <option value="Senior">Senior</option>
                            </datalist>
                            {#if $errors.cargoRQ}
                                <small class="mensajeError">{$errors.cargoRQ}</small>
                            {/if}
                        </div>
                    </div>
                    {/if}
             </div>  
         

             <div class="container">
                <div class="header">
                    <h3><em>*</em> Diseño UI/UX</h3>
                    <button class="accordion-button" type="button" on:click={() => toggleAccordion('Diseño')}>
                        <svg class={`arrow ${accordions.Diseño ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                          </svg>
                    </button>
                </div>

                    {#if accordions.Diseño}
                    <div class="content">
                        <div>
                            <label class="form-label" for="nombreDiseno">Nombre</label>
                            <input list="nombreDisenoOptions" id="nombreDiseno" bind:value={$form.nombreDiseno} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un nombre" required />
                            <datalist id="nombreDisenoOptions">
                                <option value="">Seleccione un nombre</option>
                                <option value="Miller">Miller</option>
                                <option value="Jorge">Jorge</option>
                                <option value="Chrystian">Chrystian</option>
                            </datalist>
                            {#if $errors.nombreDiseno}
                                <small class="mensajeError">{$errors.nombreDiseno}</small>
                            {/if}
                        </div>
                        <div>
                            <label class="form-label" for="cargoDiseno">Cargo</label>
                            <input list="cargoDisenoOptions" id="cargoDiseno" bind:value={$form.cargoDiseno} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un cargo" required />
                            <datalist id="cargoDisenoOptions">
                                <option value="">Seleccione un cargo</option>
                                <option value="Diseñador UX ">Diseñador UX </option>
                                <option value="Diseñador UI">Diseñador UI</option>
                                <option value="Diseñador">Diseñador</option>
                            </datalist>
                            {#if $errors.cargoDiseno}
                                <small class="mensajeError">{$errors.cargoDiseno}</small>
                            {/if}
                        </div>
                    </div>
                    {/if}
                </div>
            </section>

            <section class="col">
                
                <div class="container">
                    <div class="header">
                        <h3><em>*</em> Arquitectura (ARQ)</h3>
                        <button class="accordion-button" type="button" on:click={() => toggleAccordion('Arqui')}>
                            <svg class={`arrow ${accordions.Arqui ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                              </svg>
                        </button>
                    </div>
    
                        {#if accordions.Arqui}
                        <div class="content">
                        <div>
                            <label class="form-label" for="nombreArquitectura">Nombre</label>
                            <input list="nombreArquitecturaOptions" id="nombreArquitectura" bind:value={$form.nombreArquitectura} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un nombre" required/>
                            <datalist id="nombreArquitecturaOptions">
                                <option value="">Seleccione un nombre</option>
                                <option value="Miller">Miller</option>
                                <option value="Jorge">Jorge</option>
                                <option value="Chrystian">Chrystian</option>
                            </datalist>
                            {#if $errors.nombreArquitectura}
                                <small class="mensajeError">{$errors.nombreArquitectura}</small>
                            {/if}
                        </div>
                        <div>
                            <label class="form-label" for="cargoArquitectura">Cargo</label>
                            <input list="cargoArquitecturaOptions" id="cargoArquitectura" bind:value={$form.cargoArquitectura} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un cargo" required/>
                            <datalist id="cargoArquitecturaOptions">
                                <option value="">Seleccione un cargo</option>
                                <option value="Arquitecto de software">Arquitecto de software</option>
                                <option value="Arquitecto de soluciones">Arquitecto de soluciones</option>
                                <option value="Líder de proyecto">Líder de proyecto</option>
                            </datalist>
                            {#if $errors.cargoArquitectura}
                                <small class="mensajeError">{$errors.cargoArquitectura}</small>
                            {/if}
                        </div>
                    </div>
                    {/if}
                </div>
                

                <div class="container">
                    <div class="header">
                        <h3>Infraestrutura (INF)</h3>
                        <button class="accordion-button" type="button" on:click={() => toggleAccordion('Infra')}>
                            <svg class={`arrow ${accordions.Infra ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                              </svg>
                        </button>
                    </div>
    
                        {#if accordions.Infra}
                        <div class="content">
                        <div>
                            <label class="form-label" for="nombreInfraestructura">Nombre</label>
                            <input list="nombreInfraestructuraOptions" id="nombreInfraestructura" bind:value={$form.nombreInfraestructura} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un nombre" />
                            <datalist id="nombreInfraestructuraOptions">
                                <option value="">Seleccione un nombre</option>
                                <option value="Miller">Miller</option>
                                <option value="Jorge">Jorge</option>
                                <option value="Chrystian">Chrystian</option>
                            </datalist>
                            {#if $errors.nombreInfraestructura}
                                <small class="mensajeError">{$errors.nombreInfraestructura}</small>
                            {/if}
                        </div>
                        <div>
                            <label class="form-label" for="cargoInfraestructura">Cargo</label>
                            <input list="cargoInfraestructuraOptions" id="cargoInfraestructura" bind:value={$form.cargoInfraestructura} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un cargo"/>
                            <datalist id="cargoInfraestructuraOptions">
                                <option value="">Seleccione un cargo</option>
                                <option value="Ingeniero de infraestructura">Ingeniero de infraestructura </option>
                                <option value="Desarrollador">Desarrollador</option>
                                <option value="Administrador de sistemas">Administrador de sistemas </option>
                            </datalist>
                            {#if $errors.cargoInfraestructura}
                                <small class="mensajeError">{$errors.cargoInfraestructura}</small>
                            {/if}
                        </div>
                    </div>
                    {/if}
                </div>

            </section>
      
            <section class="col">
            
                <div class="container">
                    <div class="header">
                        <h3> Ciberseguridad</h3>
                        <button class="accordion-button" type="button" on:click={() => toggleAccordion('ciber')}>
                            <svg class={`arrow ${accordions.ciber ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
            
                    {#if accordions.ciber}
                        <div class="content">
                            <div>
                                <label class="form-label" for="nombreCiberseguridad">Nombre</label>
                                <input list="nombreCiberseguridadOptions" id="nombreCiberseguridad" bind:value={$form.nombreCiberseguridad} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un nombre"/>
                                <datalist id="nombreCiberseguridadOptions">
                                    <option value="">Seleccione un nombre</option>
                                    <option value="Miller">Miller</option>
                                    <option value="Jorge">Jorge</option>
                                    <option value="Chrystian">Chrystian</option>
                                </datalist>
                                {#if $errors.nombreCiberseguridad}
                                    <small class="mensajeError">{$errors.nombreCiberseguridad}</small>
                                {/if}
                            </div>
                            <div>
                                <label class="form-label" for="cargoCiberseguridad">Cargo</label>
                                <input list="cargoCiberseguridadOptions" id="cargoCiberseguridad" bind:value={$form.cargoCiberseguridad} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un cargo"/>
                                <datalist id="cargoCiberseguridadOptions">
                                    <option value="">Seleccione un cargo</option>
                                    <option value="Especialista en seguridad">Especialista en seguridad</option>
                                    <option value="Analista de ciberseguridad">Analista de ciberseguridad</option>
                                    <option value="Analista de seguridad">Analista de seguridad</option>
                                </datalist>
                                {#if $errors.cargoCiberseguridad}
                                    <small class="mensajeError">{$errors.cargoCiberseguridad}</small>
                                {/if}
                            </div>
                        </div>
                    {/if}
                </div>
            
                <div class="container">
                    <div class="header">
                        <h3>Desarrollo (DEV-NC/LC)</h3>
                        <button class="accordion-button" type="button" on:click={() => toggleAccordion('DesarrolloNC')}>
                            <svg class={`arrow ${accordions.DesarrolloNC ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    {#if accordions.DesarrolloNC}
                        <div class="fields-container">
                            <div>
                                <label class="form-label" for="nombreDesarrolloNC">Nombre</label>
                                <input list="nombreDesarrolloNCOptions" id="nombreDesarrolloNC" bind:value={$form.nombreDesarrolloNC} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un nombre" />
                                <datalist id="nombreDesarrolloNCOptions">
                                    <option value="">Seleccione un nombre</option>
                                    <option value="Miller">Miller</option>
                                    <option value="Jorge">Jorge</option>
                                    <option value="Chrystian">Chrystian</option>
                                </datalist>
                                {#if $errors.nombreDesarrolloNC}
                                    <small class="mensajeError">{$errors.nombreDesarrolloNC}</small>
                                {/if}
                            </div>
                            <div>
                                <label class="form-label" for="cargoDesarrolloNC">Cargo</label>
                                <input list="cargoDesarrolloNCOptions" id="cargoDesarrolloNC" bind:value={$form.cargoDesarrolloNC} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un cargo" />
                                <datalist id="cargoDesarrolloNCOptions">
                                    <option value="">Seleccione un cargo</option>
                                    <option value="Desarrollador Low code">Desarrollador Low code</option>
                                    <option value="Especialista en No code">Especialista en No code</option>
                                </datalist>
                                {#if $errors.cargoDesarrolloNC}
                                    <small class="mensajeError">{$errors.cargoDesarrolloNC}</small>
                                {/if}
                            </div>
                        </div>
                    {/if}
                </div>

            </section>

            <section class="col">

                <div class="container">
                    <div class="header">
                        <h3><em>*</em> Desarrollo (DEV)</h3>
                        <button class="accordion-button" type="button" on:click={() => toggleAccordion('DesarrolloDEV')}>
                            <svg class={`arrow ${accordions.DesarrolloDEV ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    {#if accordions.DesarrolloDEV}
                        <div class="fields-container">
                            <div>
                                <label class="form-label" for="nombreDesarrollo">Nombre</label>
                                <input list="nombreDesarrolloOptions" id="nombreDesarrollo" bind:value={$form.nombreDesarrollo} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un nombre" required />
                                <datalist id="nombreDesarrolloOptions">
                                    <option value="">Seleccione un nombre</option>
                                    <option value="Ingeniero de software">Ingeniero de software</option>
                                    <option value="Ingeniero front">Ingeniero front</option>
                                    <option value="Líder de proyecto">Líder de proyecto</option>
                                </datalist>
                                {#if $errors.nombreDesarrollo}
                                    <small class="mensajeError">{$errors.nombreDesarrollo}</small>
                                {/if}
                            </div>
                            <div>
                                <label class="form-label" for="cargoDesarrollo">Cargo</label>
                                <input list="cargoDesarrolloOptions" id="cargoDesarrollo" bind:value={$form.cargoDesarrollo} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un cargo" required />
                                <datalist id="cargoDesarrolloOptions">
                                    <option value="">Seleccione un cargo</option>
                                    <option value="Ingeniero de software">Ingeniero de software</option>
                                    <option value="Ingeniero front">Ingeniero front</option>
                                    <option value="Líder de proyecto">Líder de proyecto</option>
                                </datalist>
                                {#if $errors.cargoDesarrollo}
                                    <small class="mensajeError">{$errors.cargoDesarrollo}</small>
                                {/if}
                            </div>
                        </div>
                    {/if}
                </div>
            
                <div class="container">
                    <div class="header">
                        <h3>Datos (DBA)</h3>
                        <button class="accordion-button" type="button" on:click={() => toggleAccordion('Datos')}>
                            <svg class={`arrow ${accordions.Datos ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    {#if accordions.Datos}
                        <div class="fields-container">
                            <div>
                                <label class="form-label" for="nombreDatos">Nombre</label>
                                <input list="nombreDatosOptions" id="nombreDatos" bind:value={$form.nombreDatos} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un nombre"/>
                                <datalist id="nombreDatosOptions">
                                    <option value="">Seleccione un nombre</option>
                                    <option value="Formación 1">Formación 1</option>
                                    <option value="Formación 2">Formación 2</option>
                                    <option value="Formación 3">Formación 3</option>
                                </datalist>
                                {#if $errors.nombreDatos}
                                    <small class="mensajeError">{$errors.nombreDatos}</small>
                                {/if}
                            </div>
                            <div>
                                <label class="form-label" for="cargoDatos">Cargo</label>
                                <input list="cargoDatosOptions" id="cargoDatos" bind:value={$form.cargoDatos} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un cargo"/>
                                <datalist id="cargoDatosOptions">
                                    <option value="">Seleccione un cargo</option>
                                    <option value="DBA">DBA</option>
                                    <option value="Admin bases de datos">Admin bases de datos</option>
                                    <option value="Coordinador">Coordinador</option>
                                </datalist>
                                {#if $errors.cargoDatos}
                                    <small class="mensajeError">{$errors.cargoDatos}</small>
                                {/if}
                            </div>
                        </div>
                    {/if}
                </div>
            </section>
            



        <!--desde aca los otros ocho -->

        <section class="col">
            
            <div class="container">
                <div class="header">
                    <h3>Automatizaciones (AUT) </h3>
                    <button class="accordion-button" type="button" on:click={() => toggleAccordion('Automa')}>
                        <svg class={`arrow ${accordions.Automa ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                {#if accordions.Automa}
           
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreAUT">Nombre</label>
                        <input list="nombreAUTOptions" id="nombreAUT" bind:value={$form.nombreAUT} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un nombre"/>
                        <datalist id="nombreAUTOptions">
                            <option value="">Seleccione un nombre</option>
                            <option value="Miller">Miller</option>
                            <option value="Jorge">Jorge</option>
                            <option value="Chrystian">Chrystian</option>
                        </datalist>
                        {#if $errors.nombreAUT}
                            <small class="mensajeError">{$errors.nombreAUT}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoAUT">Cargo</label>
                        <input list="cargoAUTOptions" id="cargoAUT" bind:value={$form.cargoAUT} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un cargo" />
                        <datalist id="cargoAUTOptions">
                            <option value="">Seleccione un cargo</option>
                            <option value="Analista">Analista</option>
                            <option value="Desarrollador">Desarrollador</option>
                            <option value="Especialista en automatizacion">Especialista en automatizacion </option>
                        </datalist>
                        {#if $errors.cargoAUT}
                            <small class="mensajeError">{$errors.cargoAUT}</small>
                        {/if}
                    </div>
                </div>
                {/if}
            </div>

            <div class="container">
                <div class="header">
                    <h3>Aseguramiento de caldiad (QA)</h3>
                    <button class="accordion-button" type="button" on:click={() => toggleAccordion('Calidad')}>
                        <svg class={`arrow ${accordions.Calidad ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                {#if accordions.Calidad}
            
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreQA">Nombre</label>
                        <input list="nombreQAOptions" id="nombreQA" bind:value={$form.nombreQA} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un nombre"/>
                        <datalist id="nombreQAOptions">
                            <option value="">Seleccione un nombre</option>
                            <option value="Miller">Miller</option>
                            <option value="Jorge">Jorge</option>
                            <option value="Chrystian">Chrystian</option>
                        </datalist>
                        {#if $errors.nombreQA}
                            <small class="mensajeError">{$errors.nombreQA}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoQA">Cargo</label>
                        <input list="cargoQAOptions" id="cargoQA" bind:value={$form.cargoQA} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un cargo"/>
                        <datalist id="cargoQAOptions">
                            <option value="">Seleccione un cargo</option>
                            <option value="Ingeniero de QA">Ingeniero de QA</option>
                            <option value="Especialista en calidad">Especialista en calidad</option>
                        </datalist>
                        {#if $errors.cargoQA}
                            <small class="mensajeError">{$errors.cargoQA}</small>
                        {/if}
                    </div>
                </div>
                {/if}
            </div>

        </section>

        <section class="col">

            <div class="container">
                <div class="header">
                    <h3><em>*</em> Metodologias Agiles/CMMI (M.A/C)</h3>
                    <button class="accordion-button" type="button" on:click={() => toggleAccordion('Metodologias')}>
                        <svg class={`arrow ${accordions.Metodologias ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                {#if accordions.Metodologias}
            
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreMetodologias">Nombre</label>
                        <input list="nombreMetodologiasOptions" id="nombreMetodologias" bind:value={$form.nombreMetodologias} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un nombre" required />
                        <datalist id="nombreMetodologiasOptions">
                            <option value="">Seleccione un nombre</option>
                            <option value="Miller">Miller</option>
                                <option value="Jorge">Jorge</option>
                                <option value="Chrystian">Chrystian</option>
                        </datalist>
                        {#if $errors.nombreMetodologias}
                            <small class="mensajeError">{$errors.nombreMetodologias}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoMetodologias">Cargo</label>
                        <input list="cargoMetodologiasOptions" id="cargoMetodologias" bind:value={$form.cargoMetodologias} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un cargo" required />
                        <datalist id="cargoMetodologiasOptions">
                            <option value="">Seleccione un cargo</option>
                            <option value="Scrum master">Scrum master</option>
                            <option value="Especialista en agilidad">Especialista en agilidad</option>
                            <option value="Líder de proyecto">Líder de proyecto</option>
                        </datalist>
                        {#if $errors.cargoMetodologias}
                            <small class="mensajeError">{$errors.cargoMetodologias}</small>
                        {/if}
                    </div>
                </div>
                {/if}
            </div>

            <div class="container">
                <div class="header">
                    <h3>Copy</h3>
                    <button class="accordion-button" type="button" on:click={() => toggleAccordion('Copy')}>
                        <svg class={`arrow ${accordions.Copy ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                {#if accordions.Copy}
           
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreCopy">Nombre</label>
                        <input list="nombreCopyOptions" id="nombreCopy" bind:value={$form.nombreCopy} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un nombre"/>
                        <datalist id="nombreCopyOptions">
                            <option value="">Seleccione un nombre</option>
                            <option value="Interés 1">Interés 1</option>
                            <option value="Interés 2">Interés 2</option>
                            <option value="Interés 3">Interés 3</option>
                        </datalist>
                        {#if $errors.nombreCopy}
                            <small class="mensajeError">{$errors.nombreCopy}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoCopy">Cargo</label>
                        <input list="cargoCopyOptions" id="cargoCopy" bind:value={$form.cargoCopy} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un cargo"/>
                        <datalist id="cargoCopyOptions">
                            <option value="">Seleccione un cargo</option>
                            <option value="Redactor tecnico">Redactor tecnico</option>
                            <option value="Especialista en copywriting">Especialista en copywriting</option>
                            <option value="Líder de proyecto">Líder de proyecto</option>
                        </datalist>
                        {#if $errors.cargoCopy}
                            <small class="mensajeError">{$errors.cargoCopy}</small>
                        {/if}
                    </div>
                </div>
                {/if}
            </div>

            </section>
            
            <section class="col">

            <div class="container">
                <div class="header">
                    <h3>Diseño Grafico</h3>
                    <button class="accordion-button" type="button" on:click={() => toggleAccordion('Diseno')}>
                        <svg class={`arrow ${accordions.Diseno ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                         </svg>
                     </button>
            </div>
    
                {#if accordions.Diseno}
            
                <div class="fields-container">
                    <div>
                        <label class="form-label" for=" nombreDisenoGrafico">Nombre</label>
                        <input list="nombreDisenoGraficoOptions" id="nombreDisenoGrafico" bind:value={$form.nombreDisenoGrafico} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un nombre"/>
                        <datalist id="nombreDisenoGraficoOptions">
                            <option value="">Seleccione un nombre</option>
                            <option value="Interés 1">Interés 1</option>
                            <option value="Interés 2">Interés 2</option>
                            <option value="Interés 3">Interés 3</option>
                        </datalist>
                        {#if $errors. nombreDisenoGrafico}
                            <small class="mensajeError">{$errors. nombreDisenoGrafico}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoDisenoGrafico">Cargo</label>
                        <input list="cargoDisenoGraficoOptions" id="cargoDisenoGrafico" bind:value={$form.cargoDisenoGrafico} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un cargo"/>
                        <datalist id="cargoDisenoGraficoOptions">
                            <option value="">Seleccione un cargo</option>
                            <option value="Diseñador grafico">Diseñador grafico</option>
                            <option value="Diseñador visual">Diseñador visual</option>
                            <option value="Diseñador">Diseñador</option>
                        </datalist>
                        {#if $errors.cargoDisenoGrafico}
                            <small class="mensajeError">{$errors.cargoDisenoGrafico}</small>
                        {/if}
                    </div>
                </div>
                {/if}
            </div>

            <div class="container">
                <div class="header">
                    <h3>Estrategia</h3>
                    <button class="accordion-button" type="button" on:click={() => toggleAccordion('Estra')}>
                        <svg class={`arrow ${accordions.Estra ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                         </svg>
                     </button>
            </div>
    
                {#if accordions.Estra}
           
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreEstrategia">Nombre</label>
                        <input list="nombreEstrategiaOptions" id="nombreEstrategia" bind:value={$form.nombreEstrategia} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un nombre"/>
                        <datalist id="nombreEstrategiaOptions">
                            <option value="">Seleccione un nombre</option>
                            <option value="Método 1">Método 1</option>
                            <option value="Método 2">Método 2</option>
                            <option value="Método 3">Método 3</option>
                        </datalist>
                        {#if $errors.nombreEstrategia}
                            <small class="mensajeError">{$errors.nombreEstrategia}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoEstrategia">Cargo</label>
                        <input list="cargoEstrategiaOptions" id="cargoEstrategia" bind:value={$form.cargoEstrategia} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un cargo"/>
                        <datalist id="cargoEstrategiaOptions">
                            <option value="">Seleccione un método</option>
                            <option value="Consultor">Consultor </option>
                            <option value="Negocios">Negocios </option>
                            <option value="administrador">administrador</option>
                        </datalist>
                        {#if $errors.cargoEstrategia}
                            <small class="mensajeError">{$errors.cargoEstrategia}</small>
                        {/if}
                    </div>
                </div>
                {/if}
            </div>

        </section>

        <section class="col">

            <div class="container">
                <div class="header">
                    <h3>Formación</h3>
                    <button class="accordion-button" type="button" on:click={() => toggleAccordion('Forma')}>
                        <svg class={`arrow ${accordions.Forma ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                         </svg>
                     </button>
            </div>
    
                {#if accordions.Forma}
           
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreFormacion">Nombre</label>
                        <input list="nombreFormacionOptions" id="nombreFormacion" bind:value={$form.nombreFormacion} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un nombre"/>
                        <datalist id="nombreFormacionOptions">
                            <option value="">Seleccione un nombre</option>
                            <option value="Estrategia 1">Estrategia 1</option>
                            <option value="Estrategia 2">Estrategia 2</option>
                            <option value="Estrategia 3">Estrategia 3</option>
                        </datalist>
                        {#if $errors.nombreFormacion}
                            <small class="mensajeError">{$errors.nombreFormacion}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoFormacion">Cargo</label>
                        <input list="cargoFormacionOptions" id="cargoFormacion" bind:value={$form.cargoFormacion} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un cargo"/>
                        <datalist id="cargoFormacionOptions">
                            <option value="">Seleccione un cargo</option>
                            <option value="Estratega">Estratega</option>
                            <option value="Instructor Formacion">Instructor Formacion </option>
                            <option value="Formador">Formador</option>
                        </datalist>
                        {#if $errors.cargoFormacion}
                            <small class="mensajeError">{$errors.cargoFormacion}</small>
                        {/if}
                    </div>
                </div>
                {/if}
            </div>

           
            <div class="container">
                <div class="header">
                    <h3>Audiovisual</h3>
                    <button class="accordion-button" type="button" on:click={() => toggleAccordion('Audio')}>
                        <svg class={`arrow ${accordions.Audio ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                         </svg>
                     </button>
            </div>
    
                {#if accordions.Audio}
           
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreAudiovisual">Nombre</label>
                        <input list="nombreAudiovisualOptions" id="nombreAudiovisual" bind:value={$form.nombreAudiovisual} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un nombre"/>
                        <datalist id="nombreAudiovisualOptions">
                            <option value="">Seleccione un nombre</option>
                            <option value="Formación 1">Formación 1</option>
                            <option value="Formación 2">Formación 2</option>
                            <option value="Formación 3">Formación 3</option>
                        </datalist>
                        {#if $errors.nombreAudiovisual}
                            <small class="mensajeError">{$errors.nombreAudiovisual}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoAudiovisual">Cargo</label>
                        <input list="cargoAudiovisualOptions" id="cargoAudiovisual" bind:value={$form.cargoAudiovisual} on:input={handleChange} class="input-field" placeholder="Seleccione o escriba un cargo"/>
                        <datalist id="cargoAudiovisualOptions">
                            <option value="">Seleccione un cargo</option>
                            <option value="Productor audiovisual">Productor audiovisual</option>
                            <option value="Especialista en multimedia">Especialista en multimedia</option>
                            <option value="Coordinador">Coordinador</option>
                        </datalist>
                        {#if $errors.cargoAudiovisual}
                            <small class="mensajeError">{$errors.cargoAudiovisual}</small>
                        {/if}
                    </div>
                </div>
                {/if}
            </div>

        </section>
        

            <button class="envio" type="submit">Enviar</button>
        </form>
    </div>
</div>


<footer>
    <div class="footer-logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-mkPdnMxQdJceiZ5kWiKbsgrCW5h1Yk-Eg&s" alt="LINKTIC Logo" />
        
    </div>
    <div class="footer-links">
        <span class="footer-link">Quiénes somos</span>
        <span class="footer-link">Servicios</span>
        <span class="footer-link"> Portafolio</span>
        <span class="footer-link">Carrera</span>
        <span class="footer-link">Publicaciones</span>
        <span class="footer-link"> Contáctenos</span>
    </div>
   
    <div class="footer-copyright">
        <br>
        <small>© 2024 LinkTIC todos los derechos reservados</small>

    </div>
</footer>