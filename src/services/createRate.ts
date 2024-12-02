import { Axios } from "./axios"
export enum Status{
    APPROVED='APPROVED',
    PENDING='PENDING',
    REJECTED='REJECTED'
}
type CreateRateType={
    fromCurrency: string,
    toCurrency: string,
    offer:number,
    bid:number,
    status:Status,
    initiator:string
    authorizer?:string
}
export const createRate = (data:CreateRateType) =>{
try{
const response= Axios.post('/rates/createRate', data)
return response
// toast.success(response.messaGE)
}catch(err){
    // toast.error(err.message)
}
}