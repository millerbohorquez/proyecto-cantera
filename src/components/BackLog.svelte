<script>
    import { postData } from '../api.js'; 
  
    let accordions = { ean: false };
  
    function toggleAccordion(section) {
        accordions[section] = !accordions[section];
    }
  
    let filasBacklog = [
        { id: 1, nombreAudiovisual: "", talla: "" },
        { id: 2, nombreAudiovisual: "", talla: "" }
    ];
  
    let opcionesTalla = ["XS", "S", "M", "L", "XL"];
    let opcionesAudiovisual = ["1", "2", "3"];
  
    let promedios = {
        XS: { conteo: 0, peso: 0 },
        S: { conteo: 0, peso: 0 },
        M: { conteo: 0, peso: 0 },
        L: { conteo: 0, peso: 0 },
        XL: { conteo: 0, peso: 0 }
    };
  
    let dificultadProyecto = {
        talla: "",
        descripcion: "",
        escenarioOptimista: 0,
        escenarioRealista: 0,
        escenarioNegativo: 0,
        horasRecomendadas: 0,
        diasProyecto: 0,
        semanasProyecto: 0,
        mesesProyecto: 0
    };
  
    let estimacionAltoNivel = [
    { talla: "XS", sigla: "XS", puntosMin: 1, puntosMax: 2, pesoPorTalla: 1, descripcion: "Tareas muy pequeñas y simples, requieren poco esfuerzo o tiempo; completadas en horas." },
    { talla: "S", sigla: "S", puntosMin: 3, puntosMax: 5, pesoPorTalla: 2, descripcion: "Tareas pequeñas, requieren algo de análisis o desarrollo; típicamente entre uno o dos días." },
    { talla: "M", sigla: "M", puntosMin: 8, puntosMax: 13, pesoPorTalla: 3, descripcion: "Esfuerzo moderado, de complejidad media; puede tomar de algunos días a una semana." },
    { talla: "L", sigla: "L", puntosMin: 21, puntosMax: 34, pesoPorTalla: 4, descripcion: "Tareas grandes o complejas que requieren significativo esfuerzo; típicamente de una a dos semanas." },
    { talla: "XL", sigla: "XL", puntosMin: 55, puntosMax: 89, pesoPorTalla: 5, descripcion: "Tareas muy grandes y complejas, requieren planificación extensa; suelen tomar varias semanas." }
];

  
    function agregarFilaBacklog() {
        filasBacklog = [...filasBacklog, { id: filasBacklog.length + 1, nombreAudiovisual: "", talla: "" }];
    }
  
    function eliminarFilaBacklog(id) {
        filasBacklog = filasBacklog.filter(fila => fila.id !== id);
    }
  
    function actualizarPromedios() {
        Object.keys(promedios).forEach(talla => {
            promedios[talla].conteo = 0;
            promedios[talla].peso = 0;
        });

        filasBacklog.forEach(fila => {
            if (fila.talla && promedios[fila.talla]) {
                promedios[fila.talla].conteo += 1;
                const pesoPorTalla = estimacionAltoNivel.find(item => item.sigla === fila.talla)?.pesoPorTalla || 0;
                promedios[fila.talla].peso += pesoPorTalla;
            }
        });
    }
  
    function calcularDificultad() {
    actualizarPromedios();
    let totalConteo = Object.values(promedios).reduce((sum, talla) => sum + talla.conteo, 0);
    let totalPeso = Object.values(promedios).reduce((sum, talla) => sum + talla.peso, 0);

    dificultadProyecto = {
        talla: "",
        descripcion: "",
        escenarioOptimista: 0,
        escenarioRealista: 0,
        escenarioNegativo: 0,
        horasRecomendadas: 0,
        diasProyecto: 0,
        semanasProyecto: 0,
        mesesProyecto: 0
    };

    
    let pesoPromedio = Math.round(totalPeso / 5);

    let tallaEncontrada = estimacionAltoNivel.find(item => item.pesoPorTalla === pesoPromedio);

    if (tallaEncontrada) {
        dificultadProyecto.talla = tallaEncontrada.sigla;
        dificultadProyecto.descripcion = tallaEncontrada.descripcion;
        dificultadProyecto.escenarioOptimista = tallaEncontrada.puntosMin * 0.8;
        dificultadProyecto.escenarioRealista = (tallaEncontrada.puntosMin + tallaEncontrada.puntosMax) / 2;
        dificultadProyecto.escenarioNegativo = tallaEncontrada.puntosMax * 1.25;
        dificultadProyecto.horasRecomendadas = dificultadProyecto.escenarioRealista;

        let horasLaboralesAltoNivel = 8;
        dificultadProyecto.diasProyecto = dificultadProyecto.horasRecomendadas / horasLaboralesAltoNivel;
        dificultadProyecto.semanasProyecto = dificultadProyecto.diasProyecto / 5;
        dificultadProyecto.mesesProyecto = dificultadProyecto.semanasProyecto / 4;
    }
}

  
    async function enviarDatos() {
        calcularDificultad();  
        try {
            const response = await postData('/backlog', {
                filasBacklog,           
                promedios,           
                dificultadProyecto      
            });
  
            console.log("Datos enviados correctamente:", response);
  
        } catch (error) {
            console.error("Error al enviar los datos del backlog:", error);
        }
    }
