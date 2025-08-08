import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../Logo/Logo';
import styles from './Header1.module.css';

const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Sobre', 'Portfólio', 'Contato'];

  return (
    <motion.header
      id="home"
      className={styles.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <Logo variant="default" size="medium" />

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          {menuItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace('ó', 'o')}`}
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </motion.header>
  );
};

export default Header1;