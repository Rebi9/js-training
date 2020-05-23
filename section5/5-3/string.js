// 文字列

// 文字へのアクセス
let str = `Hello`;

alert(str[0]); // H が返る
alert(str.charAt(0)); // H が返る

alert(str[str.length - 1]); // o が返る

alert(str[1000]); // undefined が返る
alert(str.charAt(1000)); // ''(空文字) が返る

for (let char of "Hello") {
  alert(char); // 1文字ずつ出力される
}

// 文字列は不変

let str = "Hi";

// ↓はエラー
// str[0] = "h";

str = "h" + str[1];
alert(str); // hi が返る

// ケースを変更する
alert("Hi".toUpperCase); // HI が返る
alert("Hi".toLowerCase); // hi が返る

// 部分文字列の検索
// str.indexOf
let str = "Widget with id";
alert(str.indexOf("Widget")); // 0 が返る
alert(str.indexOf("id")); // 1 が返る
alert(str.indexOf("widget")); // -1 が返る(見つからない場合。大文字小文字を区別しない)

alert(str.indexOf("id", 2)); // 12 が返る(2番目から検索を開始)

// includes
alert("Hello".includes("Bye")); // false が返る

// start,endWith
alert("Widget".startsWith("Wid")); // trueが返る
alert("Widget".endsWith("get")); // trueが返る

// 部分文字列を取得する
// str.slice
let str = "stringify";
alert(str.slice[(0, 5)]); // strin が返る(5番目のインデックスは含まない)
alert(str.slice[(0, 1)]); // s が返る

alert(str.slice[2]); //ringify が返る
alert(str.slice(-4, -1)); // git が返る

// str.substring
alert(str.substring(2, 6)); // ring が返る
alert(str.substring(6, 2)); // ring が返る
// sliceのように負の数はサポートされていない

// str.substr
alert(str.substr(2, 4)); // ring が返る(2の位置から4文字取得する);
// substrの最初の引数には負の数が使える
alert(str.substr(-4, 2)); // gi が返る
