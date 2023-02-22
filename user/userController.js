import {} from './userProvider';
import { editNickname, removeUser } from './userService';
import baseResponse from '../config/baseResponseStatus';
import { errResponse, SUCCESSResponse } from '../config/response';

// [PATCH] 닉네임 수정하기
export const patchNickname = async (req, res) => {
    const userId = req.params.userId;
    const nickname = req.body.nickname;
    const editNicknameResult = await editNickname(userId, nickname);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS, editNicknameResult));
};

// [DELETE] 회원 탈퇴하기
export const deleteUser = async (req, res) => {
    const userId = req.params.userId;
    const removeUserResult = await removeUser(userId);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS, removeUserResult));
};
