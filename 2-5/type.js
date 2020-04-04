// 動的型付けなので、このような記述が可能。
let message = "hello";
message = 123;

// 数値型
let n = 123;
n = 12.34;

// 計算上のエラーはNaNで表される。
alert("string" / 2);

// NaNにどのような操作をしてもNaNのママである。
alert("string" / 2 + 5);
