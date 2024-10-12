<script>
    import { createForm } from "svelte-forms-lib";
    export let goToPage;  
  
    let showMessage = false;
  
    const { form, errors, handleChange, handleSubmit } = createForm({
      initialValues: {
        ordenTrabajo: '',
        alcanceProyecto: '',
        documentoRequisitos: '',
        entregables: '',
        arquitecturaSolucion: '',
        infraestructura: '',
        entregaSoporte: '',
        metodoMetodologia: '',
        fechaSolicitud: '',
        fechaEntrega: ''
      },
      validate: values => {
        let errs = {};
  
       
        for (const key in values) {
          if (values[key] === "") {
            errs[key] = "Este campo es requerido";
          }
        }

         
      const alphanumericRegex = /^[a-zA-Z0-9]+$/;
      if (!alphanumericRegex.test(values.ordenTrabajo)) {
        errs.ordenTrabajo = "El campo debe ser alfanumérico (solo letras y números)";
      }
  
        const textOnlyRegex = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚ.,;:()]+$/;
  
      
        const textFields = [
          'alcanceProyecto', 'documentoRequisitos', 'entregables',
          'arquitecturaSolucion', 'infraestructura', 'entregaSoporte', 'metodoMetodologia'
        ];
  
        textFields.forEach(field => {
          if (!textOnlyRegex.test(values[field])) {
            errs[field] = "Este campo solo debe contener letras caracteres de texto y numeros ";
          }
        });

           
      if (values.fechaSolicitud && values.fechaEntrega) {
        const fechaSolicitud = new Date(values.fechaSolicitud);
        const fechaEntrega = new Date(values.fechaEntrega);

        if (fechaEntrega <= fechaSolicitud) {
          errs.fechaEntrega = "La fecha de entrega debe ser posterior a la fecha de solicitud";
        }
      }
  
        return errs;
      },
      onSubmit: () => {
        showMessage = true;
        
        setTimeout(() => {
          showMessage = false;
          goToPage('form2');  
        }, 3000);
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
        cursor: pointer; 
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
        cursor: pointer; 
    }

    .footer-link:hover {
        text-decoration: underline;
        cursor: pointer; 
    }

    .footer-copyright {
        font-size: 12px;
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
                    <input type="text" id="ordenTrabajo" placeholder="Orden de Trabajo/Servicio" bind:value={$form.ordenTrabajo} on:change={handleChange} />
                    {#if $errors.ordenTrabajo}
                      <small class="mensajeError">{$errors.ordenTrabajo}</small>
                    {/if}
                  </div>


                <div class="form-group">
                    <h5>ALCANCE DEL PROYECTO</h5>
                    <textarea id="alcanceProyecto" placeholder="Alcance del Proyecto" bind:value={$form.alcanceProyecto} on:change={handleChange}></textarea>
                    {#if $errors.alcanceProyecto}
                        <small class="mensajeError">{$errors.alcanceProyecto}</small>
                    {/if}
                </div>

                <div class="form-group">
                    <h5>DOCUMENTO DE REQUISITOS</h5>
                    <input type="text" id="documentoRequisitos" placeholder="Documento de Requisitos" bind:value={$form.documentoRequisitos} on:change={handleChange} />
                    {#if $errors.documentoRequisitos}
                        <small class="mensajeError">{$errors.documentoRequisitos}</small>
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
                    <input type="text" id="arquitecturaSolucion" placeholder="Arquitectura de Solución" bind:value={$form.arquitecturaSolucion} on:change={handleChange} />
                    {#if $errors.arquitecturaSolucion}
                        <small class="mensajeError">{$errors.arquitecturaSolucion}</small>
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
                    <input type="text" id="entregaSoporte" placeholder="Entrega de Soporte" bind:value={$form.entregaSoporte} on:change={handleChange} />
                    {#if $errors.entregaSoporte}
                        <small class="mensajeError">{$errors.entregaSoporte}</small>
                    {/if}
                </div>

                <div class="form-group">
                    <h5>METODO/METODOLOGIA</h5>
                    <input type="text" id="metodoMetodologia" placeholder="Método/Metodología" bind:value={$form.metodoMetodologia} on:change={handleChange} />
                    {#if $errors.metodoMetodologia}
                        <small class="mensajeError">{$errors.metodoMetodologia}</small>
                    {/if}
                </div>

                <div class="form-group">
                    <h5>FECHA DE SOLICITUD</h5>
                    <input type="date" id="fechaSolicitud" placeholder="Fecha de Solicitud" bind:value={$form.fechaSolicitud} on:change={handleChange} />
                    {#if $errors.fechaSolicitud}
                        <small class="mensajeError">{$errors.fechaSolicitud}</small>
                    {/if}
                </div>

                <div class="form-group">
                    <h5>FECHA DE ENTREGA</h5>
                    <input type="date" id="fechaEntrega" placeholder="Fecha de Entrega" bind:value={$form.fechaEntrega} on:change={handleChange} />
                    {#if $errors.fechaEntrega}
                        <small class="mensajeError">{$errors.fechaEntrega}</small>
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