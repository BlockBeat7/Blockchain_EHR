<?php
// 配置数据库信息
$host = 'localhost';
$db   = 'face';
$user = 'root';  // 根据你的配置修改
$pass = 'root';      // 根据你的配置修改
$charset = 'utf8mb4';

// 使用PDO连接数据库
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

// 启动session
session_start();

// 检查是否登录，未登录则重定向到 login.php
function check_login() {
//    echo $_SESSION;
    if (!isset($_SESSION['user_id'])) {
        header("Location: auth.php");
        exit();
    }
}

// 获取当前登录的用户信息
function get_user_info($pdo) {
    if (isset($_SESSION['user_id'])) {
        $stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
        $stmt->execute([$_SESSION['user_id']]);
        return $stmt->fetch();
    }
    return null;
}
?>
