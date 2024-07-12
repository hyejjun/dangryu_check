# 타입스크립트 기본 타입

- Boolean
- Number
- String
- Object
- Array
- Tuple (이건뭐지?)
- Enum (뭐지?)
- any
- void
- null
- undefined
- never (뭐지?)

---

## 제네릭

제네릭(Generic)은 타입스크립트에서 코드의 재사용성을 높이고, 다양한 타입에서 동작할 수 있게 해주는 기능입니다. 제네릭을 사용하면 함수, 클래스, 인터페이스, 타입 등을 작성할 때 타입을 구체적으로 지정하지 않고, 대신에 사용할 때 타입을 지정할 수 있습니다. 이렇게 하면 코드가 더 유연해지고, 타입 안전성을 유지할 수 있습니다.

-> 요약하자면 "암튼 타입임!!"

```ts
function identity<T>(arg: T): T {
    return arg;
}

// 사용
let output1 = identity<string>("myString");
let output2 = identity<number>(100);
```

이런 형태로 사용한다. identity 함수에 인자값이 들어온다는것은 아는데 그게 어떤 타입이 될지 선언시에 구체적으로 지정하지 않고 사용할 때 타입을 지정한다는 것.

---

### Tuple

튜플은 배열의 길이기 고정되고 각 요소의 타입이 지정되어 있는 배열 형식이다. (순서도)

(사용예시)

https://velog.io/@from_numpy/TypeScript-Tuple%ED%8A%9C%ED%94%8C

순서까지 다 정해서 불편해서 어떻게 쓰나 했더니 배열 순서가 확실히 정해져 있을 때가 있다는 것.

---

# Enum

열거형 타입을 정의하는데 사용한다.

열거형은 관련된 상수들의 집합에 이름을 부여할 수 있게 해준다.

코드의 가독성을 높이고 상수를 그룹화하여 사용하기 쉽게 한다.

1. 숫자 열거형

- 열거형의 첫 번째 값이 명시적으로 지정되지 않으면 0부터 시작하고 이후 값들은 자동으로 1씩 증가한다.

- 중간에 특정 값을 지정하면, 그 이후 값들은 지정된 값에서 1씩 증가한다.

```ts
enum Direction {
  Up = 1,
  Down,
  Left = 10,
  Right
}
```

활용하는 방법!

```ts
enum StatusCode {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  Forbidden,
  NotFound
}

console.log(StatusCode.OK);         // 200
console.log(StatusCode.BadRequest); // 400
console.log(StatusCode.Unauthorized); // 401
console.log(StatusCode.Forbidden);    // 402
console.log(StatusCode.NotFound);     // 403
```

