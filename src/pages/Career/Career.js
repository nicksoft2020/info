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
            <div className={`${styles.infoSection} ${styles.primaryBackground}`}>
                <FadeInSection>
                    <div className={styles.jobSection}>
                        <h3>{translate.careerPage.job1.position}</h3>
                        <h4>{translate.careerPage.job1.period}</h4>

                        <p className={styles.jobDescription}>{translate.careerPage.job1.description}</p>

                        <h4 className={styles.mt10}>{translate.careerPage.job1.technologies.title}</h4>

                        <ul className={`${styles.infoList}`}>
                            <li>{translate.careerPage.job1.technologies.point1}</li>
                            <li>{translate.careerPage.job1.technologies.point2}</li>
                            <li>{translate.careerPage.job1.technologies.point3}</li>
                            <li>{translate.careerPage.job1.technologies.point4}</li>
                            <li>{translate.careerPage.job1.technologies.point5}</li>
                            <li>{translate.careerPage.job1.technologies.point6}</li>
                            <li>{translate.careerPage.job1.technologies.point7}</li>
                        </ul>

                        <h4 className={styles.mt10}>{translate.careerPage.job1.keyResponsibilitiesAchievements.title}</h4>

                        <ul className={`${styles.infoList}`}>
                            <li>{translate.careerPage.job1.keyResponsibilitiesAchievements.point1}</li>
                            <li>{translate.careerPage.job1.keyResponsibilitiesAchievements.point2}</li>
                            <li>{translate.careerPage.job1.keyResponsibilitiesAchievements.point3}</li>
                        </ul>
                    </div>
                </FadeInSection>                
            </div>
            <div className={`${styles.infoSection} ${styles.lightBackground}`}>
                <FadeInSection>
                    <div className={styles.jobSection}>
                        <h3>{translate.careerPage.job2.position}</h3>
                        <h4>{translate.careerPage.job2.period}</h4>

                        <p className={styles.jobDescription}>{translate.careerPage.job2.description}</p>

                        <h4 className={styles.mt10}>{translate.careerPage.job2.technologies.title}</h4>

                        <ul className={`${styles.infoList}`}>
                            <li>{translate.careerPage.job2.technologies.point1}</li>
                            <li>{translate.careerPage.job2.technologies.point2}</li>
                            <li>{translate.careerPage.job2.technologies.point3}</li>
                            <li>{translate.careerPage.job2.technologies.point4}</li>
                            <li>{translate.careerPage.job2.technologies.point5}</li>
                            <li>{translate.careerPage.job2.technologies.point6}</li>
                            <li>{translate.careerPage.job2.technologies.point7}</li>
                        </ul>

                        <h4 className={styles.mt10}>{translate.careerPage.job2.keyResponsibilitiesAchievements.title}</h4>

                        <ul className={`${styles.infoList}`}>
                            <li>{translate.careerPage.job2.keyResponsibilitiesAchievements.point1}</li>
                            <li>{translate.careerPage.job2.keyResponsibilitiesAchievements.point2}</li>
                            <li>{translate.careerPage.job2.keyResponsibilitiesAchievements.point3}</li>
                        </ul>
                    </div>
                </FadeInSection>
            </div>
        </div>
    )
}

export default Career;