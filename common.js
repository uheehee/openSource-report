// 사용자 정보를 저장할 배열
var users = [];

function addUser(username, nickname, password) {
    users.push({ username: username, nickname: nickname, password: password });
}

function getUsers() {
    return users;
}

// 회원가입 함수
function signup() {
    var username = document.getElementById('username').value.trim();
    var nickname = document.getElementById('nickname').value.trim();
    var password = document.getElementById('password').value.trim();

    // 입력값이 비어있는지 확인
    if (!username || !nickname || !password) {
        alert('모든 필드를 입력하세요.');
        return;
    }

    // 중복된 사용자명이 있는지 확인
    var existingUser = users.find(function(u) {
        return u.username === username;
    });

    if (existingUser) {
        alert('이미 존재하는 사용자명입니다. 다른 사용자명을 선택하세요.');
        return;
    }

    // 회원 정보를 배열에 저장
    users.push({ username: username, nickname: nickname, password: password });

    // 회원 정보 확인
    console.log('회원 정보:', users);

    // 회원가입 성공 알림
    alert('회원가입이 성공적으로 완료되었습니다!');

    // 로그인 페이지로 이동하면서 매개변수 전달
    window.location.href = 'login.html?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);
}


// 로그인 함수
function login() {
    // URL에서 매개변수 가져오기
    var params = new URLSearchParams(window.location.search);
    var loginUsername = params.get('username');
    var loginPassword = params.get('password');

    // 배열에서 사용자 정보 찾기
    var user = users.find(function(u) {
        return u.username.trim() === loginUsername && u.password === loginPassword;
    });

    // 로그인 결과 확인
    if (user) {
        // 로그인 성공 알림
        alert(loginUsername + '님, 로그인이 성공적으로 완료되었습니다.');
    } else {
        // 로그인 실패 알림
        alert('로그인 실패: 아이디 또는 비밀번호가 일치하지 않습니다.');
    }
}