// alert
// メッセージを表示し、ユーザーがOKを押すまで、スクリプトの実行を停止する。
// この時、モーダルが表示される。
// モーダルはそのウィンドウを処理するまで、他の操作ができない。
alert("Hello");

// prompt
// 構文
// prompt(title[, default]);
// テキストメッセージ、訪問者のための入力フィード、OK/CANCELボタンを持つウィンドウを表示する。
// テキストが入力された状態でOKを押す以外の行為をするとnullが返却される。
let age = prompt("How old are you?", 20);
alert(`You are ${age} years old!`);

// confirm
// 構文
// confirm(question);
// questionと2つのボタン(OKとキャンセル)を持つモーダルを表示する。
// OKが押下された場合true, それ以外はfalse
let isBoss = confirm("Are you the boss?");
alert(isBoss);

// 上記3つの昨日に置いて、下記の2つの制限がある。
// 1. モーダルの位置はブラウザによって決定される。（基本的に中央)
// 2. ウィンドウの見た目もブラウザに依存し、これを修正することはできない。
