import React from "react"
type ModalProps ={
    isOpen: boolean;
    onClose:()=>void;
    children:React.ReactNode
}
export const Modal:React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null
  
    return (
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-transparent opacity-100 flex justify-center items-center z-[999]"
        onClick={onClose}
      >
        <div className="w-[100%] h-[100vh] bg-black absolute opacity-60"></div>
        <div
          className="bg-white p-[50px] w-fit h-fit rounded-md relative opacity-100 z-[1000] border-gray-500 border flex flex-col justify-evenly items-stretch "
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-[10px] right-[10px] bg-transparent p-3 text-[24px] cursor-pointer text-red-600 hover:text-red-900 font-bold "
            onClick={onClose}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    )
  }
  