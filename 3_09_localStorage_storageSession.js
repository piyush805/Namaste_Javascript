// WEB STORAGE APIs used by developer with store data in form of {key : value} pairs
// 2 mechanisms to this - Local and Session

// * Session Storage:
/**
 * - Session Persists till browser window lasts
 * - They are not being sent to server by network requests
 * - Capacity: Cookies 4000 bytes, Session 5MBs
 */

// * Local Storage:
/**
 * - like session storage - But it doesn't clear itself - it can be stored forever until manually cleared
 * - Highest capacity - depending on device, browser
 *
 */

// Uses:
/**
 * Some user relevant data which makes sense to keep on user side
 * And it is faster to retrieve data from browser itself than server
 */

// These APIs follow a same origin policy
// origin consists of 3 things: Protocol, Domain, Port - if any of the three change then data can no longer be accessed
// Local storage for each such combination is unique
window.localStorage.setItem("hello", "world");
localStorage.setItem("hello1", "world2");
localStorage.getItem("hello"); // world
localStorage.removeItem("hello"); // world
localStorage.clear();

// We usually font store string but objects - but localStorage only takes strings\
const user = { name: "Akshay" };
localStorage.setItem("user", user);
// object will be store as [object Object]
// so we have to stringify it
localStorage.setItem("user-copy", JSON.stringify(user)); // { name: "Akshay" }
// For reading, we get string again
localStorage.getItem("user-copy"); // "{ "name": "Akshay" }"
// so we have to JSON parse into normal object
JSON.parse(localStorage.getItem("user-copy")); // { name": "Akshay" }

// So for machine coding rounds prepare setter and getter method of your own - in order to avoid precious 2-3 minutes in these string manipulations
