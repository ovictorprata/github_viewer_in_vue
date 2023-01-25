<template>
    <div>
      <v-row>
        <v-col cols="12">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Content</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="content in contents" :key="content.name">
                    <td>{{ content.name }}</td>
                  </tr>
                </tbody>
              </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>
          <v-btn color="primary" v-if="temmais" @click="listaContents">MAIS</v-btn>
        </v-col>
      </v-row>

      <h1>TESTE TREE</h1>
      <v-treeview
        v-model="tree"
        :open="initiallyOpen"
        :items="items"
        activatable
        item-key="name"
        open-on-click
      >
        <template v-slot:prepend="{ item, open }">
          <v-icon v-if="!item.file">
            {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
          </v-icon>
          <v-icon v-else>
            {{ files[item.file] }}
          </v-icon>
        </template>
      </v-treeview>
    </div>
  </template>
  
  <script>
  
    import {api} from '~api'
  
    export default {
      props: ['repo'],
      data: () => ({
        contents: [],
        loading: false,
        temmais: false,
      }),
      methods: {
        async listaContents(){
          this.loading = true
          const maiscontents = await api.lista_contents(this.repo.owner.login, this.repo.name)
          console.log(this.maiscontents)
          this.contents = this.contents.concat(maiscontents)
          this.loading = false
          debugger
        }
      },
      watch: {
        repo(){
          this.contents = []
          debugger
          this.listaContents()   
          }
        }
      }
  </script>
  