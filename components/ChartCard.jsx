'use client'
import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Chart from "./Chart";

export default function ChartCard() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const maxPageNumbersToShow = 3;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = chartDetails.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil(chartDetails.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Calculate the range of page numbers to display
    const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }


    return (
        <div className="container py-10">
            {/* Display cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {currentItems.map((item, index) => (
                    <div key={index} className="w-full bg-white p-2 border border-transparent transition-colors duration-300 hover:border-[#2E5CE5]">
                        <div className="p-3 flex justify-between">
                            <h2 className="text-xl font-bold">{item.heading}</h2>
                            <div className="flex gap-4">
                                <p className="text-xl font-bold flex flex-col text-indigo-700">
                                    {item.volume}
                                    <span className="text-xs text-gray-500 font-medium text-center">Volume</span>
                                </p>
                                <p className="text-xl font-bold flex flex-col text-green-500">
                                    {item.growth}
                                    <span className="text-xs text-gray-500 font-medium text-center">Growth</span>
                                </p>
                            </div>
                        </div>
                        <Chart dataPoints={item.dataPoints} />
                        <p className="text-sm my-4 mx-1 line-clamp-2">{item.desc}</p>
                        <a href={item.btnLink} className="border py-1 px-2 bg-gray-100 text-gray-700 text-sm">
                            {item.btn}
                        </a>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center mt-6 gap-3 ">

                {/* Page number buttons */}
                <div className="flex items-center mt-6 gap-3 ">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={`px-3 py-2 ${currentPage === 1 ? 'hidden' : 'bg-white text-black'} rounded-sm`}
                    >
                        <GrFormPrevious />
                    </button>

                    {/* Page number buttons */}
                    <div className="flex gap-3">
                        {pageNumbers.map((number) => (
                            <button
                                key={number}
                                onClick={() => setCurrentPage(number)}
                                className={`px-3 py-1 ${currentPage === number ? 'border border-black' : 'bg-white text-gray-200'} rounded-sm`}
                            >
                                {number}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-2 ${currentPage === totalPages ? 'hidden' : 'bg-white text-black'} rounded-sm`}
                    >
                        <GrFormNext />
                    </button>
                </div>
            </div>
        </div>
    );
}

const chartDetails = [
    {
        heading: 'Sitegpt',
        volume: '100k',
        growth: '+600X+',
        desc: 'Sitegpt is an innovative new product that has taken the market by storm, offering unparalleled features and performance that are revolutionizing the industry. With rapid growth and strong adoption, it is poised to become one of the best tools available today.',
        btn: 'Exploding',
        btnLink: '#',
        pro: false,
        dataPoints: [
            { x: new Date(2008, 0), y: 70.735 },
            { x: new Date(2009, 0), y: 74.102 },
            { x: new Date(2010, 0), y: 72.569 },
            { x: new Date(2011, 0), y: 72.743 },
            { x: new Date(2012, 0), y: 72.381 },
            { x: new Date(2013, 0), y: 71.406 },
            { x: new Date(2014, 0), y: 73.163 },
            { x: new Date(2015, 0), y: 74.270 },
            { x: new Date(2016, 0), y: 72.525 },
            { x: new Date(2017, 0), y: 70.735 },
            { x: new Date(2018, 0), y: 74.102 },
            { x: new Date(2019, 0), y: 72.569 },
            { x: new Date(2020, 0), y: 72.743 },
            { x: new Date(2021, 0), y: 72.381 },
            { x: new Date(2022, 0), y: 71.406 },
            { x: new Date(2023, 0), y: 73.163 },
            { x: new Date(2024, 0), y: 74.270 },
            { x: new Date(2025, 0), y: 72.525 },
        ]
    },
    {
        heading: 'EcoTech',
        volume: '300k',
        growth: '+700X+',
        desc: 'EcoTech is leading the charge in creating sustainable energy solutions. By harnessing the power of clean energy and reducing environmental footprints, EcoTech is paving the way for a greener future.',
        btn: 'Go Green',
        btnLink: '#ecotech',
        pro: false,
        dataPoints: [
            { x: new Date(2011, 0), y: 220.735 },
            { x: new Date(2012, 0), y: 230.102 },
            { x: new Date(2013, 0), y: 140.569 },
            { x: new Date(2014, 0), y: 150.743 },
            { x: new Date(2015, 0), y: 160.381 },
            { x: new Date(2016, 0), y: 170.406 },
            { x: new Date(2017, 0), y: 280.163 },
            { x: new Date(2018, 0), y: 190.270 },
            { x: new Date(2019, 0), y: 100.500 },
        ]
    },
    {
        heading: 'TechBuzz',
        volume: '250k',
        growth: '+450X+',
        desc: 'TechBuzz is a dynamic platform that keeps you at the forefront of the latest technological advancements. With its cutting-edge features, in-depth analysis, and expert insights, it is the go-to resource for anyone interested in the evolving world of tech.',
        btn: 'Discover',
        btnLink: '#techbuzz',
        pro: false,
        dataPoints: [
            { x: new Date(2010, 0), y: 10.735 },
            { x: new Date(2011, 0), y: 60.102 },
            { x: new Date(2012, 0), y: 65.569 },
            { x: new Date(2013, 0), y: 70.243 },
            { x: new Date(2014, 0), y: 75.381 },
            { x: new Date(2015, 0), y: 80.406 },
            { x: new Date(2016, 0), y: 85.163 },
            { x: new Date(2017, 0), y: 90.270 },
            { x: new Date(2018, 0), y: 95.500 },
        ]
    },
    {
        heading: 'MarketX',
        volume: '500k',
        growth: '+1200%',
        desc: 'MarketX is a groundbreaking platform that is transforming how businesses and investors analyze market trends and data. Offering powerful analytics tools, real-time insights, and intuitive dashboards, MarketX is setting a new standard in market intelligence.',
        btn: 'Learn More',
        btnLink: '#marketx',
        pro: false,
        dataPoints: [
            { x: new Date(2010, 0), y: 80.735 },
            { x: new Date(2011, 0), y: 82.102 },
            { x: new Date(2012, 0), y: 85.569 },
            { x: new Date(2013, 0), y: 900.743 },
            { x: new Date(2014, 0), y: 95.381 },
            { x: new Date(2015, 0), y: 100.406 },
            { x: new Date(2016, 0), y: 105.163 },
            { x: new Date(2017, 0), y: 110.270 },
            { x: new Date(2018, 0), y: 115.400 },
        ]
    },
    {
        heading: 'GrowthX',
        volume: '600k',
        growth: '+800X+',
        desc: 'GrowthX has shown exponential growth in a short period, becoming a market leader in the digital transformation space. With a broad range of services and a strong customer base, it continues to set new benchmarks.',
        btn: 'Explore More',
        btnLink: '#growthx',
        pro: false,
        dataPoints: [
            { x: new Date(2011, 0), y: 100.735 },
            { x: new Date(2012, 0), y: 110.102 },
            { x: new Date(2013, 0), y: 180.569 },
            { x: new Date(2014, 0), y: 130.243 },
            { x: new Date(2015, 0), y: 140.381 },
            { x: new Date(2016, 0), y: 150.406 },
            { x: new Date(2017, 0), y: 160.163 },
            { x: new Date(2018, 0), y: 170.270 },
            { x: new Date(2019, 0), y: 180.500 },
        ]
    },
    {
        heading: 'TechBuzz',
        volume: '250k',
        growth: '+450X+',
        desc: 'TechBuzz is a dynamic platform that keeps you at the forefront of the latest technological advancements. With its cutting-edge features, in-depth analysis, and expert insights, it is the go-to resource for anyone interested in the evolving world of tech.',
        btn: 'Discover',
        btnLink: '#techbuzz',
        pro: false,
        dataPoints: [
            { x: new Date(2010, 0), y: 10.735 },
            { x: new Date(2011, 0), y: 60.102 },
            { x: new Date(2012, 0), y: 65.569 },
            { x: new Date(2013, 0), y: 70.243 },
            { x: new Date(2014, 0), y: 75.381 },
            { x: new Date(2015, 0), y: 80.406 },
            { x: new Date(2016, 0), y: 85.163 },
            { x: new Date(2017, 0), y: 90.270 },
            { x: new Date(2018, 0), y: 95.500 },
        ]
    },
    {
        heading: 'EcoTech',
        volume: '300k',
        growth: '+700X+',
        desc: 'EcoTech is leading the charge in creating sustainable energy solutions. By harnessing the power of clean energy and reducing environmental footprints, EcoTech is paving the way for a greener future.',
        btn: 'Go Green',
        btnLink: '#ecotech',
        pro: false,
        dataPoints: [
            { x: new Date(2011, 0), y: 220.735 },
            { x: new Date(2012, 0), y: 230.102 },
            { x: new Date(2013, 0), y: 140.569 },
            { x: new Date(2014, 0), y: 150.743 },
            { x: new Date(2015, 0), y: 160.381 },
            { x: new Date(2016, 0), y: 170.406 },
            { x: new Date(2017, 0), y: 280.163 },
            { x: new Date(2018, 0), y: 190.270 },
            { x: new Date(2019, 0), y: 100.500 },
        ]
    },
    {
        heading: 'InnovationHub',
        volume: '1M',
        growth: '+1000X+',
        desc: 'InnovationHub is at the forefront of AI and machine learning applications, enabling businesses to harness the power of data and make intelligent decisions. It is revolutionizing industries and paving the way for a new digital era.',
        btn: 'Discover Hub',
        btnLink: '#innovationhub',
        pro: false,
        dataPoints: [
            { x: new Date(2010, 0), y: 190.735 },
            { x: new Date(2011, 0), y: 160.102 },
            { x: new Date(2012, 0), y: 270.569 },
            { x: new Date(2013, 0), y: 180.743 },
            { x: new Date(2014, 0), y: 190.381 },
            { x: new Date(2015, 0), y: 200.406 },
            { x: new Date(2016, 0), y: 210.163 },
            { x: new Date(2017, 0), y: 220.270 },
            { x: new Date(2018, 0), y: 230.500 },
        ]
    },
    {
        heading: 'FutureTech',
        volume: '800k',
        growth: '+1200X+',
        desc: 'FutureTech is a leading player in the field of augmented reality (AR) and virtual reality (VR), creating immersive experiences and enhancing user interaction across industries.',
        btn: 'Future Insights',
        btnLink: '#futuretech',
        pro: false,
        dataPoints: [
            { x: new Date(2012, 0), y: 85.735 },
            { x: new Date(2013, 0), y: 90.102 },
            { x: new Date(2014, 0), y: 95.569 },
            { x: new Date(2015, 0), y: 200.743 },
            { x: new Date(2016, 0), y: 105.381 },
            { x: new Date(2017, 0), y: 110.406 },
            { x: new Date(2018, 0), y: 115.163 },
            { x: new Date(2019, 0), y: 120.270 },
            { x: new Date(2020, 0), y: 225.500 },
        ]
    },
    {
        heading: 'FinTechX',
        volume: '1.2M',
        growth: '+1500X+',
        desc: 'FinTechX is disrupting the financial sector with its blockchain-based solutions. By creating decentralized financial networks, it is reducing transaction costs and increasing transparency.',
        btn: 'Invest Now',
        btnLink: '#fintechx',
        pro: false,
        dataPoints: [
            { x: new Date(2010, 0), y: 200.735 },
            { x: new Date(2011, 0), y: 290.102 },
            { x: new Date(2012, 0), y: 220.569 },
            { x: new Date(2013, 0), y: 230.743 },
            { x: new Date(2014, 0), y: 240.381 },
            { x: new Date(2015, 0), y: 250.406 },
            { x: new Date(2016, 0), y: 280.163 },
            { x: new Date(2017, 0), y: 270.270 },
            { x: new Date(2018, 0), y: 280.500 },
        ]
    },
    {
        heading: 'TechBuzz',
        volume: '250k',
        growth: '+450X+',
        desc: 'TechBuzz is a dynamic platform that keeps you at the forefront of the latest technological advancements. With its cutting-edge features, in-depth analysis, and expert insights, it is the go-to resource for anyone interested in the evolving world of tech.',
        btn: 'Discover',
        btnLink: '#techbuzz',
        pro: false,
        dataPoints: [
            { x: new Date(2010, 0), y: 10.735 },
            { x: new Date(2011, 0), y: 60.102 },
            { x: new Date(2012, 0), y: 65.569 },
            { x: new Date(2013, 0), y: 70.243 },
            { x: new Date(2014, 0), y: 75.381 },
            { x: new Date(2015, 0), y: 80.406 },
            { x: new Date(2016, 0), y: 85.163 },
            { x: new Date(2017, 0), y: 90.270 },
            { x: new Date(2018, 0), y: 95.500 },
        ]
    },
    {
        heading: 'EcoTech',
        volume: '300k',
        growth: '+700X+',
        desc: 'EcoTech is leading the charge in creating sustainable energy solutions. By harnessing the power of clean energy and reducing environmental footprints, EcoTech is paving the way for a greener future.',
        btn: 'Go Green',
        btnLink: '#ecotech',
        pro: false,
        dataPoints: [
            { x: new Date(2011, 0), y: 220.735 },
            { x: new Date(2012, 0), y: 230.102 },
            { x: new Date(2013, 0), y: 140.569 },
            { x: new Date(2014, 0), y: 150.743 },
            { x: new Date(2015, 0), y: 160.381 },
            { x: new Date(2016, 0), y: 170.406 },
            { x: new Date(2017, 0), y: 280.163 },
            { x: new Date(2018, 0), y: 190.270 },
            { x: new Date(2019, 0), y: 100.500 },
        ]
    },
];
