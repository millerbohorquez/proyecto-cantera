<script>
    import { createForm } from "svelte-forms-lib";
    import { Footer } from 'flowbite-svelte';

    let showMessage = false;

    const { form, errors, handleChange, handleSubmit } = createForm({
        initialValues: {
            requerimientos: '',
            diseno: '',
            posicion: '',
            intereses: '',
            influencia: '',
            comunicacion: '',
            estrategia: '',
            formacion: ''
        },
        validate: values => {
            let errs = {};
            // Validar todos los campos
            for (const key in values) {
                if (values[key] === "") {
                    errs[key] = "Este campo es requerido"; // Mensaje de error para campos vacíos
                }
            }
            return errs;
        },
        onSubmit: () => {
            showMessage = true; // Muestra el mensaje de éxito
            setTimeout(() => {
                showMessage = false; // Oculta el mensaje después de 3 segundos
            }, 3000);
        }
    });
</script>

<style>
    .main-container {
        background-image: url('https://pbs.twimg.com/media/DDfzVLvXoAQxO61.jpg');
        background-size: cover;
        width: 100%;
        height: 100vh;
    }

    textarea {
        border: none;
        outline: none;
        background: none;
        font-size: 14px;
        color: black;
        padding: 10px;
        border: 2px solid #636363;
        width: 100%;
        height: 41px; 
        border-radius: 10px;
        box-sizing: border-box;
        font-family: "Nunito Sans", sans-serif;
        resize: none; 
    }

    textarea:hover {
        border: 2px solid #5C8BFF;
        cursor: pointer;
    }

    .right {
        position: absolute;
        width: 600px;
        left: 50%;
        transform: translateX(-50%);
        height: auto;
        top: 150px;
        background: #f2f8ff;
        border-radius: 25px;
        text-align: center;
        padding: 30px;
    }

    .title-section {
        margin-bottom: 30px;
    }

    .title {
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        font-family: "Open Sans", sans-serif;
        color: #04132a;
    }

    form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        align-items: center;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    input[type="text"], input[type="number"], input[type="date"], select, textarea {
        border: none;
        outline: none;
        background: none;
        font-size: 14px;
        color: black;
        padding: 10px;
        border: 2px solid #636363;
        width: 100%;
        height: 41px;
        border-radius: 10px;
        box-sizing: border-box;
        font-family: "Nunito Sans", sans-serif;
    }

    input[type="text"]:hover, input[type="number"]:hover, input[type="date"]:hover, select:hover, textarea:hover {
        border: 2px solid #5C8BFF;
        cursor: pointer;
    }

    select {
        appearance: none; 
        background: none;
    }

    button {
        grid-column: span 2;
        width: 200px;
        height: 45px;
        margin: 20px auto;
        font-weight: bold;
        font-size: 20px;
        cursor: pointer;
        color: #E0E0E0;
        border: none;
        background: #0049ff;
        border-radius: 25px;
    }

    button:hover {
        box-shadow: 0px 0px 5px #5C8BFF,
                    0px 0px 30px #5C8BFF,
                    0px 0px 90px #5C8BFF;
        background: #5C8BFF;
        transition: all .3s;
    }

    .mensajeError {
        color: rgb(255, 47, 47);
        font-size: smaller;
        font-weight: bold;
        font-family: 'Times New Roman', Times, serif;
        text-align: left;
        margin-top: 5px;
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
    }

    .footer-links {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 10px;
        font-size: 14px;
    }

    .footer-link {
        margin: 0 15px;
        cursor: default; 
        color: rgb(240, 239, 239);
    }

    .footer-link:hover {
        text-decoration: underline; 
    }

    .footer-copyright {
        font-size: 12px;
    }

    small {
        font-family: "Nunito Sans", sans-serif;
        font-weight: bold;
        font-size: 12px;
    }

    header {
    background-color: #0049ff; 
    color: white; 
    padding: 15px; 
   
    
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
    cursor: default; 
    color: white; 
    
}

.header-link:hover {
    text-decoration: underline; 
    
}

    @media only screen and (max-width: 900px) {
        .right {
            width: 90%;
            padding: 20px;
        }

        .form-group {
            flex: 0 0 100%;
        }
    }
</style>


