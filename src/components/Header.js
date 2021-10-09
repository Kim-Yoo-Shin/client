import React,{Component} from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';



function Logout(e){ 
    localStorage.clear();
    swal.fire({
        icon: 'success',
        title: '로그아웃',
        text: '로그아웃 완료!', 
        confirmButtonText:'<a>확인</a>',
    }
    );
}

export default class Header extends Component {

    render(){
        var isUser = localStorage.getItem('accessToken')
        let buttons;

        if (!isUser){
            buttons = (
                <div className="header_option">
                    <VpnKeyIcon className="header_login"/>
                    <Link to ="/signin" className="homelogin">
                    <span className = "header_optionLine"> 로그인 </span>
                    </Link>
                </div>
            )
        }

        else{
            buttons = (
                <div className="header_option">
                <VpnKeyIcon className="header_login"/>
                <Link to ="/signin"  className="homelogin">
                <span onClick={e => Logout(e)} className = "header_optionLine"> 로그아웃 </span>
                </Link>
                
            </div>
            )
        }

    return (
        <div className="header">
            <Link to ="/" className="homeurl">
            <img className = "header_logo" src = "https://yt3.ggpht.com/ytc/AKedOLQf9XARnp2yzFCo9D8hFKckDRRtCXDJTcYLY2wwRw=s900-c-k-c0x00ffffff-no-rj"
            alt = "headerimage"/>
            </Link>
            <h1 className = "header_name">김 유 신 프로젝트</h1>
            
            <div className ="header_search">
                <input className ="header_searchInput" type="text"/>
                <SearchIcon className="header_serachIcon"/>
            </div>

            <div className="header_navigation">
            
                <span className = "header_optionLine"> {buttons} </span>

                <div className="header_option">
                    <EmojiPeopleIcon className="header_account"/>
                    <Link to ="/signup" className="homesign">
                    <span className = "header_optionLine"> 회원가입 </span>
                    </Link>
                </div>
                
                <div className="header_option">
                    <AccountCircleIcon className="header_mypageIcon"/>
                    <Link to ="/mypage" className="homemypage">
                    <span className = "header_optionLine"> 마이페이지 </span>
                    </Link>
                </div>

            </div>
        </div>
        
    );
}
}

