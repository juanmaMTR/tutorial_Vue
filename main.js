/**
 * Main.js
 * Aplicación de Vue
 * @author <jtoscanoreyes.guadalupe@alumnado.fundacionloyola.net>
 */
const app=Vue.createApp({
    data(){ //Datos qe recibe la aplicaión de Vue
        return{
            producto: 'Calcetines',
            marca: 'Marca Vue',
            descripcion: 'Hecho con la mejor lana del mundo',
            imagen: './assets/images/socks_blue.jpg',
            url: 'https://es.wikipedia.org/wiki/Calcet%C3%ADn',
            stock: 3,
            oferta: true,
            detalles: ['50% algodón', '30% lana', '20% otros materiales'],
            colores: [
                { id: 'A020', color: 'Green', imagen: './assets/images/socks_green.jpg', cantidad:20 },
                { id: 'B022', color: 'Blue', imagen: './assets/images/socks_blue.jpg', cantidad:0 }
            ],
            carro: 0,
            seleccionarVariante:0,
        }
    },
    computed:{
        titulo(){
            return this.marca+' '+this.producto
        },
        imagen(){
            return this.colores[this.seleccionarVariante].imagen
        },
        cantidad(){
            return this.colores[this.seleccionarVariante].cantidad
        }
    },
    methods:{
        anadirCarro(){
            this.carro +=1
        },
        eliminarCarro() {
            if (this.carro >= 1) {
                this.carro -= 1
            }
        },
        actualizarImagen(urlImagen){
            this.imagen= urlImagen
        },
        actualizarVariante(indice){
            this.seleccionarVariante=indice
        }
    }
})
//#app hace referencia al div id=app del html
window.onload =()=>{
    const appMontada=app.mount('#app')
}
