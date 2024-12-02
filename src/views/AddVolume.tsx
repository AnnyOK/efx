import React, { useState } from 'react'
import exchange from '../assets/images/exchange.png'
import { CiLogin } from 'react-icons/ci'
import { BiSolidUserX, LiaUserEditSolid } from '../utils/reacticon'

const AddVolume = () => {
    const [proceed,setProceed] = useState(false)
    const handleContinueAndEdit=() => {
            setProceed(!proceed)
            return
    }
    const handleCancelAndSubmit=() => {
        if(proceed){
            console.log('handling submit')
        }else{
            console.log("reset form")
        }
    }
  return (
    <div className="bg-white shadow-md rounded-xl p-8 w-full overflow-y-scroll">
      <div className="flex items-center justify-start border-b-2 border-b-orange-500 p-0 flex-1 ">
        <img src={exchange} alt="" width={74} height={74} />
        <p className="text-[38px] font-bold">Add Volume Limit {proceed&&'Summary'}</p>
      </div>
      <div className="flex flex-col items-start justify-start border-b-2 border-b-orange-500 py-4 flex-1  ">
        <p className="text-red-600 col-span-2 text-left">
         {
            proceed?'Please confirm all the details you have provided':' Kindly fill in the fields below'
         }
         
        </p>
        <div className="w-full flex flex-col items-start ">
          {/* <h1 className='font-bold'>Universal Global Limit($)</h1> */}
          <div className="w-full flex flex-1 gap-6  flex-wrap">
            <label htmlFor="globallimit" className='flex-1  flex flex-col items-stretch gap-2 my-2'>
              <p>Universal Global Limit($)</p>
              <input id='globallimit' type="number" placeholder='Enter Amount'
               className={`${proceed?"bg-gray-50 shadow-sm ":"bg-gray-100 shadow-sm border"}} outline-none rounded-lg p-4 min-w-[300px]`}
               readOnly={proceed}
               />
            </label>
            <label htmlFor="currencytype" className='flex-1  flex flex-col items-stretch'>
              <p>Currency Type</p>
              <input id='currencytype' type="number" placeholder='Select Currency Type' 
               className={`${proceed?"bg-gray-50 shadow-sm ":"bg-gray-100 shadow-sm border"}} outline-none rounded-lg p-4 min-w-[300px]`}
               readOnly={proceed}
               />
            </label>
          </div>
        </div>
        <div className="w-full flex flex-col ">
          <h1 className='font-bold'>Marketing Trading Timeframe</h1>
          <div className="w-full flex flex-1 gap-6 flex-wrap">
            <label htmlFor="starttime" className='flex-1  flex flex-col items-stretch'>
              <p>Start Time</p>
              <input id='starttime' type="number" placeholder='Enter Start Time'
               className={`${proceed?"bg-gray-50 shadow-sm ":"bg-gray-100 shadow-sm border"}} outline-none rounded-lg p-4 min-w-[300px]`}
               readOnly={proceed}

               />
            </label>
            <label htmlFor="endtime" className='flex-1  flex flex-col items-stretch'>
              <p>End Time</p>
              <input id='endtime' type="number" placeholder='Enter End Time' 
               className={` ${proceed?"bg-gray-50 shadow-sm ":"bg-gray-100 shadow-sm border "}} outline-none rounded-lg p-4 min-w-[300px]`}
               readOnly={proceed}

               />
            </label>
          </div>
        </div>
        <div className="w-full flex flex-col ">
          <div className="w-full flex flex-1 gap-6  flex-wrap">
            <label htmlFor="startdate" className='flex-1  flex flex-col items-stretch'>
              <p>Start Date</p>
              <input id='startdate' type="date"
               className={`${proceed?"bg-gray-50 shadow-sm ":"bg-gray-100 shadow-sm border"}} outline-none rounded-lg p-4 min-w-[300px]`}
               readOnly={proceed}

               />
            </label>
            <label htmlFor="eurooenddateffer" className='flex-1  flex flex-col items-stretch'>
              <p>End Date</p>
              <input id='enddate' type="date" 
               className={`${proceed?"bg-gray-50  ":"bg-gray-100 shadow-sm "} outlinbordere-none rounded-lg p-4 min-w-[300px]`}
               readOnly={proceed}
               />
            </label>
          </div>
        </div>
      </div>
      <div className='flex justify-end gap-4 py-2'>
      <VolumeActionButton title={`${proceed?"Edit":'Continue'}`} onClick={handleContinueAndEdit} style={'bg-white border-orange-500'}>{proceed?<LiaUserEditSolid/>:<CiLogin/>}
      </VolumeActionButton>
      <VolumeActionButton title={`${proceed?"Submit":'Cancel'}`}  onClick={handleCancelAndSubmit} style={`${proceed?"bg-gradient-to-r from-orange-500 to-red-500 text-white ":"bg-black text-white border-black"}`}>{proceed?<CiLogin/>:<BiSolidUserX/>}</VolumeActionButton>
      </div>
    </div>
  )
}

export default AddVolume
type VolumeActionButtonProp={
    title: string,
    children:React.ReactNode,
    onClick: (event:any) => void,
    style: string
}
const VolumeActionButton: React.FC<VolumeActionButtonProp> = ({
	title,
	children,
	onClick,
    style
}) => {
	
	return (
		<div
			className={`${style} flex items-center gap-2 justify-center p-2 rounded-md border-2 min-w-[250px] max-w-full`}
			onClick={onClick}
		>
			{children}
			<p className='font-bold'>{title}</p>
		</div>
	);
};
