import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { UprightBassFilters } from '../components/FilterInterfaces';

interface FilterButtonProps {
    filterToToggle: keyof UprightBassFilters;
    filters: UprightBassFilters;
    setFilters: React.Dispatch<React.SetStateAction<UprightBassFilters>>;
    children: React.ReactNode;
}

const backendPort = 4000;

function toggleFilter<T extends UprightBassFilters>(filters: T, filterToToggle: keyof T): T {
    return {
        ...filters,
        [filterToToggle]: !filters[filterToToggle]
    };
}

const UprightFilterButton: React.FC<FilterButtonProps> = ({ filterToToggle, filters, setFilters, children }) => {
    const [buttonBgColor, setButtonBgColor] = useState("bg-blue-300");
    
    const clickHandle = () => {
        const updatedFilters = toggleFilter(filters, filterToToggle);
        setFilters(updatedFilters);

        axios
            .get(`http://localhost:${backendPort}/api/items`, { params: updatedFilters })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });

        console.log("Successfully updated filters to: ", updatedFilters);
    };

    useEffect(() => {
        // Update button background color based on filter state
        if (filters[filterToToggle]) {
            setButtonBgColor("bg-blue-500");
        } else {
            setButtonBgColor("bg-blue-300");
        }
    }, [filters, filterToToggle]);

    return (
        <div>
            <button
                onClick={clickHandle}
                className={`hover:underline ${buttonBgColor} outline-black text-white font-bold py-2 px-4 rounded-lg`}
            >
                {children}
            </button>
        </div>
    );
};

export default UprightFilterButton;