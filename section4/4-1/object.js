// オブジェクト

// 空のオブジェクトの作り方
let user = new Object();

// または
let user = {};

// プロパティ
let user = {
  name: "John",
  age: 30,
};

// プロパティの取得
alert(user.name); // Johnが返る

// プロパティの追加
user.isAdmin = true;

// プロパティの削除
delete user.age;

// 複数単語からなるプロパティ
let user = {
  name: "John",
  age: 30,
  "likes birds": true,
};
// ↑すべての行が同じ表記になるため、末尾にカンマで終わることがある

// 角括弧

// ↓はエラー
// user.likes birds = true;

// 複数語のプロパティの場合[]を用いる
let user = {};
user["likes birds"] = true; // set
alert(user["likes birds"]); // get
delete user["likes birds"]; // delete

// 算出プロパティ
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5,
};

alert(bag.apple); // fruit="apple"の場合5が返る

// ↑のまとめ：プロパティ名を知っていて単純な場合ドットを使い、より複雑なことが必要であれば角括弧を使う

// プロパティの短縮構文
function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let user = makeUser("John", 30);
alert(user.name); // Johnが返る

// ↑は↓のようにかける
function makeUser(name, age) {
  return {
    name,
    age,
  };
}

// 存在チェック

let user = {};

alert(user.noSuchProperty === undefined); // trueが返る

let user = { name: "Bob", age: 30 };
alert("age" in user); // trueが返る
alert("hoge" in user); // falseが返る

// for inループ

let user = {
  name: "Bob",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  alert(key);
  alert(user[key]);
}
// ↑keyとvalueが交互に表示される

// オブジェクトの順位づけ

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  "1": "USA",
};

for (let code in codes) {
  alert(code);
}
// ↑精通なので1から順に表示される
// キーが整数でない場合、作られた順でリストされる

// 参照のコピー
let user = { name: "Bob" };
let admin = user;

admin.name = "Pete";

alert(user.name); // Peteが返る

// オブジェクトの比較
let a = {};
let b = a;

alert(a == b); // trueが返る
alert(a === b); // trueが返る

let a = {};
let b = {};

alert(a == b); // falseが返る

// constオブジェクト
const user = {
  name: "Bob",
};

user.age = 15; // エラーではない

// これはエラー
/*
user = {
    name: "Pete"
}
*/

// クローンとまーじ
// オブジェクトのクローンやマージにはObject.assignを用いる
// オブジェクトの中にオブジェクトが存在するような場合はライブラリlodashの_.cloneDeep(obj)を用いる
