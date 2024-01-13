import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../avatar.png'
function HomePage() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    if (value) {
      navigate(`/room/${value}`);
    }
  }, [navigate, value]);

  return (
    <div className='flex flex-col items-center justify-center h-screen '>
     <div className='bg-white px-20 py-20 rounded'>
        <div className='flex flex-row gap-2'>
            <img src={Avatar} className='w-20 h-20' alt="" />
              <div>
              <h1 className='text-3xl font-bold'>Zego Cloud App</h1>
              <p>One ON One Video Call</p>
              </div>
        </div>
     <input
        type='text'
        placeholder='Enter your room'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='p-3 border  focus:outline-none focus:border-blue-500'
      />
      <button onClick={handleJoinRoom} className='mt-4 px-6 py-3 bg-blue-500 text-white  hover:bg-blue-600 focus:outline-none'>
        Join
      </button>
     </div>
    </div>
  );
}

export default HomePage;
