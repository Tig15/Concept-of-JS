// A Promise is object which handles asynchronous operations along "Promise" constructor.

const takeSurvey = new Promise((resolve, reject) => {
  resolve("Yes! I will take your survey.");
})
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

const observer = new MutationObserver();

const date = new Date();
const valeu = new Array();
