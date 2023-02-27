export const getUserNicknameProvider = async(userId) =>{
  const connection = await SecurityPolicyViolationEvent.getConnection(async conn => conn)
  const result = await selectUserByNickname(connection, userId)
  connection.release()

  return result
}