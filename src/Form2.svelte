<script>
    import { createForm } from "svelte-forms-lib";

    let showMessage = false;

    const { form, errors, handleChange, handleSubmit } = createForm({
        initialValues: {
            nombreRQ: '',
            cargoRQ: '',
            nombreDiseno: '',
            cargoDiseno: '',
            nombrePosicion: '',
            cargoPosicion: '',
            nombreIntereses: '',
            cargoIntereses: '',
            nombreInfluencia: '',
            cargoInfluencia: '',
            nombreComunicacion: '',
            cargoComunicacion: '',
            nombreEstrategia: '',
            cargoEstrategia: '',
            nombreFormacion: '',
            cargoFormacion: '',
            nombreRQ: '',
            cargoRQ: '',
            nombreDiseno: '',
            cargoDiseno: '',
            nombrePosicion: '',
            cargoPosicion: '',
            nombreIntereses: '',
            cargoIntereses: '',
            nombreInfluencia: '',
            cargoInfluencia: '',
            nombreComunicacion: '',
            cargoComunicacion: '',
            nombreEstrategia: '',
            cargoEstrategia: '',
            nombreFormacion: '',
            cargoFormacion: ''
        },
        validate: values => {
            let errs = {};

            for (const key in values) {
                if (values[key] === "") {
                    errs[key] = "Este campo es requerido";
                }
            }
            return errs;
        },
        onSubmit: () => {
            showMessage = true;
            setTimeout(() => {
                showMessage = false;
            }, 3000);
        }
    });
</script>

