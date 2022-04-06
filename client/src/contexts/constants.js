// Kiểm tra nếu nó ko phải trên môi trường sản phẩm thì lấy localhost, nếu pahri thì lấy cái link đã deployed lên
export const apiUrl =
    process.env.NODE_ENV !== "production"
        ? "http://localhost:5000/api"
        : "somedeployedURL";

export const LOCAL_STORAGE_TOKEN_NAME = "learnit-mern";
