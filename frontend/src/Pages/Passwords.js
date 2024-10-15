import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { format } from 'date-fns';

function Passwords() {
    const token=localStorage.getItem('access')
    const baseURL = "http://127.0.0.1:8000";
    const user_id = localStorage.getItem('userid');
    const [passwords,setPassowords]=useState([])

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).replace(',', '');
    };

    const fetchPasswords=async()=>{
       try{
        const response=await axios.get(`${baseURL}/password_app/save_get_password/${user_id}/`)
        console.log('data is......',response.data)
        const mydata=response.data
        const sortedData = [...mydata].sort((a, b) => new Date(b.date) - new Date(a.date));
        setPassowords(sortedData)
       }catch(error){
            console.error('Error fetching passwords:', error);
       }

    }

    useEffect(()=>{
        fetchPasswords()
    },[])
  return (
    <div className="p-6 bg-black min-h-screen flex flex-col items-center">
    <h3 className="text-2xl font-semibold text-white mb-4">Generate Passwords</h3>
    <table className="w-full max-w-3xl table-auto bg-gray-900 shadow-lg rounded-lg">
      <thead>
        <tr className="bg-black text-white text-left">
          <th className="py-2 px-4">Password</th>
          <th className="py-2 px-4">Created On</th>
          
        </tr>
      </thead>
      <tbody>
        {passwords.map((mypassword, index) => (
          <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
            <td className="py-2 px-4 text-white">{mypassword.password}</td>
            <td className="py-2 px-4 text-white">{formatDate(mypassword.date)}</td>
        
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Passwords
