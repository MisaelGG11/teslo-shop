'use client';

import { useState } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

interface Props {
  quantity: number;
}

export const QuantitySelector = ( { quantity }: Props ) => {

  const [ count, setCount ] = useState( quantity );

  const onQuantityChanged = ( value: number ) => {
    
    if ( count + value < 1 ) return;

    setCount( count + value );
  };
  return (
    <div className="flex">
      <button className='-mr-4 bg-gray-100 rounded-full' onClick={ () => onQuantityChanged( -1 ) }>
        <IoRemoveCircleOutline size={ 30 } className={ count === 1 ? 'text-gray-300' : ''} />
      </button>

      <span className="w-20 px-5 py-1 bg-gray-200 text-center rounded -z-1">
        { count }
      </span>

      <button
      className='-ml-4 bg-gray-100 rounded-full'
      onClick={ () => onQuantityChanged( +1 ) } disabled={ count <= 0 || count >= 5 }>
        <IoAddCircleOutline size={ 30 } className={ count === 5 ? 'text-gray-300' : ''} />
      </button>

    </div>
  );
};