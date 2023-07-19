<template>
  <form class="login" @submit.prevent>
        <img :src="logo" alt="logo connexion" width="30px">
        <div class="Connexion"><i><b>CONNEXION</b></i></div>
        
        <InputComponent 
            v-for="input in inputs"
            :key="input.id"
            :types="input.types"
            :label="input.label" 
            :name="input.name"
        ></InputComponent>
    </form>
</template>
<script>
import logo from '@/assets/logo.png'
import InputComponent from './items/input-component.vue'

export default {
  name: 'LoginPageComponent',

  data: () => ({
    ghost: {
        login: '',
        password: ''
    },
    logo,
    inputs: []
  }),

  components: {
    InputComponent
  },

  mounted () {
    this.initGhost()
    this.initInputs()
  },

  methods: {
    send (data) {
        console.log(data)
        this.$emit('login', data)
    },

    initGhost () {
        this.ghost = {
            login: '',
            password: ''
        }
    },

    initInputs () {
        this.inputs = [
            { id: 1, label: 'Votre nom', name: 'nom', types: 'text', },
            { id: 2, label: 'Votre prénom', name: 'prenom', types: 'text' ,},
            { id: 3, label: 'Votre date de naissance', name: 'date', types: 'date' },
            { id: 4, label: 'Le nom de votre village', name: 'village', types: 'text' },
            { id: 5, label: 'Votre âge', name: 'age', types: 'number'},
        ]
    },
  }
}
</script>
<style scoped>
      .login
      {
          background-color: antiquewhite;
          margin: 150px;
          min-height: 400px;
          width: 450px;
          border-radius:30px ;
          box-shadow: 0px 0px 10px 10px black;
          margin-left: 450px;
          margin-bottom: 50px;
          padding: 15px 30px;
      }
      .input1,.input2
      {
          width:420px;
          height: 50px;
          margin-left: 10px;
          margin-right: 10px;
          background-color: burlywood;
          font-size: 25px;
          margin-bottom: 5px;
        }
        .Connexion
        {
            text-align: center;
            font-size: 3em;
            color: green;
        }
        a
        {
            text-align:end;
            margin-top: 10px;
            margin-right: 10px;
            margin-left: 280px;
        }
        .input3
        {
            width: 150px;
            height: 40px;
            background-color: green;
            margin-inline-start: 150px;
            border-radius: 10px;
            margin-top: 40px;
        }
        span
        {
          color: red;
        }
        p
        {
            font-size: 1.5em;
            margin-left: 10px;
            margin-bottom: 5px;
        }
        .login1
        {
            margin-top:10px ;
        }
        .motdepasse
        {
            margin-top: 10px;
        }
        
        
</style>