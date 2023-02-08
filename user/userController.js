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
    editEmail: async function (req, res) {
        let email = req.params.email;
        let newEmail = req.body.email;
        try {
            await userService.updateEmail(email, newEmail);
            res.status(200).send(true);
        } catch (err) {
            console.log(err);
            res.status(400).send(false);
        }
    },
    editPassword: async function (req, res) {
        let email = req.params.email;
        let password = req.body.password;
        try {
            await userService.updatePassword(email, password);
            res.status(200).send(true);
        } catch (err) {
            console.log(err);
            res.status(400).send(false);
        }
    },
    editPhone: async function (req, res) {
        let email = req.params.email;
        let phone = req.body.phone;
        try {
            await userService.updatePhone(email, phone);
            res.status(200).send(true);
        } catch (err) {
            console.log(err);
            res.status(400).send(false);
        }
    },
    deleteUser: async function (req, res) {
        let email = req.params.email;
        try {
            await userService.deleteUser(email);
            res.status(200).send(true);
        } catch (err) {
            console.log(err);
            res.status(400).send(false);
        }
    },
};
