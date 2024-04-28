// Debouncing and Throttling both happen by limiting the rate of the function calls

// Debouncing approach is to work upon time difference between events before triggering the function that has to be invoked for that event
// Eg: Search bar suggestion example -

// In Throttling, only makes function call after a limit of time - not the time difference between events - but function call at regular interval - but that after a time limit

// ! EXAMPLE 1: SEARCH BAR SUGGESTIONS
// Debouncing - Function not on each keypress - but only if wait time between 2 key presses is some 300ms
// Throttling -  In same search bar example make API call  after 300ms irrespective of keypress delays or word length typed. Its invoking function at some interval starting from first time invocation

// ! EXAMPLE 2: Track frequency of user resizing the browser
// addEventListener('resize', function(){ trackResize() }) - this would get triggered even on pixel changes
// There could be slow or fast resizing
// With debouncing - we can track time difference 100ms between resize events - even with fast events
// With throttling - it ignores lot of events before next trigger, we can miss lot of resize points that we would gather in case of debouncing

// ! EXAMPLE 3: Button Click - shotting game
// Debouncing -shoot only if diff between 2 clicks is time d0
// Throttling - Automatic - fast rate - throttling makes more sense, Bad pistol - slow rate - still throttling but with larger time interval d1

// ! EXAMPLE 4: Scrolling loader

// Throttling vs Debouncing - no one is better - if depends on the use case
