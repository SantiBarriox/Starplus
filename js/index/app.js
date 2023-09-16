// Proteger ruta 
const estaLogueado = JSON.parse(sessionStorage.getItem("estaLogueado"))
if(estaLogueado){

    window.location.href = "./pages/admin.html"
}

