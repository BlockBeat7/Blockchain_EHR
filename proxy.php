<?php
// Infura IPFS API 配置
$url = 'https://ipfs.infura.io:5001/api/v0/add?pin=false';
$apiKey = 'f874f1c83dd94641b52aaa8cf8b48944';
$apiSecret = 'Tn8o7z0/Y8CmRcbHEnc4wo2tZftgLokzwXgLzSJbZLbQEdWRG4KlRg';

// 读取上传的文件
$file = $_FILES['file'] ?? null;
var_dump($file);
if (!$file) {
    echo json_encode(['status' => 'error', 'message' => '未找到文件']);
    exit;
}

// 初始化 cURL 请求
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERPWD, "$apiKey:$apiSecret");
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

// 设置文件上传的 multipart/form-data
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, ['file' => new CURLFile($file['tmp_name'], $file['type'], $file['name'])]);
curl_setopt($ch, CURLINFO_HEADER_OUT, true);  // 记录请求头信息
curl_setopt($ch, CURLOPT_VERBOSE, true);       // 启用详细输出

// 执行请求
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

// 检查请求的详细信息
$info = curl_getinfo($ch);
curl_close($ch);

echo "<pre>";
print_r($info);     // 输出请求的所有详细信息
print_r($response);   // 输出响应内容
echo "</pre>";

// 处理响应
if ($httpCode == 200) {
    $data = json_decode($response, true);
    echo json_encode(['status' => 'success', 'response' => $data]);
} else {
    echo json_encode(['status' => 'error', 'message' => "HTTP $httpCode", 'details' => $response]);
}
