export const getIsAuth = state => state.rootReducer.authData?.isAuth;
export const getRefreshToken = state => state.rootReducer.authData.userInfo.refreshToken;
export const getSid = state => state.rootReducer.authData.userInfo.sid;
