import React from 'react';
import { motion } from 'framer-motion';
import styles from './Logo.module.css';

const Logo = ({ variant = 'default', size = 'medium' }) => {
  return (
    <motion.div
      className={`${styles.logo} ${styles[variant]} ${styles[size]}`}
      whileHover={{ scale: 1.05 }}
    >
      <img src="/imgs/logo-anaro.png" alt="Logo" className={styles.logoImg} />
    </motion.div>
  );
};

export default Logo;