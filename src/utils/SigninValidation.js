import swal from 'sweetalert2';
import axios from 'axios';
import AfterSignin from './AfterSignin';


const validation = (data) => {

    let errors={
    };

    if (!data.userId && !data.password){
        errors.userId = "아이디를 입력해주세요!"
        errors.password = "비밀번호를 입력해주세요!"
    }
    else if(!data.userId){
        errors.userId = "아이디를 입력해주세요!"
    }

    else if(!data.password){
        errors.password = "비밀번호를 입력해주세요!"
    }
    else{
        axios.post('api/auth/signin',{
            userId: data.userId,
            password: data.password,
            })  
            .then(res=>{
                console.log(res.data)
                localStorage.setItem('accessToken',res.data)
                axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('accessToken');
                AfterSignin()
                swal.fire({
                    icon: 'success',
                    title: '로그인',
                    text: data.userId + ' 님 저희 사이트에 오신걸 환영해요!', 
                    confirmButtonText:'<a>이동</a>',
                })
                .then(function() {
                    window.location = "/";
                })
                
                })

            .catch(error => {
                console.log(error.response)
                swal.fire({
                    icon: 'error',
                    title: '로그인 오류',
                    text: '계정 정보가 맞지 않습니다.', 
                    confirmButtonText: '<a>돌아가기</a>',
                }
                );
                    
                })
    }
    return errors;
}

export default validation