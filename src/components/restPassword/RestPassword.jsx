import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';

function RestPassword() {

  const [email, setEmail] = useState('');

  const navigate     = useNavigate()
  const auth = getAuth();

  const handleChange = (e)=>{
    setEmail(e.target.value);
    
  };

  const handleSubmit =(e)=>{
    e.preventDefault()

    if(!email){
      alert('Please Enter Your Email')
      return;
    }else{
      sendPasswordResetEmail(auth, email)
  .then(() => {
    navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
  }


   

  return (
    <>

    
    <div className="flex bg-blue-50 justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-green-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 p-2 block w-full border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
          </div>
          <PulseLoader />
          <button type="submit" className="w-full mt-4 bg-green-300 text-white py-2 rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Send
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default RestPassword