import React from "react";
import FadeInSection from "../../components/FadeInSection";
import styles from "./Projects.module.css";

export default class Projects extends React.Component {
    language;
    translate;

    constructor(props) {
        super(props);
        
        this.state = {
            language: localStorage.getItem('language')
        }

        this.translate = this.props.content;
        this.checkTranslate = this.checkTranslate.bind(this);
    }

    componentDidUpdate() {
        this.checkTranslate();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    checkTranslate() {
        const isTranslateUpdated = this.translate && this.translate !== this.props.content;

        if (isTranslateUpdated || this.language === null) {
            this.translate = this.props.content;

            this.setState({
                language: localStorage.getItem('language')
            });
        }
    }
// - <a className="project-link" href="https://eden-2012.onrender.com/" target="_blank">{this.translate.link}</a>.
    render() {
        /*
         <div className="projects-title">{this.translate.projectsLink}</div>
        */

         /*
<div className='project-block'>
                        <FadeInSection>
                            <div className='project-title'>
                                {this.translate.justMusic}
                            </div>
                            <div className="project-content">
                                <div className='project-video'>
                                    { 
                                        this.state.language === 'en' && 
                                        <iframe className={styles.videoFile}
                                            src="https://www.youtube.com/embed/DYemWhmI0CU?si=Mvdsq-rYzxbdSZGT" 
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        ></iframe>
                                    }

                                    { 
                                        this.state.language === 'ua' && 
                                        <iframe className={styles.videoFile}
                                            src="https://www.youtube.com/embed/wSMWlNoiCkQ?si=HN3bGO5-RLSSqUvO" 
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        ></iframe>
                                    }
                                </div>
                                <div className='project-description'>
                                    <p>{this.translate.justMusicDescription} <a className="project-link" href="https://play.google.com/store/apps/details?id=com.anonymous.JustMusic&pli=1" target="_blank">Google play market</a>.</p>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>

                    <div className='project-block'>
                        <FadeInSection>
                            <div className='project-title'>
                                {this.translate.eden2012WebsiteBusinessCard}
                            </div>
                            <div className="project-content">
                                <div className='project-video'>
                                    { 
                                        this.state.language === 'en' && 
                                        <iframe className={styles.videoFile}
                                            src="https://www.youtube.com/embed/H5iFAlNlYL0?si=jhez1jkJMTYfbrNU" 
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        ></iframe>
                                    }

                                    { 
                                        this.state.language === 'ua' && 
                                        <iframe className={styles.videoFile}
                                            src="https://www.youtube.com/embed/9xMh28EJlz0?si=q3iR--OXkPzSlLqj" 
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        ></iframe>
                                    }
                                </div>
                                <div className='project-description'>
                                    <p>{this.translate.eden2012WebsiteBusinessCardDescription}</p>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
         */
        return (
            <div>
               
                <div className={styles.projectList}>
                    <div className={`${styles.projectSection} ${styles.primaryBackground}`}>
                        <div className={styles.projectBlock}>
                            <FadeInSection direction="fade-bottom">
                                <div className={styles.projectTitle}>
                                    {this.translate.eden2012ERP.title}
                                </div>
                            </FadeInSection>

                            <div className={styles.projectContent}>
                                <FadeInSection direction="fade-left">
                                    <div className={styles.projectVideo}>
                                        { 
                                            this.state.language === 'en' && 
                                            <iframe className={styles.videoFile}
                                                src="https://www.youtube.com/embed/U5umz6aDpPI?si=muxYylurSIm7nluC" 
                                                title="YouTube video player" 
                                                frameBorder="0" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                                referrerPolicy="strict-origin-when-cross-origin" 
                                                allowFullScreen
                                            ></iframe>
                                        }

                                          { 
                                            this.state.language === 'ua' && 
                                            <iframe className={styles.videoFile}
                                                src="https://www.youtube.com/embed/om3HByi2KPo?si=kb9-Tngurk5BE9ra" 
                                                title="YouTube video player" 
                                                frameBorder="0" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                                referrerPolicy="strict-origin-when-cross-origin" 
                                                allowFullScreen
                                            ></iframe>
                                        }
                                    </div>
                                </FadeInSection>
                                    
                                <FadeInSection direction="fade-right">
                                    <div className={styles.projectDescription}>
                                        <p className={styles.generalDescription}>{this.translate.eden2012ERP.generalDescription}</p>

                                        <h4>{this.translate.eden2012ERP.functionality.title}</h4>

                                        <ul className={styles.projectDescriptionList}>
                                            <li>{this.translate.eden2012ERP.functionality.point1}</li>
                                            <li>{this.translate.eden2012ERP.functionality.point2}</li>
                                            <li>{this.translate.eden2012ERP.functionality.point3}</li>
                                            <li>{this.translate.eden2012ERP.functionality.point4}</li>
                                            <li>{this.translate.eden2012ERP.functionality.point5}</li>
                                        </ul>
                                        
                                        <p className={styles.arcitecturalDescription}>{this.translate.eden2012ERP.architecturalDescription}</p>

                                        <h4>{this.translate.eden2012ERP.technologies.title}</h4>

                                        <ul className={styles.projectTecnologiesList}>
                                            <li>{this.translate.eden2012ERP.technologies.point1}</li>
                                            <li>{this.translate.eden2012ERP.technologies.point2}</li>
                                            <li>{this.translate.eden2012ERP.technologies.point3}</li>
                                            <li>{this.translate.eden2012ERP.technologies.point4}</li>
                                            <li>{this.translate.eden2012ERP.technologies.point5}</li>
                                        </ul>
                                    </div>
                                </FadeInSection>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`${styles.projectSection} ${styles.lightBackground}`}>
                        <div className={styles.projectBlock}>
                            <FadeInSection direction="fade-bottom">
                                <div className={styles.projectTitle}>
                                    {this.translate.justMusicMobile.title}
                                </div>
                            </FadeInSection>

                            <div className={styles.projectContent}>
                                <FadeInSection direction="fade-left">
                                    <div className={styles.projectVideo}>
                                        { 
                                            this.state.language === 'en' && 
                                            <iframe className={styles.videoFile}
                                                src="https://www.youtube.com/embed/DYemWhmI0CU?si=Mvdsq-rYzxbdSZGT" 
                                                title="YouTube video player" 
                                                frameBorder="0" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                                referrerPolicy="strict-origin-when-cross-origin" 
                                                allowFullScreen
                                            ></iframe>
                                        }

                                        { 
                                            this.state.language === 'ua' && 
                                            <iframe className={styles.videoFile}
                                                src="https://www.youtube.com/embed/wSMWlNoiCkQ?si=HN3bGO5-RLSSqUvO" 
                                                title="YouTube video player" 
                                                frameBorder="0" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                                referrerPolicy="strict-origin-when-cross-origin" 
                                                allowFullScreen
                                            ></iframe>
                                        }
                                    </div>
                                </FadeInSection>
                                    
                                <FadeInSection direction="fade-right">
                                    <div className={styles.projectDescription}>
                                        <p className={styles.generalDescription}>{this.translate.justMusicMobile.generalDescription}</p>

                                        <h4>{this.translate.justMusicMobile.functionality.title}</h4>

                                        <ul className={styles.projectDescriptionList}>
                                            <li>{this.translate.justMusicMobile.functionality.point1}</li>
                                            <li>{this.translate.justMusicMobile.functionality.point2}</li>
                                            <li>{this.translate.justMusicMobile.functionality.point3}</li>
                                            <li>{this.translate.justMusicMobile.functionality.point4}</li>
                                            <li>{this.translate.justMusicMobile.functionality.point5}</li>
                                            <li>{this.translate.justMusicMobile.functionality.point6}</li>
                                        </ul>

                                        <h4 className={`${styles.marginTop10}`}>{this.translate.justMusicMobile.technologies.title}</h4>

                                        <ul className={`${styles.projectTecnologiesList}`}>
                                            <li>{this.translate.justMusicMobile.technologies.point1}</li>
                                            <li>{this.translate.justMusicMobile.technologies.point2}</li>
                                            <li>{this.translate.justMusicMobile.technologies.point3}</li>
                                            <li>{this.translate.justMusicMobile.technologies.point4}</li>
                                            <li>{this.translate.justMusicMobile.technologies.point5}</li>
                                            <li>{this.translate.justMusicMobile.technologies.point6}</li>
                                        </ul>
                                    </div>
                                </FadeInSection>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}