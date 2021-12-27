import React from 'react'
import { useStore } from '../Provider/store';

export default function Product() {
    const [state, dispatch] = useStore();
    const { data } = state;
    return (
        <div>
            <h1>{data}</h1>
        </div>
    )
}
