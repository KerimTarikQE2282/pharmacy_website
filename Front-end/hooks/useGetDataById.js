import axios from "axios";
import { useQuery } from "react-query";


const fetchData=(url,id)=>{
 
return axios.get(`http://localhost:3002/api/v1/${url}/${id.id}`)
}


export const useGetDataById=(url,id)=>{
    return useQuery([`FETCH_${url}`],()=>fetchData(url,id),{
        cacheTime: 5000,
        staleTime: 30000,
        refetchOnMount: true,
        refetchOnWindowFocus: 'always',
        refetchIntervalInBackground: true,
     
        
      })
}