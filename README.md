# ALGOLIA-NODEJS

This is a Node.js application that demonstrates the use of Algolia for adding search functionality. It uses the `algoliasearch` client library to communicate with Algolia's search service.

## Features

- Search for items using Algolia
- Environment variables for secure configuration

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a **Node.js** installed (at least version 12.x).
- You have an **Algolia** account and have obtained your `Application ID`, `API Key`, and set up an `Index Name`.

## Installation

Clone the repository to your local machine:

```sh
git clone https://github.com/adanzweig/nodejs-algolia.git
cd nodejs-algolia
```

Install the required dependencies:

```sh
npm install
```

Set up your environment variables:

1. Rename the `.env.example` file to `.env`.
2. Fill in your Algolia `APPLICATION_ID`, `API_KEY`, and `INDEX_NAME`.

## Usage

To run the script, execute:

```sh
node index.js
```

This will perform a search for the term 'ironman' and output the results to the console.