import React, { useEffect, useState } from 'react';
import { fetchHotels } from '../services/api';
import { Hotel } from '../types/hotel';
import HotelCard from '../components/HotelCard';
import '../styles/HotelList.css';

const HotelsList = () => {
    const [hotels, setHotels] = useState<Hotel[] | null>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchHotels();
          setHotels(data);
          setError(false);
        } catch (err) {
        setError(true);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

      if (loading) {
        return <div className="spinner"></div>;
      }

      if (error) {
        throw new Error("Something went wrong. Please try again later."); 
      }

      if (!hotels) {
        throw new Error("Something went wrong. Please try again later.");
      }

    return(
        <>
          <h2 className='header'>HOTEL LIST</h2>
         <div className="hotels-list">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div> 
        </>
       
    )
}

export default HotelsList;
