import Head from 'next/head'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Pilots = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('/.netlify/functions/getpilots')
            .then(res => {
                setUsers(res.data);
            })
    }, [])

    return (
        <>
            <Head>
                <title>Legion Varus | pilots</title>
                <meta name="keywords" content="pilots" />
            </Head>
            <div>
                <h1>All Pilots</h1>
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Pilots;