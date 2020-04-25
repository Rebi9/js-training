// 比較

// 文字列比較
// 辞書順とおおよそ同じ。
alert("Z" > "A"); // true
alert("Glow" > "Glee"); // true
alert("Bee" > "Be"); // true
alert("2" > "12"); // true

// 大文字と小文字は同じではない。
// 小文字の方がUnicodeでより大きな値を持っている。
alert("a" > "A"); // true

// 異なる型の比較
alert("2" > 1); // true "2"は数値になる。
alert("01" == 1); // true "01"は数値1になる。

// 真偽値の場合、trueは1、falseは0になる。
alert(true == 1); // true
alert(false == 0); // false

// 厳密な等価
alert(0 == false); // true
alert("" == false); // true

// 0とfalseを分けたい場合は===を用いる。===は型変換なしで等価をチェックする。
alert(0 === false); // false

// nullとundefinedの比較
alert(null === undefined); // false
alert(null == undefined); // false

// <,>,<=,>=の場合
// null/undefinedは数値に変換される。
// nullは0, undefinedはNaN

// nullと0の比較
alert(null > 0); // false 0に変換されるので 0 > 0となりfalse
alert(null == 0); // false nullの等価チェック==は変換されない
alert(null >= 0); // true 0に変換されるので 0 >= 0となりtrue

// undefinedと0の比較
alert(undefined > 0); // false NaNに変換される
alert(undefined < 0); // false NaNに変換される
alert(undefined == 0); // false undefinedはnullとのみ等価

// ===以外の比較には注意する。
// null,undefinedかもしれない変数に対して、<,>,<=,>=を使わない。
