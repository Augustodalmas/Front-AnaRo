import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiCoffee } from 'react-icons/fi';
import styles from './About1.module.css';

const About1 = () => {
  const stats = [
    { icon: FiAward, number: '5+', label: 'Massagens' },
    { icon: FiUsers, number: '10+', label: 'Clientes' },
    { icon: FiCoffee, number: '50+', label: 'Cafés' }
  ];

  return (
    <motion.section
      id="sobre"
      className={styles.about}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.imageSection}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <img src="/imgs/logo-anaro.png" alt="Sobre mim" />
              <div className={styles.imageOverlay}></div>
            </div>
          </motion.div>

          <motion.div
            className={styles.textSection}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2>sobre a profissional</h2>
            <p className={styles.description}>
              A AnaRo nasceu com o propósito de promover o equilíbrio entre corpo, mente e alma.
            </p>

            <p className={styles.description}>
              Com um toque suave, um ambiente acolhedor e técnicas que despertam o relaxamento profundo, cada atendimento é pensado para fortalecer a conexão entre você e o seu propósito.
            </p>

            <p className={styles.description}>
              Mais do que uma massagem, uma experiência de cuidado e autoconhecimento.
            </p>

            <div className={styles.stats}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={styles.statItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <stat.icon className={styles.statIcon} />
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About1;