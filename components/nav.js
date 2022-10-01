import { useState } from "react";
import style from "../styles/Nav.module.css";
import Link from "next/link";
const Nav = () => {
    const [nav, setnav] = useState(false)
  return (
    <nav className={style.navbar}>
        <ul className={style.lt1}>
            <li>Numidica</li>
            <li>
                <svg viewBox="0 0 100 80" width="40" height="40" onClick={() => setnav(c => !c)}>
                    <rect width="100" fill="white" height="10"></rect>
                    <rect y="30" width="100" fill="white" height="10"></rect>
                    <rect y="60" width="100" fill="white" height="10"></rect>
                </svg>
            </li>
        </ul>
        <ul className={nav ? style.active : style.lt2} id="slide">
            <li>
            <Link href="/#home" scroll={true}>
                    <a>
                        Home
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/#login" scroll={true}>
                    <a>
                        Login <code>/</code> Create
                    </a>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav