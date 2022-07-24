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
    console.log(n);
    console.log(Math.pow(numberX, numberN));
}