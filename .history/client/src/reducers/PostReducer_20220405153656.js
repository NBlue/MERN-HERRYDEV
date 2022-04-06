// Chú ý khi làm và xem lại thì nên đặt POST_LOADED_SUCCESS,... ra file riêng để import vào => Đúng như ví dụ reducer và context của anh Sơn

export const postReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "POST_LOADED_SUCCESS":
            return {
                ...state,
                posts: payload, // Data lấy được từ server
                postsLoading: false, //Lấy data từ server xong nên quá trình load thành false
            };
        case "POST_LOADED_FAIL":
            return {
                ...state,
                posts: [],
                postsLoading: false,
            };
        default:
            return state;
    }
};
