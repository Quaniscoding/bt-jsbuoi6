// bài 1
document.getElementById('btnSubmit').onclick = function () {
    var sum = 0;
    var count = 0;
    while (sum < 10000) {
        count++;
        sum = sum + count;
    }
    document.getElementById('thongBao').innerHTML = "Số nguyên dương nhỏ nhất: " + count;
}
// bài 2
document.getElementById('btnSubmit1').onclick = function () {
    var numberX = document.getElementById('numberX').value * 1;
    var numberN = document.getElementById('numberN').value * 1;
    var x = 1;
    var n = 0;
    for (i = 1; i <= numberN; i++) {
        x = x * numberX;
        n += x;
    }
    document.getElementById('thongBao1').innerHTML = "👉Tổng: " + n;
}
// bài  3
document.getElementById('btnSubmit2').onclick = function () {
    var soN = document.getElementById('soN').value * 1;
    var giaiThua = 1;
    if (soN > 1) {
        for (i = 1; i <= soN; i++) {
            giaiThua = "Giai thừa: " + giaiThua * i;
        }
    }
    document.getElementById('thongBao2').innerHTML = giaiThua;
}
// bài  4
document.getElementById('btnSubmit3').onclick = function () {
    var content = "";
    var soLe = 0;
    var soChan = 0;
    for (i = 1; i < 10; i++) {
        if (i % 2 === 0) {
            soChan += i;
            content += "<div class='bg-danger'>" + "Div chẵn" + " " + "</div>";
        } else {
            soLe += i;
            content += "<div class='bg-primary'>" + "Div lẻ" + " " + "</div>";
        }
    }
    document.getElementById('thongBao3').innerHTML = content;
}
// bài 5
function kiemTraSNT(n) {
    var flag = true;
    if (n < 2) {
        flag = false;
    }
    else if (n == 2) {
        flag = true;
    }
    else if (n % 2 == 0) {
        flag = false;
    }
    else {
        for (var i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }

    return flag;
}

document.getElementById('btnSubmit4').onclick = function () {
    var so = document.getElementById('soNguyenTo').value * 1;
    var soNguyenTo = "";
    for (var i = 1; i < so; i++) {
        if (kiemTraSNT(i)) {
            soNguyenTo += i + " "
        }
    }
    document.getElementById('thongBao4').innerHTML = soNguyenTo;
}