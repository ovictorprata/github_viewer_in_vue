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
                  <tr v-for="(content, i) in contents" :key="content.name + i">
                        <v-icon v-if="content.type == 'file'">
                          mdi-file
                        </v-icon>
                        <v-icon v-else @click="openPath(content)">
                          mdi-folder
                        </v-icon>
                    <td @click='openPath(content.path)'>
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
      }),
      methods: {
        async listContents(){
          this.loading = true
          const maiscontents = await api.lista_contents(this.repo.owner.login, this.repo.name)
          this.contents = this.contents.concat(maiscontents)
          this.loading = false
        },
        async openPath(path){
          this.loading = true
          const maiscontents = await api.lista_contents(this.repo.owner.login, this.repo.name, path)
          this.contents = maiscontents
          this.loading = false
        }
      },
      watch: {
        repo(){
          this.contents = []
          this.listContents()   
          }
        }
      }
  </script>
  