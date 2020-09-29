 /**
  * 제어문(Control flow statement)은 주어진 조건에 따라 코드 블록을 실행(조건문)하거나 반복 실행(반복문)할 때 사용한다.
  * 
  * 1. 블록문(Block statement/Compound statement)
  * - 0개 이상의 문들을 중괄호로 묶은 것으로 코드 블록 또는 블록이라고 부르기도 한다. 
  * - 자바스크립트는 블록문을 하나의 단위로 취급한다.
  * - 블록문은 단독으로 사용할 수도 있으나 일반적으로 제어문이나 함수 선언문 등에서 사용한다. 
  * - 문의 끝에는 세미 콜론(;)을 붙이는 것이 일반적이지만 블록문은 세미콜론을 붙이지 않는다.
  */
// 블록문
{
  var foo = 10;
  console.log(foo);
}

// 제어문
var x = 0;
while (x < 10) {
  x++;
}
console.log(x); // 10

// 함수 선언문
function sum(x, y) {
  return x + y;
}
console.log(sum(1, 2)); // 3


/**
 * 2. 조건문(conditional statement)
 * - 주어진 조건식(conditional expression)의 평가 결과에 따라 코드 블럭(블록문)의 실행을 결정한다. 
 * - 조건식은 불리언 값으로 평가될 수 있는 표현식이다.
 * - 자바스크립트는 2가지의 조건문 if…else 문과 switch 문을 제공한다.
 */
var num = 2;
var kind;

// if 문
if (num > 0) {
  kind = '양수'; // 음수를 구별할 수 없다
}
console.log(kind); // 양수

// if…else 문
if (num > 0) {
  kind = '양수';
} else {
  kind = '음수'; // 0은 음수가 아니다
}
console.log(kind); // 양수

// if…else if 문
if (num > 0) {
  kind = '양수';
} else if (num < 0) {
  kind = '음수';
} else {
  kind = '영';
}
console.log(kind); // 양수

// 만약 코드 블록 내의 문이 하나뿐이라면 중괄호를 생략할 수 있다.
var num = 2;
var kind;

if (num > 0)      kind = '양수';
else if (num < 0) kind = '음수';
else              kind = '영';

console.log(kind); // 양수

// 대부분의 if…else 문은 연산자에서 살펴본 삼항 조건 연산자로 바꿔쓸 수 있다. 
// x가 짝수이면 '짝수'를 홀수이면 '홀수'를 반환한다.
var x = 2;
if (x % 2) { // 2 % 2는 0이고 0은 false로 취급된다.
  result = '홀수';
} else {
  result = '짝수';
}
  
// 0은 false로 취급된다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수

// switch 문
var year = 2000; // 2000년은 윤년으로 2월이 29일이다.
var month = 2;
var days = 0;

switch (month) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    days = 31;
    break;
  case 4: case 6: case 9: case 11:
    days = 30;
    break;
  case 2:
    // 윤년 계산 알고리즘
    // 1. 년도가 4로 나누어 떨어지는 해는 윤년(2000, 2004, 2008, 2012, 2016, 2020…)
    // 2. 그 중에서 년도가 100으로 나누어 떨어지는 해는 평년(2000, 2100, 2200...)
    // 3. 그 중에서 년도가 400으로 나누어 떨어지는 해는 윤년(2000, 2400, 2800...)
    days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
    break;
  default:
    console.log('Invalid month');
}

console.log(days); // 29


/**
 * 3. 반복문(Loop statement)
 * - 주어진 조건식(conditional expression)의 평가 결과가 참인 경우 코드 블럭을 실행한다. 
 * - 그 후 조건식을 다시 검사하여 여전히 참인 경우 코드 블록을 다시 실행한다. 이는 조건식이 거짓일 때까지 반복된다.
 * - 자바스크립트는 3가지의 반복문 for 문, while 문, do…while 문을 제공한다. 
 * - 그 외에도 for..in 문, ES6에서 새롭게 도입된 for…of 문이 있다.
 */
