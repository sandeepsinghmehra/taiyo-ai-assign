import axios from 'axios';
import { useQuery } from 'react-query';

export function useWorldData() {
    return useQuery('worldData', fetchWorldData);
}
export function useCountryData() {
    return useQuery('countryData', fetchCountryData);
}
export function useGraphData() {
    return useQuery('graphData', fetchGraphData);
}

const fetchWorldData = async () => {
    const response = await axios.get('https://disease.sh/v3/covid-19/all');
    return response.data;
  };

  const fetchCountryData = async () => {
    const response = await axios.get('https://disease.sh/v3/covid-19/countries');
    return response.data;
  };

  const fetchGraphData = async () => {
    const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    return response.data;
  };