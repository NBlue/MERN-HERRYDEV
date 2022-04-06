// Quản lí toàn bộ trạng thái của người dùng (truyền trực tiếp mà ko phải thông qua ông cha cháu)
// Bước này cần làm song song cả context và reducer (từ phút: 2:02:00 trong video)
import { createContext, useReducer } from "react";
import { authReducer } from "../reducers/AuthReducer";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "../contexts/constants";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    // {... } ở trong reducer là trạng thái ban đầu
    const [authState, dispatcher] = useReducer(authReducer, {
        authLoading: true, // Người dùng chưa login thì ban đầu là true
        isAuthenticated: true, // trạng thái ban đầu của người dùng
        user: null, // Thông tin ban đầu của người dùng chưa có nên là null
    });
};

// Login
const loginUser = async (userForm) => {
    // Khi sử dụng async thì trong luôn dùng try catch
    try {
        const response = await axios.post(`${apiUrl}/auth/login`);

        // Cái success: true này được tạo json khi thành công ở server
        if (response.data.success)
            localStorage.setItem(
                LOCAL_STORAGE_TOKEN_NAME,
                response.data.accessToken
            ); // Lưu accessToken user vào storage

        // Lưu xong thì trả lại data
        return response.data;
    } catch (error) {
        if (error.response.data)
            return error.response
                .data; // Lỗi có chủ đích có response.data định nghĩa trong server
        else
            return {
                success: false,
                message: error.message,
            };
    }
};
