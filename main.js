var jugueteria = new Vue({
  el: '#jugueteria',
  data: {
    productos:[],
    productosFarmacia:[],
    nombre: [],
    precio: '',
    descripcion: '',
    imagen: ''
  },
  computed: {
    prodFarmacia(){
      this.nombre = data.response.nombre
    }
  },
  created(){
    fetch('https://apipetshop.herokuapp.com/api/articulos')
.then(response => response.json())
.then(data => {
  data.response.forEach(element => {
    console.log(element.nombre)
    if(element.nombre != undefined && element.tipo == 'Juguete'){
      this.productos.push(element) 
    
    }
    if(element.nombre != undefined && element.tipo == 'Medicamento'){
      this.productosFarmacia.push(element) 
    
    }
  });
  farmacia.prodFarmacia()
})
  }
})





