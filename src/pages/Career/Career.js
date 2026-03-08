import FadeInSection from "../../components/FadeInSection";
import { useEffect } from 'react';

function Career(props) {
    const translate = props.content;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div id="about" className="about-section">
                <FadeInSection>
                    <div className="about-title">{translate.careerPage.title}</div>
                    <p className="about-description fade-text">
                        {translate.careerPage.about1}      
                    </p>
                    <p className="about-description fade-text">
                        {translate.careerPage.about2}
                    </p>
                    <p className="about-description fade-text">
                        {translate.careerPage.about3}
                    </p>
                    <p className="about-description fade-text">
                        {translate.careerPage.about4}
                    </p>
                </FadeInSection>
            </div>
            <div id="about" className="about-section-ceo">
                <FadeInSection direction="fade-bottom">
                    <p className="about-description fade-text">
                        {translate.careerPage.aboutCEO}      
                    </p>
                </FadeInSection>
            </div>
        </div>
    )
}

export default Career;