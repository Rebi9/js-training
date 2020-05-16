// コンストラクタ

function User(name) {
  // this = {}; (暗黙)
  this.name = name;
  this.isAdmin = false;
  // return this; (暗黙)
}

let user = new User("Jack");

alert(user.name); // Jackが返る
alert(user.isAdmin); // falseが返る

// new.target
// 関数の中でnew.targetを用いることで、それがnewで呼ばれたかどうかを確認することができる

function User() {
  alert(new.targer);
}

User(); // undefinedが返る
new User(); // function User {...}が返る

// new.targetはnewの場合と通常の呼び出し両方の構文が同じように動作するようにするために使用できる
function User(name) {
  if (!user.targer) {
    return new User(name);
  }
  this.name = name;
}

let john = User("John"); // new Userと挙動が同じ
alert(john.name);

// コンストラクタ中のメソッド
function User(name) {
  this.name = name;

  this.sayHi = function () {
    alert("My name is: " + this.name);
  };
}

let john = new User("John");

john.sayHi(); // My name is: John が返る
