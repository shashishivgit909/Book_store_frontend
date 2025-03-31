import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import getBaseUrl from '../../utils/baseURL';
import Loading from '../../components/Loading';
function DashboardLayout() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `${getBaseUrl()}/api/getstatistics`,
          headers: { 
            'Authorization':`Bearer ${localStorage.getItem("token")}`
          }
        };
        
        const response = await axios.request(config)
        console.log(response,"Response , RRrrrrRRRRRRRRRRRRRRR")
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [])


  if (loading) return <Loading />;

  return (
    <div>
      Admin dashboard
      <Outlet />
    </div>
  )
}

export default DashboardLayout
