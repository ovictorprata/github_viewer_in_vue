function later(result) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(result)
        }, 1000);
    });
}


export const api = {
    async search_users(searchstring){
        const result = {
            items: [
                {login: 'joao'},
                {login: 'jose'},
            ]
        }
        return later(result)
    },
    async lista_repos(username){
        const result = [
            {name: 'Django', owner: {login: 'joao'}},
            {name: 'Vue.js', owner: {login: 'jose'}},
        ]
        return later(result)
    },
    async lista_contents(){
        const result = [
            { 
                name: ".github",
                path: ".github",
                type: "dir",
                path_origin: {name: 'Django', owner: {login: 'joao'}},
            },

            { 
                name: "exemplo.py",
                path: "exemplo.py",
                type: "path",
                path_origin: {name: 'Django', owner: {login: 'joao'}},
            },
  
            { 
                name: "batata.js",
                path: "batata.js",
                type: "file",
                path_origin: {name: 'Vue.js', owner: {login: 'jose'}},
            },
        ]
        return later(result)
    },
}