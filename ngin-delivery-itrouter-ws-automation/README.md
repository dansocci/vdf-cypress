# IT Router WS Automation

## Description

This project is intended for automating IT Router WebServices API tests.

## Prerequisites

Before you begin, ensure you have [Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads) installed on your system.

## Installation

1. Clone this repository:

    ```
    git clone https://github.com/Celfocus-VS-Unified-Comm-Delivery/ngin-delivery-itrouter-ws-automation.git
    ```

2. Navigate to the project directory:

    ```
    cd ngin-delivery-itrouter-ws-automation
    ```

3. Install the required dependencies:

    ```
    npm install
    ```

## Configuration

⚠️ Create a file _cypress.env.json_ on the project root and set the **url**, **user**, and **password** variables:

    {
        "url": "https://...",
        "user": "...",
        "password": "..."
    }

## Running Tests

### Cypress Open

To open the Cypress graphical interface and run tests interactively, use the following command:

    npx cypress open

This will open the Cypress interface, where you can select and run desired tests.

### Cypress Run

To run tests in headless mode (without the graphical interface), use the following command:


	npx cypress run

    
Test results will be displayed in the terminal.
