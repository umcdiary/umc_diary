import { getUserNicknameProvider } from "./userProvider"

export const selectUserByNickname = async(req, res) =>{
  const userId = req.verifiedToen.userId
  
  const result = await getUserNicknameProvider(userId)
  
  res.json()
}