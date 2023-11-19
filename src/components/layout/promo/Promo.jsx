import styles from '/src/components/layout/promo/Promo.module.scss'

const Promo = () => {
    return (
        <section className={styles.promo}>
            <div className={styles.container}>
                <div className={styles.promo__content}>
                    <div className={styles.promo__text}>TEXT</div>
                    <div className={styles.promo__image}>
                        <img src="public/promo.jpg" alt="Promo"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promo;