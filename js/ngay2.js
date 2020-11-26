const next = document.querySelector(".nex");
const pre = document.querySelector(".pre");
const reset = document.querySelector(".reset");
const h2 = document.querySelector("h2");

//-- bai 4 ---

// class Counter {
//   constructor(init) {
//     this.count = init || 0;
//     this.defaultcount = init;
//   }

//   increase() {
//     this.count++;
//     return this.count;
//   }
//   decrease() {
//     this.count--;
//     return this.count;
//   }
//   reset() {
//     this.count = this.defaultcount;
//     return this.count;
//   }
// }

// const counter = new Counter();

// next.addEventListener("click", function () {
//     let count = counter.increase();
//     h2.innerHTML = count;
//   });
//   pre.addEventListener("click", function () {
//     let count = counter.decrease();
//     h2.innerHTML = count;
//   });
//   reset.addEventListener("click", function () {
//     let count = counter.reset();
//     h2.innerHTML = count;
//   });

//-- bai12 ---

function Counter(init = 0) {
  let x = init;

  return [
    x,

    function () {
      return x++;
    },
    function () {
      return x--;
    },
    function () {
      x = 0;
      return x;
    },
  ];
}

let [, increase, decrease, resetss] = Counter();

next.addEventListener("click", function () {
  h2.innerHTML = increase();
});
// pre.addEventListener("click", function () {
//   //   let count = counter.decrease();
//   h2.innerHTML = decrease();
// });
reset.addEventListener("click", function () {
  //   let count = counter.reset();
  h2.innerHTML = resetss();
});
