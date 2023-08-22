import Sidebar from "../components/Sidebar";
import React from 'react';
import { useCountryData, useGraphData, useWorldData } from "../hooks/dashboardData";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Map } from "../components/map";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart',
    },
  },
};
const Dashboard = () => {
  const { data: worldData, isLoading: worldLoading, error: worldError }:any = useWorldData();
  const { data: countryData, isLoading: countryLoading, error: countryError }:any = useCountryData();
  const { data: graphData, isLoading: graphLoading, error: graphError }:any = useGraphData();

  if (worldLoading || countryLoading || graphLoading) {
    return <p>Loading...</p>;
  }

  if (worldError || countryError || graphError) {
    return <p>Error: {worldError.toString()}</p>;
  }
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  
  // Extract data from graphData to use for chart
  const chartData = {
    labels: Object.keys(graphData.cases),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(graphData.cases),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="w-full">
        <header className='bg-blue-800 h-16 text-center py-5 font-mono font-bold text-white text-2xl'>
          Dashboard Page with Maps and Charts
        </header>

        <div className="flex flex-col lg:flex-row h-full">

          <Sidebar className={'bg-white'} />
          <div className="flex-1 bg-gray-100 p-4 pageHeight">
            <h1 className="text-muted-foreground text-3xl font-bold">COVID-19 Dashboard</h1>
            <div className="py-4">
              <h2 className="text-gray-600 text-2xl font-semibold mb-2">Worldwide Cases</h2>
              <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3">
                <div className="bg-blue-300 py-10 px-5">
                  <p className="text-white font-semibold text-2xl">Total Cases: {worldData.cases}</p>
                </div>
                <div className="bg-green-300 py-10 px-5">
                  <p className="text-white font-semibold text-2xl">Total Recovered: {worldData.recovered}</p>
                </div>
                <div className="bg-red-300 py-10 px-5">
                  <p className="text-white font-semibold text-2xl">Total Deaths: {worldData.deaths}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
              <div className="flex flex-col w-full lg:w-1/2 h-full">
                <h2 className="text-gray-600 text-2xl font-semibold mb-2">Map</h2>
                <div className="w-full h-[400px]">
                  <Map countryData={countryData} />
                </div>              
              </div>
              <div className="flex flex-col w-full lg:w-1/2 h-full">
                <h2 className="text-gray-600 text-2xl font-semibold mb-2">Line Graph</h2>
                <div className="w-full h-[400px]">
                  <Line options={options} data={chartData} />
                </div>
              </div>
            </div>
          </div>
      </div>  
    </div>
  );
};

export default Dashboard;
