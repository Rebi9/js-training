// 型変換

// 文字列変換
let value = true;
alert(typeof value); // boolean

value = String(value);
alert(typeof value); // string

// 数値変換
alert("6" / "2"); // 3が出力される。

let string = "123";
let num = Number(str);

alert(typeof num); // number

let age = Number("invalid argument");
alert(age); // NaN, 変換に失敗する。

alert(Number(undefined)); // NaNが出力される。
alert(Number(null)); // 0が出力される。
alert(Number(true)); // 1が出力される。
alert(Number("  123  ")); // 123が出力される。

// Boolean変換

alert(Boolean(1)); // trueが出力される。
alert(Boolean(0)); // falseが出力される。

alert(Boolean("hello")); // trueが出力される。(空文字""以外はtrue)
alert(Boolean("")); // falseが出力される。
