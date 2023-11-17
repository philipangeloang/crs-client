import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";

type ModalProps = {
  children: ReactNode; // Accepts a ReactNode that will be inserted as the modal body
  modalHeading?: string; // The title that appears on top of the modal (only in HeadingModal and FullModal)
  onClose?: () => void;  // Happens when the modal is closed or dismissed
  onProceed?: () => void; // Happens when the modal is proceeded through or accepted
  closeName?: string; // Name that appears as the footing close button (only in CloseProceedModal and FullModal)
  proceedName?: string;  // Name that appears as the footing proceed button (only in CloseProceedModal and FullModal)
  closeButton?: boolean; // The toggle whether the heading close X button appears or not (only in HeadingModal and FullModal)
};

// This can be used with an AND statement with a boolean var that determines whether this current modal is displaying or not
// e.g. { exampleModalOpen && NameOfModalFunction(<parameters>) }

/* --------------- GENERIC MODAL --------------- */
// This can have any content within the modal, it only requires a children parameter with ReactNode type
// NOTE: This does not have a mechanism that closes the modal. This is only to allow custom modals.

export const GenericModal: React.FC<ModalProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    (ref.current?.offsetParent !== null) ? setIsVisible(true) : setIsVisible(false);
  }, []);

  return (
    <>
      <div className={`${isVisible ? 'opacity-100' : 'opacity-0' } ease-out duration-300 relative z-10 transition-opacity`}>
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50"/>
      </div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' } ease-out duration-300 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg`}>
            <div className="bg-white px-4 pb-4 pt-4 sm:p-4 sm:pb-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* --------------- CLOSE-PROCEED MODAL --------------- */
// This can have any content within the modal, it requires a children parameter with ReactNode type.
// It also requires two functions that triggers when 'CLOSE' or 'PROCEED' is clicked.
// It also accepts two optional functions to change the 'CLOSE' or 'PROCEED' texts.

export const CloseProceedModal: React.FC< ModalProps > = ({ children, onClose, onProceed, closeName = "Close", proceedName = "Proceed"}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    (ref.current?.offsetParent !== null) ? setIsVisible(true) : setIsVisible(false);
  }, []);

  return (
    <>
      <div className={`${isVisible ? 'opacity-100' : 'opacity-0' } ease-out duration-300 relative z-10 transition-opacity`}>
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50"/>
      </div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' } ease-out duration-300 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg`}>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              {children}
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm duration-300 hover:bg-red-500 sm:ml-3 sm:w-auto"
                onClick={onProceed}
              >
                {proceedName}
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 duration-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={onClose}
              >
                {closeName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* --------------- HEADING MODAL --------------- */
// This can have any content within the modal, it requires a children parameter with ReactNode type.
// It also requires a functions that triggers when 'CLOSE' clicked.
// The 'closeButton' parameter can be set to false to remove the close button.

export const HeadingModal: React.FC< ModalProps > = ({ children, modalHeading = "", closeButton = true, onClose}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    (ref.current?.offsetParent !== null) ? setIsVisible(true) : setIsVisible(false);
  }, []);

  return (
    <>
      <div className={`${isVisible ? 'opacity-100' : 'opacity-0' } ease-out duration-300 relative z-10 transition-opacity`}>
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50"/>
      </div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' } ease-out duration-300 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg`}>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row sm:px-6 lg:text-lg justify-between items-center font-bold">
              {modalHeading}
              {closeButton && (
                <div onClick={onClose}>
                  <AiOutlineClose
                    size={24}
                    className="cursor-pointer hover:scale-110"
                  />
                </div>
              )}
            </div>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* --------------- FULL MODAL --------------- */
// This can have any content within the modal, it requires a children parameter with ReactNode type.
// It also requires two functions that triggers when 'CLOSE' or 'PROCEED' is clicked.
// It also accepts two optional functions to change the 'CLOSE' or 'PROCEED' texts.

export const FullModal: React.FC< ModalProps > = ({ children, modalHeading = "", closeButton = true, onClose, onProceed, closeName = "Close", proceedName = "Proceed"}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    (ref.current?.offsetParent !== null) ? setIsVisible(true) : setIsVisible(false);
  }, []);

  return (
    <>
      <div className={`${isVisible ? 'opacity-100' : 'opacity-0' } ease-out duration-300 relative z-10 transition-opacity`}>
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50"/>
      </div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' } ease-out duration-300 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg`}>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row sm:px-6 lg:text-lg justify-between items-center font-bold">
              {modalHeading}
              {closeButton && (
                <div onClick={onClose}>
                  <AiOutlineClose
                    size={24}
                    className="cursor-pointer duration-100 hover:opacity-50"
                  />
                </div>
              )}
            </div>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              {children}
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm duration-300 hover:bg-red-500 sm:ml-3 sm:w-auto"
                onClick={onProceed}
              >
                {proceedName}
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 duration-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={onClose}
              >
                {closeName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};