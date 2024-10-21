<script>
    let accordions = {
        ean: false
    }

    function toggleAccordion(section) {
        accordions[section] = !accordions[section];
    }
    // Datos iniciales del formulario de BackLog de Alto Nivel
    let filasBacklog = [
        { id: 1, nombreAudiovisual: "", talla: "" },
        { id: 2, nombreAudiovisual: "", talla: "" }
    ];

    // Opciones de Audiovisuales y Tallas
    let opcionesTalla = ["Extra-Small", "Small", "Medium", "Large", "Extra-Large"];
    let opcionesAudiovisual = ["1", "2", "3"];

    // Datos para el formulario de promedios
    let promedios = {
        XS: { conteo: 0, peso: 0 },
        S: { conteo: 0, peso: 0 },
        M: { conteo: 0, peso: 0 },
        L: { conteo: 0, peso: 0 },
        XL: { conteo: 0, peso: 0 }
    };

    // Datos de dificultad del proyecto
    let dificultadProyecto = {
        talla: "",
        descripcion: "",
        escenarioOptimista: 0,
        escenarioRealista: 0,
        escenarioNegativo: 0,
        diasProyecto: 0,
        semanasProyecto: 0,
        mesesProyecto: 0
    };

    // Tabla estática de Estimación de Alto Nivel
    let estimacionAltoNivel = [
        { talla: "Extra-Small", sigla: "XS", puntosMin: 1, puntosMax: 2, pesoPorTalla: 1 },
        { talla: "Small", sigla: "S", puntosMin: 3, puntosMax: 5, pesoPorTalla: 2 },
        { talla: "Medium", sigla: "M", puntosMin: 8, puntosMax: 13, pesoPorTalla: 3 },
        { talla: "Large", sigla: "L", puntosMin: 21, puntosMax: 34, pesoPorTalla: 4 },
        { talla: "Extra-Large", sigla: "XL", puntosMin: 55, puntosMax: 89, pesoPorTalla: 5 }
    ];

    // Función para agregar una fila al BackLog
    function agregarFilaBacklog() {
        filasBacklog = [...filasBacklog, { id: filasBacklog.length + 1, nombreAudiovisual: "", talla: "" }];
    }

    // Función para eliminar una fila
    function eliminarFilaBacklog(id) {
        filasBacklog = filasBacklog.filter(fila => fila.id !== id);
    }

    // Función para manejar el cambio en las tallas y calcular conteo y peso
    function actualizarPromedios() {
        // Resetear promedios
        Object.keys(promedios).forEach(talla => {
            promedios[talla].conteo = 0;
            promedios[talla].peso = 0;
        });

   // Calcular conteo y peso basado en las filas del backlog
filasBacklog.forEach(fila => {
    if (fila.talla) {
        // Asegurarse de que existe el objeto para la talla antes de acceder a 'conteo' y 'peso'
        if (!promedios[fila.talla]) {
            // Inicializar si no existe
            promedios[fila.talla] = {
                conteo: 0,
                peso: 0
            };
        }

        // Incrementar conteo y peso
        promedios[fila.talla].conteo += 1;
        const pesoPorTalla = estimacionAltoNivel.find(item => item.sigla === fila.talla)?.pesoPorTalla || 0;
        promedios[fila.talla].peso += pesoPorTalla;
    }
});

    }

    // Función para calcular dificultad del proyecto
    function calcularDificultad() {
        let totalConteo = Object.values(promedios).reduce((sum, talla) => sum + talla.conteo, 0);
        let totalPeso = Object.values(promedios).reduce((sum, talla) => sum + talla.peso, 0);
        
        // Asignar valores por defecto
        dificultadProyecto.talla = "0"; // Por defecto
        dificultadProyecto.descripcion = "0"; // Por defecto
        dificultadProyecto.escenarioOptimista = 0;
        dificultadProyecto.escenarioRealista = 0;
        dificultadProyecto.escenarioNegativo = 0;
        dificultadProyecto.diasProyecto = 0;
        dificultadProyecto.semanasProyecto = 0;
        dificultadProyecto.mesesProyecto = 0;

        // Solo calcular si hay tallas válidas
        if (totalConteo > 0) {
            let horasRecomendadas = 35; // Escenario optimista
            let horasLaboralesAltoNivel = 8; // Constante que no ve el cliente

            dificultadProyecto.diasProyecto = horasRecomendadas / horasLaboralesAltoNivel;
            dificultadProyecto.semanasProyecto = dificultadProyecto.diasProyecto / 5;
            dificultadProyecto.mesesProyecto = dificultadProyecto.semanasProyecto / 4;

            // Suponiendo que se quiere determinar la dificultad en base a la talla más alta
            dificultadProyecto.talla = "L"; // Cambiar esta lógica según tu necesidad
            dificultadProyecto.descripcion = "Descripción de la talla L y su dificultad"; // Descripción predeterminada
            dificultadProyecto.escenarioOptimista = 28; // Valores de ejemplo
            dificultadProyecto.escenarioRealista = 35.00;
            dificultadProyecto.escenarioNegativo = 43.75;
        }
    }

    // Función para manejar el envío de datos del formulario
    function enviarDatos() {
        actualizarPromedios();
        calcularDificultad();
        console.log("Datos enviados:", filasBacklog);
        console.log("Promedios calculados:", promedios);
        console.log("Dificultad del proyecto calculada:", dificultadProyecto);
    }
