// 論理演算子

// 1はtrue, 0はfalseとして扱われる

// ||(OR)
// JavaScriptの特別な機能
// result = value1 || value2 || value3;

// ↑の例で||演算子は次のように働く
// ・左から右にオペランドを評価する
// ・それぞれのオペランドで、それをBooleanに変換する。もし結果がtrueであれば、停止しオペランドの本来の値を返す
// ・もしすべてのオペランドが評価された場合(すべてfalseのとき)、最後のオペランドを返す

alert(1 || 0); // 1が返る
alert(true || "no matter what"); // trueが返る
alert(null || 1); // 1が返る
alert(null || 0 || 1); // 1が返る
alert(undefined || null || 0); // 0が返る(すべてfalseなので、最後の値である0が返る)

// ↑の具体的な使用例
// 1.変数または式のリストから最初の真値を取得する
let currentUser = null;
let defaultUser = "John";

let name = currentUser || defaultUser || "unnamed";
alert(name); // Johnが返る

// 2.短絡評価(最小評価)
let x;
true || (x = 1);
alert(x); // undefinedが返る(x = 1は実行されない)

false || (x = 1);
alert(x); // 1

// if文をより短くする方法だが、基本的にifを推奨

// &&(AND)
// result = value1 && value2 && value3

// ↑の例で&&は次のように働く
// ・左から右にオペランドを評価する
// ・それぞれのオペランドで、それをBooleanに変換する。もし結果がfalseのときストップし、そのオペランドの本来の値を返す
// ・もし全てのオペランドが評価された場合(例えばすべて真のとき)、最後のオペランドを返す

// まとめるとANDは最初のfalseとなる値、またはそれがない場合最後の値を返す

alert(1 && 0); // 0が返る
alert(1 && 5); // 5が返る

alert(null && 5); // nullが返る
alert(0 && "whatever"); // ０が返る

alert(1 && 2 && null && 3); // nullが返る
alert(1 && 2 && 3); // 3が返る

// &&は||の前に実行される
alert(5 || (1 && 0)); // 5が返る

// !(NOT)
// 2つの否定(!!)は値を真偽値に変換するために使用されることがある
alert(!!"non-empty string"); // true
alert(!!null); // false
// ↑最初の!で値を真偽値に変換し、その逆が返る。2つめの!でその逆を得る

// Booleanを使えば同じことができるが少し冗長(感想：初心者にはこちらの方がわかりやすいよね)
alert(Boolean("non-empty string"));
alert(Boolean(null));
