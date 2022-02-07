import React from 'react';
import loading from './loading.gif';

export default function Spiner(){
    return <div className='text-center'>
        <img src={loading} alt='loading'></img>
    </div>;
  }

