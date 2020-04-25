// 関数

function showMessage() {
  alert("Hello everyone!");
}

// 外部変数

// letの有無で結果が変わる
// letなし
let userName = "John";

function showMessage() {
  userName = "Bob";

  alert("Hello, " + userName);
}

alert(userName); // Johnが返る
showMessage();
alert(userName); // Bobが返る

// letあり
let userName = "John";

function showMessage() {
  let userName = "Bob"; // このuserNameはローカル変数

  alert("Hello, " + userName);
}

alert(userName); // Johnが返る
showMessage();
alert(userName); // Johnが返る

// 引数
function showMessage(from, text) {
  alert(from + ": " + "test");
}

showMessage("Ann", "Hello!");

function showMessage(from, text) {
  from = "*" + from + "*";
  alert(from + ": " + "test");
}

let from = "Ann";
showMessage(from, "Hello!");

alert(from); // Annが返る(＊Ann*)は返らない

// デフォルト値
// パラメーターを与えない場合、その値はundefinedになる
showMessage("Ann"); // Ann: undefined が返る

// デフォルト値の設定
function showMessage(from, text = "no text given") {
  alert(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given が返る

//　値の返却
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert(result); // 3が返る

// 空のreturn、または返却がないものはundefinedを返す
function doNothing() {
  // empty
}

alert(doNothing() === undefined); // trueが返る

function doNothing() {
  return;
}

alert(doNothing() === undefined); // trueが返る