// for 문
for (var i = 0; i < 2; i++) {
  console.log(i);
}
for (var i = 1; i >= 0; i--) {
  console.log(i);
}

// 무한루프
// for (;;) { } 

for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`[${i}, ${j}]`);
  }
}

// while 문
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
  console.log(count);
  count++;
} // 0 1 2

// 무한루프
// while (true) { }

// do…while 문
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
  console.log(count);
  count++;
} while (count < 3); // 0 1 2


/**
 * 4. break 문
 * switch 문과 while 문에서 살펴보았듯이 break 문은 코드 블록을 탈출한다. 
 * 좀 더 정확히 표현하자면 코드 블록을 탈출하는 것이 아니라 레이블 문, 반복문(for, for…in, for…of, while, do…while) 또는 switch 문의 코드 블록을 탈출한다. 
 * 레이블 문, 반복문, switch 문의 코드 블록 이외에 break 문을 사용하면 SyntaxError(문법 에러)가 발생한다.
 * 레이블 문(Label statement)이란 식별자가 붙은 문을 말한다.
 * 레이블 문은 프로그램의 실행 순서를 제어하기 위해 사용한다. 사실 switch 문의 case 문과 default 문도 레이블 문이다.
 */
if (true) {
  break; // Uncaught SyntaxError: Illegal break statement
}

// foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log('foo');

// foo라는 식별자가 붙은 레이블 블록문
foo: {
  console.log(1);
  break foo; // foo 레이블 블록문을 탈출한다.
  console.log(2);
}
console.log('Done!');

// 중첩된 for 문을 외부로 탈출할 때 레이블 문은 유용하지만 그 외의 경우 레이블 문은 일반적으로 권장하지 않는다. 
// 레이블 문을 사용하면 프로그램의 흐름이 복잡해져서 가독성이 나빠지고 오류를 발생시킬 가능성이 높아지기 때문이다.
// outer라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    // i + j === 3이면 외부 for 문을 탈출한다.
    if (i + j === 3) break outer;
  }
}
console.log('Done!');

// [문자열에서 특정 문자의 인덱스(위치)를 검색하는 예제]
var string = 'Hello World.';
var index;

// 문자열은 유사배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 문자열의 개별 문자가 'l'이면
  if (string[i] === 'l') {
    index = i;
    break; // 반복문을 탈출한다.
  }
}
console.log(index); // 2
console.log(string.indexOf('l')); // 2


/**
 * 5. continue 문
 * continue 문은 반복문(for, for…in, for…of, while, do…while)의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 이동한다. 
 * break 문처럼 반복문을 탈출하지는 않는다.
 */
// [문자열에서 특정 문자의 개수를 카운트하는 예제]
var string = 'Hello World.';
var count = 0;

// 문자열은 유사배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
  if (string[i] !== 'l') continue;
  count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}
console.log(count); // 3

// 참고로 String.prototype.match 메소드를 사용해도 같은 동작을 한다.
console.log(string.match(/l/g).length); // 3

// 위 예제의 for 문은 아래와 동일하게 동작한다.
for (var i = 0; i < string.length; i++) {
  // 'l'이면 카운트를 증가시킨다.
  if (string[i] === 'l') count++;
}

// 위와 같이 if 문 내에서 실행해야 할 코드가 한 줄이라면 continue 문을 사용했을 때보다 간편하며 가독성도 좋다. 
// 하지만 if 문 내에서 실행해야 할 코드가 길다면 들여쓰기가 한 단계 더 깊어지므로 continue 문을 사용하는 것이 가독성이 더 좋다.
// continue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 한다.
for (var i = 0; i < string.length; i++) {
    // 'l'이면 카운트를 증가시킨다.
    if (string[i] === 'l') {
        count++;
        // code
        // code
        // code
    }
}

// continue 문을 사용면 if 문 밖에 코드를 작성할 수 있다.
for (var i = 0; i < string.length; i++) {
    // 'l'이 아니면 카운트를 증가시키지 않는다.
    if (string[i] !== 'l') continue;

    count++;
    // code
    // code
    // code
}