import axios from "axios";
import { Hotel } from "../types/hotel";

const base_URL = `http://localhost:5000`;

export const fetchHotels = async (): Promise<Hotel[]> => {
    const response = await axios.get(`${base_URL}/hotels`);
    return response.data;
};

export const fetchHotelById = async (id: number): Promise<Hotel> => {
    const response = await axios.get(`${base_URL}/hotels/${id}`);
    return response.data;
};;  