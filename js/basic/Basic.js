/**
 * 데이터 타입(Data Type) - 프로그래밍 언어에서 사용할 수 있는 값의 종류
 * 변수(Variable) - 값이 저장된 메모리 공간의 주소를 가리키는 식별자(identifier)
 * 리터럴(literal) - 소스코드 안에서 직접 만들어 낸 상수 값 자체를 말하며 값을 구성하는 최소 단위
**/

// 숫자 리터럴
10.50
1001

// 문자열 리터럴
'Hello'
"World"

// 불리언 리터럴
true
false

// null 리터럴
null

// undefined 리터럴
undefined

// 객체 리터럴
{ name: 'Lee', age: 11 }

// 배열 리터럴
[ 1, 2, 3 ]

// 정규표현식 리터럴
/ab+c/

// 함수 리터럴
function() {}


/**  
 * 자바스크립트의 모든 값은 데이터 타입을 갖는다. 자바스크립트는 7가지 데이터 타입을 제공한다.
 * 원시 타입 (primitive data type)
    - number
    - string
    - boolean
    - null
    - undefined
    - symbol (New in ECMAScript 6)
 * 객체 타입 (Object data type)
    - object
**/

 // Number
var num1 = 1001;
var num2 = 10.50;

// String
var string1 = 'Hello';
var string2 = "World";

// Boolean
var bool = true;

// null
var foo = null;

// undefined
var bar;

// Object
var obj = { name: 'Lee', age: 11 };

// Array
var array = [ 1, 2, 3 ];

// function
var foo = function() {};


/**
 * 연산자(Operator)는 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입 연산 등을 수행해 하나의 값을 만든다. 
 * 키워드(keyword)는 수행할 동작을 규정한 것이다. 예를 들어 var 키워드는 새로운 변수를 생성할 것을 지시한다.
 * 표현식(Expression)은 하나의 값으로 평가(Evaluation)된다. 값(리터럴), 변수, 객체의 프로퍼티, 배열의 요소, 함수 호출, 메소드 호출, 피연산자와 연산자의 조합은 모두 표현식이며 하나의 값으로 평가(Evaluation)된다. 
 * 각각의 명령을 문(statement)이라 하며 문이 실행되면 무슨 일인가가 일어나게 된다.
 * 
 * 문은 리터럴, 연산자(Operator), 표현식(Expression), 키워드(Keyword) 등으로 구성되며 세미콜론( ; )으로 끝나야 한다.
 * 자연어에서 문(Statement)이 마침표로 끝나는 하나의 완전한 문장(Sentence)이라고 한다면 표현식은 문을 구성하는 요소이다. 표현식은 그자체로 하나의 문이 될 수도 있다.
**/

// 선언문(Declaration statement)
var x = 5 * 10; // 표현식 x = 5 * 10를 포함하는 문이다.

// 할당문(Assignment statement)
x = 100; // 이 자체가 표현식이지만 완전한 문이기도 하다.


/**
 * 함수란 어떤 작업을 수행하기 위해 필요한 문(statement)들의 집합을 정의한 코드 블록이다. 
**/

// 함수의 정의(함수 선언문)
function square(number) {
    return number * number;
  }
  
// 함수의 호출
square(2); // 4


/**
 * 자바스크립트는 객체(object) 기반의 스크립트 언어이며 자바스크립트를 이루고 있는 거의 “모든 것”이 객체이다. 
 * 원시 타입(Primitives)을 제외한 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체이다.
 * 객체는 데이터를 의미하는 프로퍼티(property)와 데이터를 참조하고 조작할 수 있는 동작(behavior)을 의미하는 메소드(method)로 구성된 집합이다.
**/
var person = {
    name: 'Lee',
    age: 15,
    sayHello: function () {
      console.log('Hi! My name is ' + this.name);
    }
  };
  
  console.log(typeof person); // object
  console.log(person); // { name: 'Lee', age: 15, sayHello: [Function: sayHello] }
  
  person.sayHello(); // Hi! My name is Lee

