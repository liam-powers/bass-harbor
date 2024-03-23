"use client";
import { UprightBassFilters } from "../components/FilterInterfaces";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface UprightListingsGridProps {
    filters: UprightBassFilters;
}

interface UprightBassListing {
    title?: string;
    imgLink: string;
    listingLink?: string;
    location?: string;
    saleStatus?: string;
    price?: string;
    year?: number;
    maker?: string;
}

export default function UprightListingsGrid(props: UprightListingsGridProps) {
    const { filters } = props;
    const axiosInstance = axios.create({ baseURL: 'http://localhost:4000/', timeout: 1000});
    const [listings, setListings] = useState<UprightBassListing[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get('api/items', { params: filters });
                setListings(response.data);
            } catch (error) {
                console.error('Error fetching listings:', error);
            }
        };

        fetchData();

    }, [filters]);

    return (
        <div className="grid grid-cols-4 gap-10">
            {listings.map((listing, index) => (
                <div key={index}>
                    <Image src={listing.imgLink.toString()} width={500} height={500} alt={`Picture of listing ${listing.title}`} />
                    <div> <Link href={listing.listingLink!}>{listing.title}</Link></div>
                    <div>price: {listing.price} </div>
                    <div>{listing.saleStatus}</div>
                    {listing.year && (listing.year != 0) && <div>year: {listing.year}</div>}
                </div>
            ))}
        </div>
    )
};