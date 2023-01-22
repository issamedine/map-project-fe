import { useEffect } from 'react'
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet"
import { addLocation, getLocations } from '../api/services';

let allWaypoints = []

function LeafletRoutingmachine() {
    const map = useMap();
    console.log("L.latLng", L.latLng)

    useEffect(() => {
        map.on('click', async function (e) {
            // console.log("e issam", e)
            // customWaypoints.push(L.latLng(e.latlng.lat, e.latlng.lng))
            await addLocation(e.latlng.lat, e.latlng.lng)

            await getLocations().then(res => res.data.forEach(element => {
                allWaypoints.push(L.latLng(element.lat, element.lng))
            }))

            L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
            L.Routing.control({
                waypoints: allWaypoints,
                lineOptions: {
                    styles: [
                        {
                            color: "blue",
                            weight: 4
                        },
                    ]
                },
                routeWhileDragging: false,
                geocoder: L.Control.Geocoder.nominatim(),
                // addWaypoints: false,
                // draggableWaypoints: false,
                // fitSelectedRoutes: true,
                // showAlternatives: false,

            }).addTo(map);
        })
    }, [])

    return null
}

export default LeafletRoutingmachine