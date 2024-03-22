"use client";
import { useState, useEffect } from 'react';
import { UprightBassFilters } from '../components/FilterInterfaces';
import UprightFilterButton from './UprightFilterButton';
import { Input } from '@nextui-org/react';
import PriceRangeComponent from '../components/PriceRangeComponent';
import 'rc-slider/assets/index.css';
import PlacesAutocomplete from '../components/GoogleMapsSearch';


const renderKeywords = (keywords: String[], removeKeyword: (keyword: String) => void) => {

    return (
        <div className="flex gap-2 flex-wrap" style={{ maxWidth: '300px' }}>
            {keywords.map((keyword) => (
                <button className="hover:line-through bg-blue-500 outline-black text-white font-bold py-2 px-4 rounded-lg"
                    onClick={() => removeKeyword(keyword)}>{keyword}</button>
            ))}
        </div>
    );
};

const UprightClientComponent = () => {
    const [filters, setFilters] = useState<UprightBassFilters>({
        keywords: [],
        carved: false,
        hybrid: false,
        plywood: false,
    });

    const removeKeyword = (keyword: String) => {
        const updatedFilters = {
            ...filters,
            keywords: filters.keywords?.filter((kw) => kw !== keyword)
        };
        setFilters(updatedFilters);
        console.log("Successfully updated filters to: ", updatedFilters);
    }

    const [keyword, setKeyword] = useState("");

    const handleKeywordAdd = (keyword: String) => {
        if (keyword.trim() !== "") { // Check if the keyword is not empty
            const updatedFilters = {
                ...filters,
                keywords: filters.keywords ? [...filters.keywords, keyword.trim()] : [keyword.trim()]
            };
            setFilters(updatedFilters);
            setKeyword(""); // Clear keyword input after adding
            console.log("Successfully updated filters to: ", updatedFilters);
        }
    };

    if (!filters) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-row align-top gap-40">
            <div className="">
                <div className="text-3xl font-bold pb-6">filters:</div>
                <div className="flex flex-col gap-10">
                    <div>
                        <div className="text-2xl font-bold pb-2">wood type:</div>
                        <div className="flex flex-row flex-wrap gap-2">

                            <UprightFilterButton filterToToggle="carved" filters={filters} setFilters={setFilters}>
                                carved
                            </UprightFilterButton>
                            <UprightFilterButton filterToToggle="hybrid" filters={filters} setFilters={setFilters}>
                                hybrid
                            </UprightFilterButton>
                            <UprightFilterButton filterToToggle="plywood" filters={filters} setFilters={setFilters}>
                                plywood
                            </UprightFilterButton>
                        </div>
                    </div>
                    <div>
                        <div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold pb-2">keywords:</div>
                            <div className="flex flex-row items-center gap-6 text-2xl font-bold">
                                <Input className="" placeholder="enter keyword here" label="keyword" onChange={(e) => setKeyword(e.target.value)} value={keyword} />
                                <button onClick={() => handleKeywordAdd(keyword)}>+</button>
                            </div>
                            {renderKeywords(filters.keywords ?? [], removeKeyword)}

                        </div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold pb-2">price range:</div>
                        <PriceRangeComponent />
                    </div>
                    <div>
                        <PlacesAutocomplete />
                    </div>
                </div>
            </div>

            <div>
                <div className="text-3xl font-bold pb-6">your matches:</div>
                <div>
                    {/* Display filtered results */}
                </div>
            </div>
        </div>
    );
};

export default UprightClientComponent;