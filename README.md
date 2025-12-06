# Skillo Social Media - Test Automation Suite

## Project Overview

This project is an end-to-end automated test suite for the **Skillo Social Media platform**, built using **JavaScript** and **Playwright**.  
The test suite validates core user functionalities such as:

- User Registration
- Login
- Logout
- New Post Creation
- Delete created post

The purpose of this project is to demonstrate structured test automation using the **Page Object Model (POM)**, reusable fixtures, data-driven testing, and cross-browser execution.

---

## Project Purpose

The goal of this automation suite is to provide automated tests that verify the most common used functionalities of the Skillo platform.  
This project was created as a final assignment for the JavaScript Playwright Automation Course.

---

## Technologies Used

- **JavaScript (ES Modules)**
- **Playwright Test**
- **Page Object Model (POM)**
- **Node.js / NPM**
- **Git & GitHub**
- **ESLint**

---

## Prerequisites

Before running the project, ensure you have installed:

- Node.js (LTS version recommended)
- Git
- Visual Studio Code (optional but recommended)
- Playwright browsers (installed via Playwright)

---

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/ngangela42/skillo-automation-project.git
cd skillo-automation-project
```

# Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

# Running Tests

Run all tests: npx playwright test

Run tests in headed mode: npx playwright test --headed

Open the last HTML report: npx playwright show-report

# Project Structure

skillo-automation-project/
│
├── .vscode/  
│ ├── extensions.json  
│ └── settings.json  
│
├── pages/  
│ ├── RegistrationPage.js  
│ ├── LoginPage.js  
│ ├── HomePage.js  
│ ├── NewPostPage.js  
│ └── ProfilePage.js  
│
├── tests/  
│ ├── fixtures/  
│ │ ├── base.js  
│ │ |── auth.js
| |** userCleanup.js
|
| |
│ ├── registration.spec.js  
│ ├── login.spec.js  
│ ├── logout.spec.js  
│ └── newPost.spec.js  
│
├── test-data/  
│ ├── users.json  
│ └── test-image.jpg  
│
├── test-cases/  
│ ├── login-tests.md
| |** logout-test.md
│ |** new-post-tests.md
| |** registration-tests.md
│
├── .gitignore  
├── eslint.config.mjs  
├── package.json  
├── playwright.config.js  
└── README.md

# Test Scenarios

Registration Tests

Positive: Successful registration
Negative: Username cannot be empty
Negative: Invalid email
Negative: Passwords must match

Login Tests

Positive login
Negative login (data-driven: missing username, missing password, wrong credentials)

Logout Tests

User can log out successfully from profile menu

New Post Tests

Create new public post
Create new private post
Verify post caption
Verify username on post details
Delete existing post successfully

📊 Test Coverage

Total test cases: 12

Positive tests: 8

Negative tests: 4

🏗️ Architecture

The project follows a clean Page Object Model structure:

Each page has its own class

All selectors and UI actions are encapsulated inside the POM

Tests import only the page classes they need

Fixtures provide shared setup such as login, browser context, and base URL

🐛 Known Issues

The Skillo birth date field may require sequential typing instead of a direct .fill().

Toast messages sometimes take longer to appear and may require waiting.

The UI occasionally delays image uploads.

🔮 Future Improvements

API login to speed up authenticated tests

Add test retries and more robust error handling

Add more data-driven scenarios

Implement visual regression testing

Add GitHub Actions CI pipeline

👤 Author

Angela Naydenova
GitHub: https://github.com/ngangela42/skillo-automation-project
