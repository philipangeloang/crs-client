// SAMPLE USAGE: <Pager from={1} to={10} total={200} current_page={page} last_page={10} on_page_change={setPage} />

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

type PagerProps = {
  from: number;
  to: number;
  total: number;
  current_page: number;
  last_page: number;
  on_page_change: Dispatch<SetStateAction<number>>;
};

interface Pages {
  i: number;
}

export const Pager: React.FC<PagerProps> = ({ from, to, total, current_page, last_page, on_page_change }) => {
  const [pageNumbers, setPageNumbers] = useState<Pages[]>([]);

  useEffect(()=>{
      const pages = [];

      for (let i = (current_page > 2 ? current_page - 2 : 1); i <= (current_page + 2 < last_page ? current_page + 2 : last_page); i++) {
        pages.push({i});
      }
      setPageNumbers(pages);
  }, [current_page, last_page, on_page_change])

  return (
    <>
      <div className="flex justify-between items-center">
        { last_page !== 1 ?
          <ul className="flex flex-row items-start gap-2 mr-4">
            {current_page <= 3 ? null: 
              <li className="flex items-center align-center border border-gray-500 rounded">
                <a href="#" className="text-center px-2 h-5" onClick={() => on_page_change(1)}>
                  First
                </a>
              </li>
            }
            {current_page <= 1 ? null: 
              <li className="flex items-center align-center border border-gray-500 rounded">
                <a href="#" onClick={() => on_page_change(current_page - 1)}>
                  <FiArrowLeft className="w-5 h-5"/>
                </a>
              </li>
            }
            {pageNumbers.map((value: Pages, index: number) => (
              <li key={index} className={value.i === current_page ? 'bg-gray-200 flex items-center align-center border border-gray-500 rounded' : 'flex items-center align-center border border-gray-500 rounded'}>
                <a href="#" className="text-center px-2 h-5" onClick={() => on_page_change(value.i)}>
                  {value.i}
                </a>
              </li>
            ))}
            {current_page >= last_page ? null: 
              <li className="flex items-center align-center border border-gray-500 rounded">
                <a href="#" onClick={() => on_page_change(current_page + 1)}>
                  <FiArrowRight className="w-5 h-5" />
                </a>
              </li>
            }
            {current_page >= last_page - 2 ? null: 
              <li className="flex items-center align-center border border-gray-500 rounded">
                <a href="#" className="text-center px-2 h-5" onClick={() => on_page_change(last_page)}>
                  Last
                </a>
              </li>
            }
          </ul>
        :
        <div className="text-gray-500 text-sm mr-4">No other pages</div>
        }
        <div className="text-gray-500 text-xs sm:text-sm">Showing <b>{from}</b> to <b>{to}</b> of <b>{total}</b> items</div>
      </div>
    </>
  );
}