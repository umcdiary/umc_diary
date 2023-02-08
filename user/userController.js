const userService = require('./userService');

module.exports = {
    getUserInfo: async function (req, res) {
        let email = req.params.email;
        console.log(email);
        try {
            const result = await userService.findUserByEmail(email);
            res.status(200).send(result);
        } catch (err) {
            console.log(err);
            res.status(400).send(false);
        }
    },
    editNickname: async function (req, res) {
        let email = req.params.email;
        let nickname = req.body.nickname;
        try {
            await userService.updateNickname(email, nickname);
            res.status(200).send(true);
        } catch (err) {
            console.log(err);
            res.status(400).send(false);
        }
    },
};
