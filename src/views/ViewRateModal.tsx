import React, { useState } from 'react';
import { FaRegThumbsUp } from '../utils/reacticon';
type Rate = {
	currency: string;
	bid: number;
	offer: number;
};
type RateType = {
	ii: Rate;
	iii: Rate;
	i: Rate;
};
const ViewRateModal = () => {
	const [exchangeRate, updateExchangeRate] = useState<RateType>({
		i: { currency: 'USD/NGN', bid: 0, offer: 0 },
		ii: { currency: 'GBP/NGN', bid: 0, offer: 0 },
		iii: { currency: ' EUR/NGN', bid: 0, offer: 0 },
	});
	return (
		<div className=' flex flex-col min-w-[300px] items-center text-left m-0 p-0relative top-[0] animate-animateDrop '>
			<h1 className='text-left place-self-start text-[18px]'>Exchange Rate</h1>
			<div className='flex flex-1 w-full justify-between'>
				<h3>CCY</h3>
				<h3>BID</h3>
				<h3>OFFER</h3>
			</div>
			<div className='flex flex-1 w-full justify-between'>
				<h3>{exchangeRate.i.currency}</h3>{' '}
				<p>{exchangeRate.i.bid}</p>{' '}
				<p>{exchangeRate.i.offer}</p>
			</div>
			<div className='flex flex-1 w-full justify-between'>
				<h3>{exchangeRate.ii.currency}</h3>{' '}
				<p>{exchangeRate.ii.bid}</p>{' '}
				<p>{exchangeRate.ii.offer}</p>
			</div>
			<div className='flex flex-1 w-full justify-between'>
				<h3>{exchangeRate.iii.currency}</h3>{' '}
				<p>{exchangeRate.iii.bid}</p>{' '}
				<p>{exchangeRate.iii.offer}</p>
			</div>
<div className='border-b-2 border-b-orange-400 w-full flex justify-center p-2'>
<span className='text-[12px] text-center '>Last Updated: Thursday 29th August, 2024
</span>
</div>
           
            <OkButton title={'Ok'} children={<FaRegThumbsUp/>} onClick={()=>""} style={'text-white bg-gradient-to-r from-orange-500 to-red-500 w-fit  '}/>
		</div>
	);
};

export default ViewRateModal;
type OkButtonProp={
    title: string,
    children:React.ReactNode,
    onClick: (event:any) => void,
    style: string
}
const OkButton: React.FC<OkButtonProp> = ({
	title,
	children,
	onClick,
    style
}) => {
	
	return (
		<div
			className={`${style} flex items-center place-self-end m-4 gap-2 justify-center p-2 px-6 rounded-md border-2  max-w-full`}
			onClick={onClick}
		>
			{children}
			<p className='font-bold'>{title}</p>
		</div>
	);
};
