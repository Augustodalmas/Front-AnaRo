import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import styles from './Gallery1.module.css';

const Gallery1 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Massagem Modeladora',
      category: 'massagem',
      description: 'Melhora oxigenação dos tecidos, reduz celulite, edemas e flacidez.',
      image: '/imgs/massagem-1.jpg',
      tech: ['Massagem', 'Bem-estar']
    },
    {
      id: 2,
      title: 'Massagem Relaxante',
      category: 'massagem',
      description: 'Reduz estresse e ansiedade, fortalece o sistema imunológico, elimina toxinas e aumenta qualidade de vida.',
      image: '/imgs/massagem-2.jpg',
      tech: ['Massagem', 'Conforto']
    },
    {
      id: 3,
      title: 'Drenagem linfática',
      category: 'drenagem',
      description: 'Reduz inchaço, melhora circulação, reduz celulite e edemas e é forte aliado no controle do lipedema.',
      image: '/imgs/massagem-3.jpg',
      tech: ['Drenagem']
    },
    {
      id: 4,
      title: 'Massagens terapêutica',
      category: 'massagem',
      description: 'Alívio das tensões e trata dores musculares.',
      image: '/imgs/massagem-4.jpg',
      tech: ['Massagens', 'Terapia']
    },
    {
      id: 5,
      title: 'Drenagem Linfática pós operatório',
      category: 'drenagem',
      description: 'A drenagem linfática pós operatório auxilia a recuperação cirúrgica e acelera a cicatrização. Proporcionando um resultado mais satisfatório.',
      image: '/imgs/massagem-5.jpg',
      tech: ['Drenagem']
    },
    {
      id: 6,
      title: 'ReiKi',
      category: 'reiKi',
      description: 'Transferência de energia vital do universo para o corpo. Promove sensações de paz bem estar e equilíbrio. Estimula a produção de serotonina e endorfina reduzindo dores crônicas e contribui para o aumento da autoestima.',
      image: '/imgs/massagem-6.jpg',
      tech: ['Drenagem', 'Linfática']
    }
  ];

  const filters = ['all', 'massagem', 'drenagem', 'reiKi'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <motion.section
      id="portfolio"
      className={styles.gallery}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>serviços prestados</h2>
        </motion.div>

        <motion.div
          className={styles.filters}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {filters.map(filter => (
            <button
              key={filter}
              className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'all' ? 'Todos' : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </motion.div>

        <motion.div
          className={styles.grid}
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              layout
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} />
              </div>

              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tech}>
                  {project.tech.map(tech => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gallery1;