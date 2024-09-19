// script.js
function toggleMenu() {
    var navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('open');
}

function search() {
    var searchInput = document.getElementById('searchInput').value;
    if (searchInput === '') {
        alert('من فضلك أدخل كلمة للبحث!');
    } else {
        alert('جارٍ البحث عن: ' + searchInput);
        
        // يمكنك إضافة منطق البحث هنا باستخدام API أو طريقة أخرى
    }
}