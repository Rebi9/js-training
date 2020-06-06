//　配列

// 空の配列の作成
let arr = new Array();
let arr = [];

let fruits = ["Apple", "Orange", "Plum"];
alert(fruits[0]); // Appleが出力される

// 要素の置き換え
fruits[2] = "Pear";

// 要素の追加
fruits[3] = "Lemon";

// 要素の総数
alert(fruits.length);

// 配列はどんな型の要素も格納することができる
let arr = [
  "Apple",
  { name: "John" },
  true,
  function () {
    alert("Hello");
  },
];
alert(arr[1].name); // Johnが出力される
arr[3](); // helloが出力される

// 配列の末尾をカンマで終えることが可能
// 要素の追加、削除が容易になる

// JSの配列はスタックとしてもキューとしても動作する
// 配列の末尾で動作するメソッド
let fruits = ["Apple", "Orange", "Pear"];
alert(fruits.pop()); // Pearを削除し、出力する
alert(fruits); // Apple, Orangeが出力される

let fruits = ["Apple", "Orange"];
fruits.push("Pear");
alert(fruits); // Apple, Orange, Pearが出力される

// 配列の先頭で動作するメソッド
let fruits = ["Apple", "Orange", "Pear"];
alert(fruits.shift()); // Appleを削除し、出力する
alert(fruits); // Orange, Pearが出力される

let fruits = ["Orange", "Pear"];
fruits.unshift("Apple");
alert(fruits); // Apple, Orange, Pearが出力される

// push,unshiftは複数要素を操作可能
let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");
alert(fruits); // Pineapple,Lemon,Apple,Orange,Peachが出力される

// ループ
let fruits = ["Apple", "Orange", "Pear"];

for (let fruit of fruits) {
  alert(fruit);
}

// length
// 配列を変更した時に、lengthプロパティは自動で更新される
// lengthの値は実際の値の数ではなく、最大の数値インデックスに1を加えたものである
let fruits = [];
fruits[123] = "Apple";
alert(fruits.length); // 124が出力される

// lengthは書き込み可能
let arr = [1, 2, 3, 4, 5];

arr.length = 2;
alert(arr); // 1,2が出力される

arr.length = 5;
alert(arr[3]); // undefinedが出力される

// もし配列をクリアしたければ、arr.length = 0とすれば良い

// 多次元配列
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
alert(matrix[1][1]); // 5が出力される

// toString
let arr = [1, 2, 3];
alert(arr); // 1,2,3が出力される
alert([] + 1); // 1が出力される
alert([1] + 1); // 11が出力される
alert([1, 2] + 1); // 1,21が出力される