</script>


<style>
       /* Nuevos estilos para la tabla de dificultad del proyecto */
       .dificultad-container {
        background-color: #f2f8ff;
        border-radius: 15px;
        padding: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-right: 20%;
        margin-bottom: 25%;

    }
    /* Modificación del ancho de las columnas */
    th:nth-child(2), td:nth-child(2) {
        width: 60%; /* Ajusta este valor para que el campo "Nombre" sea más grande */
    }

    th:nth-child(3), td:nth-child(3) {
        width: 40%; /* Tamaño más pequeño para la columna "Talla" */
    }

    th:nth-child(4), td:nth-child(4) {
        width: 10%; /* Nueva columna para el botón de eliminar */
    }

    /* Estilos generales */
    .main-container {
        background-color: #E0E0E0;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 55px;
        box-sizing: border-box;
        flex-direction: column;
    }

    .container2 {
        justify-content: space-between;
        width: 100%;
        display:flex;
        gap: 10%;
        background-color: #E0E0E0;
    }

    .right {
        width: 80%;
        height: auto;
        max-width: 100%;
        background: #f2f8ff;
        border-radius: 25px;
        padding: 50px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
        margin-bottom: 40px;
    }
    .bottom{
        width: 100%;
        height: 50%;
        margin-left: 10%;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background-color: #f2f8ff;
    }
    
    .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    .accordion-button{
       resize: vertical;
      
    }
    .arrow {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
    color: #04132a;
    margin-left: 100px;
  }
  .rotate {
    transform: rotate(180deg);
  }
    .title-section {
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        font-family: "Open Sans", sans-serif;
        color: #04132a;
        margin-bottom: 20px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        padding: 10px;
        text-align: center;
        border: 1px solid #dddddd;
    }
    
       /* Modificación del tamaño del campo "Backlog de Alto Nivel" */
       input.nombre, .talla {
        width: 60%;
        padding: 8px;
        font-size: 1rem; /* Ajusta el tamaño de fuente del campo */
        border-radius: 15px;
        border: 1px black solid;
    }



    button.add {
    width: 50px;
    height: 30px;
    margin: 20px 10px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    color: #efe6e6;
    border: none;
    background: #0049ff;
    border-radius: 25px;
}




button.delete{
    width: 50px;
    height: 30px;
    margin: 20px 10px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    color: #e6dbdb;
    border: none;
    background: red;
    border-radius: 25px;
}
button.delete:hover{
    background-color: #d8270f;
}

button.send{
    width: 50px;
    height: 30px;
    margin: 20px 10px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    color: #f3ebeb;
    border: none;
    background: #29bb08;
    border-radius: 25px;
}

button.send:hover{
    background-color: #83ec6e;
}

