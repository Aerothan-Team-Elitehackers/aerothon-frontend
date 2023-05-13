let devHost='https://aerothan-elite-hackers.netlify.app/.netlify/functions/api'
let prodHost = 'https://aerothan-elite-hackers.netlify.app/.netlify/functions/api'

export const ComponentsEndPoints={
    GET_FABRICATION_TABLE:{
        DEV:devHost+"/fabrication",
        PROD:prodHost+"/fabrication"
    },
    GET_ASSEMBLY_TABLE:{
        DEV:devHost+"/assembly",
        PROD:prodHost+"/assembly"
    },
    GET_SUB_ASSEMBLY_TABLE:{
        DEV:devHost+"/sub_assembly",
        PROD:prodHost+"/sub_assembly"
    },
    POST_LOGIN_CREDS:{
        DEV:devHost+"/auth/signin",
        PROD:prodHost+"/auth/signin"
    }
}