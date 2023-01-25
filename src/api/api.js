async function fetch_all_pages(url){
    let vaiindo = true
    let result = []
    let page = 1
    while(vaiindo){
        const response = await fetch(`${url}?page=${page}`)
        const tmpitems = await response.json()
        if(tmpitems.length > 0){
            result = result.concat(tmpitems)
            page++
        } else {
            vaiindo = false
        }
    }
    return result
}

export const api = {
    async search_users(searchstring){
        const url = `https://api.github.com/search/users?q=${searchstring}`
        const response = await fetch(url)
        return await response.json()
    },
    async lista_repos(username){
        const url = `https://api.github.com/users/${username}/repos`
        const data = await fetch_all_pages(url)
        return data
    },
    async lista_issues(owner, name, page) {
        const url = `https://api.github.com/repos/${owner}/${name}/issues?page=${page}`
        const response = await fetch(url)
        const response_json = await response.json()
        return response_json
    },
    async lista_contents(owner, name) {
        const url = `https://api.github.com/repos/${owner}/${name}/contents/`
        debugger
        const response = await fetch(url)
        const response_json = await response.json()
        return response_json
    }
}
