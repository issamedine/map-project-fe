import axios from 'axios';
import L from "leaflet";

export const addLocation = async (lat, lng) => {
    const res = await axios.post(`http://localhost:5000/add-location?lat=${lat}&lng=${lng}`)
}

export const getLocations = async () => {
    const res = await axios.get(`http://localhost:5000/get-locations`)
    // const allWaypoints = []
    // res.data.forEach(element => {
    //     allWaypoints.push(L.latLng(element.lat, element.lng))
    // });
    // console.log('allWaypoints', allWaypoints)
    return res
}