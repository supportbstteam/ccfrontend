import React, { useState, useEffect, useRef } from 'react';
import { fetchData } from '../../apiConnection/apiService';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const gridcolor = ['#895364', '#f39178', '#e2b747', '#88b6ba', '#ff6c86'];

function Bars() {
  const [BarData, setBarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const barChartsRef = useRef(null);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responseService = await fetchData('/infra-structure');
        setBarData(responseService[0]);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchDataFromAPI();
  }, []);

  useEffect(() => {
    if (!BarData) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll('.progress-bar');
          progressBars.forEach((bar) => {
            const dataWidth = bar.getAttribute('datawidth');
            bar.style.width = dataWidth + '%';
          });
          observer.unobserve(entry.target); // Stop observing after setting widths
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    const barChartsElement = barChartsRef.current;
    if (barChartsElement) {
      observer.observe(barChartsElement);
    }

    return () => {
      if (barChartsElement) {
        observer.unobserve(barChartsElement);
      }
    };
  }, [BarData]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledColors = shuffleArray(gridcolor);

  const { title, footer_content, infracat } = BarData || {};
  return (
    <>
      <div className="branche-figure" data-aos="fade-up">
        <div className="branche-cols">
          <h5>{title || ''}</h5>
        </div>
        <div className="bar-charts" ref={barChartsRef}>
          {infracat
            ? infracat.map((item, index) => (
                <div className="progress" key={index}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    datawidth={(item.number / 500) * 100}
                    style={{ width: `0%`, background: `${shuffledColors[index % shuffledColors.length]}` }}
                    aria-valuenow="5"
                    aria-valuemin="0"
                    aria-valuemax="500"
                  >
                    {item.number}
                  </div>
                  <div>
                    <img
                      src={`https://teamwebdevelopers.com/charge_construct/public/images/infracat/${item.image}`}
                      alt="infracat image"
                    />
                  </div>
                </div>
              ))
            : ''}
        </div>
        <div className="barcharts-footer">
          <p>{footer_content || ''}</p>
        </div>
      </div>
    </>
  );
}

export default Bars;