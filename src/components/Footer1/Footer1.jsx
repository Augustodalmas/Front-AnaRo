import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import styles from './Footer1.module.css';

const Footer1 = () => {
  const socialLinks = [
    { icon: FiInstagram, href: 'https://www.instagram.com/_anaro_massagem_feminina_/', label: 'Instagram' }
  ];

  const quickLinks = [
    { name: 'Sobre', href: '#Sobre' },
    { name: 'Portfólio', href: '#Portfólio' },
    { name: 'Contato', href: '#Contato' }
  ];

  const services = [
    { name: 'Web Design', href: '#' },
    { name: 'Desenvolvimento', href: '#' },
    { name: 'UI/UX Design', href: '#' },
    { name: 'Consultoria', href: '#' },
    { name: 'SEO', href: '#' },
    { name: 'Manutenção', href: '#' }
  ];

  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.brand}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* <Logo variant="light" size="large" /> */}
            <p>Essa conexão entre o propósito de cada cliente e seu interior é aflorada através do toque suave, o ambiente e o relaxamento físico proporcionando.</p>

            <div className={styles.contact}>
              {/* <div className={styles.contactItem}>
                <FiMail />
                <span>contato@studio.com</span>
              </div> */}
              <div className={styles.contactItem}>
                <FiPhone />
                <span>+55 (54) 98409-6156</span>
              </div>
              <div className={styles.contactItem}>
                <FiMapPin />
                <span>Rio Grande do Sul, RS</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.links}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4>Links Rápidos</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <a href={link.href}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* <motion.div
            className={styles.links}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4>Serviços</h4>
            <ul>
              {services.map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  <a href={service.href}>{service.name}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div> */}

          <motion.div
            className={styles.social}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h4>Redes Sociais</h4>
            <p>Siga-nos para acompanhar nossos projetos e novidades</p>

            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={styles.socialLink}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>&copy; 2025 Studio. Todos os direitos reservados.</p>
          <div className={styles.bottomLinks}>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer1;