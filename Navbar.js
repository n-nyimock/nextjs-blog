import Link from "next/link";
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return <div className={styles.navbar}>
        <div className={styles.links}>
        
        <Link href="/">Home</Link>
        {/* <Link href="/address">Address</Link> */}
        <Link href="/about">About</Link>
        {/* <Link href="/profile">Profile</Link> */}
        <Link href="/myself">Profile</Link>
        <Link href="/experience">Experience</Link>
        <Link href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile
" target='_blank'>Visit My LikedIn</Link>
        </div></div>

};
export default Navbar;