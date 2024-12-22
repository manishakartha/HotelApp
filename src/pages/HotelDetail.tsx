import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchHotelById } from '../services/api';
import { Hotel } from '../types/hotel';
import '../styles/HotelDetail.css';

const HotelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchHotelById(Number(id))
      .then((data) => {
        setHotel(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="spinner"></div>;
  }

  if (error || !hotel) {
    throw new Error("Hotel not found.");
  }

  return (
    <div className="hotel-details">
      <img src={hotel.imageUrl} alt={hotel.name} className="hotel-image" />
      <h2>{hotel.name}</h2>
      <p><b>Location:</b> {hotel.location}</p>
      <p><b>Rating:</b> {hotel.rating}</p>
      <p><b>Board Basis:</b> {hotel.boardBasis}</p>
      <p><b>Dates of Travel:</b> {hotel.datesOfTravel.join(', ')}</p>
      <h3>Rooms:</h3>
      <ul>
        {hotel.rooms.map((room, index) => (
          <li key={index}>
            {room.roomType} - {room.amount} available
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HotelDetail;