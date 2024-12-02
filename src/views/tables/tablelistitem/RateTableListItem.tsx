import { useState } from 'react';
// import RateTable from '../RateTable';
import { formatDateTime } from '../../../utils/formatdate';
import { FaMinusCircle, FaPlusCircle } from '../../../utils/reacticon';
type Rate={
    sessionId: string,
    status: string,
    Initiator: string,
    dateInitiated: Date,
    authorizer: string,
    approveDate: Date,
    CCY: string,
    usdbid: string,
    usdoffer: string,

}
export const RateTableListItem: React.FC<Rate> = ({
    sessionId,
    status,
    Initiator,
    dateInitiated,
    authorizer,
    approveDate,
    CCY,
    usdbid,
    usdoffer,
  }) => {
    const [view, toggleView] = useState(false)
    return (
      <>
        <div className=" flex justify-between  p-3 mx-8 text-[12px] gap-4">
          <p className=" flex-1 flex">
            <span
              className=" border rounded-full p-[2px] flex xl:hidden"
              onClick={() => toggleView(!view)}
            >
              {view ? (
                <FaMinusCircle className="text-orange-500" />
              ) : (
                <FaPlusCircle />
              )}
            </span>
            {sessionId}
          </p>
          <p
            className={`${
              status ? 'text-green-600' : ' text-red'
            } text-center hidden sm:flex  flex-1`}
          >
            {status}
          </p>
          <p className="  text-center hidden md:flex  flex-1">{Initiator}</p>
          <p className="  text-center hidden lg:flex  flex-1">{formatDateTime(dateInitiated)}</p>
          <p className=" text-center hidden xl:flex  flex-1">{authorizer}</p>
          <p className=" text-center hidden xl:flex  flex-1">{formatDateTime(approveDate)}</p>
          <p className=" text-center hidden xl:flex  flex-1">{CCY}</p>
          <p className=" text-center hidden xl:flex  flex-1">{usdbid}</p>
          <p className=" text-center hidden xl:flex  flex-1">{usdoffer}</p>
        </div>
        <div className="w-fit mx-8">
          {view && (
            <>
              <span className=" text-left flex sm:hidden  flex-1 border-b ">
                Status : {status}
              </span>
              <span className=" text-left flex md:hidden  flex-1 border-b ">
              Initiator: {Initiator}
              </span>
              <span className=" text-left flex lg:hidden  flex-1 border-b ">
                Date Initiated : {formatDateTime(dateInitiated)}
              </span>
              <span className=" text-left flex xl:hidden  flex-1 border-b ">
                Authorizer : {authorizer}
              </span>
              <span className=" text-left flex xl:hidden  flex-1 border-b ">
                Approve Date : {formatDateTime(approveDate)}
              </span>
              <span className=" text-left flex xl:hidden  flex-1 border-b ">
                CCY : {CCY}
              </span>
              <span className=" text-left flex xl:hidden  flex-1 border-b ">
            USD BID : {usdbid}
              </span>
              <span className=" text-left flex xl:hidden  flex-1 border-b ">
                USD Offer : {usdoffer}
              </span>
            </>
          )}
        </div>
      </>
    )
  }