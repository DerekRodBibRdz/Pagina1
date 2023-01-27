class rectangulo{
    constructor(alto, ancho) {
        this.alto=alto;
        this.ancho=ancho;
    }
    calculararea(){
        return this.ancho*this.alto;
    }
}
function saludar(){
    var ancho = document.getElementById("ancho").ariaValueMax;
    var alto = document.getElementById("alto").ariaValueMax;      
    let rectangulo1 = new rectangulo(alto,ancho);
    alert(rectangulo1.calculararea());
}