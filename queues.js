// Beside CallBack Queue, there is one more queue which is Job Queue.

function answer() {
  console.log("Yeah! I will try to take it.");
}

function question() {
  console.log("Get your survey on time.");
}

function necceSSary() {
  console.log("Notification:");

  setTimeout(answer, 0);

  new Promise((resolve, reject) => {
    resolve("Take a Survey within 15 Minutes");
  }).then((resolve) => console.log(resolve));

  question();
}

necceSSary();
