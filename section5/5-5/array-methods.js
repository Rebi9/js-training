// 配列のメソッド

// splice

// deleteの場合
let arr = ["I", "go", "home"];

delete arr[1];

alert(arr.length); // 3が返る。配列は["I",  , "home"]の状態。つまりdeleteでは配列のサイズは変わらない。

let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // インデックス1から1要素削除

alert(arr); // I,JavaScriptが返る

let arr = ["I", "study", "Javascript", "right", "now"];

arr.splice(0, 3, "Lets's", "dance");

alert(arr); // Lets's,dance,right,nowが返る

// spliceは削除した要素を返している
let arr = ["I", "study", "Javascript", "right", "now"];

let removed = arr.splice(0, 2);

alert(removed); // I,studyが返る

// spliceは削除せずに挿入も可能
let arr = ["I", "study", "JavaScript"];

arr.splice(2, 0, "complex", "language");

alert(arr); // I,study,complex,JavaScriptが返る

// 負のインデックスも許容される
let arr = [1, 2, 5];

arr.splice(-1, 0, 3, 4);

alert(arr); // 1,2,3,4,5が返る

// slice
let str = "test";
let arr = ["t", "e", "s", "t"];

alert(str.slice(1, 3)); // esが返る
alert(arr.slice(1, 3)); // e,sが返る

alert(str.slice(-2)); // stが返る
alert(arr.slice(-2)); // s,tが返る

// concat
let arr = [1, 2];

alert(arr.concat([3, 4])); // 1,2,3,4が返る

alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6が返る

// 配列での検索
let arr = [1, 0, false];

alert(arr.indexOf(0)); // 1が返る
alert(arr.indexOf(false)); // 2が返る
alert(arr.indexOf(null)); // -1が返る(配列に引数の要素が存在しない場合)

alert(arr.includes(1)); // trueが返る

// find

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id == 1);

alert(user.name); // Johnが返る

//filter
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let someUsers = user.filter((item) => item.id < 3);

alert(someUsers.length); // 2が返る

// 配列を変換する
// map
let lengths = ["Bilbo", "Gendalf", "Nazgul"].map((item) => item.length);
alert(lengths); // 5,7,6が返る

// reverse
let arr = [1, 2, 3];
arr.reverse();

alert(arr); // 3,2,1が返る

// splitとjoin
let names = "Bilbo, Gandalf, Nazgul";
let arr = names.split(", ");

let arr = ["Bilbo", "Gandalf", "Nazgul"];
let str = arr.join(";");

alert(str); // Bilbo;Gandalf;Nazgulが返る
