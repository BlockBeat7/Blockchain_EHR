<?php
// 引入公共的数据库连接和Session管理
include 'db.php';

// 检查是否登录
check_login();

// 获取当前登录的用户信息
$user = get_user_info($pdo);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KunyiEHR Dashboard</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body, html {
            height: 100%;
            font-family: Arial, sans-serif;
        }
        body {
            display: flex;
            flex-direction: column;
        }
        #animation-container{
            display: none;
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 1;
        }
        .user-info {
            font-size: 1.2em;
        }
        .menu {
            width: 200px;
            background-color: #333;
            color: white;
            position: fixed;
            top: 50px; /* This ensures the menu starts just below the header */
            bottom: 0;
            transition: width 0.3s;
            z-index: 1;
            display: flex;
            flex-direction: column;
        }
        .menu.collapsed {
            width: 50px;
        }
        .menu ul {
            list-style: none;
            padding: 10px;
        }
        .menu ul li {
            padding: 15px 10px;
            cursor: pointer;
        }
        .menu ul li:hover {
            background-color: #555;
        }
        .menu ul li:active {
            background-color: #777;
        }
        .toggle-menu {
            cursor: pointer;
        }
        .main {
            margin-left: 200px;
            margin-top: 60px; /* To account for the fixed header */
            padding: 20px;
            transition: margin-left 0.3s;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .main.collapsed {
            margin-left: 50px;
        }
        .status {
            display: flex;
            align-items: center;
        }
        .status .indicator {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 5px;
        }
        .status .online {
            background-color: green;
        }
        .status .offline {
            background-color: red;
        }
        .status button {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 1em;
            margin-left: 5px;
        }
        .wallet {
            display: flex;
            align-items: center;
            margin-left: 10px;
        }
        .wallet button {
            padding: 10px 20px;
            border: none;
            background-color: #f0ad4e;
            color: white;
            cursor: pointer;
            border-radius: 5px;
        }
        .wallet button:hover {
            background-color: #ec971f;
        }
        .card, .face, .options {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .card img, .face img {
            width: 100px;
            margin-bottom: 20px;
        }
        .options button, .card button, .face button,.main button {
            padding: 10px 20px;
            margin: 10px;
            border: none;
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
            border-radius: 5px;
        }
        .options button:hover, .card button:hover, .face button:hover {
            background-color: #45a049;
        }
        .input-container {
            margin-top: 20px;
        }
        .input-container input, .input-container select {
            display: block;
            padding: 10px;
            margin-bottom: 10px;
            width: 100%;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .input-container .inline {
            display: flex;
            align-items: center;
        }
        .input-container .inline input {
            flex: 1;
        }
        .input-container .inline button {
            padding: 10px 20px;
            border: none;
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
            border-radius: 5px;
            margin-left: 10px;
        }
        .input-container .inline button:hover {
            background-color: #45a049;
        }
        #wallet-address {
            font-size: 1em;
            color: #333;
            margin: 20px;
            text-align: center;
            width: 100%;
        }
        /* Card animation styles */
        .container {
            position: relative;
            width: 400px;
            height: 200px;
            margin-bottom: 20px;
            /*left: 40%; !* 初始位置稍微向右调整 *!*/
            /*transform: translateX(-50%);*/
            transition: left 1s;
        }
        .card-animation {
            position: absolute;
            width: 380px;
            height: 239.63px;
            background-color: #fff;
            border: 4px solid #c0c0c0;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            z-index: 10;
            top: 50%;
            left: 100%;
            transform: translate(-50%, -50%);
            animation: slideInFade 5.35s infinite;
            animation-delay: 0.1s;
            display: flex;
            align-items: flex-start;
            padding: 10px;
            background-image: url("static/card.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position-y: 22px;
        }
        .card-animation img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
        }
        .card-animation .text {
            font-size: 18px;
            font-weight: bold;
            color: #000;
        }
        .ring1, .ring2 {
            position: absolute;
            border-radius: 50%;
            animation: expand 4s infinite;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .ring1 {
            width: 200px;
            height: 200px;
            border: 4px solid #b1d0b1;
        }
        .ring2 {
            width: 250px;
            height: 250px;
            border: 4px solid #91c491;
            animation-delay: 2s;
        }
        @keyframes expand {
            0%, 100% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
            50% {
                transform: translate(-50%, -50%) scale(1.2);
                opacity: 0.5;
            }
        }
        @keyframes slideInFade {
            0% {
                left: 100%;
                opacity: 0;
            }
            25% {
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 1;
            }
            75% {
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 1;
            }
            100% {
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
            }
        }
        /* Circle animation styles */
        #circle {
            position: absolute;
            top: 40%;
            left: 50%;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            border: 5px solid green;
            clip-path: circle(0% at 50% 50%);
            animation: fillCircle 2s forwards;
            transform: translate(-50%, -50%);
        }

        @keyframes fillCircle {
            0% {
                clip-path: circle(0% at 50% 50%);
            }
            100% {
                clip-path: circle(50% at 50% 50%);
            }
        }

        #videoContainer {
            display: none;
            position: absolute;
            top: 40%;
            left: 50%;
            width: 300px;
            height: 300px;
            overflow: hidden;
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }

        video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .form-container {
            display: none;
            opacity: 0;
            transition: opacity 1s;
            position: absolute;
            left: 30%; /* 初始位置稍微向左调整 */
            top: 100px;
            width: 300px;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .create-button {
            padding: 10px 20px;
            margin-top: 20px;
            border: none;
            background-color: #4CAF50;
            color: white;
            cursor: not-allowed;
            border-radius: 5px;
            display: none;
        }
        .create-button.enabled {
            cursor: pointer;
            display: block;
        }

        .pin-box {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
        }
        .pin-input {
            width: 40px;
            height: 50px;
            text-align: center;
            font-size: 24px;
            border: 2px solid #ccc;
            border-radius: 4px;
            outline: none;
            margin: 0 5px;
        }
        .pin-input:focus {
            border-color: green;
        }
        .upload-success {
            font-weight: bold;
            cursor: pointer; /* 使其看起来像可点击的链接 */
            color: green; /* 你可以根据需要调整颜色 */
        }

        .page4-json-wait{
            cursor: pointer;
            font-weight: bold;
            color: #0059ff;
        }

        .page4-json-wait:hover{
            text-decoration: underline;
        }

        .patient-info2 {
            margin: 10px;
            padding: 15px;
            border-radius: 10px;
            background-color: #ffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 100%;
            overflow: hidden; /* 防止表格超出容器 */
        }

        .patient-info2 table {
            width: 100%;
            table-layout: fixed; /* 确保列宽自动分配 */
            border-collapse: collapse;
            font-family: Arial, sans-serif;
            font-size: 15px;
            color: #444;
        }

        .patient-info2 table td {
            padding: 12px 15px;
            border: 1px solid #e0e0e0;
            word-wrap: break-word; /* 自动换行 */
        }

        .patient-info2 table tr:nth-child(odd) td {
            background-color: #f7f7f7;
        }

        .patient-info2 table tr:nth-child(even) td {
            background-color: #ffffff;
        }

        .patient-info2 table td:first-child {
            font-weight: bold;
            color: #333;
            text-align: right;
        }

        .patient-info2 table td:nth-child(2) {
            color: #666;
            text-align: left;
        }

        .patient-info2 table td[colspan="0"] {
            width: 100%;
            text-align: left;
        }

        .patient-info2 table tr td:nth-child(odd) {
            width: 20%;
        }

        .patient-info2 table tr td:nth-child(even) {
            width: 30%;
        }

        .page3-left, .page3-right {
            display: inline-block;
            width: 48%;
            vertical-align: top;
            margin: 10px 1%;
        }

        .page-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
            color: #333;
        }

        .page3-outpatinet-box, .page3-health-box {
            padding: 10px;
            border-radius: 10px;
            background-color: #ffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow-x: auto; /* 支持横向滚动条 */
            max-width: 100%;
        }

        .page3-outpatinet-box table, .page3-health-box table {
            width: 100%;
            table-layout: fixed; /* 保证表格不会超出容器 */
            border-collapse: collapse;
            font-family: Arial, sans-serif;
            font-size: 15px;
            color: #444;
        }

        .page3-outpatinet-box table th, .page3-health-box table th {
            padding: 12px;
            background-color: #f1f1f1;
            color: #333;
            text-align: left;
            font-weight: bold;
        }

        .page3-outpatinet-box table td, .page3-health-box table td {
            padding: 12px;
            border: 1px solid #e0e0e0;
            text-align: left;
            word-wrap: break-word;
        }

        .page3-outpatinet-box table tr:nth-child(odd) td, .page3-health-box table tr:nth-child(odd) td {
            background-color: #f7f7f7;
        }

        .page3-outpatinet-box table tr:nth-child(even) td, .page3-health-box table tr:nth-child(even) td {
            background-color: #ffffff;
        }

        .page3-outpatinet-box table td:first-child, .page3-health-box table td:first-child {
            font-weight: bold;
            color: #333;
        }

        .page3-outpatinet-box table td:nth-child(2), .page3-health-box table td:nth-child(2),
        .page3-outpatinet-box table td:nth-child(3), .page3-health-box table td:nth-child(3) {
            color: #666;
        }

        /* 保证容器不会超出宽度 */
        .page3-left, .page3-right {
            max-width: 48%;
            box-sizing: border-box;
        }

        .page3-left table, .page3-right table {
            width: 100%;
            table-layout: fixed;
        }

        /* 添加响应式设计，确保内容在窄屏上适应 */
        @media (max-width: 768px) {
            .page3-left, .page3-right {
                width: 100%;
            }
        }
        /* 页面布局 */
        .page2-left, .page2-mid, .page2-right {
            display: inline-block;
            vertical-align: top;
            box-sizing: border-box;
        }

        .page2-left {
            width: 48%;
            padding: 20px;
            border-radius: 8px;
            background-color: #ffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .patient-info table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        .patient-info td {
            padding: 10px;
            text-align: left;
            vertical-align: middle;
            font-size: 14px;
            color: #333;
        }

        .patient-info td:first-child {
            font-weight: bold;
            color: #555;
        }

        .patient-info #patient-info-name,
        .patient-info #patient-info-address {
            color: #007BFF;
        }

        textarea {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border-radius: 8px;
            border: 1px solid #ddd;
            font-size: 14px;
            resize: vertical;
            background-color: #f9f9f9;
            color: #333;
            box-sizing: border-box;
        }

        textarea:focus {
            outline: none;
            border-color: #4CAF50;
        }

        .page2-left .btn {
            background-color: #007BFF;
            color: white;
            font-size: 14px;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 10px;
        }

        .page2-left .btn:hover {
            background-color: #0056b3;
        }

        .page2-left .btn:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }

        .page2-left .btn-save {
            background-color: #28a745;
        }

        .page2-left .btn-save:hover {
            background-color: #218838;
        }

        .page2-left .btn-submit {
            background-color: #17a2b8;
        }

        .page2-left .btn-submit:hover {
            background-color: #138496;
        }

        #transaction-link {
            margin-top: 10px;
            font-size: 14px;
            color: #007BFF;
            word-wrap: break-word;
        }

        #transaction-link a {
            color: #007BFF;
            text-decoration: none;
        }

        #transaction-link a:hover {
            text-decoration: underline;
        }

        .page2-right {
            width: 48%;
            padding: 20px;
            border-radius: 8px;
            background-color: #ffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .page2-mid {
            /*width: 4%;*/
        }

        /* 右侧快捷列表 */
        .shortcut-list {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
        }

        .shortcut-box {
            background-color: #f1f1f1;
            padding: 12px;
            margin-bottom: 10px;
            border-radius: 8px;
            position: relative; /* 使按钮可以绝对定位 */
            display: block; /* 确保内容换行 */
            font-size: 14px;
            color: #333;
            word-wrap: break-word; /* 确保长文字会换行 */
        }

        .shortcut-box button {
            background-color: #ff4d4d;
            border: none;
            padding: 5px 0;
            border-radius: 7px;
            color: white;
            cursor: pointer;
            font-size: 12px;
            position: absolute;
            top: -10px;
            right: -10px;
            width: 17px;
            height: 17px;
            line-height: 9px;
        }

        .shortcut-box button:hover {
            background-color: #e60000;
        }

        /* 提交按钮 */
        /*button, input[type="button"], textarea {*/
        /*    font-size: 14px;*/
        /*    padding: 10px;*/
        /*    border-radius: 4px;*/
        /*    border: 1px solid #ccc;*/
        /*    margin-top: 10px;*/
        /*    width: 100%;*/
        /*}*/

        textarea {
            resize: vertical;
            margin-top: 10px;
        }

        #save-offiline-copy, #submit-to-blockchain {
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
            border: none;
        }

        #save-offiline-copy:hover, #submit-to-blockchain:hover {
            background-color: #45a049;
        }

        #add-shortcut-button {
            background-color: #007BFF;
            color: white;
            cursor: pointer;
            border: none;
        }

        #add-shortcut-button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }

        /* 提交区间 */
        #transaction-link {
            margin-top: 10px;
            color: #007BFF;
            font-size: 14px;
            word-wrap: break-word;
        }

        textarea:focus, input[type="button"]:focus {
            outline: none;
            border-color: #4CAF50;
        }



    </style>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
<div class="header">
    <div class="user-info">Welcome, <?= $user['username']; ?></div>
    <div class="current-time"></div> <!-- 这里添加一个用于显示时间的 span -->
<!--    <div class="status">-->
<!--        <div class="indicator online"></div>-->
<!--        <span class="status-text">Online</span>-->
<!--        <button onclick="alert('You are in offline mode')">?</button>-->
<!--    </div>-->
    <div class="wallet">
        <button onclick="connectWallet()">Connect Wallet</button>
    </div>
</div>
<div class="menu">
    <ul id="menu">
        <li class="toggle-menu" onclick="toggleMenu()">☰</li>
        <li class="menu-item" onclick="changePage(1)">Recognize Identity</li>
        <li class="menu-item" onclick="changePage(2)">Create Health Record</li>
        <li class="menu-item" onclick="changePage(3)">Read Health Record</li>
        <li class="menu-item" onclick="changePage(4)">Offline Standby</li>
    </ul>
    <ul style="margin-top: auto">
        <li onclick="logout()">Log out</li>
    </ul>
</div>

