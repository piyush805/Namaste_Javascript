// Function triggered at interval - not at time different between invoking events

const myThrottle = (func, limit) => {
  let callFunction = true;
  return function () {
    if (callFunction) {
      func();
      callFunction = false;
      setTimeout(() => {
        callFunction = true;
      }, limit);
    }
  };
};

// We need to limit the call
// so we use the flag callFunction = true
// we call the function only if this flag is true
// Make this false when function is called
// And make this true again only after a certain time

// * DRY RUN
// Throttle returns us the function - with flag true - because closure
// so function is called first time, flag made false, timer started
// Next events - since flag is false, function is not called
// After some time - timer has expired and flag is true again - so events can trigger function called
// We made a closure here so that we don't re-initialize our flag again ans again

// This function will get the job done - but this has missed edge case of handling the arguments

const myThrottle2 = (func, limit) => {
  let callFunction = true;
  return function (...arguments) {
    let context = this,
      args = arguments;
    if (callFunction) {
      func.apply(context, args); // Like this
      callFunction = false;
      setTimeout(() => {
        callFunction = true;
      }, limit);
    }
  };
};
