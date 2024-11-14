<?php
include 'header.php'; // 或者 require 'header.php';
echo $user['address'];
?>
<style>
    table {
        border-collapse: collapse; /* 让表格边框合并，不出现双线 */
        width: 100%; /* 根据需要设置宽度 */
    }

    table, th, td {
        border: 1px solid black; /* 设置 1px 黑色边框 */
    }

    td, th {
        padding: 8px; /* 给表格单元格添加一些内边距 */
        text-align: left; /* 设置文本对齐方式 */
    }
    .page2-main{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-between;
    }
    .page2-left{
        flex: 1;
        margin-right: 1%;
    }
    /*.page2-mid{*/
    /*    width: 20%;*/
    /*    margin-right: 1%;*/
    /*}*/
    #health-record{
        width: 100%;
        height: 600px;
        margin-top: 20px;
        margin-bottom: 10px;
        padding: 10px;
        border-color: #000;
    }
    .page2-right{
        width: 40%;
    }
    .shortcut-list{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .shortcut-box{
        width: 100%;
        border: 1px solid #000;
        box-sizing: border-box;
        padding: 10px;
        margin-bottom: 10px;
        cursor: pointer;
        transition: all .5s;
        min-height: 40px;
    }
    .shortcut-box:hover{
        border-width: 2px;
        border-color: green;
    }

    .shortcut-add-box{
        display: flex;
        align-items: start;
        justify-content: space-between;
    }

    #shortcut-add{
        width: 90%;
        padding: 10px;
        min-height: 80px;
        margin-right: 10px;
    }

    .page3-bottom{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .page-title{
        font-weight: bold;
    }

    .page3-left{
        flex: 1;
        margin-right: 20px;
    }
    .page3-right{
        flex: 2;
    }

    .page4-main{
        display: flex;
        height: 100%;
        width: 100%;
    }

    .page4-left{
        flex: 1;
        margin-right: 20px;
    }

    .page4-json-box{
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
    }

    .page4-json{
        width: 30%;
        border: 1px solid #000;
        box-sizing: border-box;
        padding: 10px;
        margin-bottom: 10px;
        /*cursor: pointer;*/
        transition: all .5s;
        margin-right: 10px;
        height: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .page4-right{
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: end;
    }

    .page4-nft-box{
        border: 1px solid #000;
        width: 100%;
        height: 90%;
    }
</style>
<div class="main" id="page-1">
    <div class="patient-tem-info" style="display: none">
        <table>
            <tr>
                <td>Name:</td>
                <td id="patient-tem-name"></td>
            </tr>
            <tr>
                <td>Address:</td>
                <td id="patient-tem-address"></td>
            </tr>
        </table>
    </div>
<!--    <div id="wallet-address" style="height: 0;opacity: 0;display: none"></div>-->
    <div class="container" id="animation-container">
        <div class="card-animation" id="card-animation">
<!--            <img src="static/card.png" alt="Logo">-->
<!--            <div class="text">KUNYI Health Card</div>-->
        </div>
        <div class="ring1"></div>
        <div class="ring2"></div>
        <div id="tip" style="position: absolute;text-align: center;bottom: -88px;width: 100%;display: none">Put Blank
            Health Card Here
        </div>
    </div>
    <button class="create-button" id="create-button" onclick="createPatient()">Create New Patient</button>
    <!-- Create 按钮移到动画下面 -->


    <div class="nfc-main" style="height: 0">
        <div class="form">
            <input name="readinfo" id="readinfo" style="opacity: 0"/>
            <!--                <input class="button" name="butt_read" type="submit" id="butt_read" onclick="ReadNdef()"-->
            <!--                       value="Claim" />-->
            <!--                <input class="button" name="butt_clear" type="submit" id="butt_clear" onclick="ClearNdef()"-->
            <!--                       value="Clear" />-->
        </div>
    </div>

    <p>
        <label for="readinfo"></label>
        <label for="title"></label>
    </p>

    <div id="" style="height:0;width:0">
        <table width="0" border="1" style="height:0;width:0;display:none">
            <tr>
                <th width="100" height="73" scope="row"><input type="submit" name="butt_beep" id="butt_beep"
                                                               value="驱动发卡器响声" onclick="beep()"/></th>
                <td width="1463"><textarea name="returninfo" id="text" cols="140" rows="5"></textarea></td>
            </tr>
            <tr>
                <th height="36" scope="row"><input type="submit" name="butt_map" id="butt_map" value="写入地图坐标"
                                                   onclick="MapCoordinate()"/></th>
                <td>地址名称：
                    <label for="map_add"></label>
                    <input name="map_add" type="text" id="map_add" value="北京天安门广场"/>
                    纬度:
                    <label for="map_longitude"></label>
                    <input name="map_latitude" type="text" id="map_latitude" value="39.906922"/>
                    经度：
                    <label for=""></label>
                    <input name="map_longitude" type="text" id="map_longitude" value="116.389027"/>
                </td>
            </tr>
            <tr>
                <th height="39" scope="row"><input type="submit" name="butt_call" id="butt_call" value="写入呼叫电话"
                                                   onclick="CallingTelephone()"/></th>
                <td>呼叫电话：
                    <label for="callnum"></label>
                    <input name="callnum" type="text" id="callnum" value="13800138000"/>
                </td>
            </tr>
            <tr>
                <th height="37" scope="row"><input type="submit" name="butt_smart" id="butt_smart" value="写入智能海报"
                                                   onclick="SmartPoster()"/></th>
                <td>标题：
                    <label for="title"></label>
                    <input name="title" type="text" id="title" value="百度"/>
                    前缀：
                    <label for="prefix"></label>
                    <select name="prefix" size="1" id="prefix">
                        <option>无前缀</option>
                        <option>http://www.</option>
                        <option selected="selected">https://www.</option>
                        <option>http://</option>
                        <option>https://</option>
                        <option>tel:</option>
                        <option>mailto:</option>
                        <option>ftp://anonymous:anonymous@</option>
                    </select>
                    <label for="uristr"></label> <input name="uristr" type="text" id="uristr" value="baidu.com"
                                                        size="65"/>
                </td>
            </tr>
            <tr>
                <th height="40" scope="row"><input name="butt_blue" type="submit" id="butt_blue"
                                                   onclick="AddBluetooth()" value="写入蓝牙连接"/></th>
                <td>设备名称：
                    <label for="Devicename"></label>
                    <input name="Devicename" type="text" id="Devicename" value="PC45"/>
                    蓝牙MAC地址：
                    <label for="macstr"></label>
                    <input name="macstr" type="text" id="macstr" value="21:f4:76:78:3a:b6"/>
                </td>
            </tr>
            <tr>
                <th height="40" scope="row"><input name="butt_wifi" type="submit" id="butt_wifi" onclick="AddWifi()"
                                                   value="写入WIFI连接"/></th>
                <td>热点名称：
                    <label for="ssidname"></label>
                    <input name="ssidname" type="text" id="ssidname" value="Xiaomi_E467"/>
                    认证方式：
                    <select name="authen" size="1" id="authen">
                        <option>无</option>
                        <option>WPA个人</option>
                        <option>SHARED</option>
                        <option>WPA企业</option>
                        <option>MIXED</option>
                        <option>WPA2企业</option>
                        <option>WPA2个人</option>
                        <option selected="selected">WPA+WPA2个人</option>
                    </select>
                    加密算法：
                    <select name="algorithm" size="1" id="algorithm">
                        <option>无</option>
                        <option>WEP</option>
                        <option>TKIP</option>
                        <option>AES</option>
                        <option selected="selected">AES+TKIP</option>
                    </select>
                    密码：
                    <label for="passw"></label>
                    <input name="passw" type="text" id="passw" value="abcd#12345678."/>
                </td>
            </tr>
            <tr>
                <th height="60" scope="row"><input name="butt_card" type="submit" id="butt_card"
                                                   onclick="AddBusinessCard()" value="写入电子名片"/></th>
                <td>
                    <p>姓名：
                        <label for="namestr"></label>
                        <input name="namestr" type="text" id="namestr" value="张三丰"/>
                        电话：
                        <label for="telstr"></label>
                        <input name="telstr" type="text" id="telstr" value="13800138000"/>
                        公司名称：
                        <label for="groupstr">
                            <input name="groupstr" type="text" id="groupstr" value="广东省人民政府"/>
                            邮箱：</label>
                        <label for="emailstr"></label>
                        <input name="emailstr" type="text" id="emailstr" value="123456789@qq.com"/>
                    </p>
                    <p>网址：
                        <label for="urlstr"></label>
                        <input name="urlstr" type="text" id="urlstr" value="http://www.gd.gov.cn/"/>
                        地址：
                        <label for="addstr"></label>
                        <input name="addstr" type="text" id="addstr" value="广州市越秀区东风中路305号" size="90"/>
                    </p>
                </td>
            </tr>
            <tr>
                <th height="40" scope="row"><input name="butt_app" type="submit" id="butt_app" onclick="AddApp()"
                                                   value="写入启动应用"/></th>
                <td>App名称：
                    <label for="appname"></label>
                    <input name="appname" type="text" id="appname" value="com.tencent.mm"/>
                </td>
            </tr>
            <tr>
                <th height="40" scope="row"><input name="butt_data" type="submit" id="butt_data" onclick="AddData()"
                                                   value="写入数据类型"/></th>
                <td>数据类型：
                    <label for="datatype"></label>
                    <input name="datatype" type="text" id="datatype" value="text/plain"/>
                    数据：
                    <label for="datastr"></label>
                    <input name="datastr" type="text" id="datastr" value="0123456789" size="90"/>
                </td>
            </tr>
            <tr>
                <th height="37" scope="row"><input name="butt_text" type="submit" id="butt_text" onclick="AddText()"
                                                   value="写入NDEF文本"/></th>
                <td><textarea name="textinfo" id="text5" cols="140"
                              rows="3">轻轻的我走了，正如我轻轻的来；我轻轻的招手，作别西天的云彩。</textarea></td>
            </tr>
        </table>
    </div>
    <div class="card" id="card">
        <div id="verification-message" style="text-align: center; margin-bottom: 20px;margin-top: 40px"></div>
        <!-- 显示验证信息的元素 -->
        <div style="display: flex; justify-content: space-between;margin-top: 20px">
<!--            <button id="next-button" onclick="claimNft('https://gateway.pinata.cloud/ipfs/bafkreifhnhkqzbywnkrjd3hcnde4lgbsb5p6g53lozobxyp7ynkmozf37m ')" disabled style="display:none;">test</button>-->
            <button id="next-button" onclick="ReadNdef()" disabled style="display:none;">Next</button>
            <button id="new-patient-button" onclick="showNewPatientForm()" disabled style="display:none;">New Patient
            </button> <!-- 初始状态禁用按钮 -->
        </div>
    </div>

    <div class="face" id="face" style="display: none; position: relative;">
        <div class="face-title">Two-factor Authentication</div>
        <div id="circle"></div>
        <div id="videoContainer">
            <video id="video" autoplay></video>
            <canvas id="overlay" width="0" height="0"></canvas>
        </div>
        <div id="status" style="margin-top: 400px">Verify your face</div>
        <div id="face-n-pin-login">
            <button id="face-login" onclick="faceVerify()">Next</button>
            or
            <button id="face-login-pin" onclick="showPin()">Use Pin</button>
        </div>
        <button id="face-register" onclick="faceRegister()" style="display: none">Register</button>
        <div id="pin-container" style="display: none;flex-direction: column;align-items: center;">
            <div class="pin-box">
                <input type="text" class="pin-input" maxlength="1" oninput="moveToNext(this, 'pin2')" id="pin1"/>
                <input type="text" class="pin-input" maxlength="1" oninput="moveToNext(this, 'pin3')" id="pin2"/>
                <input type="text" class="pin-input" maxlength="1" oninput="moveToNext(this, 'pin4')" id="pin3"/>
                <input type="text" class="pin-input" maxlength="1" oninput="moveToNext(this, 'pin5')" id="pin4"/>
                <input type="text" class="pin-input" maxlength="1" oninput="moveToNext(this, 'pin6')" id="pin5"/>
                <input type="text" class="pin-input" maxlength="1" id="pin6"/>
            </div>
            <button id="pin-verify" onclick="pinVerify()">Verify Pin</button>
            <button id="pin-finish" onclick="pinFinish()" style="display: none">Finish</button>
        </div>
    </div>
    <div class="options" id="options" style="display: none;">
        <button>Create Identity</button>
        <button>Create Record</button>
        <div class="input-container">
            <input type="text" placeholder="Input Field">
        </div>
    </div>
    <div class="form-container" id="form-container">
        <h3>New Patient Form</h3>
        <div id="create-patient-form" class="input-container">
            <input type="text" placeholder="Name" id="name">
            <input type="number" id="age" placeholder="Age" oninput="updateCardBackground()">
            <select id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <input type="text" placeholder="Occupation" id="occupation">
            <input type="tel" placeholder="Tel" id="tel">
            <input type="email" placeholder="Email" id="email">
            <input type="text" placeholder="ID" id="id_card">
            <input type="text" placeholder="Allergic History" id="allergic_history">
            <div class="inline">
                <input type="text" placeholder="Unique ID" id="unique-id" style="margin-bottom: 0">
                <button type="button" onclick="generateUniqueId()">Allocate identity</button>
            </div>
        </div>
    </div>
</div>
<div id="page-2" class="main" style="display: none">
    <div class="page2-main">
        <div class="page2-left">
            <div class="patient-info">
                <table>
                    <tr>
                        <td>Name:</td>
                        <td id="patient-info-name"></td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td id="patient-info-address"></td>
                    </tr>
                </table>
            </div>
            <textarea name="health-record" id="health-record" placeholder="Type the health record here"></textarea>
            <div style="display: flex;">
                <button id="save-offiline-copy" onclick="generateJSON()" style="margin-left: 0">Save offline copy</button>
                <input type="file" id="json-file-input" accept=".json" style="display: none;">
                <button id="submit-to-blockchain">Submit to blockchain</button>
            </div>
            <!-- 显示交易哈希链接的占位符 -->
            <div id="transaction-link" style="margin-top: 10px;"></div>
        </div>

        <div class="page2-mid"></div>

        <div class="page2-right">
            <div class="shortcut-list">
                <!-- 动态生成的快捷项 -->
                <div class="shortcut-box">
                </div>
                <!-- 更多的快捷项 -->
            </div>
            <div class="shortcut-add-box">
                <textarea name="shortcut-add" id="shortcut-add" placeholder="Set your shortcut"></textarea>
                <button id="add-shortcut-button" onclick="addShortcut()" disabled style="width: 20%">Add</button>
            </div>
        </div>
    </div>
</div>
<div id="page-3" class="main" style="display: none">
    <div class="page3-mail">
        <div class="page3-top">
            <div class="patient-info2">
                <table>
                    <tr>
                        <td>Name:</td>
                        <td id="patient-info-name2"></td>

                        <td>Age:</td>
                        <td id="patient-info-age2"></td>

                        <td>Gender:</td>
                        <td id="patient-info-sex2"></td>

                        <td>Occupation:</td>
                        <td id="patient-info-occupation2"></td>
                    </tr>
                    <tr>
                        <td>Tel:</td>
                        <td id="patient-info-tel2"></td>

                        <td>Email:</td>
                        <td id="patient-info-email2"></td>

                        <td>ID:</td>
                        <td id="patient-info-idcard2"></td>

                        <td>Allergic History:</td>
                        <td id="patient-info-allergic_history2"></td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td id="patient-info-address2" colspan="7"></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="page3-bottom">
            <div class="page3-left">
                <div class="page-title">Outpatinet record</div>
                <div class="page3-outpatinet-box">
                    <table id="outpatinet-record">
                        <tr>
                            <th>Time</th>
                            <th>Instituion Address</th>
                            <th>Name</th>
                            <th>Hash</th>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="page3-right">
                <div class="page-title">Health record</div>
                <div class="page3-health-box">
                    <table id="health-record-table">
                        <tr>
                            <th>Time</th>
                            <th>Detail</th>
                            <th>Hash</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="page-4" class="main" style="display: none">
    <div class="page4-main">
        <div class="page4-left">
            <div class="page-title">
                Your Offline Standby is in
            </div>
            <button id="selectFolderBtn">Select JSON Folder</button>
            <div class="page4-json-box">
            </div>
        </div>
        <div class="page4-right">
            <div class="page4-nft-box">

            </div>
            <button id="submit-to-blockchain2" style="margin-right: 0">Submit to blockchain</button>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/web3@4.10.0/dist/web3.min.js"></script>
<script src="https://sdk.amazonaws.com/js/aws-sdk-2.1190.0.min.js"></script>
<script>
    let registeredAddress = "<?php echo $user['address']; ?>"; // 后端返回的用户注册时的地址


    const abi = [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "initialOwner",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "CheckpointUnorderedInsertion",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ECDSAInvalidSignature",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "length",
                    "type": "uint256"
                }
            ],
            "name": "ECDSAInvalidSignatureLength",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "ECDSAInvalidSignatureS",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "timepoint",
                    "type": "uint256"
                },
                {
                    "internalType": "uint48",
                    "name": "clock",
                    "type": "uint48"
                }
            ],
            "name": "ERC5805FutureLookup",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ERC6372InconsistentClock",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ERC721EnumerableForbiddenBatchMint",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "ERC721IncorrectOwner",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ERC721InsufficientApproval",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "approver",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidApprover",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidOperator",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidOwner",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidReceiver",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidSender",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ERC721NonexistentToken",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "ERC721OutOfBoundsIndex",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EnforcedPause",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ExpectedPause",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "currentNonce",
                    "type": "uint256"
                }
            ],
            "name": "InvalidAccountNonce",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidShortString",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "OwnableInvalidOwner",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "OwnableUnauthorizedAccount",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint8",
                    "name": "bits",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "SafeCastOverflowedUintDowncast",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "str",
                    "type": "string"
                }
            ],
            "name": "StringTooLong",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "expiry",
                    "type": "uint256"
                }
            ],
            "name": "VotesExpiredSignature",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_fromTokenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_toTokenId",
                    "type": "uint256"
                }
            ],
            "name": "BatchMetadataUpdate",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "burn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "delegatee",
                    "type": "address"
                }
            ],
            "name": "delegate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "delegatee",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "expiry",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "delegateBySig",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "delegator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "fromDelegate",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "toDelegate",
                    "type": "address"
                }
            ],
            "name": "DelegateChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "delegate",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "previousVotes",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newVotes",
                    "type": "uint256"
                }
            ],
            "name": "DelegateVotesChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [],
            "name": "EIP712DomainChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "MetadataUpdate",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Paused",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "uri",
                    "type": "string"
                }
            ],
            "name": "safeMint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Unpaused",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "clock",
            "outputs": [
                {
                    "internalType": "uint48",
                    "name": "",
                    "type": "uint48"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "CLOCK_MODE",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "delegates",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "eip712Domain",
            "outputs": [
                {
                    "internalType": "bytes1",
                    "name": "fields",
                    "type": "bytes1"
                },
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "version",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "chainId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "verifyingContract",
                    "type": "address"
                },
                {
                    "internalType": "bytes32",
                    "name": "salt",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256[]",
                    "name": "extensions",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "timepoint",
                    "type": "uint256"
                }
            ],
            "name": "getPastTotalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "timepoint",
                    "type": "uint256"
                }
            ],
            "name": "getPastVotes",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "getVotes",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "nonces",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "paused",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "tokenByIndex",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "tokenOfOwnerByIndex",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tokenURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]

    // jQuery 代码
    $(document).ready(function () {
        // 提交到区块链按钮点击事件
        $('#submit-to-blockchain').on('click', function () {
            // 打开文件选择器
            $('#json-file-input').click();
        });

        // 文件选择器的文件更改事件
        $('#json-file-input').on('change', async function (event) {
            const file = event.target.files[0];
            if (file) {
                try {
                    // 读取文件内容
                    const fileContent = await readFileContent(file);

                    // 上传文件到 IPFS
                    const ipfsUrl = await uploadToIpfs(fileContent);

                    // 使用 IPFS URL 执行 NFT claim
                    await claimNft(ipfsUrl);

                    // alert('NFT 成功生成并提交到区块链！');
                } catch (error) {
                    console.error("上传失败：", error);
                    alert('上传失败，请稍后重试。');
                }
            }
        });
    });

    // 读取文件内容的函数
    function readFileContent(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => resolve(event.target.result);
            reader.onerror = (error) => reject(error);
            reader.readAsText(file);
        });
    }

    const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkMzUzYmNmMi0yMWRiLTRkYTgtYmE0NS03NGIxMWEwMDg4NTIiLCJlbWFpbCI6IjEyMDgzNDE5NjhAcXEuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImYwZTY0YjlkZjNhMjY2NmU2MjQ2Iiwic2NvcGVkS2V5U2VjcmV0IjoiZGViM2EwNmZlNmMyNDVkMTc3MjRlZmM5OWIyZjA3NzIzOWJlOWE5YWUyOTc0NjA0OGYxNzVhZmQxMGM3ZDJhYiIsImV4cCI6MTc2MTQ2MzE2OX0.JPplO4bqXribkIwmZtZ_ID_5KwJk9WxNEvVwbyzBT2w";

    async function uploadToIpfs(jsonData) {
        try {
            const formData = new FormData();
            const jsonBlob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
            formData.append("file", jsonBlob, "metadata.json");

            const pinataMetadata = JSON.stringify({ name: "metadata.json" });
            formData.append("pinataMetadata", pinataMetadata);

            const pinataOptions = JSON.stringify({ cidVersion: 1 });
            formData.append("pinataOptions", pinataOptions);

            const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${JWT}`
                },
                body: formData
            });

            const result = await response.json();
            if (result.IpfsHash) {
                return `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`;
            } else {
                throw new Error("IPFS 上传失败");
            }
        } catch (error) {
            console.error("上传到IPFS失败：", error);
        }
    }

    const getGasBase = (num) => {
        return String(BigInt(num) * 110n / 100n);
    };
    const getWeb3 = async () => {
        if (!window.ethereum) {
            return Promise.resolve(false);
        }
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        const account = accounts[0];
        if (!account) {
            return Promise.resolve(false);
        }
        return {
            web3,
            account,
            common: {
                from: account
            }
        };
    };
    const getGas = async (contractFn) => {
        const obj = await getWeb3();
        if (!obj) {
            return Promise.resolve(false);
        }
        const { web3, common } = obj;
        const gasPrice = await web3.eth.getGasPrice();
        try {
            const gasBase = await contractFn.estimateGas({ gasPrice, ...common, });
            const gas = getGasBase(gasBase);
            console.log('gas-gasPrice', gas, gasPrice);
            return Promise.resolve({
                gas,
                gasPrice,
                ...common
            });
        } catch (error) {
            alert(error);
            return Promise.resolve(false);
        }
    };
    const globalVaild = async () => {
        if (!window.ethereum) {
            alert('Please Connect Wallet')
            return Promise.resolve(false);
        }
        const web3 = new Web3(window.ethereum);

        const network = await web3.eth.getChainId();
        console.log('network', network);
        if (network != BigInt(11155111)) {
            alert('Please Swtich Chain')
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: 11155111 }]
            });
            return Promise.resolve(false);
        }
        return Promise.resolve(true);

    };
    const claimFnWeb3 = async (query) => {
        var patient_info = JSON.parse(localStorage.getItem('patient_info'));
        try {
            const vaild = await globalVaild();
            if (!vaild) {
                return Promise.resolve(false);
            }
            const obj = await getWeb3();
            console.log('obj', obj);
            if (!obj) {
                return Promise.resolve(false);
            }
            const { web3, account } = obj;

            // const contract = new web3.eth.Contract(abi, query.contractAddress);
            const contract = new web3.eth.Contract(abi, "0x430165b0d0e6d144f90982c5e6b0beb39cf8acc4");
            const safeMintRes = await contract.methods.safeMint(
                patient_info.address, query.ipfsUrl
            );
            console.log(22222)
            console.log(patient_info.address, query.ipfsUrl, account)
            const gasObj = await getGas(safeMintRes);
            if (!gasObj) {
                return Promise.resolve(false);
            }
            const transaction = await safeMintRes.send(gasObj);
            console.log('transactionHash', transaction);
            if (transaction.transactionHash) {
                return Promise.resolve(transaction);
            } else {
                return Promise.resolve(false);
            }
        } catch (error) {
            alert(error);
            console.log(error);
        }
    };

    // 发起交易成功后在界面显示链接
    async function claimNft(ipfsUrl) {
        // const contractAddress = $('#patient-info-address').text();
        const contractAddress = '0x430165b0d0e6d144f90982c5e6b0beb39cf8acc4';
        const res = await claimFnWeb3({ipfsUrl})
        if (!res) {
            return
        }
        alert("NFT claim 成功！");
        const transactionHash = res.transactionHash
        // const fromAddress = window.ethereum.selectedAddress;

        // if (!fromAddress) {
        //     alert("请先连接钱包！");
        //     return;
        // }

        // const contractAddress = $('#patient-info-address').text();

        // const web3 = new Web3();
        // const data = web3.eth.abi.encodeFunctionCall({
        //     name: 'safeMint',
        //     type: 'function',
        //     inputs: [
        //         { type: 'address', name: 'to' },
        //         { type: 'string', name: 'uri' }
        //     ]
        // }, [fromAddress, ipfsUrl]);

        try {
            // // 发起交易并获取交易哈希
            // const transactionHash = await window.ethereum.request({
            //     method: 'eth_sendTransaction',
            //     params: [
            //         {
            //             to: contractAddress,
            //             from: fromAddress,
            //             data: data,
            //         }
            //     ],
            // });

            // alert("NFT claim 成功！");

            // 构建到区块链浏览器的链接
            try {
                // 发起交易并获取交易哈希
                // const transactionHash = await window.ethereum.request({
                //     method: 'eth_sendTransaction',
                //     params: [
                //         {
                //             to: contractAddress,
                //             from: fromAddress,
                //             data: data,
                //         }
                //     ],
                // });

                // 如果 transactionHash 获取成功，构建链接并显示在页面上
                if (transactionHash) {
                    const transactionLink = `https://sepolia.etherscan.io/tx/${transactionHash}`;

                    // 创建“Save to”文字和哈希链接
                    const transactionDiv = document.getElementById("transaction-link");
                    transactionDiv.innerHTML = ""; // 清空之前的内容

                    // 添加普通文字“Save to”
                    const textNode = document.createTextNode("Save to ");
                    transactionDiv.appendChild(textNode);

                    // 创建只包含哈希值的链接
                    const linkElement = document.createElement("a");
                    linkElement.href = transactionLink;
                    linkElement.target = "_blank";
                    linkElement.textContent = transactionHash;

                    // 将链接添加到 div 中
                    transactionDiv.appendChild(linkElement);
                } else {
                    console.error("获取 transactionHash 失败。");
                }
            } catch (error) {
                alert("NFT claim 失败，请重试！");
                console.error("交易失败", error);
            }


        } catch (error) {
            alert("NFT claim 失败，请重试！");
            console.error(error);
        }
    }

    // 监听 id="submit-to-blockchain2" 的点击事件
    $(document).on('click', '#submit-to-blockchain2', function(event) {
        // event.preventDefault();
        // event.stopPropagation();

        // 检查 page4-nft-box 下是否有 iframe，并获取其 src 值
        const iframe = $('.page4-nft-box').find('iframe');
        const ipfsUrl = iframe.length ? iframe.attr('src') : null;

        if (!ipfsUrl) {
            alert("IPFS URL 不存在，请确认已成功上传并在预览框中显示！");
            return;
        }

        // 调用 claimNft2 函数
        claimNft2(ipfsUrl);
    });

    // 定义 claimNft2 函数，使用从 localStorage 中读取的地址
    async function claimNft2(ipfsUrl) {
        // 从 localStorage 中获取 patient_info，并解析出地址
        const patientInfo = JSON.parse(localStorage.getItem('patient_info'));
        // const contractAddress = patientInfo?.address;
        const contractAddress = '0x430165b0d0e6d144f90982c5e6b0beb39cf8acc4';

        if (!contractAddress) {
            alert("地址信息不存在，请确认患者信息已保存！");
            return;
        }

        // 获取当前连接的 MetaMask 钱包地址
        const fromAddress = window.ethereum.selectedAddress;
        if (!fromAddress) {
            alert("请先连接钱包！");
            return;
        }

        // 构建交易数据并发起交易
        // const web3 = new Web3();
        // const data = web3.eth.abi.encodeFunctionCall({
        //     name: 'safeMint',
        //     type: 'function',
        //     inputs: [
        //         { type: 'address', name: 'to' },
        //         { type: 'string', name: 'uri' }
        //     ]
        // }, [fromAddress, ipfsUrl]);

        try {
            const res = await claimFnWeb3({ipfsUrl})
            if (!res) {
                return
            }
            // const transactionHash = res.transactionHash
            // 发起交易
            // await window.ethereum.request({
            //     method: 'eth_sendTransaction',
            //     params: [
            //         {
            //             to: contractAddress,
            //             from: fromAddress,
            //             data: data,
            //         }
            //     ],
            // });
            alert("NFT claim 成功！");
        } catch (error) {
            alert("NFT claim 失败，请重试！");
            console.error(error);
        }
    }



    async function connectWallet() {
        if (window.ethereum) {
            try {
                // 请求用户授权连接钱包
                const accounts = await ethereum.request({method: 'eth_requestAccounts'});
                const walletAddress = accounts[0]; // 获取第一个账户地址

                // 更新页面显示钱包地址
                // document.getElementById('wallet-address').textContent = `Wallet Address: ${walletAddress}`;

                // 检查地址是否匹配
                if (walletAddress.toLowerCase() === registeredAddress.toLowerCase()) {
                    // 地址匹配，显示通过，按钮可点击
                    document.querySelector('.wallet button').textContent = 'Pass';
                    document.querySelector('.wallet button').style.backgroundColor = 'green';

                    // 更新按钮文字为“Next”和“New Patient”，并恢复正常可用状态
                    document.getElementById('verification-message').style.display = 'none'; // 隐藏验证消息
                    //显示按钮
                    document.getElementById('next-button').style.display = 'block';
                    document.getElementById('new-patient-button').style.display = 'block';
                    document.getElementById('next-button').disabled = false;
                    document.getElementById('new-patient-button').disabled = false;

                    // 使按钮恢复正常的外观
                    document.getElementById('next-button').style.backgroundColor = '#4CAF50';
                    document.getElementById('new-patient-button').style.backgroundColor = '#4CAF50';
                    document.getElementById('next-button').style.cursor = 'pointer';
                    document.getElementById('new-patient-button').style.cursor = 'pointer';
                } else {
                    // 地址不匹配，显示错误，按钮不可点击
                    document.querySelector('.wallet button').textContent = 'Error Address';
                    document.querySelector('.wallet button').style.backgroundColor = 'red';
                    //显示按钮
                    document.getElementById('next-button').style.display = 'block';
                    document.getElementById('new-patient-button').style.display = 'block';

                    // 禁用按钮并显示灰色
                    document.getElementById('next-button').disabled = true;
                    document.getElementById('new-patient-button').disabled = true;
                    document.getElementById('next-button').style.backgroundColor = 'gray';
                    document.getElementById('new-patient-button').style.backgroundColor = 'gray';
                    document.getElementById('next-button').style.cursor = 'not-allowed';
                    document.getElementById('new-patient-button').style.cursor = 'not-allowed';
                }
            } catch (error) {
                console.error('Error connecting to MetaMask', error);
            }
        } else {
            alert('MetaMask is not installed. Please install it to connect.');
        }
    }

    // 页面加载时，只显示“Please connect to your wallet for verification”
    window.onload = function () {
        document.getElementById('next-button').style.display = 'none';
        document.getElementById('new-patient-button').style.display = 'none';
        document.getElementById('verification-message').textContent = 'Please connect to your wallet for verification';
        document.getElementById('verification-message').style.display = 'block';
    };

    function moveToNext(currentInput, nextInputId) {
        if (currentInput.value.length === 1) {
            document.getElementById(nextInputId)?.focus();
        }
    }

    function showPin() {
        // 获取 pin-container 元素
        const pinContainer = document.getElementById('pin-container');

        // 判断当前 display 属性，并切换显隐
        if (pinContainer.style.display === 'none' || pinContainer.style.display === '') {
            // 如果当前隐藏或者初始状态，显示元素
            pinContainer.style.display = 'flex';
        } else {
            // 如果当前显示，隐藏元素
            pinContainer.style.display = 'none';
        }
    }


    function createPatient() {
        //先清除上次的缓存
        localStorage.removeItem('patient')
        //提取create-patient-form中的数据,临时存到缓存里
        let patient = {}
        patient['name'] = document.getElementById('name').value
        patient['age'] = document.getElementById('age').value
        patient['gender'] = document.getElementById('gender').value
        patient['occupation'] = document.getElementById('occupation').value
        patient['tel'] = document.getElementById('tel').value
        patient['email'] = document.getElementById('email').value
        patient['id_card'] = document.getElementById('id_card').value
        patient['allergic_history'] = document.getElementById('allergic_history').value
        patient['address'] = document.getElementById('unique-id').value
        localStorage.setItem('patient', JSON.stringify(patient))
        buttonCtrl(true)
        hideNewPatientForm()
        //显示人脸验证
        showFaceVerification();
    }

    //控制交替显示隐藏face-login/face-register和pin-verify/pin-finish
    function buttonCtrl(reg = false) {
        if (!reg) {
            document.getElementById('face-login').style.display = 'block';
            document.getElementById('face-n-pin-login').style.display = 'block';
            // document.getElementById('face-register').style.display = 'none';
            document.getElementById('pin-verify').style.display = 'block';
            document.getElementById('pin-finish').style.display = 'none';
        } else {
            //显示pin-container
            document.getElementById('pin-container').style.display = 'flex';
            document.getElementById('face-login').style.display = 'none';
            document.getElementById('face-n-pin-login').style.display = 'none';
            // document.getElementById('face-register').style.display = 'block';
            document.getElementById('pin-verify').style.display = 'none';
            document.getElementById('pin-finish').style.display = 'block';
        }
    }


    function showFaceVerification() {
        document.getElementById('card').style.display = 'none';
        document.getElementById('face').style.display = 'flex';
        document.getElementById('animation-container').style.display = 'none';

        document.getElementById('circle').addEventListener('animationend', () => {
            document.getElementById('videoContainer').style.display = 'block';

            //等待模型加载，按钮不可用
            document.getElementById('face-login').disabled = true;
            document.getElementById('face-register').disabled = true;
            document.getElementById('face-login').style.backgroundColor = 'gray';
            document.getElementById('face-register').style.backgroundColor = 'gray';
            document.getElementById('face-login').style.cursor = 'not-allowed';
            document.getElementById('face-register').style.cursor = 'not-allowed';
            document.getElementById('face-login').textContent = 'Loading Face Model...';
            document.getElementById('face-register').textContent = 'Loading Face Model...';

            var video = document.getElementById('video');
            // video.srcObject = stream;
            // video.play();
            setupCamera().then(video => {
                video.play();
                loadModels().then(() => {
                    console.log('模型已加载');
                    document.getElementById('face-login').disabled = false;
                    document.getElementById('face-register').disabled = false;
                    document.getElementById('face-login').style.backgroundColor = '#4CAF50';
                    document.getElementById('face-register').style.backgroundColor = '#4CAF50';
                    document.getElementById('face-login').style.cursor = 'pointer';
                    document.getElementById('face-register').style.cursor = 'pointer';
                    document.getElementById('face-login').textContent = 'Next';
                    document.getElementById('face-register').textContent = 'Register';
                });
            }).catch(error => {
                console.error('Error setting up camera:', error);
                alert('Error setting up camera:', error)
                //改变按钮文本
                document.getElementById('face-login').textContent = 'Camera Driver Error';
                document.getElementById('face-register').textContent = 'Camera Driver Error';
            })

            // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            //     navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
            //     });
            // }
        });
    }

    function showOptions() {
        document.getElementById('face').style.display = 'none';
        document.getElementById('options').style.display = 'flex';
        document.getElementById('videoContainer').style.display = 'none';
    }

    function showNewPatientForm() {
        const card = document.getElementById('card');
        const animationContainer = document.getElementById('animation-container');
        const formContainer = document.getElementById('form-container');
        document.getElementById('tip').style.display = 'block';

        // 隐藏卡片
        card.style.display = 'none';
        // 动画移动到页面的合适位置
        animationContainer.style.left = '25%';
        animationContainer.style.top = '-90px';
        // 显示并渐现表单
        formContainer.style.left = '25%'; // 表单位置调整到标记区域
        formContainer.style.display = 'block';
        setTimeout(() => {
            formContainer.style.opacity = 1;
        }, 10);
    }

    function hideNewPatientForm() {
        const card = document.getElementById('card');
        const animationContainer = document.getElementById('animation-container');
        const formContainer = document.getElementById('form-container');
        const createButton = document.getElementById('create-button');
        // 隐藏表单
        formContainer.style.opacity = 0;
        // setTimeout(() => {
        formContainer.style.display = 'none';
        // 动画移回到卡片位置
        animationContainer.style.left = '50%';
        animationContainer.style.top = '50%';
        card.style.display = 'none';
        createButton.style.display = 'none';
        // }, 500);
    }

    // 绑定文件上传点击事件
    $('#selectFolderBtn').on('click', async function() {
        try {
            const directoryHandle = await window.showDirectoryPicker();

            $('.page4-json-box').empty(); // 清空之前的内容

            for await (const entry of directoryHandle.values()) {
                if (entry.kind === 'file' && entry.name.endsWith('.json')) {
                    const file = await entry.getFile();
                    const fileContent = await file.text();

                    try {
                        const jsonData = JSON.parse(fileContent);
                        const fileElement = $(`
                        <div class="page4-json">
                            <div class="page4-json-name">${file.name}</div>
                            <div class="page4-json-wait" data-file-name="${file.name}">
                                <div class="upload-button" style="cursor: pointer; color: blue; text-decoration: underline;">Click here to upload</div>
                                <div class="upload-status"></div>
                            </div>
                        </div>
                    `);

                        // 绑定点击事件
                        let isUploading = false; // 上传状态变量

                        fileElement.find('.upload-button').on('click', async function() {
                            if (isUploading) return; // 如果正在上传，直接返回

                            isUploading = true; // 设置为正在上传状态
                            const uploadButton = $(this);
                            uploadButton.prop('disabled', true).text("Uploading...");

                            const ipfsUrl = await uploadToIpfs(jsonData);

                            if (ipfsUrl) {
                                // 隐藏上传按钮并更新状态为上传成功
                                uploadButton.hide(); // 隐藏上传按钮
                                uploadButton.parent().find('.upload-status').html(`
                                <span class="upload-success" style="font-weight: bold; cursor: pointer;" data-url="${ipfsUrl}">
                                    Uploaded: View on IPFS
                                </span>
                            `);
                            } else {
                                uploadButton.parent().find('.upload-status').text("Upload failed");
                            }

                            isUploading = false; // 重置上传状态
                        });

                        $('.page4-json-box').append(fileElement);
                    } catch (error) {
                        $('.page4-json-box').append(`
                        <div class="page4-json">
                            <div class="page4-json-name">${file.name}</div>
                            <div class="page4-json-wait">Invalid JSON file</div>
                        </div>
                    `);
                    }
                }
            }
        } catch (error) {
            console.error("Error accessing folder:", error);
        }
    });

    // 监听上传成功的点击事件，将 IPFS URL 内容显示在右侧预览
    $(document).on('click', '.upload-success', function(event) {
        event.preventDefault(); // 阻止默认行为
        event.stopPropagation(); // 阻止事件冒泡

        const ipfsUrl = $(this).data('url');

        // 在 page4-nft-box 中显示 IPFS 文件内容
        $('.page4-nft-box').html(`<iframe src="${ipfsUrl}" width="100%" height="100%" frameborder="0"></iframe>`);
    });


    function getPinCode() {
        let pin = '';
        for (let i = 1; i <= 6; i++) {
            const input = document.getElementById(`pin${i}`);
            pin += input.value;
        }
        if (!pin || pin.length !== 6) {
            alert('Please enter a valid 6-digit PIN code.');
        }
        return pin;
    }

    function pinVerify() {
        let patient_tem_info = JSON.parse(localStorage.getItem('patient_tem_info'))
        fetch('api.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `action=verify_patient&address=${patient_tem_info.address}&pin=${getPinCode()}`
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.status!=='error'){
                    //存储data.patient到patient
                    localStorage.setItem('patient_info', JSON.stringify(data.patient))
                    changePage(2)
                }else{
                    alert(data.message)
                }

            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    async function faceVerify() {
        let face_id = await detectFace();
        let patient_tem_info = JSON.parse(localStorage.getItem('patient_tem_info'));

        const params = new URLSearchParams();
        params.append('action', 'verify_patient');
        params.append('face_id', JSON.stringify(face_id)); // 将 face_id 转为字符串
        params.append('address', patient_tem_info.address);

        fetch('api.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: params.toString() // 使用 URLSearchParams 进行编码
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.status!=='error'){
                    //存储data.patient到patient
                    localStorage.setItem('patient_info', JSON.stringify(data.patient))
                    changePage(2)
                }else{
                    alert(data.message)
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


    async function pinFinish() {
        let patient = JSON.parse(localStorage.getItem('patient'))
        patient.pin = getPinCode();
        patient.face_id = await detectFace();
        //将patient.address写入NFC卡片
        AddText(patient.address);
        fetch('api.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `action=patient_register&patient=${JSON.stringify(patient)}`
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert('New Patient Created Successfully')
                //重载页面
                location.reload();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    function generateUniqueId() {
        // 模拟从数据库中生成一个唯一的公钥地址
        // const uniqueId = '0x' + Math.floor(Math.random() * 1e16).toString(16);
        // document.getElementById('unique-id').value = uniqueId;
        // document.getElementById('create-button').classList.add('enabled');
        // 使用 AJAX 发送登录请求
        fetch('api.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `action=get_address`
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('unique-id').value = data.address;
                document.getElementById('create-button').classList.add('enabled');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    // Function to fetch and display the shortcut list
    function loadShortcutList() {
        fetch('api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'action=get_shortcut_list'
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    const shortcutList = document.querySelector('.shortcut-list');
                    shortcutList.innerHTML = ''; // Clear any existing shortcuts
                    data.shortcuts.forEach(shortcut => {
                        const newBox = document.createElement('div');
                        newBox.className = 'shortcut-box';
                        newBox.innerHTML = `${shortcut.content} <button class="delete-shortcut" onclick="deleteShortcut(this)">X</button>`;

                        // Add click event to insert text into textarea
                        newBox.addEventListener('click', function() {
                            const healthRecordTextarea = document.getElementById('health-record');
                            // Append the shortcut content at the end of the textarea
                            healthRecordTextarea.value += shortcut.content + '';
                            // Trigger input event to enable the Add button if necessary
                            healthRecordTextarea.dispatchEvent(new Event('input'));
                        });

                        shortcutList.appendChild(newBox);
                    });
                } else {
                    alert('Failed to load shortcuts');
                }
            })
            .catch(error => console.error('Error:', error));
    }

    // Enable the button when text is entered in the textarea
    const shortcutTextarea = document.getElementById('shortcut-add');
    const shortcutAddButton = document.getElementById('add-shortcut-button');

    shortcutTextarea.addEventListener('input', function () {
        shortcutAddButton.disabled = shortcutTextarea.value.trim() === '';
    });

    // Function to add shortcut dynamically and send it to the backend
    function addShortcut() {
        const shortcutText = shortcutTextarea.value.trim();
        console.log(shortcutText);
        if (shortcutText) {
            // Prepare the request to send the shortcut to the backend
            fetch('api.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `action=add_shortcut&content=${encodeURIComponent(shortcutText)}`
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        // Dynamically add the new shortcut box to the list
                        const shortcutList = document.querySelector('.shortcut-list');
                        const newBox = document.createElement('div');
                        newBox.className = 'shortcut-box';
                        newBox.textContent = shortcutText;
                        shortcutList.appendChild(newBox);

                        // Clear textarea after successful addition
                        shortcutTextarea.value = '';
                        shortcutAddButton.disabled = true;
                    } else {
                        alert('Failed to add shortcut');
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    }



    function generateJSON() {
        //读取缓存获取患者信息
        var patient_info = JSON.parse(localStorage.getItem('patient_info'));
        // 获取输入框中的名称和描述内容
        var name = patient_info.name;
        var description = document.getElementById('health-record').value;

        // 构建 JSON 对象
        var json = {
            "description": description,
            "external_url": "Alchemy.com/?a=roadtoweb3weekone",
            "image": "https://ipfs.filebase.io/ipfs/QmXpvGz2hiDNJaTvoqS3mkpeaq2dx3eHSgYKZeqXR5ePCW",
            "name": name,
            "attributes": [
                {
                    "trait_type": "Base",
                    "value": "Starfish"
                },
                {
                    "trait_type": "Eyes",
                    "value": "Big"
                },
                {
                    "trait_type": "Mouth",
                    "value": "Surprised"
                },
                {
                    "trait_type": "Level",
                    "value": 5
                },
                {
                    "trait_type": "Stamina",
                    "value": 1.4
                },
                {
                    "trait_type": "Personality",
                    "value": "Sad"
                },
                {
                    "display_type": "boost_number",
                    "trait_type": "Aqua Power",
                    "value": 40
                },
                {
                    "display_type": "boost_percentage",
                    "trait_type": "Stamina Increase",
                    "value": 10
                },
                {
                    "display_type": "number",
                    "trait_type": "Generation",
                    "value": 2
                }
            ]
        };

        // 将 JSON 转为字符串
        var jsonString = JSON.stringify(json, null, 2);

        // 创建一个 Blob 对象，用于保存 JSON 字符串
        var blob = new Blob([jsonString], { type: 'application/json' });

        // 创建一个链接并下载 JSON 文件
        var a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = 'generated.json';
        a.click();
    }

    function updateCardBackground() {
        const ageInput = document.getElementById('age-input').value;
        const cardElement = document.getElementById('card-animation');

        if (ageInput < 18) {
            cardElement.style.backgroundColor = '#e0f7fa'; // 淡青色
        } else if (ageInput >= 18 && ageInput < 60) {
            cardElement.style.backgroundColor = '#fff9c4'; // 淡黄色
        } else if (ageInput >= 60) {
            cardElement.style.backgroundColor = '#ffccbc'; // 淡红色
        } else {
            cardElement.style.backgroundColor = ''; // 默认颜色
        }
    }

    var iswsrun = false;
    var ws;
    var received_msg = "";

    var mytimer;
    var strls = "";
    var errorno = "";

    var wsUri = "ws://127.0.0.1:39189"; //端口号必须与RFIDWebServer端口一致

    function beep() { //驱动发卡器响声
        buttonDisable(); // 删除 onclick 属性，防止重复执行指令
        text.value = "";
        WebSocketRun("pcdbeep,30");
    }

    function AddData() { //写数据类型标签
        buttonDisable(); // 删除 onclick 属性，防止重复执行指令
        text.value = "";
        ndeftypestr = datatype.value; //数据类型名称
        ndefdatastr = datastr.value; //数据
        WebSocketRun("NDEF_AddData," + ndeftypestr + "," + ndefdatastr);
    }

    function AddText(val) { //写纯文本标签
        buttonDisable(); // 删除 onclick 属性，防止重复执行指令
        // text.value = "";
        // ndeftextstr = text5.value; //文本信息
        console.log(val)
        WebSocketRun("NDEF_AddText," + val);
    }

    function ClearNdef() {
        buttonDisable(); // 删除 onclick 属性，防止重复执行指令
        text.value = "";
        readinfo.value = "";
        WebSocketRun("NDEF_Clear,");
    }

    async function ReadNdef() {
        //测试
        const result = await sendPatientInfoRequest('0x0f639d2f7ecd88d1bddfaa8fa5e2c5bb6d7c7bcf'); // 等待请求完成并获取返回值
        if (result) {
            console.log('Request was successful, continue process.');
            showFaceVerification()
        } else {
            console.log('Request failed.');
        }
        return
        buttonDisable(); // 删除 onclick 属性，防止重复执行指令
        text.value = "";
        readinfo.value = "";
        WebSocketRun("NDEF_ReadInfo,");
    }

    function buttonDisable() {
        document.getElementById("butt_data").onclick = null;
        document.getElementById("butt_text").onclick = null;
        // document.getElementById("butt_clear").onclick = null;
        // document.getElementById("butt_read").onclick = null;
    }

    function buttonEn() { //恢复各button 的onclick事件
        document.getElementById("butt_data").setAttribute("onclick", "AddData()");
        document.getElementById("butt_text").setAttribute("onclick", "AddText()");
        // document.getElementById("butt_clear").setAttribute("onclick", "ClearNdef()");
        // document.getElementById("butt_read").setAttribute("onclick", "ReadNdef()");
    }

    function DispErrInfo(Errcode) {
        var errstr = "";
        switch (Errcode) {
            case "ReturnCode:001":
                errstr = "，读写扇区数据失败！";
                break;
            case "ReturnCode:002":
                errstr = "，读写1、2块数据失败！";
                break;
            case "ReturnCode:003":
                errstr = "，读写第2块数据失败！";
                break;
            case "ReturnCode:008":
                errstr = "，未寻到卡，请将卡放到发卡器的感应区！";
                break;
            case "ReturnCode:009":
                errstr = "，有多张卡在感应区，寻卡过程中防冲突失败，读卡失败！";
                break;
            case "ReturnCode:010":
                errstr = "，该卡可能已被休眠，无法选中卡片！";
                break;
            case "ReturnCode:011":
                errstr = "，密码装载失败！";
                break;
            case "ReturnCode:012":
                errstr = "，卡密码认证失败！";
                break;
            case "ReturnCode:013":
                errstr = "，读块操作失败，原因是刷卡太快或本块所对应的区还没通过密码认证！";
                break;
            case "ReturnCode:014":
                errstr = "，写块操作失败，原因是刷卡太快或本块所对应的区还没通过密码认证！";
                break;
            case "ReturnCode:018":
                errstr = "，写块操作失败！";
                break;
            case "ReturnCode:021":
                errstr = "，没有动态库！";
                break;
            case "ReturnCode:022":
                errstr = "，动态库或驱动程序异常！";
                break;
            case "ReturnCode:023":
                errstr = "，驱动程序错误或发卡器未连接！";
                break;
            case "ReturnCode:024":
                errstr = "，操作超时，一般是动态库没有反映！";
                break;
            case "ReturnCode:025":
                errstr = "，发送字数不够！";
                break;
            case "ReturnCode:026":
                errstr = "，发送的CRC错！";
                break;
            case "ReturnCode:027":
                errstr = "，接收的字数不够！";
                break;
            case "ReturnCode:028":
                errstr = "，接收的CRC错！";
                break;
            case "ReturnCode:029":
                errstr = "，函数输入参数格式错误！";
                break;
            case "ReturnCode:045":
                errstr = "，此卡不支持更改UID号或UID块已被锁定！";
                break;
            case "ReturnCode:046":
                errstr = "，信息过大，标签容量不足！";
                break;
            case "ReturnCode:057":
                errstr = "，卡片不支持Forum_Type4协议，可能不是Forum_Type4_Tag卡！";
                break;
            case "ReturnCode:444":
                errstr = "，RFIDWebServer系统文件错误！";
                break;
            case "ReturnCode:555":
                errstr = "，未发现有效的NFC标签！";
                break;
            default:
                errstr = "，未知的错误！";
        }
        return errstr;
    }

    // window.onerror = function(e) {
    //     alert("不好意思，出错了!");
    //     return true; //屏蔽系统事件
    // }

    function timeoutevent() {
        ws.close();
        CardIDShowerdev.value = "websockket返回超时";
    }

    //websockket数据处理
    async function WebSocketRev(evt) {
        clearTimeout(mytimer);
        received_msg = evt.data;
        ws.close();

        //在这里解析返回数据
        var strlist = received_msg.split(",");
        if (strlist.length > 1) {
            var dispstr = "";
            switch (strlist[0]) {
                case "pcdbeep":
                    dispstr = "函数名称:" + strlist[0] + "\r\n";
                    if (strlist[1] == "ReturnCode:000") {
                        dispstr = dispstr + "操作结果:" + strlist[1] + ",已执行蜂鸣响声操作！\r\n"
                    } else {
                        dispstr = dispstr + "操作结果:" + strlist[1] + DispErrInfo(strlist[1]);
                    }
                    text.value = dispstr;
                    break;
                case "NDEF_Map_coordinates":
                    dispstr = "函数名称:" + strlist[0] + "\r\n";
                    if (strlist[1] == "ReturnCode:000") {
                        dispstr = dispstr + "操作结果:" + strlist[1] + ",写NDEF地图坐标标签成功！\r\n";
                        dispstr = dispstr + "标签类型:" + strlist[2] + "\r\n";
                        ;
                        dispstr = dispstr + "标签号码:" + strlist[3];
                    } else {
                        dispstr = dispstr + "操作结果:" + strlist[1] + DispErrInfo(strlist[1]);
                    }
                    text.value = dispstr;
                    break;
                case "NDEF_Call_Telephone":
                    dispstr = "函数名称:" + strlist[0] + "\r\n";
                    if (strlist[1] == "ReturnCode:000") {
                        dispstr = dispstr + "操作结果:" + strlist[1] + ",写NDEF呼叫电话标签成功！\r\n";
                        dispstr = dispstr + "标签类型:" + strlist[2] + "\r\n";
                        ;
                        dispstr = dispstr + "标签号码:" + strlist[3];
                    } else {
                        dispstr = dispstr + "操作结果:" + strlist[1] + DispErrInfo(strlist[1]);
                    }
                    text.value = dispstr;
                    break;
                case "NDEF_SmartPoster":
                    dispstr = "函数名称:" + strlist[0] + "\r\n";
                    if (strlist[1] == "ReturnCode:000") {
                        dispstr = dispstr + "操作结果:" + strlist[1] + ",写NDEF智能海报标签成功！\r\n";
                        dispstr = dispstr + "标签类型:" + strlist[2] + "\r\n";
                        ;
                        dispstr = dispstr + "标签号码:" + strlist[3];
                    } else {
                        dispstr = dispstr + "操作结果:" + strlist[1] + DispErrInfo(strlist[1]);
                    }
                    text.value = dispstr;
                    break;
                case "NDEF_AddBluetooth":
                    dispstr = "函数名称:" + strlist[0] + "\r\n";
                    if (strlist[1] == "ReturnCode:000") {
                        dispstr = dispstr + "操作结果:" + strlist[1] + ",写蓝牙连接NDEF控制标签成功！\r\n";
                        dispstr = dispstr + "标签类型:" + strlist[2] + "\r\n";
                        ;
                        dispstr = dispstr + "标签号码:" + strlist[3];
                    } else {
                        dispstr = dispstr + "操作结果:" + strlist[1] + DispErrInfo(strlist[1]);
                    }
                    text.value = dispstr;
                    break;
                case "NDEF_AddWifi":
                    dispstr = "函数名称:" + strlist[0] + "\r\n";
                    if (strlist[1] == "ReturnCode:000") {
                        dispstr = dispstr + "操作结果:" + strlist[1] + ",写WIFI无线连接NDEF控制标签成功！\r\n";
                        dispstr = dispstr + "标签类型:" + strlist[2] + "\r\n";
                        ;
                        dispstr = dispstr + "标签号码:" + strlist[3];
                    } else {
                        dispstr = dispstr + "操作结果:" + strlist[1] + DispErrInfo(strlist[1]);
                    }
                    text.value = dispstr;
                    break;
                case "NDEF_AddBusinessCard":
                    dispstr = "函数名称:" + strlist[0] + "\r\n";
                    if (strlist[1] == "ReturnCode:000") {
                        dispstr = dispstr + "操作结果:" + strlist[1] + ",写NDEF电子名片标签成功！\r\n";
                        dispstr = dispstr + "标签类型:" + strlist[2] + "\r\n";
                        ;
                        dispstr = dispstr + "标签号码:" + strlist[3];
                    } else {
                        dispstr = dispstr + "操作结果:" + strlist[1] + DispErrInfo(strlist[1]);
                    }
                    text.value = dispstr;
                    break;
                case "NDEF_AddApp":
                    dispstr = "函数名称:" + strlist[0] + "\r\n";
                    if (strlist[1] == "ReturnCode:000") {
                        dispstr = dispstr + "操作结果:" + strlist[1] + ",写启动APP程序NDEF控制标签成功！\r\n";
                        dispstr = dispstr + "标签类型:" + strlist[2] + "\r\n";
                        ;
                        dispstr = dispstr + "标签号码:" + strlist[3];
                    } else {
                        dispstr = dispstr + "操作结果:" + strlist[1] + DispErrInfo(strlist[1]);
                    }
                    text.value = dispstr;
                    break;
                case "NDEF_AddData":
                    dispstr = "函数名称:" + strlist[0] + "\r\n";
                    if (strlist[1] == "ReturnCode:000") {
                        dispstr = dispstr + "操作结果:" + strlist[1] + ",写NDEF数据标签成功！\r\n";
                        dispstr = dispstr + "标签类型:" + strlist[2] + "\r\n";
                        ;
                        dispstr = dispstr + "标签号码:" + strlist[3];
                    } else {
                        dispstr = dispstr + "操作结果:" + strlist[1] + DispErrInfo(strlist[1]);
                    }
                    text.value = dispstr;
                    break;
                case "NDEF_AddText":
                    dispstr = "函数名称:" + strlist[0] + "\r\n";
                    if (strlist[1] == "ReturnCode:000") {
                        dispstr = dispstr + "操作结果:" + strlist[1] + ",写NDEF文本标签成功！\r\n";
                        dispstr = dispstr + "标签类型:" + strlist[2] + "\r\n";
                        ;
                        dispstr = dispstr + "标签号码:" + strlist[3];
                    } else {
                        dispstr = dispstr + "操作结果:" + strlist[1] + DispErrInfo(strlist[1]);
                    }
                    console.log(dispstr)
                    text.value = dispstr;
                    break;
                case "NDEF_Clear":
                    dispstr = "函数名称:" + strlist[0] + "\r\n";
                    if (strlist[1] == "ReturnCode:000") {
                        dispstr = dispstr + "操作结果:" + strlist[1] + ",清除NDEF标签信息成功！\r\n";
                        dispstr = dispstr + "标签类型:" + strlist[2] + "\r\n";
                        ;
                        dispstr = dispstr + "标签号码:" + strlist[3];
                    } else {
                        dispstr = dispstr + "操作结果:" + strlist[1] + DispErrInfo(strlist[1]);
                    }
                    text.value = dispstr;
                    break;
                case "NDEF_ReadInfo":
                    // 初始化 dispstr
                    // dispstr = "函数名称:" + strlist[0] + "\r\n";
                    //
                    // // 检查操作结果并更新 dispstr
                    // if (strlist[1] == "ReturnCode:000") {
                    //     dispstr = dispstr + "操作结果:" + strlist[1] + ",读取NDEF标签信息成功！\r\n";
                    //     dispstr = dispstr + "标签类型:" + strlist[2] + "\r\n";
                    //     dispstr = dispstr + "标签号码:" + strlist[3];
                    // } else {
                    //     dispstr = dispstr + "操作结果:" + strlist[1] + DispErrInfo(strlist[1]);
                    // }
                    // text.value = dispstr;
                    //
                    // // 提取 ndefstr
                    // var ndefData = strlist[4]; // 假设 ndefData 是第五个元素
                    // var ndefstr = "";
                    //
                    // // 使用正则表达式提取 text 字段的值
                    // var textMatch = ndefData.match(/text:"([^"]+)"/);
                    // if (textMatch && textMatch[1]) {
                    //     ndefstr = textMatch[1];
                    // } else {
                    //     ndefstr = "";
                    // }
                    //
                    // // // 更新 readinfo 的值
                    // readinfo.value = ndefstr;
                    //
                    // console.log(dispstr)
                    // console.log(strlist)
                    // console.log(ndefstr)
                    //
                    // // return false;
                    // // 判断 ndefstr 是否存在
                    // if (!ndefstr) {
                    //     alert('Please read the address using NFC');
                    //     return;
                    // }
                    // AJAX 请求发送 ndefstr

                    //模拟请求get_patient_info，预设address参数为0x69dad6ec88b1dd97871f3f78158a84dbd3caf509
                    // const result = await sendPatientInfoRequest(ndefstr); // 等待请求完成并获取返回值
                    const result = await sendPatientInfoRequest('0x0f639d2f7ecd88d1bddfaa8fa5e2c5bb6d7c7bcf'); // 等待请求完成并获取返回值
                    if (result) {
                        console.log('Request was successful, continue process.');
                        showFaceVerification()
                    } else {
                        console.log('Request failed.');
                    }

                    return result; // 返回 true 或 false

                    break;
            }
        }
        // buttonEn(); //恢复按键的onclick事件
    }

    // 将 sendPatientInfoRequest 改为 async 函数，以便使用 await
    async function sendPatientInfoRequest(ndefstr) {
        try {
            // 模拟的 address 参数
            const address = ndefstr;

            // 使用 fetch 发送 POST 请求
            const response = await fetch('api.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                // 请求体中包含需要的 address 参数
                body: `action=get_patient_info&address=${encodeURIComponent(address)}`
            });

            // 检查响应的状态码
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // 检查响应是否有内容
            const text = await response.text();
            if (!text) {
                throw new Error('Response is empty');
            }

            // 解析响应为 JSON
            const data = JSON.parse(text);

            // 判断请求是否成功
            if (data.status === 'success') {
                console.log('Patient Info:', data); // 输出患者信息
                // 将获取到的患者信息显示到页面上
                document.getElementById('patient-tem-name').innerText = data.patient.name;
                document.getElementById('patient-tem-address').innerText = data.patient.address;

                // 显示患者信息的 div
                document.querySelector('.patient-tem-info').style.display = 'block';
                // 将获取到的患者信息存入本地缓存，命名为 "临时患者信息"
                localStorage.setItem('patient_tem_info', JSON.stringify(data.patient));

                // 发起外部请求
                $.ajax({
                    type: "GET",
                    url: `//114.132.75.165/api/claim?address=${data.patient.address}`,
                    success: function (response) {
                        console.log('Claim response:', response); // 输出claim请求的返回信息
                        // 可以在此处理返回的claim结果，比如显示在页面上或其他操作
                    },
                    error: function () {
                        console.error('Failed to claim patient info from external API');
                    }
                });

                // 处理成功逻辑
                // alert(`Patient Name: ${data.patient.name}`);

                // 请求成功后返回 true
                return true;
            } else {
                // 请求失败逻辑
                alert('No patient info found.');
                return false; // 请求失败返回 false
            }
        } catch (error) {
            // 捕获并显示错误
            console.error('Error:', error);
            // alert('Request failed or invalid response, please try again.');

            // 出现错误时返回 false
            return false;
        }
    }

    function WebSocketRun(sendinfo) {
        iswsrun = false;

        try {
            if ("WebSocket" in window) {
                ws = new WebSocket(wsUri);
            } else if ("MozWebSocket" in window) {
                ws = new MozWebSocket(wsUri);
            } else {
                received_msg = "您的浏览器不支持WebSocket，请选用支持WebSocket的浏览器！";
                return;
            }

            clearTimeout(mytimer);

            ws.onopen = function (evt) {
                ws.send(sendinfo);
                iswsrun = true;

                if (sendinfo == 'NDEF_Clear,') {
                    mytimer = setTimeout("timeoutevent()", 5000); //清除标签的时间要长
                } else {
                    mytimer = setTimeout("timeoutevent()", 2000);
                }
            };

            ws.onmessage = WebSocketRev;

            ws.onerror = function (e) {
                if (iswsrun != true) {
                    received_msg = "请先在当前电脑下载>安装>运行我们的服务程序......";
                    window.open("http://www.bossknow.cn/DownLoads/RFIDWebServerSetup.exe", "top"); //打开新窗口

                    alert("请先下载>安装>运行我们的服务程序，再刷新本页面......");
                }
            };

        } catch (ex) {
            if (iswsrun != true) {
                received_msg = "请先在当前电脑下载>安装>运行我们的服务程序......";
                window.open("http://www.bossknow.cn/DownLoads/RFIDWebServerSetup.exe", "top"); //打开新窗口

                alert("请先下载>安装>运行我们的服务程序，再刷新本页面......");
            }
        }
    }
</script>
<script src="/face-api.js"></script>
<script src="/script.js"></script>
<?php
include 'footer.php'; // 或者 require 'footer.php';
?>


