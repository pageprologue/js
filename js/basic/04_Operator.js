/ ************* 문과 표현식 ************* /
/**
 * 표현식(expression)은 리터럴, 식별자, 연산자, 함수 호출 등의 조합을 말한다. 
 * 표현식은 평가(evaluation. 표현식을 실행하여 하나의 값을 만드는 과정)되어 하나의 값을 만든다. 
 * 즉, 표현식은 하나의 값으로 평가될 수 있는 문(statement)이다. 
 */

// 리터럴 표현식
10

// 식별자 표현식
sum

// 연산자 표현식
10 + 20

// 함수/메소드 호출 표현식
square()


/**
 * 표현식은 평가되어 결국 하나의 값이 되므로 표현식과 값은 동등한 관계, 즉 동치(Equivalent)다. 
 * 다시 말해 표현식은 값처럼 사용할 수 있다. 
 */

var x = 10;

// 연산자 표현식
x + 30;  // 식별자 표현식과 숫자 리터럴과 연산자의 조합


/**
 * 문(statement)은 자바스크립트 엔진에게 내리는 명령이다.
 * 문이 실행되면 무슨 일인가가 일어나게 된다. 
 * - 변수 선언문을 실행하면 변수가 선언된다.
 * - 할당문을 실행하면 할당이 된다. 
 * - 조건문을 실행하면 주어진 조건에 따라 코드 블록({…})의 실행이 결정된다.
 * - 반복문을 실행하면 코드 블록이 반복 실행된다.
 */
 
 // 변수 선언문
var x;

// 할당문
x = 5;

// 함수 선언문
function foo () {}

// 조건문
if (x > 5) { console.log("if"); }

// 반복문
for (var i = 0; i < 10; i++) { console.log("for"); }


/**
 * 표현식과 문은 유사하여 구별이 어려울 수 있다. 표현식은 평가되어 값을 만들지만 그 이상의 행위는 할 수 없다. 
 * 표현식의 역할은 값을 생성하는 것이다. 
 * 
 * 문은 var, let, const, function, class와 같은 선언 키워드를 사용하여 변수나 함수를 생성하기도 하고 if, for, while 문과 같은 제어문을 생성하여 프로그램의 흐름을 제어하기도 한다.
 * 문의 역할은 표현식으로 생성한 값을 사용해 컴퓨터에게 명령을 내리는 것이다. 
 * 문에는 표현식인 문과 표현식이 아닌 문이 있다. 
 * 예를 들어 선언문은 값으로 평가될 수 없다. 따라서 표현식이 아닌 문이다.
 */

// 선언문(Declaration statement)
var x = 5 * 10; // 표현식 x = 5 * 10를 포함하는 문이다.

// 할당문(Assignment statement)
x = 100; // 이 자체가 표현식이지만 완전한 문이기도 하다.

// 선언문은 값처럼 사용할 수 없다.
// var foo = var x = 5 * 10;   => (X)

// 할당문은 표현식인 문이기 때문에 값처럼 사용할 수 있다.
var foo = x = 100;


/ ************* 연산자 ************* /
/**
 * 연산자(Operator)는 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입 연산 등을 수행해 하나의 값을 만든다. 
 */
// 산술 연산자
5 * 4 // 20

// 문자열 연결 연산자
'My name is ' + 'Lee' // "My name is Lee"

// 할당 연산자
var color = 'red'; // "red"

// 비교 연산자
3 > 5 // false

// 논리 연산자
(5 > 3) && (2 < 4)  // true

// 타입 연산자
typeof 'Hi' // "string"

/**
 * 1. 산술 연산자(Arithmetic Operator): 피연산자를 대상으로 수학적 계산을 수행해 새로운 숫자 값을 만든다. 
 * 산술 연산을 할 수 없는 경우에는 NaN을 반환한다.
 * 산술 연산자는 이항 산술 연산자와 단항 산술 연산자로 구분할 수 있다.
 */
// 이항 산술 연산자
5 + 2  // 7
5 - 2  // 3
5 * 2  // 10
5 / 2  // 2.5
5 % 2  // 1

// 단항 산술 연산자
var x = 5, result;

// 선대입 후증가 (Postfix increment operator)
result = x++;
console.log(result, x); // 5 6

// 선증가 후대입 (Prefix increment operator)
result = ++x;
console.log(result, x); // 7 7

// 선대입 후감소 (Postfix decrement operator)
result = x--;
console.log(result, x); // 7 6

// 선감소 후대입 (Prefix decrement operator)
result = --x;
console.log(result, x); // 5 5

// + 단항 연산자는 피연산자에 어떠한 효과도 없다. 음수를 양수로 반전하지도 않는다. 
// 숫자 타입이 아닌 피연산자에 사용하면 피연산자를 숫자 타입으로 변환하여 반환한다.
+10 // 10
+'10' // 10
+true // 1
+false // 0

