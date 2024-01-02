import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.logo}>
        Coded with 🤍 by{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/claire-karsenti/"
          aria-label="My linkedin"
        >
          <span className="me">Claire Karsenti</span>
        </a>
      </p>
    </div>
  );
};

export default Footer;
