# GCC WS Automation

## Description

This project is intended for automating GCC WebServices API tests.

## Prerequisites

Before you begin, ensure you have [Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads) installed on your system.

## Installation

1. Clone this repository:

    ```
    git clone https://gitlab.celfocus.com/NGIN-Delivery/ngin-delivery-gcc-ws-automation.git
    ```

2. Navigate to the project directory:

    ```
    cd ngin-delivery-gcc-ws-automation
    ```

3. Install the required dependencies:

    ```
    npm install
    ```

## Configuration

⚠️ Create a file _cypress.env.json_ on the project root and set the **url** and **auth** variables:

    {
        "urlPT": "https://...",
        "authPT": "...",
        "urlUK1": "http://...",
        "urlUK2": "http://...",
        "userUK": "...",
        "passUK": "..."
    }

## Running Tests

### Cypress Open

To open the Cypress graphical interface and run tests interactively, use the following command:

    npx cypress open

This will open the Cypress interface, where you can select and run desired tests.

### Cypress Run

It's possible to run PT features or UK features.
To run tests in headless mode (without the graphical interface), use the following command:


PT:

    npm run test:pt


UK:

    npm run test:UK

    
Test results will be displayed in the terminal.
