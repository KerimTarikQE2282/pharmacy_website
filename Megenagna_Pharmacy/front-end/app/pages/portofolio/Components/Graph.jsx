"use client"
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const PharmaChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Chart data and configuration
    const data = {
      labels: [
        "2002 EC",
        "2003 EC",
        "2004 EC",
        "2005 EC",
        "2006 EC",
        "2007 EC",
        "2008 EC",
        "2009 EC",
        "2010 EC",
        "2011 EC",
        "2012 EC",
        "2013 EC",
        "2014 EC",
        "2015 EC",
        "2016 EC",
      ],
      datasets: [
        {
          label: "Total Assets (Birr)",
          data: [
            265840.83, 639622.96, 812862.03, 1026136.27, 1070538,
            1251455, 906195, 3387428, 3147580, 2475020, 8594767,
            8578521, 10994042, 13718561,
          ],
          borderColor: "#42abf5",
          backgroundColor: "rgba(66, 171, 245, 0.2)",
          borderWidth: 2,
          pointRadius: 5,
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            label: (tooltipItem) => {
              const descriptions = [
                "The company started with a capital of 450,000 birr, owned by three individuals, with total assets of 265,840.83 birr.",
                "Total assets grew to 639,622.96 birr, marking a growth rate of 58.4%.",
                "Total assets increased to 812,862.03 birr, with a growth rate of 26%.",
                "Assets reached 1,026,136.27 birr, achieving a growth rate of 21%.",
                "Total assets reached 1,070,538 birr, marking a growth rate of 4.1%.",
                "Assets grew to 1,251,455 birr, a 17% increase from the previous year. Paid-up capital was raised to 471,000 birr.",
                "The company opened a human medicine wholesale outlet and achieved a total asset of 906,195 birr, though this marked a 28% decrease from the previous year.",
                "The company saw a significant growth with total assets rising to 3,387,428 birr, a 74% increase from the previous year.",
                "The company’s assets slightly decreased to 3,147,580 birr, with an investment in AAICEC of 100,000 birr.",
                "Assets grew by 21%, reaching 2,475,020 birr.",
                "Total assets surged to 8,594,767 birr, with an investment in Zeorit Medium Clinic of 600,000 birr.",
                "Assets reached 8,578,521 birr, and the paid-up capital was raised to 771,000 birr.",
                "The company’s assets increased to 10,994,042 birr, and the paid-up capital was raised to 1,281,000 birr.",
                "The company opened a sister company, Kehali Human Medicine Medical Equipment, in Kombolcha, with total assets reaching 13,718,561 birr.",
                "Expansion continued with the opening of a second pharmacy in Debre Berhan, a pesticide and insecticide retail shop in Addis Ababa, and the Megenagna Pharmaceuticals PLC Animal Feed Production Farm and Farmer Training Center.",
              ];
              return descriptions[tooltipItem.dataIndex];
            },
          },
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: "Total Assets (Birr)",
          },
          ticks: {
            callback: (value) => value.toLocaleString(),
          },
        },
        x: {
          title: {
            display: true,
            text: "Year (EC)",
          },
        },
      },
    };

    // Create a new chart instance
    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data,
      options,
    });

    // Cleanup to destroy the chart on component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="lg:flex hidden  flex-row items-center justify-center mt-10 gap-10">
      <div className="w-2/3">
        <canvas ref={chartRef} />
      </div>
      <div className="bg-blue-500 text-white p-5 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">
          Megenagna Pharmaceuticals PLC
        </h2>
        <p>
          From its humble beginnings to becoming a leader in the pharmaceutical
          industry, Megenagna Pharmaceuticals PLC demonstrates the power of
          vision and growth.
        </p>
      </div>
    </div>
  );
};

export default PharmaChart;
  