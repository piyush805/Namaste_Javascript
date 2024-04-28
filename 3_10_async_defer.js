// ASYNC & DEFER
// Boolean attribute in script tag to efficiently load external JS into our app

// ! Normal script tag <script src="..."/>
/**
 * - Browser starts to parse HTML and encounter HTML tag - Parsing is paused
 * - Browser tries to fetch whole script
 * - Once fetched, entire script is executed
 * - Only after execution does the HTML Parsing begin again
 */

// ! async script tag <script async src="..."/>
/**
 * - Browser starts to parse HTML and encounter HTML tag -
 * - Browser tries to fetch whole script in parallel - while Parsing still continues
 * - Once fetched, Parsing is paused now and entire script is executed
 * - Only after execution does the HTML Parsing begin again
 */

// ! Normal script tag <script defer src="..."/>
/**
 * - Browser starts to parse HTML and encounter HTML tag
 * - Browser tries to fetch whole script - HTML Parsing continues
 * - Only after entire HTML is parsed - fetched script is executed
 */

// ! What to use when?
// - Async attribute does not guarantee the order of execution of the scripts
// - but defer does
// so if there are multiple dependent script then using async tag may cause problem
// and Defer is better
// If there are independent modular script then it makes sense to use async attr
