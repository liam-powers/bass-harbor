"use client";
import axios from 'axios';
import React from 'react';
import { UprightBassFilters, BassGuitarFilters } from './FilterInterfaces';

interface FilterButtonProps {
    filterToToggle: string;
    uprightOrElectric: string;
    children: React.ReactNode;
}

const backendPort = 4000;

const FilterButton: React.FC<FilterButtonProps> = ({ filterToToggle, uprightOrElectric, children }) => {
    let filters: UprightBassFilters | BassGuitarFilters = {}; // Declare filters with union type

    if (uprightOrElectric === 'upright') {
        filters = { ...filters, ...{} as UprightBassFilters }; // Assign UprightBassFilters type
    } else {
        filters = { ...filters, ...{} as BassGuitarFilters }; // Assign BassGuitarFilters type
    }

    const clickHandle = () => {
        filters[`filterToToggle`] = !filters[`filterToToggle`];

        axios.get(`http://localhost:${backendPort}/api/items`, { params: filters })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    };

    return (
        <div>
            <button onClick={clickHandle}>
                {children}
            </button>
        </div>
    );
};

export default FilterButton;
