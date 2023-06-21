import React, { useEffect, useState } from "react";
import RenderForm from "../components/RenderForm";
import ApexChart from "../components/ApexChart";
import DonutChart from "../components/DonutChart";
import FORMS from "../config/form.json";
import { SelectSearch } from "../components/Widget";
import ColumnChart from "../components/ColumnChart";
import { getDataForDashBoard } from "../api/request";
import millify from "millify";
const DashBoard = () => {
    const [metaDeta, setMetaData] = useState();
    const [isLoading, setIsloading] = useState(true);
  const [chartData, setChartData] = useState();
  const fetchApiDashBoard = async () => {
    let data = (await getDataForDashBoard()).data;
   
    setMetaData(data);
    configDataForChart(data?.data?.totalMoneyEachMonth);
    setIsloading(false);
  };
  const configDataForChart = (data = []) => {
    let dataConfig = data.map((value) => {
      return {
        data: value?.totalMoney,
        categories: value?.month,
      };
    });
    let dataArr = dataConfig.map((value) => {
      return value.data;
    });

    let categoriesArr = dataConfig.map((value) => {
      return value.categories;
    });
    setChartData({
      data: dataArr,
      categories: categoriesArr,
    });
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
                {metaDeta?.data?.countTicket}
              </span>
            </div>
            <div className="rounded-[24px] min-w-[400px] min-h-[200px] p-2 flex flex-col items-center gap-10 bg-green-500 text-white">
              <span className="text-center text-2xl font-semibold">
                Tổng số bill
              </span>
              <span className="text-center text-2xl font-semibold">
                {metaDeta?.data?.countBills}
              </span>
            </div>
            <div className="rounded-[24px] min-w-[400px] min-h-[200px] p-2 flex flex-col items-center gap-10 bg-red-500 text-white">
              <span className="text-center text-2xl font-semibold">
                Tổng doanh thu
              </span>
              <span className="text-center text-2xl font-semibold">
                {millify(metaDeta?.data?.totalMoney)}
              </span>
            </div>
          </div>

          <div className="w-[100%] mt-[60px]">
            {/* <DonutChart /> */}
            <ColumnChart data={chartData} />
          </div>
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default DashBoard;
