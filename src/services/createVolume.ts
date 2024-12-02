import { Axios } from "./axios"

type CreateVolumeType={
    universalGlobalLimit: number,
    currencyType: string,
    startTime:string,
    endTime:string,
    startDate:string,
    endDate:string
}
export const createVolume = (data:CreateVolumeType) =>{
try{
const response= Axios.post('volume', data)
return response
// toast.success(response.messaGE)
}catch(err){
    // toast.error(err.message)
}
}