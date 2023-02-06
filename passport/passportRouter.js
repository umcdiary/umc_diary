/*import express from "express"
import passport from "passport"

const passportRouter = express.Router();
const passportController = require("./passportController");
passportController();
passportRouter.get('/login', passport.authenticate('kakao-login'));
passportRouter.get('/auth/kakao/callback', passport.authenticate('kakao-login', {
    failureRedirect: '/login',
}), (req, res) => {
    res.redirect('/');
}
);

export default passportRouter;
*/