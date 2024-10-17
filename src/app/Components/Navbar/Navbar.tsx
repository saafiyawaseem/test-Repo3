
import style from "./Navbar.module.css"
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={style.container}>
        <h1 className={style.heading}> Navbar</h1>
        <ul className={style.list}>
        <li><Link className={style.link} href="./">Home</Link></li>
        <li> <Link className={style.link} href="./skills">Skills</Link></li>
        <li> <Link className={style.link} href="./services">Servics</Link></li>
        <li> <Link className={style.link} href="./contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