// – 단항 연산자는 피연산자의 부호를 반전한 값을 반환한다.
// 숫자 타입이 아닌 피연산자에 사용하면 피연산자를 숫자 타입으로 변환하여 반환한다. 
-10 // -10
-'10' // -10
-true // -1
-false // -0

/**
 * 2. 문자열 연결 연산자: + 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다.
 */
'1' + '2'     // '12'
'1' + 2       // '12'

// 암묵적 타입 변환(Implicit coercion) 또는 타입 강제 변환(Type coercion)
1 + 2          // 3
1 + true       // 2 (true → 1)
1 + false      // 1 (false → 0)
true + false   // 1 (true → 1 / false → 0)
1 + null       // 1 (null → 0)
1 + undefined  // NaN (undefined → NaN)

/**
 * 3. 할당 연산자(Assignment Operator): 우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에 할당한다.
 */
var x;
x = 10;   // 10
x += 5;   // 15
x -= 5;   // 10
x *= 5;   // 50
x /= 5;   // 10
x %= 5;   // 0

var str = 'My name is ';
str += 'Lee'; // My name is Lee

// 할당 연산은 변수에 값을 할당하는 부수 효과만 있을 뿐 값으로 평가되지 않을 것처럼 보인다. 
// 하지만 할당 연산은 하나의 값으로 평가되는 표현식이다. 할당 표현식은 할당된 값으로 평가된다. 
var x, y;
y = x = 10; // 연쇄 할당(Chained assignment)
console.log(x, y); // 10 10


/**
 * 4. 비교 연산자(Comparison Operator): 좌항과 우항의 피연산자를 비교하여 불리언 값을 반환한다. 
 */
 // 동등 비교
5 == 5    // true
// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 같은 값을 같는다.
5 == '5'   //true
5 == 8    // false

'' == '0'           // false
0 == ''             // true
0 == '0'            // true

false == 'false'    // false
false == '0'        // true

false == undefined  // false
false == null       // false
null == undefined   // true

// 일치 비교
5 === 5   // true
5 === '5' // false
NaN === NaN // false
isNaN(NaN) // true
0 === -0     // true

// 부동등 비교
5 != 8    // true
5 != 5    // false
5 != '5'  // false

// 불일치 비교
5 !== 8   // true
5 !== 5   // false
5 !== '5' // true

// 대소 관계 비교
5 > 0    // true
5 > 5    // false
5 > 8    // false
5 < 0    // false
5 < 5    // false
5 < 8    // true
5 >= 0   // true
5 >= 5   // true
5 >= 8   // false
5 <= 0   // false
5 <= 5   // true
5 <= 8   // true


/**
 * 5. 삼항 조건 연산자(ternary operator): 조건식의 평가 결과에 따라 반환할 값을 결정한다. 
 * - 조건식 ? 조건식이 ture일때 반환할 값 : 조건식이 false일때 반환할 값
 */
var x = 2;

// x가 짝수이면 '짝수'를 홀수이면 '홀수'를 반환한다.
// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수

var x = 2, result;

// x가 짝수이면 '짝수'를 홀수이면 '홀수'를 반환한다.
// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
if (x % 2) result = '홀수';
else       result = '짝수';
console.log(result); // 짝수


/**
 * 6. 논리 연산자(Logical Operator): 우항과 좌항의 피연산자(부정 논리 연산자의 경우, 우항의 피연산자)를 논리 연산한다.
 */
// 논리합(||) 연산자
true || true   // true
true || false  // true
false || true  // true
false || false // false

// 논리곱(&&) 연산자
true && true   // true
true && false  // false
false && true  // false
false && false // false

// 논리 부정(!) 연산자
!true  // false
!false // true

// 암묵적 타입 변환
!0 // true

// 단축 평가
'Cat' && 'Dog' // “Dog”


/**
 * 7. 쉼표 연산자
 */
var x, y, z;
x = 1, y = 2, z = 3; // 3


/**
 * 8. 그룹 연산자
 */
10 * 2 + 3   // 23
10 * (2 + 3) // 50


/**
 * 9. typeof 연산자
 */
typeof ''              // "string"
typeof 1               // "number"
typeof NaN             // "number"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof Symbol()        // "symbol"
typeof null            // "object"
typeof []              // "object"
typeof {}              // "object"
typeof new Date()      // "object"
typeof /test/gi        // "object"
typeof function () {}  // "function"

// 주의해야 할 것은 typeof 연산자로 null 값을 연산해 보면 null이 아닌 “object”를 반환한다는 것이다.
// null 타입을 확인할 때는 typeof 연산자를 사용하지 말고 일치 연산자(===)를 사용하도록한다.
typeof null  // "object"
var foo = null;
console.log(typeof foo === null); // false
console.log(foo === null);        // true

// 선언하지 않은 식별자를 typeof 연산자로 연산해 보면 ReferenceError가 발생하지 않고 “undefined”를 반환한다.
typeof undeclared  // "undefined"

