/**
 * 메모리에 값을 저장하기 위해서는 먼저 메모리 공간을 확보해야 할 메모리의 크기(byte)를 알아야한다. 
 * 이는 값의 종류에 따라 확보해야 할 메모리의 크기가 다르기 때문이다. 이때 값의 종류, 즉 데이터의 종류를 데이터 타입(Data Type)이라 한다.
 * 
 * 자바스크립트에서 제공하는 7개의 데이터 타입은 크게 원시 타입(primitive data type)과 객체 타입(object/reference type)으로 구분할 수 있다.
    1. 원시 타입 (Primitive Data Type)
    - 원시 타입의 값은 변경 불가능한 값(immutable value)이며 pass-by-value(값에 의한 전달) 이다.
    
    2 객체 타입 (Object type, Reference type)
    - 객체는 데이터와 그 데이터에 관련한 동작(절차, 방법, 기능)을 모두 포함할 수 있는 개념적 존재이다. 
    - 이름과 값을 가지는 데이터를 의미하는 프로퍼티(property)와 동작을 의미하는 메소드(method)를 포함할 수 있는 독립적 주체이다.
    - 자바스크립트는 객체(object) 기반의 스크립트 언어로서 자바스크립트를 이루고 있는 거의 “모든 것”이 객체이다. 
    - 원시 타입(Primitives)을 제외한 나머지 값들(배열, 함수, 정규표현식 등)은 모두 객체이다. 
    - 또한 객체는 pass-by-reference(참조에 의한 전달) 방식으로 전달된다.
**/

/ ************* 1. 원시 타입 (Primitive Data Type) ************* /

// *********** //
// (1) number  //
// *********** //
var integer = 10;        // 정수
var double = 10.12;      // 실수
var negative = -20;      // 음의 정수
var binary = 0b01000001; // 2진수
var octal = 0o101;       // 8진수
var hex = 0x41;          // 16진수

// 2진수, 8진수, 16진수 리터럴은 메모리에 동일한 배정밀도 64비트 부동소수점 형식의 2진수로 저장된다. 
// 자바스크립트는 2진수, 8진수, 16진수 데이터 타입을 제공하지 않기 때문에 이들 값을 참조하면 모두 10진수로 해석된다.
console.log(binary); // 65
console.log(octal);  // 65
console.log(hex);    // 65

console.log(binary === octal); // true
console.log(octal === hex);    // true

// 자바스크립트의 숫자 타입은 정수만을 위한 타입이 없고 모든 수를 실수를 처리한다. 
// 정수로 표시된다해도 사실은 실수다. 따라서 정수로 표시되는 수 끼리 나누더라도 실수가 나올 수 있다.
console.log(1 === 1.0); // true

var result = 4 / 2;
console.log(result); // 2
result = 3 /2;
console.log(result); // 1.5

// 추가적으로 3가지 특별한 값들도 표현할 수 있다.
// - Infinity : 양의 무한대
// - Infinity : 음의 무한대
// - NaN : 산술 연산 불가(not-a-number)
var pInf = 10 / 0;  // 양의 무한대
console.log(pInf);  // Infinity

var nInf = 10 / -0; // 음의 무한대
console.log(nInf);  // -Infinity

var nan = 1 * 'string'; // 산술 연산 불가
console.log(nan);       // NaN


// *********** //
// (2) String  //
// *********** //
var str = "string"; // 큰 따옴표
str = 'string';     // 작은 따옴표
str = `string`;     // 백틱(ES6 템플릿 리터럴)

var str = 'string';
// 문자열은 유사배열이다.
for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// 문자열을 변경할 수 없다.
str[0] = 'S';
console.log(str); // string

// str[0] = 'S'처럼 이미 생성된 문자열의 일부 문자를 변경해도 반영되지 않는다(이때 에러가 발생하지 않는다). 
// 한번 생성된 문자열은 read only로서 변경할 수 없다. 이것을 변경 불가능(immutable)이라 한다.
// 그러나 새로운 문자열을 재할당하는 것은 가능하다. 
var str = 'string';
console.log(str); // string

str = 'String';
console.log(str); // String

str += ' test';
console.log(str); // String test

str = str.substring(0, 3);
console.log(str); // Str

str = str.toUpperCase();
console.log(str); // STR


// ************ //
// (3) Boolean  //
// ************ //
var foo = true;
var bar = false;

// typeof 연산자는 타입을 나타내는 문자열을 반환한다.
console.log(typeof foo); // boolean
console.log(typeof bar); // boolean

//비어있는 문자열과 null, undefined, 숫자 0은 false로 간주된다. 


// ************** //
// (4) undefined  //
// ************** //
// 선언 이후 값을 할당하지 않은 변수는 undefined 값을 가진다.
// 변수의 값이 없다는 것을 명시하고 싶은 경우는 undefined를 할당하는 것이 아니라 null을 할당한다.
var foo;
console.log(foo); // undefined


// ********* //
// (5) null  //
// ********* //
// 자바스크립트는 대소문자를 구별(case-sensitive)하므로 null은 Null, NULL등과 다르다.
// 프로그래밍 언어에서 null은 의도적으로 변수에 값이 없다는 것을 명시할 때 사용한다. 
// 이는 변수가 기억하는 메모리 어드레스의 참조 정보를 제거하는 것을 의미하며 자바스크립트 엔진은 누구도 참조하지 않는 메모리 영역에 대해 가비지 콜렉션을 수행할 것이다.
var foo = 'Lee';
foo = null;  // 참조 정보가 제거됨

// 또는 함수가 호출되었으나 유효한 값을 반환할 수 없는 경우, 명시적으로 null을 반환하기도 한다.
var element = document.querySelector('.myElem');
// HTML 문서에 myElem 클래스를 갖는 요소가 없다면 null을 반환한다.
console.log(element); // null

// 타입을 나타내는 문자열을 반환하는 typeof 연산자로 null 값을 연산해 보면 null이 아닌 object가 나온다. 
// 이는 자바스크립트의 설계상의 오류이다.
var foo = null;
console.log(typeof foo); // object

// 따라서 null 타입을 확인할 때 typeof 연산자를 사용하면 안되고 일치 연산자(===)를 사용하여야 한다.
var foo = null;
console.log(typeof foo === null); // false
console.log(foo === null);        // true


// *********** //
// (6) symbol  //
// *********** //
// 심볼(symbol)은 ES6에서 새롭게 추가된 7번째 타입으로 변경 불가능한 원시 타입의 값이다. 
// 심볼은 주로 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키(property key)를 만들기 위해 사용한다. 
// 심볼은 Symbol 함수를 호출해 생성한다. 이때 생성된 심볼 값은 다른 심볼 값들과 다른 유일한 심볼 값이다.
// 심볼 key는 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키
var key = Symbol('key');
console.log(typeof key); // symbol

var obj = {};
obj[key] = 'value';
console.log(obj[key]); // value


/ ************* 2.객체 타입  (Object type, Reference type) ************* /