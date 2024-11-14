const video = document.getElementById('video');
const canvas = document.getElementById('overlay');
const registerButton = document.getElementById('face-register');
const loginButton = document.getElementById('face-login');
const statusDiv = document.getElementById('status');
const context = canvas.getContext('2d');

console.log(navigator.mediaDevices);


async function setupCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
    video.srcObject = stream;
    return new Promise((resolve) => {
        video.onloadedmetadata = () => {
            resolve(video);
        };
    });
}

async function loadModels() {
    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
    await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
}

async function detectFace() {
    const detections = await faceapi.detectSingleFace(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptor();
    if (detections) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, detections);
        faceapi.draw.drawFaceLandmarks(canvas, detections);
        return detections.descriptor;
    } else {
        alert('No face detected');
        return null;
    }
}

// registerButton.addEventListener('click', async () => {
//     const descriptor = await detectFace();
//     if (descriptor) {
//         const response = await fetch('register.php', {
//             method: 'POST',
//             body: JSON.stringify({ descriptor }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         const result = await response.json();
//         statusDiv.innerText = result.message;
//     }
// });

async function faceRegister() {
    const descriptor = await detectFace();
    if (descriptor) {
        const response = await fetch('face-register.php', {
            method: 'POST',
            body: JSON.stringify({ descriptor }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        statusDiv.innerText = result.message;
    }
}

// loginButton.addEventListener('click', async () => {
//     const descriptor = await detectFace();
//     if (descriptor) {
//         const response = await fetch('login.php', {
//             method: 'POST',
//             body: JSON.stringify({ descriptor }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         const result = await response.json();
//         statusDiv.innerText = result.message;
//     }
// });
async function faceLogin() {
    const descriptor = await detectFace();
    if (descriptor) {
        const response = await fetch('face-login.php', {
            method: 'POST',
            body: JSON.stringify({ descriptor }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        statusDiv.innerText = result.message;
    }
}