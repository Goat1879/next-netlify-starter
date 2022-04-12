import Head from 'next/head'
import axios from 'axios';

const Pilots = () => {
    axios.get('/.netlify/functions/getpilots')
    .then(res => {
      console.log(res.data);
    })
    return (
        <>
        <Head>
            <title>Legion Varus | pilots</title>
            <meta name="keywords" content="pilots" />
        </Head>
        <div>
            <h1>All Pilots</h1>
        </div>
        </>
    );
}
 
export default Pilots;