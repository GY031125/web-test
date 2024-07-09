function toggleDropdown() {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu.style.display === "none") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
}

function showModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'block'; // 改为 'block' 以显示模态窗
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none'; // 改回 'none' 以隐藏模态窗
}


document.querySelector('.close-button2').addEventListener('click', function(event) {
    event.preventDefault(); // 阻止表单提交
    closeModal('changeModal'); // 关闭模态窗
});


document.getElementById('changeForm').addEventListener('submit', function(event) {


    closeModal('changeModal');
});

document.addEventListener('DOMContentLoaded', function() {
    var scoreButton = document.querySelector('.score-button');
    scoreButton.addEventListener('click', function() {
        // 假设评分页面的URL是'/score'
        window.location.href = 'score.html';
    });
});

// 获取模态框和按钮元素
var modal = document.getElementById("commitmentModal");
var btn = document.getElementById("agreeButton");
var span = document.getElementsByClassName("close")[0];
var mainContent = document.getElementById("mainContent");


// 点击同意按钮
btn.onclick = function() {
  modal.style.display = "none";
  mainContent.style.display = "block"; // 显示主页面内容
}

// 页面加载时默认显示承诺书模态框
window.onload = function() {
  modal.style.display = "block";
}