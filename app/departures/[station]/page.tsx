import * as React from 'react';

import ShowDeparture from "@/app/departures/[station]/ShowDeparture";
import { IDeparture } from "@/app/departures/[station]/types";

import styles from './layout.module.css';

const BASE_URL = 'https://transport.opendata.ch/v1/stationboard';

async function getDepartures(station: string): Promise<any> {
    const path = `${BASE_URL}?station=${station}&type=departure&transportations=train&limit=10`;
    const data = await fetch(path, { next: { revalidate: 30 } });
   return data.json();
};

const prepareDepartures = (departuresData): IDeparture[] => {
   return departuresData.stationboard.map((departure) => ({
        number: departure.number,
        time: departure.stop.departure,
        to: departure.to,
    }));
}

const Departures = async (props: { params: { station: string }}) => {
    const departuresData = await getDepartures(props.params.station);
    const departures =  prepareDepartures(departuresData);

    return (
        <>
            <h1>Departures from {props.params.station}</h1>
            <ShowDeparture departures={departures}/>
        </>
    );
};

export default Departures;
