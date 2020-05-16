// シンボル

// シンボルはユニークな識別子を表現する
let id = Symbol();

// シンボルに説明(シンボル名)を与えることもできる
let id = Symbol("id");

// シンボルはユニークであることが保証される
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // falseが返る

// シンボルは文字列へ自動変換されない
// ↓はエラーになる
// alert(id);
// 表示したい場合はtoStringを用いる
alert(id.toString());

// シンボルによって他のコードがアクセスしたり上書きしたりできない隠れたプロパティをオブジェクトに作ることができる

let user = { name: "John" };
let id = SYmbol("id");
user[id] = "ID Value";
alert(user[id]);

// シンボルでなく文字列を用いると衝突が発生する可能性があるので、避ける
// 例：独自の目的のために自身の"id"プロパティをuserの中に持ちたい場合
let user = { name: "Bob" };
user.id = "ID Value";
// 中略
user.id = "Their id Value"; // 上書きされてしまう

// リテラルのシンボル
// オブジェクトリテラルの中でシンボルを使いたい場合は、角括弧で囲む必要がある
let id = Symbol("id");
let user = {
  name: "John",
  [id]: 123,
};

// シンボルはfor in ループに参加しない
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123,
};

for (let key in user) alert(key); // name, age (idは表示されない)

// Symbolに直アクセスは動作する
alert("Direct: " + user[id]);

// 一方Object.assignは文字列とシンボルプロパティ両方をコピーする
let id = Symbol("id");
let user = {
  [id]: 123,
};

let clone = Object.assign({}, user);
alert(clone[id]); // 123が返る

// グローバルシンボル
// 同じシンボルを同じエンティティにしたい時などに用いる

let id = Symbol.for("id"); // シンボルが存在しない場合、作られる

let isAgain = Symbol.for("id");

alert(id === idAgain); // true

// グローバルシンボルでは名前によってシンボルを返すだけでなく、グローバルシンボルを元に名前を返す

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

alert(Symbol.keyFor(sym)); // nameが返る
alert(Symbol.keyFor(sym2)); // idが返る
