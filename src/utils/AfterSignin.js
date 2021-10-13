
import axios from 'axios';


function AfterSignin(){
axios.get('api/page/user')
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})
}

export default AfterSignin;