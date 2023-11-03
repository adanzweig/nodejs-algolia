// Import the algoliasearch client library to interact with the Algolia API.
const algoliasearch = require('algoliasearch');
// Import the dotenv library to load environment variables from a .env file into process.env.
require('dotenv').config();

/**
 * Asynchronously searches the Algolia index for a given search term.
 * @param {string} search - The search term to query the Algolia index.
 * @returns {Promise<Object>} The result of the Algolia search.
 */
async function searchWithAlgolia(search) {
    try {
        // Initialize the Algolia client with the application ID and API key from environment variables.
        const client = algoliasearch(process.env.APPLICATION_ID, process.env.API_KEY);
        // Initialize the Algolia index with the name provided in environment variables.
        const index = client.initIndex(process.env.INDEX_NAME);
        // Perform the search operation on the initialized index and await the result.
        const found = await index.search(search);
        // Return the search results.
        return found;
    } catch (error) {
        // If an error occurs during the search, log it to the console.
        console.error('Error:', error);
    }
}

// Self-invoking async function to perform the search and log the results.
(async () => {
    // Await the result of the search operation for the term 'ironman'.
    const find = await searchWithAlgolia('ironman');
    // Log the result of the search to the console.
    console.log(find);
})();
