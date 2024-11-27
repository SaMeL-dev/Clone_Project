// 페이지에 알림 메시지를 띄우는 함수
function showAlert() {
    alert("Hello! You're exploring my portfolio!"); // 버튼 클릭 시 표시될 메시지
}

// 페이지가 로드되면 콘솔에 메시지 출력
console.log("Welcome to the portfolio site!"); // 브라우저의 콘솔에 메시지 출력

// 버튼 추가하기
const footer = document.querySelector('footer'); // 푸터 요소를 가져옴
const button = document.createElement('button'); // 새로운 버튼 요소 생성
button.textContent = 'Click Me!'; // 버튼 텍스트 설정
button.style.marginTop = '10px'; // 버튼 위쪽 여백 설정
button.onclick = showAlert; // 버튼 클릭 시 showAlert 함수 실행
footer.appendChild(button); // 버튼을 푸터에 추가