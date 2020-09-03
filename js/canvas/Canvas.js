function draw1() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200, 0, 0)'; // red
        ctx.fillRect(10, 10, 50, 50); // void ctx.fillRect(x, y, width, height);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'; // blue
        ctx.fillRect(30, 30, 50, 50);
    }
}


/** Drawing rectangles
 * - fillRect(x, y, width, height)
 *   채워진 사각형을 그립니다.
 * - strokeRect(x, y, width, height)
 *   직사각형 윤곽을 그립니다.
 * - clearRect(x, y, width, height)
 *   지정된 사각형 영역을 지우고 완전히 투명하게 만듭니다.
**/
function draw2() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    }
}