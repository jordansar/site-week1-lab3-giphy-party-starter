// Global Constants
const apiKey = "GISFfoSUc1uC4FoW6qSccbYWJdxyBK2M"
const searchForm = document.querySelector('.search-form');
const searchText = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const limit = 9;
const rating = 'g';


let basrURL = 'api.giphy.com/v1/gifs/search';
/**
 * Update the DOM to display results from the Giphy API query.
 *
 * @param {Object} results - An array of results containing each item
 *                           returned by the response from the Giphy API.
 *
 */
function displayResults(results) {
  // YOUR CODE HERE
}

/**
 * Make the actual `fetch` request to the Giphy API
 * and appropriately handle the response.
 *
 * @param {String} searchTerm - The user input text used as the search query
 *
 */
async function getGiphyApiResults(searchTerm) {
  // YOUR CODE HERE
}

/**
 * The function responsible for handling all form submission events.
 *
 * @param {SubmitEvent} event - The SubmitEvent triggered when submitting the form
 *
 */
async function handleFormSubmit(event) {
  // YOUR CODE HERE


  
  // fetch(apiKey).then((res) => res.json).then(data)
  // {
    
  // }
}

// searchForm.addEventListener("submit", handleFormSubmit)

/**
 * Handle fetching the next set of results from the Giphy API
 * using the same search term from the previous query.
 *
 * @param {MouseEvent} event - The 'click' MouseEvent triggered by clicking the 'Show more' button
 *
 */
async function handleShowMore(event) {
  // YOUR CODE HERE
}

window.onload = function () {
  // YOUR CODE HERE
  // Add any event handlers here
}
