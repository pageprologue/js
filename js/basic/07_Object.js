/**
 * 자바스크립트는 객체(object) 기반의 스크립트 언어이며 자바스크립트를 이루고 있는 거의 “모든 것”이 객체이다. 
 * 원시 타입(Primitives)을 제외한 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체이다.
 * 
 * - 자바스크립트의 객체는 키(key)과 값(value)으로 구성된 프로퍼티(Property)들의 집합이다.
 * - 프로퍼티의 값으로 자바스크립트에서 사용할 수 있는 모든 값을 사용할 수 있다. 
 * - 자바스크립트의 함수는 일급 객체이므로 값으로 취급할 수 있다.
 * - 프로퍼티 값으로 함수를 사용할 수도 있으며 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부른다.
 * 
 * - 객체는 데이터를 의미하는 프로퍼티(property)와 데이터를 참조하고 조작할 수 있는 동작(behavior)을 의미하는 메소드(method)로 구성된 집합이다.
 * - 객체는 데이터(프로퍼티)와 그 데이터에 관련되는 동작(메소드)을 모두 포함할 수 있기 때문에 데이터와 동작을 하나의 단위로 구조화할 수 있어 유용하다.
 * - 자바스크립트의 객체는 객체지향의 상속을 구현하기 위해 “프로토타입(prototype)”이라고 불리는 객체의 프로퍼티와 메소드를 상속받을 수 있다.
 */


/**
 * 객체 생성 방법
 * 자바스크립트는 프로토타입 기반 객체 지향 언어로서 클래스라는 개념이 없고 별도의 객체 생성 방법이 존재한다.
 * 
 * ECMAScript 6에서 새롭게 클래스가 도입되었다. 
 * 프로토타입 기반 프로그래밍은 클래스가 존재하지 않는 객체지향 프로그래밍 스타일이다. 
 * 클래스없이 프로토타입 체인과 클로저 등으로 객체 지향 언어의 상속, 캡슐화(정보 은닉) 등의 개념을 구현한다. 
 * 하지만 클래스 기반 언어에 익숙한 프로그래머들은 혼란을 일으킬 수 있으며 자바스크립트를 어렵게 느끼게하는 하나의 장벽처럼 인식되었다. 
 * ES6의 클래스는 기존 프로토타입 기반 객체지향 프로그래밍보다 클래스 기반 언어에 익숙한 프로그래머가 보다 빠르게 학습할 수 있는 단순하고 깨끗한 새로운 문법을 제시하고 있다.
 * ES6의 클래스가 새로운 객체지향 모델을 제공하는 것이 아니며 클래스도 사실 함수이고 기존 프로토타입 기반 패턴의 문법적 설탕(Syntactic sugar)이다.
 */

/**
 * 객체 생성 방법 - (1) 객체 리터럴
 * 가장 일반적인 자바스크립트의 객체 생성 방식이다. 
 * 클래스 기반 객체 지향 언어와 비교할 때 매우 간편하게 객체를 생성할 수 있다.
 * 중괄호({})를 사용하여 객체를 생성하는데 {} 내에 1개 이상의 프로퍼티를 기술하면 해당 프로퍼티가 추가된 객체를 생성할 수 있다. 
 * {} 내에 아무것도 기술하지 않으면 빈 객체가 생성된다.
 */
var emptyObject = {};
console.log(typeof emptyObject); // object

var person = {
    name: 'Lee',
    gender: 'male',
    sayHello: function() {
        console.log('Hi! My name is ' + this.name);
    }
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}
person.sayHello(); // Hi! My name is Lee

/**
 * 객체 생성 방법 - (2) Object 생성자 함수
 * new 연산자와 Object 생성자 함수를 호출하여 빈 객체를 생성할 수 있다.
 * 빈 객체 생성 이후 프로퍼티 또는 메소드를 추가하여 객체를 완성하는 방법이다.
 * 생성자(constructor) 함수란 new 키워드와 함께 객체를 생성하고 초기화하는 함수를 말한다. 
 * 생성자 함수를 통해 생성된 객체를 인스턴스(instance)라 한다. 
 * 
 * 반드시 Object 생성자 함수를 사용해 빈 객체를 생성해야 하는 것은 아니다. 
 * 객체를 생성하는 방법은 객체 리터럴을 사용하는 것이 더 간편하다. 
 * Object 생성자 함수 방식은 특별한 이유가 없다면 그다지 유용해 보이지 않는다.
 * 사실 객체 리터럴 방식으로 생성된 객체는 결국 빌트인(Built-in) 함수인 Object 생성자 함수로 객체를 생성하는 것을 단순화시킨 축약 표현(short-hand)이다. 
 * 다시 말해, 자바스크립트 엔진은 객체 리터럴로 객체를 생성하는 코드를 만나면 내부적으로 Object 생성자 함수를 사용하여 객체를 생성한다. 
 * 따라서 개발자가 일부러 Object 생성자 함수를 사용해 객체를 생성해야 할 일은 거의 없다.
 */
// 빈 객체의 생성
 var person = new Object();
// 프로퍼티 추가
person.name = 'Lee';
person.gender = 'male';
person.sayHello = function() {
    console.log('Hi! My name is ' + this.name);
};
console.log(typeof person); // object
console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}
person.sayHello(); // Hi! My name is Lee

/**
 * 객체 생성 방법 - (3) 생성자 함수
 * 객체 리터럴 방식과 Object 생성자 함수 방식으로 객체를 생성하는 것은 프로퍼티 값만 다른 여러 개의 객체를 생성할 때 불편하다. 
 * 동일한 프로퍼티를 갖는 객체임에도 불구하고 매번 같은 프로퍼티를 기술해야 한다.
 * 생성자 함수를 사용하면 마치 객체를 생성하기 위한 템플릿(클래스)처럼 사용하여 프로퍼티가 동일한 객체 여러 개를 간편하게 생성할 수 있다.
 * 
 * - 생성자 함수 이름은 일반적으로 대문자로 시작한다. 이것은 생성자 함수임을 인식하도록 도움을 준다.
 * - 프로퍼티 또는 메소드명 앞에 기술한 this는 생성자 함수가 생성할 인스턴스(instance)를 가리킨다.
 * - this에 연결(바인딩)되어 있는 프로퍼티와 메소드는 public(외부에서 참조 가능)하다.
 * - 생성자 함수 내에서 선언된 일반 변수는 private(외부에서 참조 불가능)하다. 즉, 생성자 함수 내부에서는 자유롭게 접근이 가능하나 외부에서 접근할 수 없다.
 */
var person1 = {
    name: 'Lee',
    gender: 'male',
    sayHello: function() {
        console.log('Hi! My name is ' + this.name);
    }
}
var person2 = {
    name: 'Kim',
    gender: 'female',
    sayHello: function () {
        console.log('Hi! My name is ' + this.name);
    }
};

// 생성자 함수
function Person(name, gender) {
    var married = true;         // private
    this.name = name;           // public
    this.gender = gender;       // public
    this.sayHello = function(){ // public
        console.log('Hi! My name is ' + this.name);
    };
}

// 인스턴스의 생성
var person1 = new Person('Lee', 'male');
var person2 = new Person('Kim', 'female');

console.log(typeof person1); // object
console.log(typeof person2); // object
console.log(person1); // Person { name: 'Lee', gender: 'male', sayHello: [Function] }

console.log(person1.gender);  // 'male'
console.log(person1.married); // undefined

