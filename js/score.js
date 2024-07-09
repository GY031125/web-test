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

// 总得分计算
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有得分输入框
    var scoreInputs = document.querySelectorAll('.input-score');

    // 定义一个函数来计算总分
    function calculateTotalScore() {
        var total = 0;
        // 遍历所有得分输入框
        scoreInputs.forEach(function(input) {
            // 尝试将输入框的值转换为数字并累加到总分中
            // 如果输入的不是数字，则忽略该值
            var value = parseFloat(input.value) || 0;
            total += value;
        });
        // 更新总分显示
        document.getElementById('total-score').textContent = total; // 保留两位小数
    }

    // 为每个得分输入框添加input事件监听器
    scoreInputs.forEach(function(input) {
        input.addEventListener('input', calculateTotalScore);
    });

    // 初始时计算一次总分
    calculateTotalScore();
});