/**
 * 변수는 값의 위치(주소)를 기억하는 저장소이다. 값의 위치란 값이 위치하고 있는 메모리 상의 주소(address)를 의미한다. 
 * 즉, 변수란 값이 위치하고 있는 메모리 주소(Memory address)에 접근하기 위해 사람이 이해할 수 있는 언어로 명명한 식별자(identifier)이다.
 * 
 * 자바스크립트는 동적 타입(Dynamic/Weak Type) 언어이다. 
 * 변수의 타입 지정(Type annotation)없이 값이 할당되는 과정에서 자동으로 변수의 타입이 결정(타입 추론, Type Inference)된다.
 * 
 * 변수는 var, let, const 키워드를 사용하여 선언하고 할당 연산자를 사용해 값을 할당한다. 
 * 값을 할당하지 않은 변수 즉 선언만 되어 있는 변수는 undefined로 초기값을 갖는다. 
 * 
**/

var score;  // 변수의 선언
score = 80; // 값의 할당
score = 90; // 값의 재할당
score;      // 변수의 참조

// 변수의 선언과 할당
var average = (50 + 100) / 2;

// 선언하지 않은 변수에 접근하면 ReferenceError가 발생한다.
var x;
console.log(x); // undefined
console.log(y); // ReferenceError


// 변수의 호이스팅
// 호이스팅이란 var 선언문이나 function 선언문 등 모든 선언문이 해당 Scope의 선두로 옮겨진 것처럼 동작하는 특성을 말한다. 
// 즉, 자바스크립트는 모든 선언문(var, let, const, function, function*, class)이 선언되기 이전에 참조 가능하다.
console.log(foo); // ① undefined
var foo = 123;
console.log(foo); // ② 123
{
  var foo = 456;
}
console.log(foo); // ③ 456

/**
 * ①이 실행되기 이전에 var foo = 123;이 호이스팅되어 ①구문 앞에 var foo;가 옮겨진다.
 * (실제로 변수 선언이 코드 레벨로 옮겨진 것은 아니고 변수 객체(Variable object)에 등록되고 undefined로 초기화된 것이다.) 
 * 하지만 변수 선언 단계와 초기화 단계가 할당 단계와 분리되어 진행되기 때문에 이 단계에서는 foo에는 undefined가 할당되어 있다. 
 * 변수 foo에 값이 할당되는 것은 2행에서 실시된다.
 * ②에서는 변수에 값이 할당되었기 때문에 123이 출력된다.
 * 자바스크립트의 변수는 다른 C-family와는 달리 블록 레벨 스코프(block-level scope)를 가지지 않고 함수 레벨 스코프(function-level scope)를 갖는다. 
 * 단, ECMAScript 6에서 도입된 let, const 키워드를 사용하면 블록 레벨 스코프를 사용할 수 있다. 
 * 
 * - 함수 레벨 스코프(Function-level scope) 
 * 함수 내에서 선언된 변수는 함수 내에서만 유효하며 함수 외부에서는 참조할 수 없다. 
 * 즉, 함수 내부에서 선언한 변수는 지역 변수이며 함수 외부에서 선언한 변수는 모두 전역 변수이다.
 * 
 * - 블록 레벨 스코프(Block-level scope)
 * 코드 블록 내에서 선언된 변수는 코드 블록 내에서만 유효하며 코드 블록 외부에서는 참조할 수 없다.
 * 
 * 따라서 코드 블록 내의 변수 foo는 전역변수이므로 전역에 선언된 변수 foo에 할당된 값을 재할당하기 때문에 ③의 결과는 456이 된다.
**/


/**
 * var 키워드로 선언된 변수의 문제점
 * 
 * ES5에서 변수를 선언할 수 있는 유일한 방법은 var 키워드를 사용하는 것이다. 
 * var 키워드로 선언된 변수는 아래와 같은 특징을 갖는다. 
 * 이는 다른 C-family 언어와는 차별되는 특징(설계상 오류)으로 주의를 기울이지 않으면 심각한 문제를 발생시킨다.
 * 
 * 1. 함수 레벨 스코프(Function-level scope)
        - 전역 변수의 남발
        - for loop 초기화식에서 사용한 변수를 for loop 외부 또는 전역에서 참조할 수 있다.
 * 2. var 키워드 생략 허용
        - 의도하지 않은 변수의 전역화
 * 3. 중복 선언 허용
        - 의도하지 않은 변수값 변경
 * 3. 변수 호이스팅
        - 변수를 선언하기 전에 참조가 가능하다.
 * 
 * 대부분의 문제는 전역 변수로 인해 발생한다. 
 * 전역 변수는 간단한 애플리케이션의 경우, 사용이 편리한 면이 있지만 불가피한 상황을 제외하고 사용을 억제해야 한다. 
 * 전역 변수는 유효 범위(scope)가 넓어서 어디에서 어떻게 사용될 지 파악하기 힘들다. 
 * 이는 의도치 않은 변수의 변경이 발생할 수 있는 가능성이 증가한다. 
 * 또한 여러 함수와 상호 의존하는 등 부수 효과(side effect)가 있을 수 있어서 복잡성이 증가한다.
 * 
 * 변수의 유효 범위(scope)는 좁을수록 좋다.
 * ES6는 이러한 var의 단점을 보완하기 위해 let과 const 키워드를 도입하였다.
 * 
**/