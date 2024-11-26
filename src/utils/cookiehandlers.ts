import cookie from 'cookie'
 export const getAuth =(req:Request)=>{
    const cookies= cookie.parse(req.headers.cookie)
    return cookies.auth
 }