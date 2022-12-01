function newSubscriber() {
  let name = prompt("What is your name?");

  if (name.length > 0) {
    let email = prompt(`Welcome ${name}! What is your email address?`);
    alert(`Thanks for joining our mailing list, ${name}! We'll be in touch!`);
  } else {
    let email = prompt(`Welcome friend! What is your email address?`);
    alert(`Thanks for joining our mailing list, friend! We'll be in touch!`);
  }
}

let subscribeButton = document.querySelector(".subscribe-button");
subscribeButton.addEventListener("click", newSubscriber);