<header>
    <div class="header-container">
        <div class="header-logo">
            <img src="https://linktic.com/media/2024/03/logo-footer.svg" alt="LINKTIC Logo" />
        </div>
        <div class="header-links">
            <span class="header-link">Quiénes somos</span>
            <span class="header-link">Servicios</span>
            <span class="header-link">Portafolio</span>
            <span class="header-link">Carrera</span>
            <span class="header-link">Publicaciones</span>
            <span class="header-link">Contáctenos</span>
        </div>
    </div>
</header>

<div class="main-container">
    <div class="right">
        <section>
            <div id="confirmationMessage" style="{showMessage ? 'display: block;' : 'display: none;'}">
                <p>Formulario enviado correctamente. ¡Gracias!</p>
            </div>
        </section>

      
        <section class="title-section">
            <h2 class="title">GENERALIDADES DEL PROYECTO </h2>
        </section>


       
            <form on:submit={handleSubmit}>
                <div class="form-group">
                    <label class="form-label" for="requerimientos">Requerimientos (RQ)</label>
                    <input class="form-input" type="text" id="requerimientos" bind:value={$form.requerimientos} on:change={handleChange} />
                    {#if $errors.requerimientos}
                        <small class="mensajeError">{$errors.requerimientos}</small>
                    {/if}
                </div>

                <div class="form-group">
                    <label class="form-label" for="diseno">Diseño UI/UX</label>
                    <select class="form-select" id="diseno" bind:value={$form.diseno} on:change={handleChange}>
                        <option value="">Seleccione una opción</option>
                        <option value="creacion">Creación de interfaces visuales</option>
                        <option value="experiencia">Experiencia de usuario optimizada</option>
                    </select>
                    {#if $errors.diseno}
                        <small class="mensajeError">{$errors.diseno}</small>
                    {/if}
                </div>

                <div class="form-group">
                    <label class="form-label" for="posicion">Posición/Título</label>
                    <input class="form-input" type="text" id="posicion" bind:value={$form.posicion} on:change={handleChange} />
                    {#if $errors.posicion}
                        <small class="mensajeError">{$errors.posicion}</small>
                    {/if}
                </div>

                <div class="form-group">
                    <label class="form-label" for="intereses">Intereses</label>
                    <input class="form-input" type="text" id="intereses" bind:value={$form.intereses} on:change={handleChange} />
                    {#if $errors.intereses}
                        <small class="mensajeError">{$errors.intereses}</small>
                    {/if}
                </div>

                <div class="form-group">
                    <label class="form-label" for="influencia">Nivel de Influencia</label>
                    <select class="form-select" id="influencia" bind:value={$form.influencia} on:change={handleChange}>
                        <option value="">Seleccione un nivel</option>
                        <option value="baja">Baja</option>
                        <option value="media">Media</option>
                        <option value="alta">Alta</option>
                    </select>
                    {#if $errors.influencia}
                        <small class="mensajeError">{$errors.influencia}</small>
                    {/if}
                </div>

                <div class="form-group">
                    <label class="form-label" for="comunicacion">Métodos de Comunicación</label>
                    <select class="form-select" id="comunicacion" bind:value={$form.comunicacion} on:change={handleChange}>
                        <option value="">Seleccione una opción</option>
                        <option value="email">Email</option>
                        <option value="telefono">Teléfono</option>
                        <option value="reuniones">Reuniones</option>
                    </select>
                    {#if $errors.comunicacion}
                        <small class="mensajeError">{$errors.comunicacion}</small>
                    {/if}
                </div>

                <div class="form-group">
                    <label class="form-label" for="estrategia">Estrategia</label>
                    <input class="form-input" type="text" id="estrategia" bind:value={$form.estrategia} on:change={handleChange} />
                    {#if $errors.estrategia}
                        <small class="mensajeError">{$errors.estrategia}</small>
                    {/if}
                </div>

                <div class="form-group">
                    <label class="form-label" for="formacion">Formación</label>
                    <input class="form-input" type="text" id="formacion" bind:value={$form.formacion} on:change={handleChange} />
                    {#if $errors.formacion}
                        <small class="mensajeError">{$errors.formacion}</small>
                    {/if}
                </div>

                <button type="submit">Enviar</button>
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
        <span class="footer-link">Portafolio</span>
        <span class="footer-link">Carrera</span>
        <span class="footer-link">Publicaciones</span>
        <span class="footer-link">Contáctenos</span>
    </div>
    
    <div class="footer-copyright">
        <br>
        <small>© 2024 LinkTIC todos los derechos reservados</small>
    </div>
</footer>
