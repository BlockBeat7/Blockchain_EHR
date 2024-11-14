
<script src="moment.js"></script>
<script>
    $(document).ready(function() {
        // 等待页面加载完毕后缓慢显示 #animation-container
        $('#animation-container').hide().fadeIn(1000); // 1000 毫秒表示 1 秒
    });
    function toggleMenu() {
        const menu = document.getElementById('menu');
        const main = document.getElementById('main');

        // 切换菜单和主内容的 `collapsed` 类
        menu.classList.toggle('collapsed');
        main.classList.toggle('collapsed');

        // 控制每个菜单项的显示和隐藏
        const menuItems = document.querySelectorAll('#menu .menu-item');
        menuItems.forEach(item => {
            item.style.display = menu.classList.contains('collapsed') ? 'none' : 'block';
        });
    }
    // Function to update the current time every second
    setInterval(() => {
        const date = new Date();
        const timeString = date.toLocaleTimeString();
        document.querySelector('.current-time').textContent = timeString; // 只更新时间部分
        // updateNetworkStatus(); // 每次更新网络状态
    }, 1000);

    // Function to update the network status
    // function updateNetworkStatus() {
    //     const statusText = document.querySelector('.status-text');
    //     const indicator = document.querySelector('.indicator');
    //     console.log(navigator.onLine)
    //     if (navigator.onLine) {
    //         statusText.textContent = 'Online';
    //         indicator.classList.remove('offline');
    //         indicator.classList.add('online');
    //     } else {
    //         statusText.textContent = 'Offline';
    //         indicator.classList.remove('online');
    //         indicator.classList.add('offline');
    //     }
    // }

    // async function connectWallet() {
    //     console.log(window.ethereum)
    //     if (typeof window.ethereum !== 'undefined') {
    //         try {
    //             const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    //             const account = accounts[0];
    //             document.getElementById('wallet-address').innerText = `Connected: ${account}`;
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     } else {
    //         alert('Please install MetaMask first');
    //     }
    // }
    function logout(){
        fetch('api.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `action=logout`
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.status!=='error'){
                    localStorage.removeItem("patient_info");
                    localStorage.removeItem("patient");
                    localStorage.removeItem("patient_tem_info");
                    location.reload();
                }else{
                    alert(data.message)
                }

            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


    //切换page
    function changePage(page){
        if(page == 1){
            document.getElementById('page-1').style.display = 'block';
            document.getElementById('page-2').style.display = 'none';
            document.getElementById('page-3').style.display = 'none';
            document.getElementById('page-4').style.display = 'none';
            document.getElementById('animation-container').style.display = 'none';
            document.getElementById('verification-message').style.display = 'none';
            //重载页面
            location.reload();
        }else if(page == 2){
            // 读取并检查 patient_info
            var patient_info = JSON.parse(localStorage.getItem("patient_info"));
            if (!patient_info || !patient_info.name) {
                alert("请先完成患者信息录入");
                return;
            }
            loadShortcutList()
            document.getElementById('patient-info-name').innerHTML = patient_info.name;
            document.getElementById('patient-info-address').innerHTML = patient_info.address;
            document.getElementById('page-1').style.display = 'none';
            document.getElementById('page-2').style.display = 'block';
            document.getElementById('page-3').style.display = 'none';
            document.getElementById('page-4').style.display = 'none';
        }else if(page == 3) {
            var patient_info = JSON.parse(localStorage.getItem("patient_info"));
            if (!patient_info || !patient_info.name) {
                alert("请先完成患者信息录入");
                return;
            }
            document.getElementById('patient-info-name2').innerHTML = patient_info.name;
            document.getElementById('patient-info-age2').innerHTML = patient_info.age;
            document.getElementById('patient-info-sex2').innerHTML = patient_info.sex;
            document.getElementById('patient-info-address2').innerHTML = patient_info.address;
            document.getElementById('patient-info-allergic_history2').innerHTML = patient_info.allergic_history;
            document.getElementById('patient-info-email2').innerHTML = patient_info.email;
            document.getElementById('patient-info-idcard2').innerHTML = patient_info.idcard;
            document.getElementById('patient-info-occupation2').innerHTML = patient_info.occupation;
            document.getElementById('patient-info-tel2').innerHTML = patient_info.tel;

            loadHealthRecord()
            loadOutpatinetRecord()
            document.getElementById('page-1').style.display = 'none';
            document.getElementById('page-2').style.display = 'none';
            document.getElementById('page-3').style.display = 'block';
            document.getElementById('page-4').style.display = 'none';
        }else if (page == 4) {
            document.getElementById('page-1').style.display = 'none';
            document.getElementById('page-2').style.display = 'none';
            document.getElementById('page-3').style.display = 'none';
            document.getElementById('page-4').style.display = 'block';
        }
    }

    function loadOutpatinetRecord(){
        // 检查 localStorage 中的 patient_info 是否存在
        var patient_info = JSON.parse(localStorage.getItem("patient_info"));
        if (!patient_info || !patient_info.address) {
            alert("请先完成患者信息录入");
            return;
        }
        const apiurl = 'https://www.oklink.com/api/v5/explorer/address/transaction-list';
        const accessKey = '879d4df0-d31e-40aa-9906-39d41de62a5e';

        // AJAX request
        $.ajax({
            url: apiurl,
            type: 'GET',
            data: {
                address: patient_info.address,
                chainShortName: 'SEPOLIA_TESTNET',
                limit: 100
            },
            // headers
            headers: {
                'Ok-Access-Key': accessKey
            },
            success: function(data) {
                const transactionList = data.data[0].transactionLists;
                const tableBody = $('#outpatinet-record');

                // Clear previous table rows except the header
                tableBody.find("tr:gt(0)").remove();

                if (transactionList && transactionList.length > 0) {
                    // Insert rows for each transaction
                    transactionList.forEach(function(item) {
                        // Convert timestamp
                        item.transactionTime = parseInt(item.transactionTime);

                        // Format the date as Apr-13-2024 07:31:48 AM +UTC
                        let formattedDate = moment(item.transactionTime).format('MMM-DD-YYYY hh:mm:ss A [UTC]');

                        // Set up the link to the blockchain explorer
                        const blockHashLink = `https://sepolia.etherscan.io/tx/${item.txId}`;

                        // Append row to the table
                        tableBody.append(`
                    <tr>
                        <td>${formattedDate}</td>
                        <td>${item.from || 'Unknown Institution'}</td>
                        <td>ABC Clinic</td>
                        <td><a href="${blockHashLink}" target="_blank">${item.txId}</a></td>
                    </tr>
                `);
                    });
                } else {
                    // Show "No data available" if there is no data
                    tableBody.append(`
                <tr>
                    <td colspan="3" style="text-align: center;">No data available</td>
                </tr>
            `);
                }
            },
            error: function() {
                // Show error message in the table if the request fails
                $('#outpatinet-record').append(`
            <tr>
                <td colspan="3" style="text-align: center;">Request failed, please try again later</td>
            </tr>
        `);
            }
        });
    }

    // Health record 表格内容加载函数
    function loadHealthRecord() {
        // 检查 localStorage 中的 patient_info 是否存在
        var patient_info = JSON.parse(localStorage.getItem("patient_info"));
        if (!patient_info || !patient_info.address) {
            alert("请先完成患者信息录入");
            return;
        }

        const apiKey = '1aed63105e6c4599a46dbd3435f5293d';
        const chain = 'sepolia';  // 请替换为目标链名称，例如 'ethereum'、'polygon' 等
        const address = patient_info.address;
        // const openseaApiUrl = `https://api.opensea.io/api/v2/chain/${chain}/account/${address}/nfts`;
        const openseaApiUrl = `https://testnets-api.opensea.io/api/v2/chain/${chain}/account/${address}/nfts`;

// 发起请求以获取 NFT 数据
        $.ajax({
            url: openseaApiUrl,
            type: 'GET',
            headers: {
                'X-API-KEY': apiKey
            },
            data: {
                limit: 10
            },
            success: function(data) {
                const assets = data.nfts;
                const healthTableBody = $('#health-record-table');

                // 清空表格中的之前数据，保留表头
                healthTableBody.find("tr:gt(0)").remove();
                console.log(assets)
                console.log(assets.length)
                if (assets && assets.length > 0) {
                    assets.forEach(function(asset) {
                        let time = moment(asset.updated_at).format('MMM-DD-YYYY hh:mm:ss A [UTC]');
                        const description = asset.description || "No description available";
                        const link = asset.opensea_url || `https://opensea.io/assets/${chain}/${asset.token_id}`;

                        // 向表格添加每个 NFT 记录
                        healthTableBody.append(`
                    <tr>
                        <td>${time}</td>
                        <td>${description}</td>
                        <td><a href="${link}" target="_blank">View on OpenSea</a></td>
                    </tr>
                `);
                    });
                } else {
                    // 如果没有 NFT 数据，显示无数据提示
                    healthTableBody.append(`
                <tr>
                    <td colspan="3" style="text-align: center;">No NFTs found</td>
                </tr>
            `);
                }
            },
            error: function() {
                // 请求失败时在表格中显示错误信息
                $('#health-record-table').append(`
            <tr>
                <td colspan="3" style="text-align: center;">Request failed, please try again later</td>
            </tr>
        `);
            }
        });
    }
</script>
</body>
</html>

