// 反復可能なオブジェクト

// 文字列
for (let char of "test") {
  alert(char); // t, e, s, tが順に返る
}

// 反復可能と配列ライク

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2,
};

// ↓はエラー(反復可能ではないため)
// for (let item of arrayLike) {}

// Array.fromを用いると配列を作成することができる
let arr = Array.from(arrayLike);
alert(arr.pop());

let str = "ho";
let chars = Array.from(str);

alert(chars[0]); // hが返る
alert(chars[1]); // oが返る
alert(chars.length); // 2が返る
