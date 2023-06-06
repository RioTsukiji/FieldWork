"use client"

import React, {useEffect, useRef, useState} from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import Marker from "@/ducks/create/components/Marker";

interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
}

const DEFAULT = {
    CENTER: {
        lat: 35.694630018649,
        lng: 139.4454898824742
    } as google.maps.LatLngLiteral,
    ZOOM: 16
} as const;

const VIEW_STYLE = {
    width: '100%',
    height: '100%',
}

const Map: React.FC<MapProps> = ({
         onClick,
         onIdle,
         children,
         style,
         ...options
     }) =>{
    return (
        <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}>
            <MyMapComponent>
                {/*<Marker position={position} />*/}
            </MyMapComponent>
        </Wrapper>
    )
}


const MyMapComponent: React.FC = () => {
    const ref = useRef<HTMLDivElement>(document.createElement('div'));
    const [map, setMap] = useState<google.maps.Map>();

    useEffect(() => {
        if (ref.current && !map) {
            const option = {
                center: DEFAULT.CENTER,
                zoom: DEFAULT.ZOOM,
            };
            setMap(new window.google.maps.Map(ref.current, option));
        }
    }, [map]);

    return (
        <div style={VIEW_STYLE} ref={ref}/>
    );
};

export default Map;