/**
 * A simple line graph
 * - drawImage(image, x, y)
 */
function draw9() {
    var ctx = document.getElementById('tutorial').getContext('2d');
    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
        ctx.beginPath();
        ctx.moveTo(30, 96);
        ctx.lineTo(70, 66);
        ctx.lineTo(103, 76);
        ctx.lineTo(170, 15);
        ctx.stroke();
    };
    img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
}

/**
 * Tiling an image
 */
function draw10() {
    var ctx = document.getElementById('tutorial').getContext('2d');
    var img = new Image();
    img.onload = function() {
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
          ctx.drawImage(img, j * 50, i * 38, 50, 38);
        }
      }
    };
    img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
  }

/**
 * Slicing
 * 소스 이미지의 일부를 잘라낸 다음 캔버스에 크기를 조정하고 그릴 수 있습니다.
 * 
 * - drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
 *   image이 함수는 왼쪽 상단 모서리가 ( sx, sy)이고 너비와 높이가 sWidthand 인 사각형으로 지정된 소스 이미지의 영역을 가져 와서 sHeight캔버스에 ( dx, dy) 위치에 배치하고 dWidth 및 dHeight 로 크기를 조정합니다.
 */
function draw11() {
    var canvas = document.getElementById('tutorial');
    var ctx = canvas.getContext('2d');

    // Draw slice
    ctx.drawImage(document.getElementById('source'),
                    33, 71, 104, 124, 21, 20, 87, 104);

    // Draw frame
    ctx.drawImage(document.getElementById('frame'), 0, 0);
}