const oficial = document.querySelector("#dolaroficial");
const blue = document.querySelector("#dolarblue");
const ContadoLiqui = document.querySelector("#liquidez");
const promedio = document.querySelector("#dolarpromedio");
const bolsa = document.querySelector("#dolarbolsa");
const turista = document.querySelector("#dolarturista");
const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

/* Dolar Oficial */
window.onload = dolarOficial();
setInterval(() => {
    dolarOficial()
}, 900000);
/* Dolar Blue */
window.onload = dolarBlue();
setInterval(() => {
    dolarBlue()
}, 900000);
/* Liquidez */
window.onload = liqui();
setInterval(() => {
    liqui()
}, 900000);
/* Dolar Promedio */
window.onload = dolarPromedio();
setInterval(() => {
    dolarPromedio()
}, 900000);
/* Dolar Bolsa */
window.onload = dolarBolsa();
setInterval(() => {
    dolarBolsa()
}, 900000);
/* Dolar Turista */
window.onload = dolarTurista();
setInterval(() => {
    dolarTurista()
}, 900000);(Priscilla)


/* Dolar Oficial funcion */
function dolarOficial(){
    fetch(url)
        .then(response=>response.json())
        .then(data => {
            console.log(data)
            oficial.innerHTML = `
            <div class"d-flex flex-column justify-content-center align-items-center p-0 m-0">
                <div class="precioCss d-flex justify-content-evenly m-0">
                    <div class="m-0 p-0">
                        <p><b>$ ${data['0'].casa.compra}</b></p>
                    </div>
                    <div class="m-0 p-0">
                        <p><b>$ ${data['0'].casa.venta}</b></p>
                    </div>
                </div>
            
                <div class="variaCss d-flex justify-content-center align-items-center m-0">
                    <div>
                        <p>VARIACIÓN: +${data['0'].casa.variacion}%</p>
                    </div>
                </div>
                
                <div class="fechaCss d-flex justify-content-center align-item-end m-0">
                    <div>
                        <p>ACTUALIZADO: ${date} HORA:  ${time}</p>
                    </div>
                </div>
            </div>
            `;
        })
}
/* Dolar Blue funcion */
function dolarBlue(){
    fetch(url)
        .then(response=>response.json())
        .then(data => {
            blue.innerHTML = `
            <div class"d-flex flex-column justify-content-center align-items-center p-0 m-0">
                <div class="precioCss d-flex justify-content-evenly m-0">
                    <div class="m-0 p-0">
                        <p><b>$ ${data['1'].casa.compra}</b></p>
                    </div>
                    <div class="m-0 p-0">
                        <p><b>$ ${data['1'].casa.venta}</b></p>
                    </div>
                </div>
            
                <div class="variaCss d-flex justify-content-center align-items-center m-0">
                    <div>
                        <p>VARIACIÓN: ${data['1'].casa.variacion}%</p>
                    </div>
                </div>
                
                <div class="fechaCss d-flex justify-content-center align-item-end m-0">
                    <div>
                        <p>ACTUALIZADO: ${date} HORA:  ${time}</p>
                    </div>
                </div>
            </div>
            `;
        })
