import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi';
import styles from './Form1.module.css';

const Form1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Oi! Sou ${formData.name}. ${formData.message ? formData.message : 'Gostaria de saber mais sobre as massagens.'}`;
    const whatsappUrl = `https://wa.me/54984174451?text=${message}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.section
      id="contato"
      className={styles.formSection}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.formHeader}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>vamos conversar?</h2>
          <p>Estou aqui para te ajudar</p>
        </motion.div>

        <motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className={styles.inputGroup}
            whileFocus={{ scale: 1.02 }}
          >
            <FiUser className={styles.icon} />
            <input
              type="text"
              name="name"
              placeholder="Como posso te chamar? *"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </motion.div>



          <motion.div
            className={styles.inputGroup}
            whileFocus={{ scale: 1.02 }}
          >
            <FiMessageSquare className={styles.icon} />
            <textarea
              name="message"
              placeholder="Conte-me como posso te ajudar (opcional)"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              rows="5"
            />
          </motion.div>

          <motion.button
            type="submit"
            className={styles.submitBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiSend />
            Iniciar Conversa
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Form1;