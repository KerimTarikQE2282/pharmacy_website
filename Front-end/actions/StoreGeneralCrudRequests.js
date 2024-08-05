import toast from "react-hot-toast";
import axios from axios
const baseUrl = 'http://localhost:3000/api';

export async function getData(endpoint,setLoading,name) {
 
    //TODO check how i make no cache with axios

    const config = {
      headers: {
        'Content-Type':  'application/json',
      },
    }; 
    try {
      const res= await axios.get('url',config)
      dispatch({
        type:`GET_ALL_${name}_SUCCESS`,
        payload:res.data
      })
    } catch (error) {
      dispatch({
        type:`GET_ALL_${name}_FAILED`,
      })
      console.log(error)
      setLoading(false)
    }
}

export async function getDataById(endpoint,setLoading,name){
  const baseUrl = 'http://localhost:3000/api';
 
//TODO check how i make no cache with axios

  const config = {
    headers: {
      'Content-Type':  'application/json',
    },
  }; 
  try {
    const res=await axios.get('url',config)
    dispatch({
      type:`GET_${name}_BY_ID_SUCCESS`,
      payload:res.data
    })
  } catch (error) {
    dispatch({
      type:`GET_${name}_BY_ID_FAILED`,
      
    })
    console.log(error)
    setLoading(false)
  }
}

export async function makePOSTApiRequest(endpoint,setLoading,data,name){
  
  const baseUrl='http://localhost:3000'

  const config = {
    headers: {
      'Content-Type':  'application/json',
    }
  }
  try {
    setLoading(true)
    const res=await axios.post(`${baseUrl}/api/${endpoint}`,data,config)
    if(response.ok){
  console.log(response.json());
  setLoading(false)
  toast.success(`Successfully Added A ${name}!`, {icon: '✔️'})
  dispatch({
    type:`CREATE_${name}_SUCCESS`,
    payload:res.data
  })
   reset();
  }else{
    setLoading(false)
    toast.error('Some thing went wrong!', {icon: '❌'})
    dispatch({
      type:`CREATE_${name}_FAILED`,
      payload:res.data
    })
  }
 
  } catch (error) {
    console.log(error)
    setLoading(false)
    dispatch({
      type:`CREATE_${name}_FAILED`,
      payload:res.data
    })
  }

}

export async function makePUTApiRequest(endpoint,setLoading,data,name){
 
    const baseUrl='http://localhost:3000'
  
    
      const config = {
        headers: {
          'Content-Type':  'application/json',
        }
      }
      try {
        
        const response=axios.patch(`${baseUrl}/api/${endpoint}`,data,config)
                if(response.ok){
                console.log(response.json());
                setLoading(false)
                console.log('checker',endpoint,setLoading,data,name)
                toast.success(`Successfully Updated A ${name}!`, {icon: '✔️'})
                dispatch({
                  type:`UPDATE_${name}_SUCCESS`,
                  payload:res.data
                })
               
              }else{
                setLoading(false)
                toast.error('Some thing went wrong!', {icon: '❌'})
                dispatch({
                  type:`UPDATE_${name}_FAILED`,
                  payload:res.data
                })
              }
              
        
      } catch (error) {
        console.log(error)
        setLoading(false)
        dispatch({
          type:`UPDATE_${name}_FAILED`,
          payload:res.data
        })
      }
  
  }










