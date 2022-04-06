import { createContext, useReducer, useEffect } from "react";
import { postReducer } from "../reducers/PostReducer";
import { apiUrl } from "./constants";
import axios from "axios";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
    // State
    const [postState, dispatch] = useReducer(postReducer, {
        posts: [], // Tất cả các post
        postsLoading: true, // Hỏi server là đang đi lấy post về
    });

    // Get all posts
    const getPosts = async () => {
        try {
            const response = await axios.get(`${apiUrl}/posts`);
            if (response.data.success) {
                dispatch({
                    type: "POST_LOADED_SUCCESS",
                    payload: response.data.posts,
                });
            }
        } catch (error) {
            // Trường hợp có lỗi từ response trả về  ko thì tự định nghĩa lỗi "Server error"
            return error.response.data
                ? error.response.data
                : { success: false, message: "Server error" };
        }
    };

    //Context: xuất khẩu function, data đi nơi khác dùng:
    const postContextData = { postState, getPosts };

    return (
        <PostContext.Provider value={postContextData}>
            {children}
        </PostContext.Provider>
    );
};

export default PostContextProvider;
