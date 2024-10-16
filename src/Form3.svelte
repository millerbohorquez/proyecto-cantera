<script>
    //BackLog de Alto Nivel
    let opcionesTalla = [
        { sigla: "XS", nombre: "Extra-Small" },
        { sigla: "S", nombre: "Small" },
        { sigla: "M", nombre: "Medium" },
        { sigla: "L", nombre: "Large" },
        { sigla: "XL", nombre: "Extra-Large" }
    ];

    let filas = [
        { talla: "XS", sigla: "Extra-Small", puntosMin: 1, puntosMax: 2 },
        { talla: "S", sigla: "Small", puntosMin: 3, puntosMax: 5 },
        { talla: "M", sigla: "Medium", puntosMin: 8, puntosMax: 13 },
        { talla: "L", sigla: "Large", puntosMin: 21, puntosMax: 34 },
        { talla: "XL", sigla: "Extra-Large", puntosMin: 55, puntosMax: 89 }
    ];

    function agregarFila() {
        filas = [...filas, { talla: "", sigla: "", puntosMin: 0, puntosMax: 0 }];
    }

    //Promedios
    let promedios = [
        { talla: "XS", conteo: 2, peso: 2 },
        { talla: "S", conteo: 0, peso: 0 },
        { talla: "M", conteo: 1, peso: 3 },
        { talla: "L", conteo: 0, peso: 0 },
        { talla: "XL", conteo: 1, peso: 5 }
    ];

    let promedioPeso = 0;
    let totalPeso = 0;
    let totalConteo = 0;

    $: totalConteo = promedios.reduce((acc, curr) => acc + curr.conteo, 0);
    $: totalPeso = promedios.reduce((acc, curr) => acc + curr.peso, 0);
    $: promedioPeso = totalPeso / totalConteo || 0;
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
    height: 90%;
    max-width: 1000px;
    background: #f2f8ff;
    border-radius: 25px;
    padding: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.title-section {
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    font-family: "Open Sans", sans-serif;
    color: #04132a;
    margin-bottom: 20px;
}

form {
    display: grid; 
    gap: 50px;
    align-items: center;
}

.form-group {
    align-items: center;
    text-align: center;
}

.tabla-pro {
    width: 60%;
    margin-left: 18%;
}

.tabla-nivel {
    width: 80%;
    margin-left: 9%;
}

input[type="text"], input[type="number"], input[type="date"], textarea, select {
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

input[type="text"]:hover, input[type="number"]:hover, input[type="date"]:hover, textarea:hover, select:hover {
    border: 2px solid #5C8BFF;
    cursor: pointer;
}

select {
    appearance: none; 
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><polygon points="0,0 10,0 5,7" fill="black"/></svg>') no-repeat right 10px center; /* Agrega una flecha personalizada */
    background-color: #f2f8ff; 
    padding-right: 30px; 
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

/* Footer */
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
    <div class="right">
        <h2 class="title-section">BackLog de Alto Nivel</h2>
        <form>
            <div class="form-group">
                <table class="tabla-nivel">
                    <thead>
                        <tr>
                            <th>Talla</th>
                            <th>Sigla</th>
                            <th>Puntos de Historia Mínimo</th>
                            <th>Puntos de Historia Máximo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each filas as fila, i}
                        <tr>
                            
                            <td>
                                <select bind:value={fila.talla}>
                                    <option value="" disabled selected>Selecciona una talla</option>
                                    {#each opcionesTalla as opcion}
                                        <option value={opcion.sigla}>{opcion.nombre}</option>
                                    {/each}
                                </select>
                            </td>
                            
                            <td>
                                <select bind:value={fila.sigla}>
                                    <option value="" disabled selected>Selecciona una sigla</option>
                                    {#each opcionesTalla as opcion}
                                        <option value={opcion.nombre}>{opcion.sigla}</option>
                                    {/each}
                                </select>
                            </td>
                            <td><input type="number" bind:value={fila.puntosMin} placeholder="Puntos Mínimos" /></td>
                            <td><input type="number" bind:value={fila.puntosMax} placeholder="Puntos Máximos" /></td>
                        </tr>
                        {/each}
                    </tbody>
                </table>
                <button type="button" on:click={agregarFila}>Agregar fila</button>
            </div>
        </form>

        <hr style="margin: 40px 0;" />

        <h2 class="title-section">Promedios</h2>
        <form>
            <div class="form-group">
                <table class="tabla-pro">
                    <thead>
                        <tr>
                            <th>Talla</th>
                            <th>Conteo</th>
                            <th>Peso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each promedios as fila}
                        <tr>
                            <td>{fila.talla}</td>
                            <td><input type="number" bind:value={fila.conteo} /></td>
                            <td><input type="number" bind:value={fila.peso} /></td>
                        </tr>
                        {/each}
                    </tbody>
                </table>

                <h3>Promedios Calculados:</h3>
                <p>Peso Promedio: {promedioPeso.toFixed(2)}</p>
            </div>
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