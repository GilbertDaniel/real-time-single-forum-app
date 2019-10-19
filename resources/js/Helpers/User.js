import Token from "./Token";
import AppStorage from "./AppStorage";

class User{
    login(data) {
        axios.post('/api/auth/login', data)
            .then(res => this.responseAfterLogin(res))
            .catch(error => console.log(error.response.data))
    }    

    responseAfterLogin(response){
        const access_token = response.data.access_token;
        const user = response.data.user;
        //console.log(response);
        if(Token.isValid(access_token)){
            AppStorage.store(access_token,user);
        }
    }

    hasToken(){
        const storedToken = AppStorage.getToken();
        if(storedToken){
            return Token.isValid(storedToken) ? true : false
        }

        return false
    }

    loggedIn(){
        return this.hasToken()
    }

    logout(){
        AppStorage.clear()
    }

    name(){
        if(this.loggedIn()){
            return AppStorage.getUser()
        }
    }

    id(){
        if(this.loggedIn()){
            const payload = Token.payload(AppStorage.getToken())
            return payload.sub
        }
    }
}

export default User = new User();