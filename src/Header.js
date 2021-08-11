import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to ="/" className="homeurl">
            <img className = "header_logo" src = "https://yt3.ggpht.com/ytc/AKedOLQf9XARnp2yzFCo9D8hFKckDRRtCXDJTcYLY2wwRw=s900-c-k-c0x00ffffff-no-rj"
             alt = "headerlogo"/ >
            </Link>
            <h1 className = "header_name"> MAN</h1>
            

            <div className ="header_search">
                <input className ="header_searchInput" type="text"/>
                <SearchIcon className="header_serachIcon"/>
            </div>

            <div className="header_navigation">
                <div className="header_option">
                    <VpnKeyIcon className="header_login"/>
                    <Link to ="/Login" className="homelogin">
                    <span className = "header_optionLine"> 로그인 </span>
                    </Link>
                    
                </div>

                <div className="header_option">
                    <EmojiPeopleIcon className="header_account"/>
                    <Link to ="/Signup" className="homesign">
                    <span className = "header_optionLine"> 회원가입 </span>
                    </Link>
                </div>
                
                <div className="header_option">
                <AccountCircleIcon className="header_mypageIcon"/>
                <span className = "header_optionLine"> 마이페이지 </span>

                </div>
            </div>

        </div>
    );
}

export default Header;