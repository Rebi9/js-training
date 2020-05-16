// 数値

//　桁の大きい数値

alert(7.3e9); // 73億 が返る
alert(1e-3); // 0.001 が返る

// x進数

// 16進数
alert(0xff); // 255 が返る
alert(0xff); // 大文字小文字は関係ない

// 2進数
alert(0b11111111); // 255 が返る

// 8進数
alert(0o377); // 255 が返る

// toString(base)
let num = 255;
alert(num.toString(16)); // ff が返る(16進数)
alert(num.toString(2)); // 11111111 が返る(2進数)

// なお、デフォルト値は10である

// 丸め

// Math.floor 切り捨て
// Math.ceil 切り上げ
// Math.round 四捨五入
// Math.trunc 丸めを使わずに小数点を削除 3.6 → 3
