/**
 * 모듈패턴은 비공개 데이터를 가진 싱글톤 객체를 만들 때 사용하는 객체 생성 패턴이다.
 * 이 방식은 객체를 반환하는 즉시 실행 함수 표현식(IIFE)을 사용한다.
 * IIFE는 함수를 생성하자마자 즉시 호출하여 결과를 내는 함수 표현식으로서 이 함수 바깥에서는 접근할 수 없는 지역 변수를 함수 안에 몇 개든 정의할 수 있다.
 */
var yourObject = (function() {
    // 비공개 데티터 변수

    return {
        // 공개 메소드 및 프로퍼티
    }
}());


/**
 * 모듈 패턴을 변형한 모듈 노출 패턴에서는 모든 변수와 메소드를 IIFE 상단에 정의해두고 반환하는 객체에 정의했던 변수와 메소드를 할당한다.
 */
var person = (function() {
    var age = 25;

    function getAge() {
        return age;
    }

    function growOlder() {
        age++;
    }

    return {
        name: "Chloe",
        getAge: getAge,
        growOlder: growOlder
    }
}());

/**
 * 생성자의 비공개 멤버
 * 모듈 패턴은 비공개 프로퍼디를 가진 개별 객체를 선언하기에는 좋지만 비공개 프로퍼티가 필요한 타입에도 적용할 수 있다.
 * 생성자 함수 내부에 모듈 패턴과 비슷한 패턴을 사용하면 인스턴스마다 비공개 데이터를 만들어 줄 수 있다.
 */
function Person(name) {
    var age = 25;
    
    this.name = name;
    
    this.getAge = function() {
        return age;
    }

    this.growOlder = function() {
        age++;
    }
}

var Person = new Person("Chloe");
console.log(person.name); // "Chloe"
console.log(person.getAge()); // 25

person.age = 100;
console.log(person.getAge()); // 25

person.growOlder();
console.log(person.getAge()); // 26

/**
 * 이 방식은 생성자가 지역 범위를 만들고 this 객체를 반환하는 등 여러 면에서 모듈 패턴과 비슷하다.
 * 객체 인스턴스의 메소드를 바꾸는 것은 프로토타입에서 정의하는 것보다 비효율적이지만, 인스턴스의 비공개 고유 프로퍼티는 이 방법으로만 작성할 수 있다.
 * 프로토타입에 추가한 프로터피처럼 모든 인스턴스가 공유하는 비공개 데이터를 만들고 싶다면 모듈 패턴과 비슷하지만 생성자를 이용한 혼합 방식을 사용하면 된다.
 */
var Person = (function() {

    // everyone shares the same age
    var age = 25;

    function InnerPerson(name) {
        this.name = name;
    }
    InnerPerson.prototype.getAge = function() {
        return age;
    }
    InnerPerson.prototype.growOlder = function() {
        age++;
    }

    return InnerPerson;
}());

var person1 = new Person("Chloe");
var person2 = new Person("Hong");

console.log(person1.name); // "Chloe"
console.log(person1.getAge()); //25

console.log(person2.name); // "Hong"
console.log(person2.getAge()); // 25

person1.growOlder();
console.log(person1.getAge()); //26
console.log(person2.getAge()); // 26