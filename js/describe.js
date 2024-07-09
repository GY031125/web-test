//登录弹框
function openModal(modalId) {
    const modal = document.getElementById(modalId + 'Modal');
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId + 'Modal');
    modal.style.display = 'none';
}

// 简化调用，假设只传递模态框的ID部分
document.querySelector('.login-button').addEventListener('click', function() {
    openModal('login');
});

document.querySelector('.change-button').addEventListener('click', function() {
    openModal('change');
});


// 表单提交事件监听器
document.getElementById('loginForm').addEventListener('submit', function(event) {
 event.preventDefault(); // 阻止表单默认提交行为

 var username = document.getElementById('username').value;
 var password = document.getElementById('password').value;
 var usernameError = document.getElementById('usernameError');
 var passwordError = document.getElementById('passwordError');

 usernameError.textContent = '';
 passwordError.textContent = '';

 if (!username) {
     usernameError.textContent = '请输入用户名';
     usernameError.style.display = 'block';
     return;
  }

 if (!password) {
     passwordError.textContent = '请输入密码';
     passwordError.style.display = 'block';
     return;
 }

 // 这里是模拟的登录验证，实际开发中应替换为API调用
 if (username === 'admin' && password === '123') {
     alert('登录成功！');
     // 关闭模态框
     document.getElementById('loginModal').style.display = 'none';
     // 刷新页面或重定向到登录后的页面
     location.reload(); // 或者 window.location.href = 'some-page.html';
 } else {
     alert('登录失败，用户名或密码错误！');
 }
});

function closeModal() {                                   //关闭弹窗
  var modal = document.getElementById('loginModal');
  modal.style.display = 'none';
}

//修改密码弹框触发模态框显示
document.querySelector('.change-button').addEventListener('click', function() {
  var changeModal = document.getElementById('changeModal');
  changeModal.style.display = 'block';
});

// 关闭模态框的函数
function closeModal2() {
  var changeModal = document.getElementById('changeModal');
  changeModal.style.display = 'none';
}
