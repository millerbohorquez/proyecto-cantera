<script>
    import { createForm } from "svelte-forms-lib";
    import { postData } from '../api.js'; 
    export let goToPage;
  
    let showMessage = false;
  
    const { form, errors, handleChange, handleSubmit } = createForm({
      initialValues: {
        orden_trabajo_servicio: '',
        alcance_proyecto: '',
        documento_requisitos: '',
        entregables: '',
        arquitectura_solucion: '',
        infraestructura: '',
        entrega_soporte: '',
        metodo_metodologia: '',
        fecha_solicitud: '',
        fecha_entrega: ''
      },
      validate: values => {
        let errs = {};
        
      
        for (const key in values) {
          if (values[key] === "") {
            errs[key] = "Este campo es requerido";
          }
        }
        const alphanumericRegex = /^[a-zA-Z0-9]+$/;
        if (!alphanumericRegex.test(values.orden_trabajo_servicio)) {
          errs.orden_trabajo_servicio = "El campo debe ser alfanumérico";
        }
  
        const textOnlyRegex = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚ.,;:()]+$/;
        const textFields = ['alcance_proyecto', 'documento_requisitos', 'entregables', 'arquitectura_solucion', 'entrega_soporte','metodo_metodologia'];
  
        textFields.forEach(field => {
          if (!textOnlyRegex.test(values[field])) {
            errs[field] = "Este campo solo debe contener texto y números";
          }
        });
  
        
        if (values.fecha_solicitud && values.fecha_entrega) {
          const fecha_solicitud = new Date(values.fecha_solicitud);
          const fecha_entrega = new Date(values.fecha_entrega);
  
          if (fecha_entrega <= fecha_solicitud) {
            errs.fecha_entrega = "La fecha de entrega debe ser posterior a la fecha de solicitud";
          }
        }
  
        return errs;
      },
      onSubmit: async () => {
        showMessage = true;
  
        try {
          
          const response = await postData('/solicitudes', {
            orden_trabajo_servicio: $form.orden_trabajo_servicio,
            alcance_proyecto: $form.alcance_proyecto,
            documento_requisitos: $form.documento_requisitos,
            entregables: $form.entregables,
            arquitectura_solucion: $form.arquitectura_solucion,
            infraestructura: $form.infraestructura,
            entrega_soporte: $form.entrega_soporte,
            metodo_metodologia: $form.metodo_metodologia,
            fecha_solicitud: $form.fecha_solicitud,
            fecha_entrega: $form.fecha_entrega
          });
  
          console.log("Formulario enviado correctamente:", response);
  
         
          setTimeout(() => {
            showMessage = false;
            goToPage('form2');  
          }, 3000);
        } catch (error) {
          console.error("Error al enviar el formulario:", error);
        }
      }
    });
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
    width: 40%;
    height: 90%;
    max-width: 1000px;
    background: #f2f8ff;
    border-radius: 25px;
    padding: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  
    
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
  
    input[type="text"], input[type="number"], input[type="date"], textarea {
        border: none;
        outline: none;
        background: none;
        font-size: 14px;
        color: black;
        padding: 10px;
        border: 2px solid #636363;
        width: 100%;
        border-radius: 10px;
        box-sizing: border-box;
        font-family: "Nunito Sans", sans-serif;
    }

    input[type="text"]:hover, input[type="number"]:hover, input[type="date"]:hover, textarea:hover {
        border: 2px solid #5C8BFF;
        cursor: pointer;
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


    small {
        font-family: "Nunito Sans", sans-serif;
        font-weight: bold;
        font-size: 12px;
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
     h5{
     margin: 0;
     
    }
   

</style>



<div class="main-container">
    <div class="right">
        <section>
            <div id="confirmationMessage" style="{showMessage ? 'display: block;' : 'display: none;'}">
                <strong>Formulario enviado correctamente.</strong>
            </div>
        </section>

      
        <section class="title-section">
            <h2 class="title">FORMULARIO DE SOLICITUD</h2>
        </section>

        
            <form on:submit={handleSubmit}>


                <div class="form-group">
                    <h5>ORDEN DE TRABAJO/SERVICIO</h5>
                    <input type="text" id="orden_trabajo_servicio" placeholder="Orden de Trabajo/Servicio" bind:value={$form.orden_trabajo_servicio} on:change={handleChange} />
                    {#if $errors.orden_trabajo_servicio}
                      <small class="mensajeError">{$errors.orden_trabajo_servicio}</small>
                    {/if}
                  </div>


                <div class="form-group">
                    <h5>ALCANCE DEL PROYECTO</h5>
                    <textarea id="alcancePalcance_proyectoroyecto" placeholder="Alcance del Proyecto" bind:value={$form.alcance_proyecto} on:change={handleChange}></textarea>
                    {#if $errors.alcance_proyecto}
                        <small class="mensajeError">{$errors.alcance_proyecto}</small>
                    {/if}
                </div>

                <div class="form-group">
                    <h5>DOCUMENTO DE REQUISITOS</h5>
                    <input type="text" id="documento_requisitos" placeholder="Documento de Requisitos" bind:value={$form.documento_requisitos} on:change={handleChange} />
                    {#if $errors.documento_requisitos}
                        <small class="mensajeError">{$errors.documento_requisitos}</small>
                    {/if}
                </div>

                <div class="form-group">
                    <h5>ENTREGABLES</h5>
                    <input type="text" id="entregables" placeholder="Entregables" bind:value={$form.entregables} on:change={handleChange} />
                    {#if $errors.entregables}
                        <small class="mensajeError">{$errors.entregables}</small>
                    {/if}
                </div>

                <div class="form-group">
                    <h5>ARQUITECTURA DE SOLUCION</h5>
                    <input type="text" id="arquitectura_solucion" placeholder="Arquitectura de Solución" bind:value={$form.arquitectura_solucion} on:change={handleChange} />
                    {#if $errors.arquitectura_solucion}
                        <small class="mensajeError">{$errors.arquitectura_solucion}</small>
                    {/if}
                </div>

                <div class="form-group">
                    <h5>INFRAESTRUCTURA</h5>
                    <input type="text" id="infraestructura" placeholder="Infraestructura" bind:value={$form.infraestructura} on:change={handleChange} />
                    {#if $errors.infraestructura}
                        <small class="mensajeError">{$errors.infraestructura}</small>
                    {/if}
                </div>

                <div class="form-group">
                    <h5>ENTREGA DE SOPORTE</h5>
                    <input type="text" id="entrega_soporte" placeholder="Entrega de Soporte" bind:value={$form.entrega_soporte} on:change={handleChange} />
                    {#if $errors.entrega_soporte}
                        <small class="mensajeError">{$errors.entrega_soporte}</small>
                    {/if}
                </div>

                <div class="form-group">
                    <h5>METODO/METODOLOGIA</h5>
                    <input type="text" id="metodo_metodologia" placeholder="Método/Metodología" bind:value={$form.metodo_metodologia} on:change={handleChange} />
                    {#if $errors.metodo_metodologia}
                        <small class="mensajeError">{$errors.metodo_metodologia}</small>
                    {/if}
                </div>

                <div class="form-group">
                    <h5>FECHA DE SOLICITUD</h5>
                    <input type="date" id="fecha_solicitud" placeholder="Fecha de Solicitud" bind:value={$form.fecha_solicitud} on:change={handleChange} />
                    {#if $errors.fecha_solicitud}
                        <small class="mensajeError">{$errors.fecha_solicitud}</small>
                    {/if}
                </div>

                <div class="form-group">
                    <h5>FECHA DE ENTREGA</h5>
                    <input type="date" id="fecha_entrega" placeholder="Fecha de Entrega" bind:value={$form.fecha_entrega} on:change={handleChange} />
                    {#if $errors.fecha_entrega}
                        <small class="mensajeError">{$errors.fecha_entrega}</small>
                    {/if}
                </div>

                <button type="submit">Enviar</button>
                
            </form>
      
    </div>
</div>

