
import axios from 'axios';
import swal from 'sweetalert2'


function AfterSignin(){
axios.get('/page/user')
.then(res=>{
    console.log(res.data)
    swal.fire({
        icon: 'success',
        title: '로그인',
        text: res.data + ' 님 저희 사이트에 오신걸 환영해요!', 
        confirmButtonText:'<a>이동</a>',
    })
    .then(function() {
        window.location = "/";
    })
})
.catch(err=>{
    console.log(err)
})
}

export default AfterSignin;