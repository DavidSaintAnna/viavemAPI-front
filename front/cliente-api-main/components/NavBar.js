import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/Aeroportos">Aeroportos</Link>
      <Link href="/Passagens">Passagens</Link>
      <Link href="/Usuarios">Usuarios</Link>
      <Link href="/Comentarios">Comentarios</Link>
    </nav>
  );
};

export default Navbar;
