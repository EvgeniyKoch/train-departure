'use client';
import * as React from 'react';

import { IDeparture } from '@/app/departures/[station]/types';

import styles from './ShowDeparture.module.css';

interface IProps {
    departures: IDeparture[];
};

const ShowDeparture: React.FC<IProps> = (props) => {
    const [filteredDepartures, setFilteredDepartures] = React.useState(props.departures);

    React.useEffect(() => {
        setFilteredDepartures(props.departures);
    }, [props.departures]);

    const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toLowerCase();
        const filtered = props.departures.filter((departure) =>
            departure.to.toLowerCase().includes(value)
        );
        setFilteredDepartures(filtered);
    };

    return (
        <>
            <div className={styles.filter}>
                <input type="text" onChange={handleFilter} placeholder="Filter by destination" />
            </div>
            <ul>
                {filteredDepartures.map((departure, index) => (
                    <li key={index}>
                        <span>{departure.time.toLocaleString()}</span> - <span>{departure.to}</span>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default ShowDeparture;
