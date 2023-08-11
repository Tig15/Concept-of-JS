// CallBack Funtion Queue
function answer() {
  console.log("Well, Engaging!");
}

function question() {
  console.log("How is your day going?");
}

function aboutDay() {
  console.log("About Day: ");
  // This parks first in the task queue.

  setTimeout(answer, 0);
  // It waits... Appear at the third spot on task queue parking.

  question();
  // While, setTimeout waits, it invokes immediately as filling second spot.
}

aboutDay();

// This is an example of how call stacks, with web browsers/API, then settles inside Task Queue.
