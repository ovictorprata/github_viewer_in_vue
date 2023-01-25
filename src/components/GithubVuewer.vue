<template>
  <v-container>
    <GithubRepo @reposelected="onRepoSelected"/>
    <RepoContent :repo="repo"/>
  </v-container>
</template>
  
<script>
  import GithubRepo from './GithubRepo';
  import RepoContent from './RepoContent';
  export default {
    components: {
      GithubRepo,
      RepoContent,
    },
    data: () => ({
      repo: null
    }),
    methods: {
      onRepoSelected(repo){
        this.repo = repo
      }
    }
  }
</script>
