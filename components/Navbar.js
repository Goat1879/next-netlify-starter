import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Navbar = () => {
    return (
       <nav>
           <div className="logo">
                <Image src="/logo.jpg" width={140} height={150} />
           </div>
           <Link href='/'><a>Home</a></Link>
           <Link href="/about"><a>About</a></Link>
           <Link href="pilots"><a>Pilots</a></Link>
       </nav> 
    );
}
 
export default Navbar;
