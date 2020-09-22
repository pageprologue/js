function a() {
    console.log(this);
}
a(); // this = window

function b() {
    function c() {
        console.log(this);
    }
    c(); // this = window
}
b();

let d = {
    e: function() {
        function f() {
            console.log(this);
        }
        f(); // this = window
    }
}
d.e();

let g = {
    h: function() {
        console.log(this); // this = g
    }
}
g.h();

let i = {
    j: {
        k: function() {
            console.log(this); // this = i.j
        }
    }
}
i.j.k();

var num = 10;
let obj = {
    num: 20,
    func: function() {
        const self = this;
        console.log("obj.func: " + this.num);

        function func2() {
            console.log("func2(): " + this.num); // 10;
            console.log("self(): " + self.num); // 20;
        }
        func2();
    }
}
obj.func(); // 20


function l(x, y, z) {
    console.log("this, x, y, z = " + this, x, y, z);
}
var m = {
    n: 'abc'
}
l.call("call: " + m, 1, 2, 3);
l.apply("apply: " + m, [1, 2, 3]);

var o = l.bind(m);
o(1, 2, 3);

var p = l.bind(m, 1, 2);
p(3);


let callback = function() {
    console.dir(this);
}

let q = {
    a: 1,
    b: function(cb) {
        cb();
        cb.call(this);
    }
};
q.b(callback);

setTimeout(callback, 100);
setTimeout(callback.bind(q), 100);


document.body.innerHTML = "<div id='a'>클릭하세요</div>";
// document.getElementById('a').addEventListener('click', function() {
//     console.dir("addEventListener: " + this);
// });
document.getElementById('a').addEventListener('click', function() {
    console.dir("addEventListener: " + this);
}.bind(q));

