let devHost='https://aerothan-elite-hackers.netlify.app/.netlify/functions/api'
let prodHost = 'https://aerothan-elite-hackers.netlify.app/.netlify/functions/api'

export const ComponentsEndPoints={
    GET_FABRICATION_TABLE:{
        DEV:devHost+"/<rest api url>",
        PROD:prodHost+"/<rest api url>"
    },
    GET_ASSEMBLY_TABLE:{
        DEV:devHost+"/<rest api url>",
        PROD:prodHost+"/<rest api url>"
    },
    GET_SUB_ASSEMBLY_TABLE:{
        DEV:devHost+"/<rest api url>",
        PROD:prodHost+"/<rest api url>"
    },
    POST_LOGIN_CREDS:{
        DEV:devHost+"/<rest api url>",
        PROD:prodHost+"/<rest api url>"
    }
}