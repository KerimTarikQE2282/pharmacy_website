import axios from "axios";
import {useQuery} from "react-query";

const fetchData=(url)=>{
    return axios.get(`http://localhost:3002/api/v1/${url}/`)
}

export const useGetData=(url)=>{
    return useQuery(`FETCH_${url}`,()=>fetchData(url),{
      cacheTime: 5000,
      staleTime: 30000,
      refetchOnMount: true,
      refetchOnWindowFocus: 'always',
      refetchIntervalInBackground: true,
   
      
    })
}