<style>


    .main-container {
        background-image: url('https://pbs.twimg.com/media/DDfzVLvXoAQxO61.jpg');
        background-size: cover;
        width: 100%;
        height: 140vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px; 
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
        flex-direction: column;
        justify-content: center;
    }

    .form-label {
        font-weight: bold;
        text-align: center;
    }

    .fields-container {
        display: flex;
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
        border: 2px solid #5C8BFF;
        cursor: pointer;
    }

    button {
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
    }

    button:hover {
        background: #5C8BFF;
        transition: all .3s;
    }

    .mensajeError {
        color: rgb(255, 47, 47);
        font-size: smaller;
        font-weight: bold;
    }

    .col{
        display: flex;

        gap: 50px;

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
            
            
            <div class="form-group">
                <h3 class="form-label">Requerimientos (RQ)</h3>
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreRQ">Nombre</label>
                        <select class="form-select" id="nombreRQ" bind:value={$form.nombreRQ} on:change={handleChange}>
                            <option value="">Seleccione un nombre</option>
                            <option value="Juan Pérez">Juan Pérez</option>
                            <option value="Ana Gómez">Ana Gómez</option>
                            <option value="Luis Martínez">Luis Martínez</option>
                        </select>
                        {#if $errors.nombreRQ}
                            <small class="mensajeError">{$errors.nombreRQ}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoRQ">Cargo</label>
                        <select class="form-select" id="cargoRQ" bind:value={$form.cargoRQ} on:change={handleChange}>
                            <option value="">Seleccione un cargo</option>
                            <option value="Analista">Analista</option>
                            <option value="Desarrollador">Desarrollador</option>
                            <option value="Líder de proyecto">Líder de proyecto</option>
                        </select>
                        {#if $errors.cargoRQ}
                            <small class="mensajeError">{$errors.cargoRQ}</small>
                        {/if}
                    </div>
                </div>
            </div>

            
            <div class="form-group">
                <h3 class="form-label">Diseño UI/UX</h3>
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreDiseno">Nombre</label>
                        <select class="form-select" id="nombreDiseno" bind:value={$form.nombreDiseno} on:change={handleChange}>
                            <option value="">Seleccione un nombre</option>
                            <option value="Laura Torres">Laura Torres</option>
                            <option value="Carlos Ruiz">Carlos Ruiz</option>
                            <option value="Sofía López">Sofía López</option>
                        </select>
                        {#if $errors.nombreDiseno}
                            <small class="mensajeError">{$errors.nombreDiseno}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoDiseno">Cargo</label>
                        <select class="form-select" id="cargoDiseno" bind:value={$form.cargoDiseno} on:change={handleChange}>
                            <option value="">Seleccione un cargo</option>
                            <option value="Diseñador">Diseñador</option>
                            <option value="Desarrollador">Desarrollador</option>
                            <option value="Gerente">Gerente</option>
                        </select>
                        {#if $errors.cargoDiseno}
                            <small class="mensajeError">{$errors.cargoDiseno}</small>
                        {/if}
                    </div>
                </div>
            </div>

            
            <div class="form-group">
                <h3 class="form-label">Posición/Título</h3>
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombrePosicion">Nombre</label>
                        <select class="form-select" id="nombrePosicion" bind:value={$form.nombrePosicion} on:change={handleChange}>
                            <option value="">Seleccione un nombre</option>
                            <option value="Pedro Fernández">Pedro Fernández</option>
                            <option value="María Santos">María Santos</option>
                            <option value="Andrés Morales">Andrés Morales</option>
                        </select>
                        {#if $errors.nombrePosicion}
                            <small class="mensajeError">{$errors.nombrePosicion}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoPosicion">Cargo</label>
                        <select class="form-select" id="cargoPosicion" bind:value={$form.cargoPosicion} on:change={handleChange}>
                            <option value="">Seleccione un cargo</option>
                            <option value="Analista">Analista</option>
                            <option value="Desarrollador">Desarrollador</option>
                            <option value="Líder de proyecto">Líder de proyecto</option>
                        </select>
                        {#if $errors.cargoPosicion}
                            <small class="mensajeError">{$errors.cargoPosicion}</small>
                        {/if}
                    </div>
                </div>
            </div>

          
            <div class="form-group">
                <h3 class="form-label">Intereses</h3>
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreIntereses">Nombre</label>
                        <select class="form-select" id="nombreIntereses" bind:value={$form.nombreIntereses} on:change={handleChange}>
                            <option value="">Seleccione un nombre</option>
                            <option value="Interés 1">Interés 1</option>
                            <option value="Interés 2">Interés 2</option>
                            <option value="Interés 3">Interés 3</option>
                        </select>
                        {#if $errors.nombreIntereses}
                            <small class="mensajeError">{$errors.nombreIntereses}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoIntereses">Cargo</label>
                        <select class="form-select" id="cargoIntereses" bind:value={$form.cargoIntereses} on:change={handleChange}>
                            <option value="">Seleccione un cargo</option>
                            <option value="Interés">Interés</option>
                            <option value="Desarrollador">Desarrollador</option>
                            <option value="Líder de proyecto">Líder de proyecto</option>
                        </select>
                        {#if $errors.cargoIntereses}
                            <small class="mensajeError">{$errors.cargoIntereses}</small>
                        {/if}
                    </div>
                </div>
            </div>

            </section>
            
            <section class="col">

            <div class="form-group">
                <h3 class="form-label">Nivel de Influencia</h3>
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreInfluencia">Nombre</label>
                        <select class="form-select" id="nombreInfluencia" bind:value={$form.nombreInfluencia} on:change={handleChange}>
                            <option value="">Seleccione un nombre</option>
                            <option value="Interés 1">Interés 1</option>
                            <option value="Interés 2">Interés 2</option>
                            <option value="Interés 3">Interés 3</option>
                        </select>
                        {#if $errors.nombreInfluencia}
                            <small class="mensajeError">{$errors.nombreInfluencia}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoInfluencia">Cargo</label>
                        <select class="form-select" id="cargoInfluencia" bind:value={$form.cargoInfluencia} on:change={handleChange}>
                            <option value="">Seleccione un cargo</option>
                            <option value="Baja">Baja</option>
                            <option value="Media">Media</option>
                            <option value="Alta">Alta</option>
                        </select>
                        {#if $errors.cargoInfluencia}
                            <small class="mensajeError">{$errors.cargoInfluencia}</small>
                        {/if}
                    </div>
                </div>
            </div>

            
            <div class="form-group">
                <h3 class="form-label">Métodos de Comunicación</h3>
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreComunicacion">Nombre</label>
                        <select class="form-select" id="nombreComunicacion" bind:value={$form.nombreComunicacion} on:change={handleChange}>
                            <option value="">Seleccione un nombre</option>
                            <option value="Método 1">Método 1</option>
                            <option value="Método 2">Método 2</option>
                            <option value="Método 3">Método 3</option>
                        </select>
                        {#if $errors.nombreComunicacion}
                            <small class="mensajeError">{$errors.nombreComunicacion}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoComunicacion">Cargo</label>
                        <select class="form-select" id="cargoComunicacion" bind:value={$form.cargoComunicacion} on:change={handleChange}>
                            <option value="">Seleccione un método</option>
                            <option value="Email">Email</option>
                            <option value="Teléfono">Teléfono</option>
                            <option value="Reuniones">Reuniones</option>
                        </select>
                        {#if $errors.cargoComunicacion}
                            <small class="mensajeError">{$errors.cargoComunicacion}</small>
                        {/if}
                    </div>
                </div>
            </div>

           
            <div class="form-group">
                <h3 class="form-label">Estrategia</h3>
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreEstrategia">Nombre</label>
                        <select class="form-select" id="nombreEstrategia" bind:value={$form.nombreEstrategia} on:change={handleChange}>
                            <option value="">Seleccione un nombre</option>
                            <option value="Estrategia 1">Estrategia 1</option>
                            <option value="Estrategia 2">Estrategia 2</option>
                            <option value="Estrategia 3">Estrategia 3</option>
                        </select>
                        {#if $errors.nombreEstrategia}
                            <small class="mensajeError">{$errors.nombreEstrategia}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoEstrategia">Cargo</label>
                        <select class="form-select" id="cargoEstrategia" bind:value={$form.cargoEstrategia} on:change={handleChange}>
                            <option value="">Seleccione un cargo</option>
                            <option value="Estratega">Estratega</option>
                            <option value="Analista">Analista</option>
                            <option value="Líder de proyecto">Líder de proyecto</option>
                        </select>
                        {#if $errors.cargoEstrategia}
                            <small class="mensajeError">{$errors.cargoEstrategia}</small>
                        {/if}
                    </div>
                </div>
            </div>

           
            <div class="form-group">
                <h3 class="form-label">Formación</h3>
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreFormacion">Nombre</label>
                        <select class="form-select" id="nombreFormacion" bind:value={$form.nombreFormacion} on:change={handleChange}>
                            <option value="">Seleccione un nombre</option>
                            <option value="Formación 1">Formación 1</option>
                            <option value="Formación 2">Formación 2</option>
                            <option value="Formación 3">Formación 3</option>
                        </select>
                        {#if $errors.nombreFormacion}
                            <small class="mensajeError">{$errors.nombreFormacion}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoFormacion">Cargo</label>
                        <select class="form-select" id="cargoFormacion" bind:value={$form.cargoFormacion} on:change={handleChange}>
                            <option value="">Seleccione un cargo</option>
                            <option value="Formador">Formador</option>
                            <option value="Instructor">Instructor</option>
                            <option value="Coordinador">Coordinador</option>
                        </select>
                        {#if $errors.cargoFormacion}
                            <small class="mensajeError">{$errors.cargoFormacion}</small>
                        {/if}
                    </div>
                </div>
            </div>

        </section>



        <!--desde aca los otros ocho -->

        <section class="col">
            
            
            <div class="form-group">
                <h3 class="form-label">Requerimientos (RQ)</h3>
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreRQ">Nombre</label>
                        <select class="form-select" id="nombreRQ" bind:value={$form.nombreRQ} on:change={handleChange}>
                            <option value="">Seleccione un nombre</option>
                            <option value="Juan Pérez">Juan Pérez</option>
                            <option value="Ana Gómez">Ana Gómez</option>
                            <option value="Luis Martínez">Luis Martínez</option>
                        </select>
                        {#if $errors.nombreRQ}
                            <small class="mensajeError">{$errors.nombreRQ}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoRQ">Cargo</label>
                        <select class="form-select" id="cargoRQ" bind:value={$form.cargoRQ} on:change={handleChange}>
                            <option value="">Seleccione un cargo</option>
                            <option value="Analista">Analista</option>
                            <option value="Desarrollador">Desarrollador</option>
                            <option value="Líder de proyecto">Líder de proyecto</option>
                        </select>
                        {#if $errors.cargoRQ}
                            <small class="mensajeError">{$errors.cargoRQ}</small>
                        {/if}
                    </div>
                </div>
            </div>

            
            <div class="form-group">
                <h3 class="form-label">Diseño UI/UX</h3>
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreDiseno">Nombre</label>
                        <select class="form-select" id="nombreDiseno" bind:value={$form.nombreDiseno} on:change={handleChange}>
                            <option value="">Seleccione un nombre</option>
                            <option value="Laura Torres">Laura Torres</option>
                            <option value="Carlos Ruiz">Carlos Ruiz</option>
                            <option value="Sofía López">Sofía López</option>
                        </select>
                        {#if $errors.nombreDiseno}
                            <small class="mensajeError">{$errors.nombreDiseno}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoDiseno">Cargo</label>
                        <select class="form-select" id="cargoDiseno" bind:value={$form.cargoDiseno} on:change={handleChange}>
                            <option value="">Seleccione un cargo</option>
                            <option value="Diseñador">Diseñador</option>
                            <option value="Desarrollador">Desarrollador</option>
                            <option value="Gerente">Gerente</option>
                        </select>
                        {#if $errors.cargoDiseno}
                            <small class="mensajeError">{$errors.cargoDiseno}</small>
                        {/if}
                    </div>
                </div>
            </div>

            
            <div class="form-group">
                <h3 class="form-label">Posición/Título</h3>
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombrePosicion">Nombre</label>
                        <select class="form-select" id="nombrePosicion" bind:value={$form.nombrePosicion} on:change={handleChange}>
                            <option value="">Seleccione un nombre</option>
                            <option value="Pedro Fernández">Pedro Fernández</option>
                            <option value="María Santos">María Santos</option>
                            <option value="Andrés Morales">Andrés Morales</option>
                        </select>
                        {#if $errors.nombrePosicion}
                            <small class="mensajeError">{$errors.nombrePosicion}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoPosicion">Cargo</label>
                        <select class="form-select" id="cargoPosicion" bind:value={$form.cargoPosicion} on:change={handleChange}>
                            <option value="">Seleccione un cargo</option>
                            <option value="Analista">Analista</option>
                            <option value="Desarrollador">Desarrollador</option>
                            <option value="Líder de proyecto">Líder de proyecto</option>
                        </select>
                        {#if $errors.cargoPosicion}
                            <small class="mensajeError">{$errors.cargoPosicion}</small>
                        {/if}
                    </div>
                </div>
            </div>

          
            <div class="form-group">
                <h3 class="form-label">Intereses</h3>
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreIntereses">Nombre</label>
                        <select class="form-select" id="nombreIntereses" bind:value={$form.nombreIntereses} on:change={handleChange}>
                            <option value="">Seleccione un nombre</option>
                            <option value="Interés 1">Interés 1</option>
                            <option value="Interés 2">Interés 2</option>
                            <option value="Interés 3">Interés 3</option>
                        </select>
                        {#if $errors.nombreIntereses}
                            <small class="mensajeError">{$errors.nombreIntereses}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoIntereses">Cargo</label>
                        <select class="form-select" id="cargoIntereses" bind:value={$form.cargoIntereses} on:change={handleChange}>
                            <option value="">Seleccione un cargo</option>
                            <option value="Interés">Interés</option>
                            <option value="Desarrollador">Desarrollador</option>
                            <option value="Líder de proyecto">Líder de proyecto</option>
                        </select>
                        {#if $errors.cargoIntereses}
                            <small class="mensajeError">{$errors.cargoIntereses}</small>
                        {/if}
                    </div>
                </div>
            </div>

            </section>
            
            <section class="col">

            <div class="form-group">
                <h3 class="form-label">Nivel de Influencia</h3>
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreInfluencia">Nombre</label>
                        <select class="form-select" id="nombreInfluencia" bind:value={$form.nombreInfluencia} on:change={handleChange}>
                            <option value="">Seleccione un nombre</option>
                            <option value="Interés 1">Interés 1</option>
                            <option value="Interés 2">Interés 2</option>
                            <option value="Interés 3">Interés 3</option>
                        </select>
                        {#if $errors.nombreInfluencia}
                            <small class="mensajeError">{$errors.nombreInfluencia}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoInfluencia">Cargo</label>
                        <select class="form-select" id="cargoInfluencia" bind:value={$form.cargoInfluencia} on:change={handleChange}>
                            <option value="">Seleccione un cargo</option>
                            <option value="Baja">Baja</option>
                            <option value="Media">Media</option>
                            <option value="Alta">Alta</option>
                        </select>
                        {#if $errors.cargoInfluencia}
                            <small class="mensajeError">{$errors.cargoInfluencia}</small>
                        {/if}
                    </div>
                </div>
            </div>

            
            <div class="form-group">
                <h3 class="form-label">Métodos de Comunicación</h3>
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreComunicacion">Nombre</label>
                        <select class="form-select" id="nombreComunicacion" bind:value={$form.nombreComunicacion} on:change={handleChange}>
                            <option value="">Seleccione un nombre</option>
                            <option value="Método 1">Método 1</option>
                            <option value="Método 2">Método 2</option>
                            <option value="Método 3">Método 3</option>
                        </select>
                        {#if $errors.nombreComunicacion}
                            <small class="mensajeError">{$errors.nombreComunicacion}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoComunicacion">Cargo</label>
                        <select class="form-select" id="cargoComunicacion" bind:value={$form.cargoComunicacion} on:change={handleChange}>
                            <option value="">Seleccione un método</option>
                            <option value="Email">Email</option>
                            <option value="Teléfono">Teléfono</option>
                            <option value="Reuniones">Reuniones</option>
                        </select>
                        {#if $errors.cargoComunicacion}
                            <small class="mensajeError">{$errors.cargoComunicacion}</small>
                        {/if}
                    </div>
                </div>
            </div>

           
            <div class="form-group">
                <h3 class="form-label">Estrategia</h3>
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreEstrategia">Nombre</label>
                        <select class="form-select" id="nombreEstrategia" bind:value={$form.nombreEstrategia} on:change={handleChange}>
                            <option value="">Seleccione un nombre</option>
                            <option value="Estrategia 1">Estrategia 1</option>
                            <option value="Estrategia 2">Estrategia 2</option>
                            <option value="Estrategia 3">Estrategia 3</option>
                        </select>
                        {#if $errors.nombreEstrategia}
                            <small class="mensajeError">{$errors.nombreEstrategia}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoEstrategia">Cargo</label>
                        <select class="form-select" id="cargoEstrategia" bind:value={$form.cargoEstrategia} on:change={handleChange}>
                            <option value="">Seleccione un cargo</option>
                            <option value="Estratega">Estratega</option>
                            <option value="Analista">Analista</option>
                            <option value="Líder de proyecto">Líder de proyecto</option>
                        </select>
                        {#if $errors.cargoEstrategia}
                            <small class="mensajeError">{$errors.cargoEstrategia}</small>
                        {/if}
                    </div>
                </div>
            </div>

           
            <div class="form-group">
                <h3 class="form-label">Formación</h3>
                <div class="fields-container">
                    <div>
                        <label class="form-label" for="nombreFormacion">Nombre</label>
                        <select class="form-select" id="nombreFormacion" bind:value={$form.nombreFormacion} on:change={handleChange}>
                            <option value="">Seleccione un nombre</option>
                            <option value="Formación 1">Formación 1</option>
                            <option value="Formación 2">Formación 2</option>
                            <option value="Formación 3">Formación 3</option>
                        </select>
                        {#if $errors.nombreFormacion}
                            <small class="mensajeError">{$errors.nombreFormacion}</small>
                        {/if}
                    </div>
                    <div>
                        <label class="form-label" for="cargoFormacion">Cargo</label>
                        <select class="form-select" id="cargoFormacion" bind:value={$form.cargoFormacion} on:change={handleChange}>
                            <option value="">Seleccione un cargo</option>
                            <option value="Formador">Formador</option>
                            <option value="Instructor">Instructor</option>
                            <option value="Coordinador">Coordinador</option>
                        </select>
                        {#if $errors.cargoFormacion}
                            <small class="mensajeError">{$errors.cargoFormacion}</small>
                        {/if}
                    </div>
                </div>
            </div>

        </section>
        

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