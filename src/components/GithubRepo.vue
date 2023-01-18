<template>
  <div>
    <v-autocomplete
        v-model="user"
        :items="userlist"
        :loading="userloading"
        :search-input.sync="usersearch"
        item-text="login"
    />
  </div>
</template>

<script>

  import {debouncerdecorator} from '@/helpers/debouncer.js'

  export default {
    data: () => ({
      user: null,
      usersearch: null,
      userlist: [],
      userloading: false,
    }),
    methods: {
      procuraUsuariosGithub: debouncerdecorator(function () { // atenção: não use ()=>{} aqui. vai quebrar o decorator
        debugger
        console.log('faz de conta que eu perguntei pro github: ' + this.usersearch)
        this.userloading = true
        setTimeout(() => {
          this.userlist = [
            {login: 'joao'},
            {login: 'jose'}
          ]
          this.userloading = false
        }, 1000)
      }, 500)
    },
    watch: {
      usersearch () {
        this.procuraUsuariosGithub()
      }
    }
  }
</script>
