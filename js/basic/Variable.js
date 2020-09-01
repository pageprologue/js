/**
 * 변수는 값의 위치(주소)를 기억하는 저장소이다. 값의 위치란 값이 위치하고 있는 메모리 상의 주소(address)를 의미한다. 
 * 즉, 변수란 값이 위치하고 있는 메모리 주소(Memory address)에 접근하기 위해 사람이 이해할 수 있는 언어로 명명한 식별자(identifier)이다.
**/


/**
 * 자바스크립트는 동적 타입(Dynamic/Weak Type) 언어이다. 
 * 변수의 타입 지정(Type annotation)없이 값이 할당되는 과정에서 자동으로 변수의 타입이 결정(타입 추론, Type Inference)된다.
**/
var foo = 'string';
console.log(typeof foo); // string
foo = 1;
console.log(typeof foo); // number