<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KunyiEHR</title>
    <link rel="stylesheet" href="/static/login.css">
</head>
<body>
    <div class="video-container">
        <video autoplay muted loop>
            <source src="static/video1.mp4" type="video/mp4">
        </video>
        <div class="overlay">
            <div class="navbar">
                <div class="logo">Kunyi</div>
                <ul>
                    <li>A
                        <ul>
                            <li>test1</li>
                            <li>test2</li>
                            <li>test3</li>
                        </ul>
                    </li>
                    <li>B
                        <ul>
                            <li>test1</li>
                            <li>test2</li>
                            <li>test3</li>
                        </ul>
                    </li>
                    <li>C
                        <ul>
                            <li>test1</li>
                            <li>test2</li>
                            <li>test3</li>
                        </ul>
                    </li>
                    <li>About Us
                        <ul>
                            <li>Mission</li>
                            <li>Contact Us</li>
                            <li>test3</li>
                        </ul>
                    </li>
                </ul>
                <div class="connect" style="margin-left: auto;display: none;cursor: pointer" onclick="connectWallet()">
                    Connect Wallet
                </div>
            </div>
            <div class="title-container">
                <div class="title fade-in">Unlock the potential of a digital Africa</div>
                <div class="subtitle fade-in" id="subtitle">Reliable Service from KunyiEHR</div>
                <div class="buttons fade-in">
                    <button onclick="showLogin()">Log In</button>
                    <button onclick="showRegister()">Register</button>
                </div>
                <div class="login-container">
                    <input type="text" id="login-username" placeholder="Username">
                    <input type="password" id="login-password" placeholder="Password">
                    <button type="button" onclick="validateLogin()">Log In</button>
                </div>
                <div class="register-container">
                    <input type="text" id="register-username" placeholder="Username">
                    <input type="text" id="register-institution" placeholder="Institution">
                    <input type="email" id="register-email" placeholder="Email">
                    <input type="password" id="register-password" placeholder="Password">
                    <input type="password" id="register-password2" placeholder="Confirm Password">
                    <input type="text" readonly id="wallet-address" placeholder="Web3 Address">
                    <span class="tip" style="font-size: 12px;display: block;margin-bottom: 10px">Your account will bond to this address</span>
                    <button type="button" onclick="validateRegister()">Sign up</button>
                </div>
            </div>
        </div>
    </div>
    <script>
        function showLogin() {
            //隐藏register
            document.querySelector('.connect').style.display = 'none';
            document.querySelector('.register-container').style.display = 'none';
            const buttons = document.querySelector('.buttons');
            buttons.classList.add('fade-out');
            const subtitle = document.getElementById('subtitle');
            subtitle.classList.add('fade-out');
            const title = document.querySelector('.title');
            title.classList.add('fade-out');
            setTimeout(() => {
                buttons.style.display = 'none';
                subtitle.style.display = 'none';
                //title内容改为Log in to Kunyi EHR
                title.innerHTML = 'Log in to Kunyi EHR';
                title.classList.remove('fade-out');
                title.classList.add('fade-in');
                const loginContainer = document.querySelector('.login-container');
                loginContainer.style.display = 'flex';
                setTimeout(() => {
                    loginContainer.style.opacity = 1;
                }, 10);
            }, 1000);
        }

        function showRegister() {
            //隐藏login
            document.querySelector('.connect').style.display = 'none';
            document.querySelector('.register-container').style.display = 'none';
            const buttons = document.querySelector('.buttons');
            buttons.classList.add('fade-out');
            const subtitle = document.getElementById('subtitle');
            subtitle.classList.add('fade-out');
            const title = document.querySelector('.title');
            title.classList.add('fade-out');
            //显示connect
            document.querySelector('.connect').style.display = 'block';
            setTimeout(() => {
                buttons.style.display = 'none';
                subtitle.style.display = 'none';
                //title内容改为Sign up an account to Kunyi EHR
                title.innerHTML = 'Sign up an account to Kunyi EHR';
                title.classList.remove('fade-out');
                title.classList.add('fade-in');
                const registerContainer = document.querySelector('.register-container');
                registerContainer.style.display = 'flex';
                setTimeout(() => {
                    registerContainer.style.opacity = 1;
                }, 10);
            }, 1000);
        }

        function validateLogin() {
            const button = document.querySelector('.login-container button');
            const username = document.getElementById('login-username').value.trim();
            const password = document.getElementById('login-password').value.trim();

            if (username === "" || password === "") {
                alert("用户名和密码不能为空");
                return false;
            }

            // 验证通过后显示动画
            button.innerHTML = '<div class="loading"></div>';

            // 使用 AJAX 发送登录请求
            fetch('api.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `action=login&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
            })
                .then(response => response.json())
                .then(data => {
                    setTimeout(() => {
                        button.innerHTML = 'Log In';
                        if (data.status === 'success') {
                            window.location.href = 'index.php';
                        } else {
                            alert(data.message);
                        }
                    }, 2000);
                })
                .catch(error => {
                    console.error('Error:', error);
                    button.innerHTML = 'Log In';
                    alert("登录请求失败，请稍后再试。");
                });
        }


        function validateRegister() {
            const button = document.querySelector('.register-container button');
            const username = document.getElementById('register-username').value.trim();
            const institution = document.getElementById('register-institution').value.trim();
            const email = document.getElementById('register-email').value.trim();
            const password = document.getElementById('register-password').value.trim();
            const password2 = document.getElementById('register-password2').value.trim();
            const address = document.getElementById('wallet-address').value.trim();

            if (username === "" || institution === "" || email === "" || password === "" || password2 === "" || address === "") {
                alert("所有字段均为必填项");
                return false;
            }

            if (password !== password2) {
                alert("两次输入的密码不一致");
                return false;
            }

            // 验证通过后显示动画
            button.innerHTML = '<div class="loading"></div>';

            // 使用 AJAX 发送注册请求
            fetch('api.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `action=register&username=${encodeURIComponent(username)}&institution=${encodeURIComponent(institution)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&password2=${encodeURIComponent(password2)}&address=${encodeURIComponent(address)}`
            })
                .then(response => response.json())
                .then(data => {
                    setTimeout(() => {
                        button.innerHTML = 'Sign up';
                        if (data.status === 'success') {
                            alert('Success！');
                            showLogin();  // 注册成功后返回登录页面
                        } else {
                            alert(data.message);
                        }
                    }, 2000);
                })
                .catch(error => {
                    console.error('Error:', error);
                    button.innerHTML = 'Sign up';
                    alert("注册请求失败，请稍后再试。");
                });
        }


        async function connectWallet() {
            console.log(window.ethereum)
            if (typeof window.ethereum !== 'undefined') {
                try {
                    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                    const account = accounts[0];
                    console.log(account)
                    document.getElementById('wallet-address').value = `${account}`;
                } catch (error) {
                    console.error(error);
                }
            } else {
                alert('Please install MetaMask first');
            }
        }
    </script>
</body>
</html>
