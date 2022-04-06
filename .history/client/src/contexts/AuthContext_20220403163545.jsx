// Quản lí toàn bộ trạng thái của người dùng (truyền trực tiếp mà ko phải thông qua ông cha cháu)
// Bước này cần làm song song cả context và reducer (từ phút: 2:02:00 trong video)
import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers/AuthReducer";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "../contexts/constants";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    // {... } ở trong reducer là trạng thái ban đầu
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true, // Người dùng chưa login thì ban đầu là true
        isAuthenticated: false, // trạng thái đã xác thực của người dùng
        user: null, // Thông tin ban đầu của người dùng chưa có nên là null
    });

    // Authenticate user: ktra người dùng đã được login chưa
    const loadUser = async () => {
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
            // Ktra có local storage tên như này ko?
            // Khi có nó sẽ thêm cái header là accestoken ở trong đấy ở tất cả các phương thức post, put, get về sau
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
        }
        try {
            const response = await axios.get(`${apiUrl}/auth`);
            if (response.data.success) {
                //Thành công
                dispatch({
                    type: "SET_AUTH",
                    payload: {
                        isAuthenticated: true, // ok thì trạng xác thực chuyển true
                        user: response.data.user,
                    },
                });
            }
        } catch (error) {
            // Nếu có token trong localstorage nhưng là token bậy thì:
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME); //xóa trong localstorage
            setAuthToken(null); //loại bỏ header ở các phương thức req về sau:
            dispatch({
                type: "SET_AUTH",
                payload: {
                    isAuthenticated: false,
                    user: null,
                },
            });
        }
    };

    useEffect(() => loadUser(), []);

    // Login - Nhận vào cái userForm gồm username và password
    const loginUser = async (userForm) => {
        // Khi sử dụng async thì trong luôn dùng try catch
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, userForm);

            // Cái success: true này được tạo json khi thành công ở server
            if (response.data.success)
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME,
                    response.data.accessToken
                ); // Lưu accessToken user vào storage

            // Lưu xong thì trả lại data
            return response.data;
        } catch (error) {
            if (error.response.data) return error.response.data;
            // Lỗi có chủ đích có response.data định nghĩa trong server
            else
                return {
                    success: false,
                    message: error.message,
                };
        }
    };

    // Context data
    const authContextData = { loginUser }; // Xuất thằng login use này đi bằng useContext (Hiểu đơn giản lưu vào value bên dưới để truyền function này đi bất kì đâu)

    // Return provider để chứa tất cả
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    );
};

// Xuất thằng Provider này bao ngoài App.js để có trạng thái Global
export default AuthContextProvider;