</script>

  


<style>
    .dificultad-container {
        background-color: #f2f8ff;
        border-radius: 15px;
        width: 86%;
        max-width: 86%;
        padding: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-right: 20%;
        margin-bottom: 10%;
        margin-left: 10%;
    }

    th:nth-child(2), td:nth-child(2) {
        width: 60%;
    }

    th:nth-child(3), td:nth-child(3) {
        width: 40%;
    }

    th:nth-child(4), td:nth-child(4) {
        width: 10%;
    }

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
       display: grid;
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
        
    }

    .bottom{
        width: 50%;
        height: auto;
        margin-left: 28%;
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

    input.nombre, .talla {
        width: 60%;
        padding: 8px;
        font-size: 1rem;
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

    button.add:hover{
        background-color: #5C8BFF;
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

    .button-container {
        display: flex;
        justify-content: center; 
        align-items: flex-end;   
        height: 100%;           
        margin-top: 20px;        
        
    }

    button.send {
        width: 100px;
        height: 45px;  
        margin: 0;    
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
        color: #f3ebeb;
        border: none;
        background: #37c218;
        border-radius: 25px;
    }

    button.send:hover{
        background-color: #52d339;
    }

    input:hover {
        border: 1px solid #5C8BFF;
        cursor: pointer;
    }

</style>

<div class="main-container">
    <div class="right">
        <h2 class="title-section">BackLog de Alto Nivel</h2>

        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Requerimiento</th>
                    <th>Talla</th>
                    <th>Agregar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {#each filasBacklog as fila, index}
                <tr>
                    <td>{fila.id}</td>
                    <td>
                        <input class="nombre" list="nombreOptions" bind:value={fila.nombreAudiovisual} placeholder="Seleccione o escriba un nombre" />
                        <datalist id="nombreOptions">
                            <option value="">Seleccione un nombre</option>
                            {#each opcionesAudiovisual as opcion}
                                <option value={opcion}>{opcion}</option>
                            {/each}
                        </datalist>
                    </td>
                    <td>
                        <input class="talla" list="tallaOptions" bind:value={fila.talla} placeholder="Seleccione o escriba una talla" />
                        <datalist id="tallaOptions">
                            <option value="">Seleccione una talla</option>
                            {#each opcionesTalla as opcion}
                                <option value={opcion}>{opcion}</option>
                            {/each}
                        </datalist>
                    </td>
                    <td>
                        <button class="add" on:click={agregarFilaBacklog} title="Agregar fila">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon-add" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 4v16m8 -8H4" />
                            </svg>
                        </button>
                    </td>
                    <td>
                        <button class="delete" on:click={() => eliminarFilaBacklog(fila.id)} title="Eliminar">
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

       
        <div class="button-container">
            <button class="send" on:click={enviarDatos} title="Enviar datos">
                
               <p>Enviar</p>
            </button>
        </div>
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
                        <th>Horas Recomendadas</th>
                        <th>Días de Proyecto</th>
                        <th>Semanas de Proyecto</th>
                        <th>Meses de Proyecto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{dificultadProyecto.talla}</td>
                    <td>{dificultadProyecto.descripcion}</td>
                    <td>{dificultadProyecto.escenarioOptimista.toFixed(2)}</td>
                    <td>{dificultadProyecto.escenarioRealista.toFixed(2)}</td>
                    <td>{dificultadProyecto.escenarioNegativo.toFixed(2)}</td>
                    <td>{dificultadProyecto.horasRecomendadas.toFixed(2)}</td>
                    <td>{dificultadProyecto.diasProyecto.toFixed(2)}</td>
                    <td>{dificultadProyecto.semanasProyecto.toFixed(2)}</td>
                    <td>{dificultadProyecto.mesesProyecto.toFixed(5)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    




