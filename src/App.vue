<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="text" size="lg" v-model="usuario.email" placeholder="Informe o email"></b-form-input>
			</b-form-group>
			<hr>
			<b-button size="lg" variant="primary" @click="salvar">Salvar</b-button>
			<b-button size="lg" class="ml-2" variant="success" @click="obterUsuarios">Obter Usuarios</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario,id) in usuarios" :key='id'>
				<strong>Nome: </strong> {{id}} <br>
				<strong>Nome: </strong> {{usuario.nome}} <br>
				<strong>Email: </strong> {{usuario.email}} <br>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data(){
		return {
			usuarios:[],
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		salvar(){
			this.$http.post('usuarios.json', this.usuario)
			.then( resp => {
				this.usuario.nome ='',
				this.usuario.email = ''
			})
		},
		obterUsuarios(){
			//não é preciso usar .get
			//é possivel usar /usuarios 
			this.$http('usuarios.json').then(resp => {
				this.usuarios = resp.data
				console.log(this.usuarios)
			})
		}
	}

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
