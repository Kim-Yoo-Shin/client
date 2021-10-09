import swal from 'sweetalert2';
import axios from 'axios';


const validation = (data) => {

    let errors={
    };

    if (!data.userName){
        errors.userName= "이름을 입력해주세요!"   
    }
    else if (!data.email){
        errors.email = "이메일을 입력해주세요!"   
    }
    else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "이메일 형식이 맞지 않습니다!" 
    }
    else if (!data.userId){
        errors.userId = "아이디를 입력해주세요!"
    }
    else if(data.userId.length <6){
        errors.userId = "아이디 길이가 5글자 보다 길어야합니다!"
    }
    else if (!data.password){
        errors.password = "비밀번호를 입력해주세요!"  
    }
    else if(data.password.length <6){
        errors.password = "비밀번호 길이가 5글자 보다 길어야합니다!"   
    }
    else if (!data.checkPassword){
        errors.checkPassword = "비밀번호를 입력해주세요!"
    }
    else if(data.checkPassword !== data.password){
        errors.checkPassword = "비밀번호가 다릅니다!"
    }
    
    else{

        axios.post('/api/auth/signup',{
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
                    title: '회원 가입 완료.',
                    text: data.userName + '님 저희 사이트에 오신걸 환영해요!', 
                    confirmButtonText:'<a>로그인</a>',
                })
                .then(function() {
                    window.location = "/signin";
                })
                })
            .catch(error => {
                console.log(error.response)
                swal.fire({
                    icon: 'warning',
                    title: '아이디 중복 오류',
                    text: '아이디가 중복 되었습니다. 다시 입력해주세요!', 
                    confirmButtonText: '<a>돌아가기</a>',
                }
                );
                
            })

                
        
        }
    return errors;
};

export default validation;