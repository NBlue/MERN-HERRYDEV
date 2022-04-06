// Đây à thằng gác cổng đứng giữa  "/" và (req, res) => {} ở router, khi nó thấy 1 cái request nó sẽ chặn lại và kiểm tra có accesstoken ở trong header ko. Nếu có thì kiểm tra đó là hàng xịn do chính chủ tạo ra thì nó sẽ cho qua và chạy đoạn (req, res) => ở router để thực hiện
const jwt = require("jsonwebtoken");

// header cuar jwt là: Authorization: Bearer adjkkdsjdfkslfdklsjflks
//                                                Đoạn này chính là cái token được tạo từ id của ta  ==> Bỏ đoạn "Bearer " đi

const verifyToken = (req, res, next) => {
    const authHeader = req.header("Authorization");

    // Nếu tồn tại authHeader thì token = phần tử mảng thứ 2 sau khi tách mảng thành 2 phần tử: "Bearer" và "dkljslieurioewjkdsljfsldk"
    const token = authHeader && authHeader.split(" ")[1];

    if (!token)
        return res
            .status(401)
            .json({ success: false, message: "Access token not found" });

    // Khi có token thì tiến hành kiểm tra đúng người dùng phats hành ko
    try {
        // decoded: giải mã, process.env.ACCESS_TOKEN_SECRET: chiều khóa để ktra
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        // Kết quả của decoded sau khi veriry chính là { userId: user._id } được tạo từ access token được tạo ở auth.js ở router
        // Sau khi thành công hết => Đưa req cái userId
        req.userId = decoded.userId;
        next();
    } catch (err) {
        console.log(err);
        return res
            .status(403)
            .json({ success: false, message: "Invalid token" }); // Mày có token nhưng là hàng lởm
    }
};

module.exports = verifyToken;
