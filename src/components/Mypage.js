import { Link } from 'react-router-dom';
import React,{Component} from 'react';
export default class Mypage extends Component{


render(){


return(<div>
    
    <Link to ="/signup">
    <span> 회원가입 </span>
    </Link>
    </div>);}
}