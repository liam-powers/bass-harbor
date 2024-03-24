"use client";
import React from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import { UprightBassFilters } from '../components/FilterInterfaces';

interface PriceRangeComponentProps {
    filters: UprightBassFilters;
    setFilters: React.Dispatch<React.SetStateAction<UprightBassFilters>>;
};

const PriceRangeComponent: React.FC<PriceRangeComponentProps> = ({ filters, setFilters }) => {
    const [priceRange, setPriceRange] = React.useState([0, 100000]);

    const handleChange = (newPriceRange: number[]) => {
        setPriceRange(newPriceRange);
        const updatedFilters = { ...filters, priceRange: priceRange };
        setFilters(updatedFilters);
        console.log(updatedFilters);
    };

    return (
        <div>
            <div className="pb-10">
                <Slider range
                    min={0}
                    max={100000}
                    marks={{ 0: "$0", 100000: "$100,000+" }}
                    value={priceRange}
                    onChange={(newPriceRange: number | number[]) => handleChange(newPriceRange as number[])}
                    allowCross={false}
                    step={50} />
            </div>
            <div className="">
                price range: ${priceRange[0]} - ${priceRange[1]}
            </div>

        </div>
    );
};

export default PriceRangeComponent;