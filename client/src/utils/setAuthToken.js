import axios from "axios";

const setAuthToken = (token) => {
    if (token) {
        //Nếu coken thì thêm header mặc địch (Bearer) vào
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        // Nếu ko có access token thì tất cả những req về sau khi gửi đều ko thể có token và header đó nữa
        delete axios.defaults.headers.common["Authorization"];
    }
};

export default setAuthToken;
