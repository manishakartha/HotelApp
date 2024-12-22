import React from 'react';
import { Hotel } from '../types/hotel';
import { Link } from 'react-router-dom';
import '../styles/HotelCard.css';


interface HotelCardProps {
    hotel: Hotel;
}

const HotelCard= ({ hotel }:HotelCardProps) => (
    <>
        <Link to={`/hotels/${hotel.id}`} className="hotel-card-link">
            <div className="hotel-card">
                <img src={hotel.imageUrl} alt={hotel.name} className="hotel-image" />
                <div className="hotel-info">
                    <h3>{hotel.name}</h3>
                    <p><b>Location:</b> {hotel.location}</p>
                    <p><b>Rating:</b> {hotel.rating}</p>
                    <p><b>Dates of Travel:</b> {hotel.datesOfTravel.join(', ')}</p>
                    <p><b>Board Basis :</b>{hotel.boardBasis}</p>
                    <p><b>Number of Rooms:</b> {hotel.rooms.length}</p>
                    <p><b>Room Type :</b>{hotel.rooms.map((e) => e.roomType)}</p>
                </div>
            </div>
        </Link>       
    </>
);

export default HotelCard;
