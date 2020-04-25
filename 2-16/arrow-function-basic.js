// アロー関数

let sum = (a, b) => a + b;

// ↑は↓と同じ
/*
let sum = function (a, b) {
    return a + b;
};
*/

alert(sum(1, 2)); // 3が返る

// 引数が1つの場合、カッコは省略可能

let double = (n) => n * 2;

alert(double(3)); // 6が返る

// 引数がない場合、カッコは必須

let sayHi = () => alert("Hello!");

sayHi();

// 複数行のアロー関数

let sum = (a, b) => {
  let result = a + b;
  return result; // 波括弧を使った場合、結果を得るにはreturnを用いる
};
