import React from "react";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

class Header extends React.Component {
    mobileMaxWidth = 700;
    isInited = false;

    constructor(props) {
        super(props);

        this.state = {
            isMobileMenuOpened: false,
            isLangDialogOpened: false,
            isMobileScreen: window.innerWidth < this.mobileMaxWidth,
            flag: this.getFlag()
        };

        this.setLanguage = this.setLanguage.bind(this);
    }

    componentDidMount() {
        if (!this.isInited) {
            window.addEventListener('resize', (event) => this.setState({ isMobileScreen: event.target.innerWidth < this.mobileMaxWidth }));
            this.isInited = true;
        }
    }
    //<li><Link to="/contacts" onClick={() => this.setState({ isMobileMenuOpened: false })}>{this.props.content.contactsLink}</Link></li>
    render() {
        return (
            <header className="prevent-select">
               <div className="logo">NickSoft2020</div>
               <ul className={this.state.isMobileMenuOpened && this.state.isMobileScreen ? "nav-links nav-links-mobile" : "nav-links nav-links-laptop"}>
                   <li><Link to="/" onClick={() => this.setState({ isMobileMenuOpened: false })}>{this.props.content.homeLink}</Link></li>
                   <li><Link to="/projects" onClick={() => this.setState({ isMobileMenuOpened: false })}>{this.props.content.projectsLink}</Link></li>
                   <li><Link to="/about" onClick={() => this.setState({ isMobileMenuOpened: false })}>{this.props.content.aboutLink}</Link></li>
                   
                   <li>
                        <img className="select-lang-button" src={`https://flagcdn.com/${this.state.flag}.svg`} onClick={() =>  this.setState({ isLangDialogOpened: !this.state.isLangDialogOpened })} width="32" height="20"/> 
                       { 
                           this.state.isLangDialogOpened &&
                           <div className="lang-select">
                               <div className="lang-option" onClick={() => this.setLanguage('ua')}>
                                   <img src="https://flagcdn.com/ua.svg" width="32" height="20"/> 
                                   <div className="lang-label">Українська</div>
                               </div>
                               <div className="lang-option" onClick={() => this.setLanguage('en')}>
                                   <img src="https://flagcdn.com/gb-eng.svg" width="32" height="20"/> 
                                   <div className="lang-label">English</div>
                               </div>
                           </div>     
                       }
                   </li>
               </ul>
               <button className="mobile-menu-button" onClick={() => this.setState({ isMobileMenuOpened: !this.state.isMobileMenuOpened }) }>
                   {this.state.isMobileMenuOpened ? <ImCross /> : <FaBars/>}
               </button>
           </header>
       );
    }

    setLanguage(value) {
        this.props.setTranslate(value);

        this.setState({
            isLangDialogOpened: !this.state.isLangDialogOpened,
            flag: this.getFlag() 
        });
    }

    getFlag() {
        return localStorage.getItem('language') == 'en' ? 'gb-eng' : localStorage.getItem('language');
    }
}

export default Header;