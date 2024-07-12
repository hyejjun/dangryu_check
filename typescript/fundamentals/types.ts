// Stirng
let str: string = 'hi';
// : 를 이용해서 타입 표기를 한다.

// Number
let num: number = 10;


// Boolean
let isLoggedIn: boolean = false;


// Object
// Array
let arr: number[] = [1, 2, 3, 4, 5];

// 제네릭을 사용해서 정의하는 경우
/*
제네릭이 뭐지? 
: 재사용, 다양한 타입에서 동작 가능하게 타입을 미리 지정해서 선언하지 않고 사용 시에 타입을 정하는 것 
- 함수, 클래스, 인터페이스, 타입 등을 작성할 때 사용 가능함
*/
let arr2: Array<number> = [1, 2, 3];


// Tuple
// 튜플은 배열의 길이기 고정되고 각 요소의 타입이 지정되어 있는 배열 형식이다. (순서도)
let tupleArr: [string, number] = ['hi', 10];

// Enum
// 이넘은 특정 값 (상수) 들의 집합이다.

// 1. 숫자 열거형
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

let dir: Direction = Direction.Down; // 2

// 나머지 값들은 자동으로 증가한다.


