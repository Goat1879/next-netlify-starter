import Head from 'next/head'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Ships = () => {
    const [ships, setShips] = useState([])
    useEffect(() => {
        axios.get('https://api.starcitizen-api.com/e7829217edf9a6b2c58005b127491d2a/v1/live/ships')
            .then(res => {
                setShips(res.data);
            })
    }, [])

    return (
        <>
            <Head>
                <title>Legion Varus | ships</title>
                <meta name="keywords" content="ships" />
            </Head>
            <div>
                <h1>All Ships</h1>
                <dl>
                    {ships.map(ship => (
                        <>
                            <dt>
                                {ship.name}
                            </dt>
                            <dd>
                                {ship.description}
                            </dd>
                        </>
                    ))}
                </dl>
            </div>
        </>
    );
}