input:hover {
        border: 1px solid #5C8BFF;
        cursor: pointer;
    }

    button {
        width: 200px;
        height: 45px;
        margin: 20px 10px;
        font-weight: bold;
        font-size: 20px;
        cursor: pointer;
        color: #eadfdf;
        border: none;
        background: #0049ff;
        border-radius: 25px;
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
</style>

<div class="main-container">
    <!-- Tabla BackLog de Alto Nivel -->
    <div class="right">
        <h2 class="title-section">BackLog de Alto Nivel</h2>

        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>BackLog</th>
                    <th>Talla</th>
                    <th>Agregar</th> 
                    <th>Enviar</th> 
                    <th>Eliminar</th> 
                    <!-- Nueva columna para las acciones -->
                </tr>
            </thead>
            <tbody>
                {#each filasBacklog as fila, index}
                <tr>
                    <td>{fila.id}</td>

                    <!-- Campo Nombre Audiovisual con datalist -->
                    <td>
                        <input class="nombre" list="nombreOptions" bind:value={fila.nombreAudiovisual} placeholder="Seleccione o escriba un nombre" />
                        <datalist id="nombreOptions">
                            <option value="">Seleccione un nombre</option>
                            {#each opcionesAudiovisual as opcion}
                                <option value={opcion}>{opcion}</option>
                            {/each}
                        </datalist>
                    </td>

                    <!-- Campo Talla con datalist -->
                    <td>
                        <input class="talla" list="tallaOptions" bind:value={fila.talla} on:change={actualizarPromedios} placeholder="Seleccione o escriba una talla" />
                        <datalist id="tallaOptions">
                            <option value="">Seleccione una talla</option>
                            {#each opcionesTalla as opcion}
                                <option value={opcion}>{opcion}</option>
                            {/each}
                        </datalist>
                    </td>
                    <td>
                        <button class="add" on:click={agregarFilaBacklog} title="Agregar fila">
                            <!-- Ícono de agregar -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon-add" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 4v16m8 -8H4" />
                            </svg>
                           
                        </button>
                    </td>
                    <td>
                        <button class="send" on:click={enviarDatos} title="Enviar datos">
                            <!-- Ícono de enviar -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon-send" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 12h18l-9 9l-1 -4l-4 -1z" />
                            </svg>
                        </button>
                    </td>
                    <td>
                        <button class="delete" on:click={() => eliminarFilaBacklog(fila.id)} title="Eliminar">
                            <!-- Ícono de basura -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon-delete" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M4 7h16" />
                                <path d="M10 11v6" />
                                <path d="M14 11v6" />
                                <path d="M5 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7" />
                                <path d="M9 7v-2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2" />
                            </svg>
                        </button>
                    </td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>


    <div class="container2">
       
        <div class="bottom">
            <div class="header">
                <h2 class="title-section">Estimación de Alto Nivel</h2>
                <button class="accordion-button" type="button" on:click={() => toggleAccordion('ean')}>
                    <svg class={`arrow ${accordions.ean ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                </button>
            </div>
            {#if accordions.ean}
            <table>
                <thead>
                    <tr>
                        <th>Talla</th>
                        <th>Sigla</th>
                        <th>Puntos de Historia Mínimo</th>
                        <th>Puntos de Historia Máximo</th>
                    </tr>
                </thead>
                <tbody>
                    {#each estimacionAltoNivel as fila}
                    <tr>
                        <td>{fila.talla}</td>
                        <td>{fila.sigla}</td>
                        <td>{fila.puntosMin}</td>
                        <td>{fila.puntosMax}</td>
                    </tr>
                    {/each}
                </tbody>
            </table>
            {/if}
        </div>

        <div class="dificultad-container">
            <h2 class="title-section">Dificultad del Proyecto</h2>
            <table>
                <thead>
                    <tr>
                        <th>Talla</th>
                        <th>Descripción</th>
                        <th>Escenario Optimista</th>
                        <th>Escenario Realista</th>
                        <th>Escenario Negativo</th>
                        <th>Días de Proyecto</th>
                        <th>Semanas de Proyecto</th>
                        <th>Meses de Proyecto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{dificultadProyecto.talla}</td>
                        <td>{dificultadProyecto.descripcion}</td>
                        <td>{dificultadProyecto.escenarioOptimista}</td>
                        <td>{dificultadProyecto.escenarioRealista}</td>
                        <td>{dificultadProyecto.escenarioNegativo}</td>
                        <td>{dificultadProyecto.diasProyecto.toFixed(2)}</td>
                        <td>{dificultadProyecto.semanasProyecto.toFixed(2)}</td>
                        <td>{dificultadProyecto.mesesProyecto.toFixed(5)}</td>
                    </tr>
                </tbody>
            </table>
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