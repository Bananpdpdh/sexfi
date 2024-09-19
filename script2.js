function loadVideos() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'login.html', true); // استبدل 'videos.json' بالمسار الصحيح لملف البيانات
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('video-content').innerHTML = xhr.responseText;
        } else {
            console.error('فشل في تحميل البيانات');
        }
    };
    xhr.send();
}