"use client"

import React, {useState} from "react";
import GoogleMapReact from 'google-map-react';

const Map = () => {
    const [map, setMap] = useState(null);
    const [maps, setMaps] = useState(null);
    const [geocoder, setGeocoder] = useState(null);
    const [address, setAddress] = useState("");
    const [marker, setMarker] = useState(null);

    const defaultLatLng = {
        lat: 35.694630018649,
        lng: 139.4454898824742,
    };
    /*const items = [
        {
            lat: 35.66662253434041,
            lng: 139.72839635120616,
        },
        {
            lat: 35.659423163457205,
            lng: 139.73071814501998,
        },
        {
            lat: 35.652839801546676,
            lng: 139.73760621969103,
        },
    ];*/

    //objectにmap,mapsが入っている
    const handleApiLoaded = (object) => {
        setMap(object.map);
        setMaps(object.maps);
        setGeocoder(new object.maps.Geocoder())
    };

    const search = () => {
        geocoder.geocode({
            address,
        },(results, status) => {
            if (status === maps.GeocoderStatus.OK){
                if (results) {
                    map.setCenter(results[0].geometry.location);
                }
                if(marker){
                    marker.setMap(null);
                }
                if (results) {
                    setMarker(new maps.Marker({
                        map,
                        position: results[0].geometry.location,
                    }))
                    console.log(results[0].geometry.location.lat());
                    console.log(results[0].geometry.location.lng());
                }
            }
        })
    }
    /*const handleApiLoaded = ({map,maps}) => {
        const bounds = new maps.LatLngBounds();
        items.forEach((item)=>{
            const marker = new maps.Marker({
                position:{
                    lat: item.lat,
                    lng: item.lng,
                },
                map,
            });
            bounds.extend(marker.position)
        });
        map.fitBounds(bounds)
    }*/

    /*const setLatLng = ({x,y,lat,lng, event}) => {
        if ( marker ) {
            marker.setMap(null);
        }
        const latLng = {
            lat,
            lng,
        }
        setMarker(new maps.Marker({
            map,
            position: latLng,
        }));
        map.panTo(latLng)
    }*/

    return (
        <div style={{ height: '100%', width: '100%' }} className="relative">
            <div className="w-1/3 flex flex-row items-center justify-self-end absolute top-0 left-0 z-10">
                <input type="text" onChange={(e) => setAddress(e.target.value)} className="w-40 h-8 rounded-xl text-xl text-center" />
                <button type="button" onClick={search} className="btn btn-sm bg-blue-800 text-white hover:bg-blue-600">Search</button>
            </div>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY }}
                defaultCenter={defaultLatLng}
                defaultZoom={16}
                onGoogleApiLoaded={handleApiLoaded}
            />
        </div>
    )
}

export default Map;