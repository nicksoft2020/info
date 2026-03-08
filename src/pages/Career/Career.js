import FadeInSection from "../../components/FadeInSection";
import { useEffect } from 'react';
import styles from './Career.module.css';

function Career(props) {
    const translate = props.content;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div id="about" className={styles.aboutSection}>
                <FadeInSection>
                    <div className={styles.aboutTitle}>{translate.careerPage.title}</div>
                    <p className={`${styles.aboutDescription} ${styles.fadeText}`}>
                        {translate.careerPage.about1}      
                    </p>
                    <p className={`${styles.aboutDescription} ${styles.fadeText}`}>
                        {translate.careerPage.about2}
                    </p>
                    <p className={`${styles.aboutDescription} ${styles.fadeText}`}>
                        {translate.careerPage.about3}
                    </p>
                    <p className={`${styles.aboutDescription} ${styles.fadeText}`}>
                        {translate.careerPage.about4}
                    </p>
                </FadeInSection>
            </div>
            <div id="about" className={styles.aboutSectionCeo}>
                <FadeInSection direction="fade-bottom">
                    <p className={`${styles.aboutDescription} ${styles.fadeText}`}>
                        {translate.careerPage.aboutCEO}      
                    </p>
                </FadeInSection>
            </div>
        </div>
    )
}

export default Career;