const app = new Vue({
	el:'#app',
	data:{
		title:'Ejercicio usando VUEjs',
		frutas:[],
		frutaName: '',
		frutaCant: 0,
		total: 0,
		max:700
	},
	methods:{
		addFruta (){
			if (this.frutaName == '') {
				alert('Ingresa un nombre');
			}else{
				this.frutas.push({
					name: this.frutaName,
					cant: this.frutaCant
				});
				this.frutaName = '';
				this.frutaCant = 0;
			}
		}
	},

	computed:{
		suma(){
			this.total = 0;
			for (fruta of this.frutas) {
				this.total += fruta.cant; 
			}
			return this.total;
		},
		porcentaje(){
			return Math.round((this.suma*100)/this.max);
		},
		color(){
			return{
				'bg-success': this.porcentaje <= 55,
				'bg-warning': this.porcentaje > 55 && this.porcentaje < 85,
				'bg-danger':  this.porcentaje >= 85
			}
		}
	}
})