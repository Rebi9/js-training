// 関数式
let sayHi = function () {
  alert("Hello");
};

function sayHi() {
  alert("Hello");
}

alert(sayHi); // 関数は実行されず、関数のコードが表示される。

function sayHi() {
  alert("Hello");
}

let func = sayHi;

func(); // Helloが返る
sayHi(); // Helloが返る

// コールバック関数
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceld the execution.");
}

ask("Do you agree?", showOk, showCancel);

// 無名関数を用いてこのようにもかける
ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled the execution");
  }
);

// 関数宣言はスクリプト/コードブロック全体で使用できる
// そのため↓は動作する
sayHi("John");

function sayHi() {
  alert("Hello, ${name}");
}

// 関数式は実行がそれに到達した際に作られ、それ以降で利用可能になる
// そのため↓は動作しない
sayHi("John");

let sayHi = function (name) {
  alert("Hello, ${name}");
};

// スコープ
let age = 16;

if (age < 18) {
  welcome(); // 動作する

  function welcome() {
    alert("Hello!");
  }

  welcome(); // 動作する
} else {
  function welcome() {
    alert("Greetings!");
  }
}

welcome(); // if文の内部で定義されているので動作しない
