// Event Delegation
// So much event handlers can cause performance bottle nack

// Ecommerce app
// Categories => laptop , cameras , shoes
// For each category we will have event listeners.

// Event delegation states that instead of attaching event handlers to child elements ,
// we should directly attach event handlers to parent of these elements. That way we will have one event handler even if user clicks on any category.
// This event handlere will get triggred due to event bubbling when user clicks on any category.
