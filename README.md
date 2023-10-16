# YNAB-Playground

This is a playground for the [YNAB API](https://api.youneedabudget.com/). It's a place for me to experiment with the API and try out new things.

### Prerequisites

You'll need to have [Node.js](https://nodejs.org/en/) installed.

### Installing

Clone the repo and install the dependencies:

```
git clone
cd ynab-playground
npm install
```

### Running

To run the app, you'll need to set the following environment variables in a `.env` file in the root of the project:

```
YNAB_ACCESS_TOKEN=<your access token>
```

> You can get your access token from the [YNAB developer settings](https://app.youneedabudget.com/settings/developer).

Then run the app:

```
npm run dev
```
