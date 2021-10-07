import swal from 'sweetalert2';
import axios from 'axios';


const url = "http://localhost:8080/api/auth/signin"

const validation = (data) => {

    let errors={
    };

    if (!data.userId){
        errors.userId = "아이디를 입력해주세요!"
    }
    else if(!data.password){
        errors.password = "비밀번호를 입력해주세요!"
    }
    else{
        axios.post(url,{
            userName : data.userName,
            email: data.email,
            userId: data.userId,
            password: data.password,
            checkPassword: data.checkPassword,
            
            })  
            .then(res=>{
                console.log(res.data)
                swal.fire({
                    icon: 'success',
                    title: '로그인',
                    text: data.userName + '님 저희 사이트에 오신걸 환영해요!', 
                    confirmButtonText:'<a  href="/">로그인</a>',
                }
                );
                })
            .catch(error => {
                console.log(error.response)
                swal.fire({
                    icon: 'warning',
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