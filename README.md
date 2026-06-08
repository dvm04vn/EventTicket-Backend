# 🎟️ EventTicket — Backend 

Backend service cho hệ thống **EventTicket** — nền tảng quản lý sự kiện và đặt vé trực tuyến.

Dự án được xây dựng bằng **Node.js + Express.js**, cung cấp hệ thống **RESTful API** cho Frontend ReactJS, hỗ trợ các nghiệp vụ như xác thực người dùng, quản lý sự kiện, đặt vé, quản lý đơn đặt vé, xử lý trạng thái thanh toán và quản trị hệ thống.

---

## 📌 Giới thiệu dự án

**EventTicket Backend** là phần server-side của hệ thống đặt vé sự kiện trực tuyến.

Backend chịu trách nhiệm xử lý các nghiệp vụ chính của hệ thống, bao gồm:

* Xác thực và quản lý tài khoản người dùng
* Phân quyền người dùng và quản trị viên
* Quản lý danh sách sự kiện
* Quản lý vé và đơn đặt vé
* Theo dõi lịch sử đặt vé của người dùng
* Xử lý trạng thái thanh toán
* Cung cấp RESTful API cho Frontend ReactJS

---

## 🚀 Chức năng chính

### 1. Authentication & Authorization

* Đăng ký tài khoản
* Đăng nhập tài khoản
* Đăng xuất
* Mã hóa mật khẩu bằng bcrypt
* Xác thực người dùng bằng JWT
* Bảo vệ các API yêu cầu đăng nhập
* Phân quyền người dùng theo vai trò: User / Admin

### 2. User & Profile

* Lấy thông tin người dùng đang đăng nhập
* Cập nhật thông tin cá nhân
* Quản lý thông tin tài khoản
* Theo dõi lịch sử đặt vé
* Kiểm tra quyền truy cập API theo vai trò

### 3. Event Management

* Lấy danh sách sự kiện
* Xem chi tiết sự kiện
* Tìm kiếm sự kiện theo tên hoặc từ khóa
* Lọc sự kiện theo danh mục
* Tạo mới sự kiện
* Cập nhật thông tin sự kiện
* Xóa sự kiện
* Quản lý trạng thái sự kiện

### 4. Ticket & Booking

* Đặt vé sự kiện
* Tạo đơn đặt vé
* Kiểm tra số lượng vé còn lại
* Cập nhật số lượng vé sau khi đặt
* Theo dõi trạng thái đơn đặt vé
* Lưu lịch sử đặt vé của người dùng

### 5. Payment

* Tạo giao dịch thanh toán
* Lưu thông tin giao dịch
* Cập nhật trạng thái thanh toán
* Kiểm tra trạng thái thanh toán của đơn đặt vé
* Hỗ trợ mở rộng tích hợp các cổng thanh toán như ZaloPay, MoMo hoặc PayPal

### 6. Admin Management

* Quản lý người dùng
* Quản lý sự kiện
* Quản lý vé
* Quản lý đơn đặt vé
* Theo dõi giao dịch thanh toán
* Quản lý dữ liệu hệ thống

---

## 🛠️ Công nghệ sử dụng

* **Node.js** – môi trường chạy JavaScript phía server
* **Express.js** – framework xây dựng RESTful API
* **JavaScript ES6+** – xử lý logic backend
* **MongoDB** – cơ sở dữ liệu NoSQL
* **Mongoose** – thư viện làm việc với MongoDB
* **JWT** – xác thực người dùng
* **bcrypt** – mã hóa mật khẩu
* **dotenv** – quản lý biến môi trường
* **CORS** – cho phép Frontend kết nối với Backend
* **Nodemon** – hỗ trợ chạy server trong môi trường development
* **Postman** – kiểm thử API
* **Git / GitHub** – quản lý source code

---

## 👨‍💻 Thông tin tác giả

* **Tên dự án:** EventTicket — Hệ thống quản lý sự kiện và đặt vé trực tuyến
* **Người thực hiện:** Đặng Văn Mạnh
* **Vai trò:** Backend Developer
* **Công nghệ chính:** Node.js, Express.js, MongoDB, JWT, RESTful API
* **Email:** vanmanh.150504@gmail.com



