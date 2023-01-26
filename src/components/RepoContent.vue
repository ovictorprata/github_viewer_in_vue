<template>
    <div>
      <v-row>
        <v-col cols="12">
          <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Name
                </th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="(content, i) in contents" 
                :key="content.name + i"
              >
                <td>
                  <v-icon v-if="content.type == 'file'">
                      mdi-file
                  </v-icon>
                  <v-icon v-else @click="openPath(content.path)">
                      mdi-folder 
                  </v-icon>
                {{ content.name }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>
          <v-btn color="primary" v-if="temmais" @click="listContents">MAIS</v-btn>
        </v-col>
      </v-row>
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
        actualPath: null,
        headers: [
        {
          text: 'File',
          align: 'start',
          sortable: false,
          value: 'name',
        },
      ],
      }),
      methods: {
        async listContents(){
          this.loading = true
          const maiscontents = await api.lista_contents(this.repo.owner.login, this.repo.name)
          this.contents = this.contents.concat(maiscontents)
          this.loading = false
        },
        async openPath(path){
          let gitPath = []
          const maiscontents = await api.lista_contents(this.repo.owner.login, this.repo.name, path)
          this.contents = maiscontents
          gitPath.push(this.repo.owner.login, this.repo.name, path)
          this.actualPath = gitPath.join('/')
        }
      },
      watch: {
        repo(){
          console.log('repo watch!')
          if(this.repo){
            this.contents = []
            this.listContents()   
          }
        }
      }
    }
  </script>
  