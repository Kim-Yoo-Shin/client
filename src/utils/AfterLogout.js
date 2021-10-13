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

export default Logout;
