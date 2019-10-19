class AppStorage{
    storeToken(token){
        localStorage.setItem('token',token);
    }
    storeUser(user){
        localStorage.setItem('user',user);
    }
    //store the token and user data in the localstorage
    store(token,user){
        this.storeToken(token)
        this.storeUser(user)
    }
    //clear the token and user data from the localstorage
    clear(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    getToken(){
        return localStorage.getItem('token');
    }

    getUser(){
        return localStorage.getItem('user');
    }
}
export default AppStorage = new AppStorage();