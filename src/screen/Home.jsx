import React from 'react'
import { useStore } from '../Provider/store';
import { addItems, minItems } from '../Provider/reducer';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [state, dispatch] = useStore();
    const navigate = useNavigate();
    const { data } = state;

    const handleAdd = () => {
        dispatch(addItems());
      };

      const handleMin = () => {
        dispatch(minItems());
      };

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Home</h1>
            <button onClick={handleMin}>-</button>
            <h2>{data}</h2>
            <button onClick={handleAdd}>+</button>
            <button onClick={() => navigate('/product')}>product</button>
        </div>
    )
}

