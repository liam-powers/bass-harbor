"use client";
import React from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import { useState } from 'react';

export default function PriceRangeComponent() {
    const [values, setValues] = useState([0, 300000]);

    return (
        <div>
            <Slider range min={0} max={300000} 
                marks={{ 0: "$0", 300000: "$300,000" }} value={values} step={50} />
        </div>
    );
};