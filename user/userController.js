import {} from './userProvider';
import { editNickname } from './userService';
import baseResponse from '../config/baseResponseStatus';
import { errResponse, SUCCESSResponse } from '../config/response';

// [PATCH] 닉네임 수정하기
export const patchNickname = async (req, res) => {
    const userId = req.params.userId;
    const nickname = req.body.nickname;
    const editNicknameResult = await editNickname(userId, nickname);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS, editNicknameResult));
};
