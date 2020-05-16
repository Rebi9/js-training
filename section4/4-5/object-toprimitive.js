// オブジェクトからプリミティブへの変換

//　変換には3つのタイプ(hintと呼ばれる)がある
// 1. string
// 2. number
// 3. default(string, number以外)

// toPrimitive
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },
};

alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint:default -> 1500

// toString/valueOf

// ↓は↑のtoPrimitiveと同じ
let user = {
  name: "John",
  money: 1000,

  toString() {
    return `{name: "${this.name}"}`;
  },

  valueOf() {
    return this.money;
  },
};

// ロギングやデバッグ目的で人間が読めるオブジェクトの表現を返すような
// あらゆる状況に対応できるメソッドとしては、obj.toString()のみで十分なことが多い
