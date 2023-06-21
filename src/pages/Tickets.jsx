import React, { useEffect, useState } from 'react'
import { getDataforTicketManager } from '../api/request';
import millify from "millify";
const Tickets = () => {
  const [metaDeta, setMetaData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const fetchApiDashBoard = async () => {
    let data = (await getDataforTicketManager()).data;
   
    setMetaData(data);
   
    setIsloading(false);
  };
  useEffect(() => {
    fetchApiDashBoard();
    
  }, []);
  return (
    <div className="w-full">
      {!isLoading ? (
        <>
          <div className="flex flex-row justify-between items-center mb-8">
            <div className="rounded-[24px] min-w-[400px] min-h-[200px] p-2 flex flex-col items-center gap-10 bg-[#fc9928] text-white">
              <span className="text-center text-2xl font-semibold">
                Tổng vé bán ra
              </span>
              <span className="text-center text-2xl font-semibold">
                {metaDeta?.data?.count}
              </span>
            </div>
            <div className="rounded-[24px] min-w-[400px] min-h-[200px] p-2 flex flex-col items-center gap-10 bg-green-500 text-white">
              <span className="text-center text-2xl font-semibold">
                Tổng số vé thường bán ra
              </span>
              <span className="text-center text-2xl font-semibold">
                {metaDeta?.data?.countNomalTickets}
              </span>
            </div>
            <div className="rounded-[24px] min-w-[400px] min-h-[200px] p-2 flex flex-col items-center gap-10 bg-red-500 text-white">
              <span className="text-center text-2xl font-semibold">
                Tổng vé vip bán ra
              </span>
              <span className="text-center text-2xl font-semibold">
                {millify(metaDeta?.data?.countVipTickets)}
              </span>
            </div>
          </div>

        
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};


export default Tickets