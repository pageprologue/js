let first = function (callback) {
    let  question = "how old are you?";
    callback(question);
}
let second = function (question) {
    alert(question);
}
first(second);


let arr = [1, 2, 3, 4, 5];
let entries = [];
arr.forEach(function(index, value) { // forEach의 callback 함수 인자의 순서는 (index, value) 이다.
    console.log(index, value);
})


arr.forEach(function(v, i) { // index와 value의 순서를 변경해도 forEach에게 제어권을 넘기기 때문에 인자의 순서를 임의로 조정할 수 없다.
    entries.push([i, v, this[i]]);
}, [10, 20, 30, 40, 50]);
console.log(entries); 
// (5) [Array(3), Array(3), Array(3), Array(3), Array(3)]
// [0, 1, 10] [1, 2, 20] [2, 3, 30] [3, 4, 40] [4, 5, 50]


// callback 과 this
document.body.innerHTML = "<div id='a'>abc</div>";
function cbFunc(x) {
    console.log(this, x);
}

document.getElementById('a').addEventListener('click', cbFunc);

$('#a').on('click',  cbFunc);