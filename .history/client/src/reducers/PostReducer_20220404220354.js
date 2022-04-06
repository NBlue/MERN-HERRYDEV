export const postReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "POST_LOADED_SUCCESS":
            return {
                ...state,
                posts: payload, // Data lấy được từ server
                postsLoading: false, //Lấy data từ server xong nên quá trình load thành false
            };
        default:
            return state;
    }
};
