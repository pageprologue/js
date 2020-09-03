/**
 * skeleton template
 */
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

/**
 * Drawing paths
 * - Drawing a triangle
 */
function draw3() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(75, 50); 
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
    }
}

/**
 * Moving the pen (smiley face)
 * - moveTo(x, y)
 *   moveTo(x, y) 지정된 좌표로 펜을 이동합니다.
 *   캔버스가 초기화되거나 beginPath()호출 될 때 일반적으로 moveTo()함수를 사용 하여 시작 지점을 다른 곳에 배치 하려고합니다. 
 *   연결되지 않은 경로를 그리는 데 사용할 수도 있습니다.
 */
function draw4() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
        ctx.stroke();
    }
}

/**
 * Lines
 * - lineTo(x, y)
 */
function draw5() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // Filled triangle
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(105, 25);
        ctx.lineTo(25, 105);
        ctx.fill();

        // Stroked triangle
        ctx.beginPath();
        ctx.moveTo(125, 125);
        ctx.lineTo(125, 45);
        ctx.lineTo(45, 125);
        ctx.closePath();
        ctx.stroke();
    }
}

/**
 * Arcs
 * arc함수의 각도는 도가 아닌 라디안으로 측정됩니다. 
 * 
 * - arc(x, y, radius, startAngle, endAngle, anticlockwise)
 *   반지름 r 이 startAngle 에서 시작 하고 endAngle 에서 끝나는 반경 r 이 anticlockwise 지정된 방향 (기본값은 시계 방향-false)으로 (x, y) 위치의 중심에있는 호를 그 립니다.
 * - arcTo(x1, y1, x2, y2, radius)
 *   주어진 제어점과 반지름을 사용하여 이전 점과 직선으로 연결된 호를 그립니다.
 */
function draw6() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
                ctx.beginPath();
                var x = 25 + j * 50; // x coordinate
                var y = 25 + i * 50; // y coordinate
                var radius = 20; // Arc radius
                var startAngle = 0; // Starting point on circle
                var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
                var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise

                ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
                console.log("ctx.arc( " + x + ", " + y + ", " + radius + ", " + startAngle + ", " + endAngle + ", " + anticlockwise + " )");

                if (i > 1) {
                    ctx.fill();
                } else {
                    ctx.stroke();
                }
            }
        }
    }
}