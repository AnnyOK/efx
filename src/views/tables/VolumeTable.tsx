import React, { useState } from 'react';
import { FaArrowDownLong, FaArrowUpLong } from '../../utils/reacticon';
import { RateTableListItem } from './tablelistitem/RateTableListItem';
import { VolumeTableListItem } from './tablelistitem/VolumeTableListItem';

const VolumeTable = () => {
    const [formData, setFormData] = useState({ noPerPage: 10, search: '' })
    const [sortOrder, setSortOrder] = useState({ sortBy: '', order: -1 })
    const selectSortMode = (param: string) => {
      const order = sortOrder.order >= 0 ? -1 : 1
      setSortOrder({ sortBy: param, order })
    }
    return (
      <div className="w-full">
        <div className="flex justify-end md:justify-between my-8 px-8 flex-wrap ">
          <label htmlFor="noPerPage">
            Show{' '}
            <input
              name="noPerPage"
              type="number"
              value={formData.noPerPage}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  noPerPage: Number(e.target.value),
                })
              }
              className=" border-2 outline-none w-[50px] py-1 rounded-md text-center"
            />{' '}
            entries
          </label>
          <label htmlFor="search">
            search:{' '}
            <input
              name="search"
              type="search"
              value={formData.search}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  search: e.target.value,
                })
              }
              className="border-2 outline-none w-[200px] py-1 rounded-md"
            />
          </label>
        </div>
        {/* <div className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 xl:grid-col-5 2xl:grid-cols-7 bg-black text-white p-3 mx-8 text-[12px]'> */}
        <div className=" flex justify-between  bg-black text-white p-3 mx-8 text-[12px] gap-4">
          {/* 1 */}
          <p
            onClick={() => selectSortMode('SessionId')}
            className="flex justify-between items-center text-center min-w-fit  flex-1 "
          >
            Session Id
            <span className="flex tracking-tighter text-[0.8rem]">
              <FaArrowUpLong
                className={`${
                  sortOrder.order >= 0 && sortOrder.sortBy === 'SessionId'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
              <FaArrowDownLong
                className={`${
                  sortOrder.order < 0 && sortOrder.sortBy === 'SessionId'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
            </span>
          </p>
          {/* 1 */}
          <p
            onClick={() => selectSortMode('Status')}
            className=" justify-between items-center text-center  min-w-fit hidden sm:flex   flex-1 "
          >
            Status
            <span className="flex tracking-tighter text-[0.8rem]">
              <FaArrowUpLong
                className={`${
                  sortOrder.order >= 0 && sortOrder.sortBy === 'Status'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
              <FaArrowDownLong
                className={`${
                  sortOrder.order < 0 && sortOrder.sortBy === 'Status'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
            </span>
          </p>
          {/* 2 */}
          <p
            onClick={() => selectSortMode('GlobalTransfer')}
            className=" justify-between items-center text-center hidden md:flex  min-w-fit  flex-1"
          >
            Initiator
            <span className="flex tracking-tighter text-[0.8rem]">
              <FaArrowUpLong
                className={`${
                  sortOrder.order >= 0 && sortOrder.sortBy === 'GlobalTransfer'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
              <FaArrowDownLong
                className={`${
                  sortOrder.order < 0 && sortOrder.sortBy === 'GlobalTransfer'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
            </span>
          </p>
          {/* 3 */}
          <p
            onClick={() => selectSortMode('CallbackUrl')}
            className=" justify-between items-center text-center hidden lg:flex  min-w-fit  flex-1"
          >
            Date Initiated
            <span className="flex tracking-tighter text-[0.8rem]">
              <FaArrowUpLong
                className={`${
                  sortOrder.order >= 0 && sortOrder.sortBy === 'CallbackUrl'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
              <FaArrowDownLong
                className={`${
                  sortOrder.order < 0 && sortOrder.sortBy === 'CallbackUrl'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
            </span>
          </p>
          {/* 4 */}
          <p
            onClick={() => selectSortMode('Notification')}
            className=" justify-between items-center text-center hidden xl:flex  min-w-fit  flex-1"
          >
            Authorizer
            <span className="flex tracking-tighter text-[0.8rem]">
              <FaArrowUpLong
                className={`${
                  sortOrder.order >= 0 && sortOrder.sortBy === 'Notification'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
              <FaArrowDownLong
                className={`${
                  sortOrder.order < 0 && sortOrder.sortBy === 'Notification'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
            </span>
          </p>
          {/* 5 */}
          <p
            onClick={() => selectSortMode('OnboardedCompany')}
            className=" justify-between items-center text-center hidden xl:flex  flex-1"
          >
            Approve Date{' '}
            <span className="flex tracking-tighter text-[0.8rem]">
              <FaArrowUpLong
                className={`${
                  sortOrder.order >= 0 && sortOrder.sortBy === 'OnboardedCompany'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
              <FaArrowDownLong
                className={`${
                  sortOrder.order < 0 && sortOrder.sortBy === 'OnboardedCompany'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
            </span>
          </p>
          {/* 6 */}
          <p
            onClick={() => selectSortMode('DateCreated')}
            className=" justify-between items-center text-center hidden xl:flex  flex-1"
          >
            Currency Type
            <span className="flex tracking-tighter text-[0.8rem]">
              <FaArrowUpLong
                className={`${
                  sortOrder.order >= 0 && sortOrder.sortBy === 'DateCreated'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
              <FaArrowDownLong
                className={`${
                  sortOrder.order < 0 && sortOrder.sortBy === 'DateCreated'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
            </span>
          </p>
          <p
            onClick={() => selectSortMode('usdbid')}
            className=" justify-between items-center text-center hidden xl:flex  flex-1"
          >
    Global Limit($)
            <span className="flex tracking-tighter text-[0.8rem]">
              <FaArrowUpLong
                className={`${
                  sortOrder.order >= 0 && sortOrder.sortBy === 'usdbid'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
              <FaArrowDownLong
                className={`${
                  sortOrder.order < 0 && sortOrder.sortBy === 'usdbid'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
            </span>
          </p>
          <p
            onClick={() => selectSortMode('usdoffer')}
            className=" justify-between items-center text-center hidden xl:flex  flex-1"
          >
            Start Time
            <span className="flex tracking-tighter text-[0.8rem]">
              <FaArrowUpLong
                className={`${
                  sortOrder.order >= 0 && sortOrder.sortBy === 'usdoffer'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
              <FaArrowDownLong
                className={`${
                  sortOrder.order < 0 && sortOrder.sortBy === 'usdoffer'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
            </span>
          </p>
          <p
            onClick={() => selectSortMode('usdoffer')}
            className=" justify-between items-center text-center hidden xl:flex  flex-1"
          >
            End Time
            <span className="flex tracking-tighter text-[0.8rem]">
              <FaArrowUpLong
                className={`${
                  sortOrder.order >= 0 && sortOrder.sortBy === 'usdoffer'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
              <FaArrowDownLong
                className={`${
                  sortOrder.order < 0 && sortOrder.sortBy === 'usdoffer'
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              />
            </span>
          </p>
        </div>
        {/* {'map list values'} */}
        <VolumeTableListItem
          sessionId={'session'}
          status={'session'}
          Initiator={'session'}
          dateInitiated={new Date()}
          authorizer={'session'}
          approveDate={new Date()}
          currencyType={'session'}
          globalLimit={'session'}
          startTime={'session'}
          endTime={'session'}
   
        />
        <div className="flex flex-wrap justify-end md:justify-between px-10">
          showing 1 to 10 of 1 entries
          <div className="text-orange-500 font-bold">
            {' '}
            <button className="outline-none bg-white text-gray-600 capitalise">
              Previous
            </button>{' '}
            1{' '}
            <button className="outline-none bg-white text-gray-600 capitalise">
              Next
            </button>
          </div>
        </div>
      </div>
    )
};

export default VolumeTable