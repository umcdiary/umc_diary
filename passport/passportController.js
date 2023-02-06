const passport = require('passport')
const KakaoStrategy = require('passport-kakao').Strategy

module.exports = () =>{

    passport.use('kakao-login', new KakaoStrategy({
        clientID: "dd33f4a21a1bbeaf41a2efefb0dc521d",
        clientSecrect :'e01SNUqZfxXjYFAwaqqlDcsCnGeJKd1g',
        callbackURL: "http://localhost:3000/auth/kakao/callback",
    }, async (accessToken, refreshToken, profile, done) => {
        try{
            console.log(accessToken);
            console.log(profile);

        }catch(err){
            console.log(err);
            done(err);
        }
      
    }));

}

