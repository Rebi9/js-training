// オブジェクトメソッド

let user = {
  user: "John",
  age: 30,
};

user.sayHi = function () {
  alert("Hello!");
};

user.sayHi();

// 宣言済みの関数をメソッドとして使用することもできる

let user = {
  // ...
};

function sayHi() {
  alert("Hello!");
}

user.sayHi = sayHi;
user.sayHi();

// メソッドの短縮表現
// 基本的に短縮構文が好まれる
let user = {
  sayHi: function () {
    alert("Hello!");
  },
};

let user = {
  sayHi() {
    // "sayHi: function () {"" と同様
    alert("Hello!");
  },
};

// this
// オブジェクトの情報にアクセスする場合はthisを用いる

let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert(this.name);
  },
};

user.sayHi(); // Johnが返る

// アロー関数のthis
// アロー関数では自身のthisを持たず、外部の通常の関数から取得される

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  },
};

user.sayHi(); // Ilyaが返る
