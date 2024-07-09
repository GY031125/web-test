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

// 这些变量代表不同的表单部分的状态或数据
var isFormValid = false; // 表单是否有效
var formDataSaved = false; // 数据是否已保存

// 获取按钮元素
var btnBack = document.getElementById('btnBack');
var btnSave = document.getElementById('btnSave');
var btnSubmit = document.getElementById('btnSubmit');

// 定义上一步按钮的行为
btnBack.addEventListener('click', function() {
    window.location.href = 'previous-page-url'; // 替换为填写作品信息页的URL
});

// 定义保存按钮的行为
btnSave.addEventListener('click', function() {
    // 校验数据合法性
    isFormValid = validateFormData();

    if (isFormValid) {
        // 如果校验通过，保存数据
        saveFormData();
        formDataSaved = true;
        alert('数据保存成功。'); // 保存成功的提示
    } else {
        alert('请填写所有必填项。'); // 校验失败的提示
    }
});

// 定义提交按钮的行为
btnSubmit.addEventListener('click', function() {
    // 校验数据合法性
    isFormValid = validateFormData();

    if (isFormValid) {
        // 如果校验通过，提交数据
        submitFormData();
        if (formDataSaved) {
            alert('提交成功。'); // 提交成功的提示
        } else {
            alert('数据未保存，无法提交。');
        }
    } else {
        alert('请填写所有必填项。'); // 校验失败的提示
    }
});

// 校验表单数据的合法性
function validateFormData() {
    // 这里添加具体的校验逻辑，例如：
    // - 检查必填项是否已填写
    // - 检查文件类型和大小是否符合要求
    // - 等等...

    // 示例：简单的校验逻辑
    var lessonPlanFileInput = document.getElementById('lessonPlanFile');
    // 假设所有输入字段都是必填项
    return lessonPlanFileInput.files.length > 0; // 仅示例，请根据实际表单字段进行校验
}

// 保存表单数据
function saveFormData() {
    // 这里添加保存数据的逻辑，例如：
    // - 将数据发送到服务器
    // - 等等...

    // 示例：保存逻辑的占位符
    console.log('保存数据到服务器...');
}

// 提交表单数据
function submitFormData() {
    // 这里添加提交数据的逻辑，例如：
    // - 将数据发送到服务器，并处理响应
    // - 等等...

    // 示例：提交逻辑的占位符
    console.log('提交数据到服务器...');
    // 假设提交成功
    alert('提交成功。');
}