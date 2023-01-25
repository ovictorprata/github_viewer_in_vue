<template>
  <v-container>
    <GithubRepo @reposelected="onRepoSelected"/>
    <h1>Issues</h1>
    <!-- <GithubIssues :repo="repo"/> -->
    <h1>Repo</h1>
    <RepoContent :repo="repo"/>
  </v-container>
</template>
  
<script>
  import GithubRepo from './GithubRepo';
  // import GithubIssues from './GithubIssues';
  import RepoContent from './RepoContent';
  export default {
    components: {
      GithubRepo,
      // GithubIssues,
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
