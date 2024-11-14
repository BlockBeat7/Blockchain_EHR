<?php

include 'db.php';  // 引入公共的数据库连接

header('Content-Type: application/json');

// 登录函数
function login($pdo)
{
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    if (empty($username) || empty($password)) {
        echo json_encode(['status' => 'error', 'message' => '用户名和密码不能为空']);
        exit();
    }

    // 查询数据库中是否存在该用户
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        // 密码正确，设置会话
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];

        echo json_encode(['status' => 'success', 'message' => '登录成功']);
    } else {
        echo json_encode(['status' => 'error', 'message' => '用户名或密码错误，请重新输入']);
    }
    exit();
}

function register($pdo)
{
    $username = trim($_POST['username']);
    $institution = trim($_POST['institution']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $password2 = trim($_POST['password2']);
    $address = trim($_POST['address']);

    // 检查必填字段
    if (empty($username) || empty($institution) || empty($email) || empty($password) || empty($password2) || empty($address)) {
        echo json_encode(['status' => 'error', 'message' => '所有字段均为必填项']);
        exit();
    }

    // 检查两次输入的密码是否一致
    if ($password !== $password2) {
        echo json_encode(['status' => 'error', 'message' => '两次输入的密码不一致']);
        exit();
    }

    try {
        // 在插入前检查 email 是否已经存在
        $stmt = $pdo->prepare("SELECT COUNT(*) FROM users WHERE email = ?");
        $stmt->execute([$email]);
        $count = $stmt->fetchColumn();

        if ($count > 0) {
            // 如果 email 已经存在，返回错误信息
            echo json_encode(['status' => 'error', 'message' => 'Email 已经被注册']);
            exit();
        }

        // 使用 password_hash 对密码加密
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // 插入数据到数据库
        $stmt = $pdo->prepare("INSERT INTO users (username, institution, email, password, address) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$username, $institution, $email, $hashedPassword, $address]);

        // 注册成功
        echo json_encode(['status' => 'success', 'message' => '注册成功']);
        exit();
    } catch (PDOException $e) {
        // 捕获数据库异常并返回错误信息
        echo json_encode(['status' => 'error', 'message' => '注册失败: ' . $e->getMessage()]);
        exit();
    }
}


//logout
function logout($pdo)
{
    session_destroy();

    echo json_encode(['status' => 'success', 'message' => '注销成功']);
}

//读取地址函数
function get_address($pdo)
{
    // 准备 SQL 查询，获取 patient_id 为 null 的地址
    $stmt = $pdo->prepare("SELECT address FROM patient_address WHERE patient_id IS NULL ORDER BY id ASC LIMIT 1");

    // 执行查询
    $stmt->execute();

    // 获取结果
    $address = $stmt->fetch(PDO::FETCH_ASSOC);

    // 检查是否获取到地址
    if ($address) {
        // 成功获取到地址，返回成功响应
        echo json_encode(['status' => 'success', 'address' => $address['address']]);
    } else {
        // 未获取到地址，返回错误响应
        echo json_encode(['status' => 'error', 'message' => 'No address found']);
    }
    exit();
}

// 患者注册
function patient_register($pdo)
{
    // 获取传递的数据
    $patientData = json_decode(trim($_POST['patient']), true);
//    var_dump($patientData);
    // 检查必填字段是否完整
    if (empty($patientData['name']) || empty($patientData['age']) || empty($patientData['gender']) ||
        empty($patientData['occupation']) || empty($patientData['tel']) || empty($patientData['email']) ||
        empty($patientData['id_card']) || empty($patientData['address']) || empty($patientData['pin']) || empty($patientData['face_id'])) {
        echo json_encode(['status' => 'error', 'message' => '所有字段均为必填项']);
        exit();
    }

    // 检查 address 是否已被注册
    $stmt = $pdo->prepare("SELECT * FROM patient_address WHERE address = ? AND patient_id IS NOT NULL");
    $stmt->execute([$patientData['address']]);
    $address = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($address) {
        // 该地址已被其他患者注册
        echo json_encode(['status' => 'error', 'message' => '该地址已被其他患者注册']);
        exit();
    }

    //将face_id处理为text
    $patientData['face_id'] = json_encode($patientData['face_id']);

    // 插入到 patient 表
    $stmt = $pdo->prepare("INSERT INTO patient (name, age, sex, occupation, tel, email, idcard, allergic_history, address, pin, face_id) 
                           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([
        $patientData['name'],
        $patientData['age'],
        $patientData['gender'],
        $patientData['occupation'],
        $patientData['tel'],
        $patientData['email'],
        $patientData['id_card'],
        $patientData['allergic_history'],
        $patientData['address'],
        $patientData['pin'],
        $patientData['face_id']
    ]);

    // 获取新注册的患者 ID
    $patientId = $pdo->lastInsertId();

    // 更新 patient_address 表，将地址相同的那行的 patient_id 设置为新注册的患者 ID
    $stmt = $pdo->prepare("UPDATE patient_address SET patient_id = ? WHERE address = ?");
    $stmt->execute([$patientId, $patientData['address']]);

    // 返回成功响应
    echo json_encode(['status' => 'success', 'message' => '注册成功', 'patient_id' => $patientId]);
    exit();
}

//通过address读取患者信息
function get_patient_info($pdo)
{
    // 获取传递的数据
    $address = trim($_POST['address']);

    // 检查必填字段是否完整
    if (empty($address)) {
        echo json_encode(['status' => 'error', 'message' => '所有字段均为必填项']);
        exit();
    }

    // 从患者表中获取患者信息
    $stmt = $pdo->prepare("SELECT id, name, address FROM patient WHERE address = ?");
    $stmt->execute([$address]);
    $patient = $stmt->fetch(PDO::FETCH_ASSOC);

    // 检查是否获取到患者信息
    if ($patient) {
        // 成功获取到患者信息，返回成功响应
        echo json_encode(['status' => 'success', 'patient' => $patient]);
    } else {
        // 未获取到患者信息，返回错误响应
        echo json_encode(['status' => 'error', 'message' => 'No patient found']);
    }
    exit();
}


// 通过 face_id 或 pin 验证患者（必须匹配 address）
function verify_patient($pdo)
{
    // 获取传递的数据
    $face_id = isset($_POST['face_id']) ? json_decode(trim($_POST['face_id']), true) : null; // 将字符串转换为数组
    $pin = isset($_POST['pin']) ? trim($_POST['pin']) : null; // 如果需要 pin 参数
    $address = isset($_POST['address']) ? trim($_POST['address']) : null;

    // 检查 address 是否为空
    if (empty($address)) {
        echo json_encode(['status' => 'error', 'message' => '必须提供 address']);
        exit();
    }

    // 检查 face_id 和 pin 是否同时为空
    if (empty($face_id) && empty($pin)) {
        echo json_encode(['status' => 'error', 'message' => '必须提供 face_id 或 pin']);
        exit();
    }

    // 构造 SQL 查询，address 必须匹配
    $sql = "SELECT * FROM patient WHERE address = :address LIMIT 1";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':address' => $address]);

    // 获取查询结果
    $patient = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($patient) {
        // 如果 face_id 被提供，则进行人脸特征匹配
        if ($face_id) {
            $storedFaceVector = json_decode($patient['face_id']); // 从数据库中获取 face_id 特征向量

            // 检查存储的特征向量和传递的 face_id 是否有效
            if ($storedFaceVector && count($storedFaceVector) === count($face_id)) {
                // 计算欧氏距离
                $distance = euclideanDistance($face_id, $storedFaceVector);
                $similarityThreshold = 0.6; // 设置阈值

                if ($distance < $similarityThreshold) {
                    // 人脸匹配成功
                    echo json_encode(['status' => 'success', 'patient' => $patient]);
                } else {
                    // 人脸匹配失败
                    echo json_encode(['status' => 'error', 'message' => '人脸匹配失败']);
                }
            } else {
                echo json_encode(['status' => 'error', 'message' => '无效的 face_id']);
            }
        } elseif ($pin && $pin === $patient['pin']) {
            // 如果提供了 pin，则检查 pin
            echo json_encode(['status' => 'success', 'patient' => $patient]);
        } else {
            echo json_encode(['status' => 'error', 'message' => '未找到对应的患者信息']);
        }
    } else {
        // 未找到匹配的患者
        echo json_encode(['status' => 'error', 'message' => '未找到对应的患者信息']);
    }
}

// 计算两个向量之间的欧氏距离
function euclideanDistance($vec1, $vec2)
{
    if (count($vec1) !== count($vec2)) {
        throw new Exception("The vectors must have the same length.");
    }

    $sum = 0;
    for ($i = 0; i < count($vec1); $i++) {
        $sum += pow($vec1[$i] - $vec2[$i], 2);
    }

    return sqrt($sum);
}

// 添加快捷方式
function add_shortcut($pdo)
{
    // 获取传递的内容
    $content = trim($_POST['content']);

    // 检查内容是否为空
    if (empty($content)) {
        echo json_encode(['status' => 'error', 'message' => 'Shortcut content is required']);
        exit();
    }

    // 将快捷方式插入到数据库
    $stmt = $pdo->prepare("INSERT INTO shortcut (content) VALUES (?)");
    if ($stmt->execute([$content])) {
        // 返回成功响应
        echo json_encode(['status' => 'success', 'message' => 'Shortcut added']);
    } else {
        // 返回错误响应
        echo json_encode(['status' => 'error', 'message' => 'Failed to add shortcut']);
    }
    exit();
}

// 读取所有快捷方式
function get_shortcut_list($pdo)
{
    // 查询数据库中的所有快捷方式
    $stmt = $pdo->prepare("SELECT id, content FROM shortcut ORDER BY id ASC");
    $stmt->execute();
    $shortcuts = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // 检查是否有记录
    if ($shortcuts) {
        // 返回成功响应
        echo json_encode(['status' => 'success', 'shortcuts' => $shortcuts]);
    } else {
        // 返回空列表响应
        echo json_encode(['status' => 'success', 'shortcuts' => []]);
    }
    exit();
}

// 根据 action 调用相应的函数
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action'])) {
        switch ($_POST['action']) {
            case 'login':
                login($pdo);
                break;
            case 'register':
                register($pdo);
                break;
            case 'logout':
                logout($pdo);
                break;
            case 'get_address':
                get_address($pdo);
                break;
            case 'patient_register':
                patient_register($pdo);
                break;
            case 'get_patient_info':
                get_patient_info($pdo);
                break;
            case 'verify_patient':
                verify_patient($pdo);
                break;
            case 'add_shortcut':
                add_shortcut($pdo);
                break;
            case 'get_shortcut_list':
                get_shortcut_list($pdo);
                break;
            default:
                echo json_encode(['status' => 'error', 'message' => '无效的操作']);
                exit();
        }
    }
}
?>
