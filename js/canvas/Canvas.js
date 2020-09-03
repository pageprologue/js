function draw() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200, 0, 0)'; // red
        ctx.fillRect(10, 10, 50, 50); // void ctx.fillRect(x, y, width, height);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'; // blue
        ctx.fillRect(30, 30, 50, 50);
    }
}