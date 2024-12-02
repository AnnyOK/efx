import React, { useState } from 'react';
import giticon from '../assets/images/favicon1.png';
import { MdOutlineAddToPhotos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../components/modal';
import RateTable from './tables/RateTable';
import VolumeTable from './tables/VolumeTable';
import ViewRateModal from './ViewRateModal';
import ViewVolumeModal from './ViewVolume';
// import ColoredSVG from '../components/coloredsvg';
// const ViewRateModal = React.lazy(() => import('./ViewRateModal'))
type NavButtonProp = {
	title: string;
	children: React.ReactNode;
	onClick: (to?: string) => void;
	to: string;
};
const Home = () => {
	const [active, setActive] = useState(1);
	const [viewRate, setViewRate] = useState(false);
	const [viewVolume, setViewVolume] = useState(false);
	const navigate = useNavigate();
	const handleClick = (to?: string) => {
		if (to) {
			navigate(to);
		}
	};
	const handleViewRate = () => {
		setViewRate(true);
	};
	const handleViewVolume = () => {
		setViewVolume(true);
	};
	return (
		<div className='rounded-xl shadow-md p-4 bg-white flex flex-col w-fit flex-1 '>
			<Modal
				isOpen={viewRate}
				onClose={() => setViewRate(false)}
			>
				{' '}
				<ViewRateModal/>
			</Modal>
			<Modal
				isOpen={viewVolume}
				onClose={() => setViewVolume(false)}
			>
				{' '}
<ViewVolumeModal/>			</Modal>
			<div className='flex items-stretch justify-start border-b-2 border-b-orange-500 p-0 flex-1'>
				<img
					src={giticon}
					alt=''
					width={74}
					height={74}
				/>
				<p className='text-[38px] font-bold'>
					Daily Request
				</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-x-10 gap-y-5 py-10 w-full '>
                <NavButton
					title={'ADD RATE'}
					children={<MdOutlineAddToPhotos />}
					onClick={handleClick}
					to={'addrate'}
				/>
				<NavButton
					title={'ADD VOLUME'}
					children={<MdOutlineAddToPhotos />}
					onClick={handleClick}
					to={'addvolume'}
				/>
				<NavButton
					title={'VIEW RATE'}
					children={<img src={''} />}
					onClick={handleViewRate}
					to={''}
				/>
				<NavButton
					title={'VIEW VOLUME'}
					children={''}
					onClick={handleViewVolume}
					to={''}
				/>
				
			</div>
			<div>
				<div className='md:hidden visible'>
					<div
						className={`${
							active === 1
								? ' bg-black '
								: ' bg-gray-400 '
						}rounded-ss-2xl rounded-ee-2xl text-white text-left py-2 px-10`}
						onClick={() => setActive(1)}
					>
						Rate
					</div>

					{active == 1 && <RateTable />}
					<div
						className={`${
							active === 2
								? ' bg-black '
								: ' bg-gray-400 '
						}rounded-ss-2xl rounded-ee-2xl text-white text-left py-2 px-10`}
						onClick={() => setActive(2)}
					>
						Volume Limit
					</div>

					{active == 2 && <VolumeTable />}
				</div>
				<div className='md:flex md:visible hidden'>
					<div
						onClick={() => setActive(1)}
						className={`${
							active == 1
								? ' bg-black text-white'
								: 'bg-gray-50 text-black'
						} flex justify-center border-b-2  p-4 `}
					>
						Rate
					</div>
					<div
						onClick={() => setActive(2)}
						className={`${
							active == 2
								? 'bg-black text-white'
								: 'bg-gray-50 text-blacl'
						} flex justify-center border-b-2  p-4 `}
					>
						Volume Limit
					</div>
				</div>
			</div>
			<div className='md:flex md:visible hidden'>
				{active == 1 ? (
					<RateTable />
				) : active == 2 ? (
					<VolumeTable />
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default Home;
const NavButton: React.FC<NavButtonProp> = ({
	title,
	children,
	onClick,
	to,
}) => {
	const handleClick = () => {
		if (to) {
			onClick(to);
		} else {
			onClick();
		}
	};
	return (
		<div
			className={`hover:bg-orange-100 flex items-center gap-2 justify-center flex-1 p-4 rounded-md border-2 min-w-[250px] max-w-full  border-orange-400`}
			onClick={handleClick}
		>
			{children}
			<p className='font-bold'>{title}</p>
		</div>
	);
};
