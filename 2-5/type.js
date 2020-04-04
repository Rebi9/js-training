// 動的型付けなので、このような記述が可能。
let message = "hello";
message = 123;

// 数値
let n = 123;
n = 12.34;

// 計算上のエラーはNaNで表される。
alert("string" / 2);

// NaNにどのような操作をしてもNaNのままである。
alert("string" / 2 + 5);

// 文字列(JSではchar型はない)

// "と'のどちらでも良い。
let str = "hello";
let str2 = "single quotes are ok too";

// `は拡張機能の引用符。例えば${}で変数をラップすると変数を埋め込み文字列の中で表現することができる。
let name = "John";
alert(`Hello, ${name}`);

// boolean
let isValid = true;

// null
// JSではnullは「存在しないオブジェクトの参照」や「nullへのポインタ」ではない。
// 無し、空、不明な値といった意味を持つ特別な値
let age = null;

// undefined
// 変数は宣言されているが、代入されていない場合、undefinedとして扱われる。
let x;
alert(x); // undefinedと表示される

// これまでの値はプリミティブと呼ばれる。
// object型とsymbol型が別に存在する。

// typeofで型のチェックが可能。

typeof 0;
typeof true;
typeof null;
typeof Math;
typeof alert;
