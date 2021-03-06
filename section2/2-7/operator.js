// 演算子

// オペランド：演算子が適用されるもの。
// 単項演算子：単一のオペランドを持つ演算子
// 二項演算子：2つのオペランドを持つ演算子

// 単項演算の例
let x = 1;
x = -x;
alert(x); // -1

// 文字列の連結
alert("my" + "string"); // mystring
alert("1" + 2); // "12"(文字列)

// 文字列に変換されるのは+だけ
alert(2 - "1"); // 1(数値)

// 数値変換
let y = -2;
alert(+y); // -2(+は数字には影響無し)

// 数字以外に+の単項演算子を適用するとNumber()と同じ結果となる。
alert(+true); // 1
alert(+""); // 0

let a = "2";
let b = "3";
alert(+a + +b); // 5が出力される。二項演算子の+よりも単項演算子の+が優先される。

// 代入
// 代入をチェーンすることが可能。
let i, j, k;
i = j = k = 1 + 1;

// 剰余(あまり)
alert(5 % 2); // 1

// べき乗
alert(2 ** 3); // 8
alert(8 ** (1 / 3)); // 2

// インクリメント/デクリメント
let counter = 2;
counter++;
alert(counter); // 3
counter--;
alert(counter); // 2

// ++, --は変数にのみ適用可能。
// 5++ とは使えない。

counter = 2;
alert(++counter); // 3 演算後の値を返す。
conuter = 2;
alert(counter++); // 2 演算前の値を返す。(値は増加している)

// 省略記法
let n = 2;
n += 5;
alert(n); // 7

//　優先順位は普通の代入と同じ
n = 2;
n *= 3 + 5;
alert(n); // 16

// カンマ
// 1+2が評価され、その結果は捨てられ、3+4が評価され、それが返却される。
let a = (1 + 2, 3 + 4);
alert(a); // 7

// ,の優先度はイコール以下なので、aに3が代入されて終了
(a = 1 + 2), 3 + 4;
alert(a); // 3

// カンマの使用例
/*
for (a = 1, b = 3, c = a * b; a < 10; a++) {
    ・・・
}
*/
// カンマはJSのフレームワークで利用されていることがある。
// 通常は可読性を下げるので、利用は慎重に。

alert("" - 1 + 0); // -1 -は""を0に変換する。
alert(" -9 " + 5); // " -9 5"
alert(null + 1); // 1 nullは0に変換される。
alert(" \t \n" - 2); // -2 文字列の先頭/末尾のスペースは数字が文字に変換される際に削除される。よってこの場合、空文字の時と同様0になる。
