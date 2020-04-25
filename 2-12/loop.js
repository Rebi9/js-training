// ループ

// while
let i = 0;
while (i < 3) {
  alert(i);
  i++;
}

// do while
let i = 0;
do {
  alert(i);
  i++;
} while (i < 3);

// for
for (let i = 0; i < 3; i++) {
  alert(i);
}

// 一部分の省略
let i = 0;
for (; i < 3; i++) {
  alert(i);
}

let i = 0;
for (; i < 3; ) {
  alert(i++);
}

// 無限ループ
for (;;) {
  // 処理
}

// break
let sum = 0;

while (true) {
  let value = +prompt("Enter a number", "");

  if (!value) break;

  sum += value;
}

alert("sum: " + sum);

// continue
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;

  alert(i); // 奇数のみが出力される
}

// 三項演算子の右側にはbreak/continueは使えない
// ↓は構文エラー
// (i > 5) ? alert(i) : continue;

// ラベル

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt("Value at coords (${i}, ${j})", "");

    if (!input) break outer;

    // 何らかの処理
  }
}
alert("Done!");

// 上記のようにラベルをつけ、指定することで、条件を満たしたときに外側のループをbreakできる
