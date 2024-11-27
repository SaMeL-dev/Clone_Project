// 페이지에 알림 메시지를 띄우는 함수
/*
function showAlert() {
    alert("Hello! You're exploring my portfolio!"); // 버튼 클릭 시 표시될 메시지
}
*/
function showCustomAlert(title, message) {
    const alertBox = document.getElementById('custom-alert'); // 알림창 요소 가져오기
    alertBox.querySelector('.alert-title').textContent = title; // 제목 설정
    alertBox.querySelector('.alert-message').textContent = message; // 메시지 설정
    alertBox.classList.remove('hidden'); // 알림창 보이기
}

function closeAlert() {
    const alertBox = document.getElementById('custom-alert');
    alertBox.classList.add('hidden'); // 알림창 숨기기
}

// 페이지가 로드되면 콘솔에 메시지 출력
console.log("Welcome to the portfolio site!"); // 브라우저의 콘솔에 메시지 출력

// 버튼 추가하기
const footer = document.querySelector('footer'); // 푸터 요소를 가져옴
const button = document.createElement('button'); // 새로운 버튼 요소 생성
button.textContent = 'Click Me!'; // 버튼 텍스트 설정
button.style.marginTop = '10px'; // 버튼 위쪽 여백 설정
button.onclick = () => showCustomAlert("안녕하세요!", "You're exploring my portfolio! 😄"); // 버튼 클릭 시 showCustomAlert 함수 실행
footer.appendChild(button); // 버튼을 푸터에 추가