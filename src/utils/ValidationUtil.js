const REG_EMAIL = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const REG_PASSWORD = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

class ValidationUtil {

    checkMail(mail) {
        return REG_EMAIL.test(mail) ? true : false;
    }

    checkPWD(pwd) {
        return REG_PASSWORD.test(pwd) ? true : false;
    }
}

export default new ValidationUtil();