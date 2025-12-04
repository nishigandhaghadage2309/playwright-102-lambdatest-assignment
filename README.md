> **Playwright 102 – LambdaTest Assignment**

This repository contains my solution for the LambdaTest Playwright 102 certification assignment using **JavaScript + Playwright** Test.

> **Tech Stack**

Node.js

Playwright Test (JavaScript)

Gitpod (cloud development environment)

LambdaTest HyperExecute (cloud execution)

> **Scenarios Covered**

1️. Simple Form Demo

Navigate to Selenium Playground

Open “Simple Form Demo”

Enter a message (supports CUSTOM_MESSAGE env var)

Validate output message

2️. Drag & Drop Sliders

Open “Drag & Drop Sliders”

Select the slider with “Default value 15”

Move slider to 95

Verify displayed value changes to 95

3️. Input Form Submit

Attempt form submission when inputs are empty → verify HTML5 validation

Fill valid values in all mandatory fields

Verify success message:
“Thanks for contacting us, we will get back to you shortly.”

> **Project Structure**

playwright-102-lambdatest-assignment/
├─ tests/
│ ├─ simple-form.spec.js
│ ├─ slider.spec.js
│ └─ input-form.spec.js
├─ playwright.config.js
├─ hyperexecute.yaml
├─ .gitpod.yml
├─ .gitpod.Dockerfile
├─ package.json
└─ README.md

> **Local Execution**

    > Install dependencies:
          npm install
          npx playwright install


    > Run all tests:
          npm test

    > Run on Chromium only:
          npm run test:chromium

    > Show last HTML report:
          npm run test:report

> **Environment Variables Supported**
    You can override defaults used in config/tests:
     ** BASE_URL**
     **CUSTOM_MESSAGE**

    Example:
        BASE_URL=https://www.lambdatest.com/selenium-playground/ \
        CUSTOM_MESSAGE="Hello LambdaTest" \
        npm run test:chromium

> **Running on LambdaTest HyperExecute**
Steps:
1. Create a new HyperExecute project on LambdaTest
2. Add Secrets:
   > LT_USERNAME
   > LT_ACCESS_KEY
3. Connect this GitHub repository
4. Configure pipeline to use:
  > hyperexecute.yaml
5. Trigger Job (Matrix defined for multiple OS + browsers)
  After each run, note the Job IDs here:
  HyperExecute Job IDs
    >Job 1: ___________
    >Job 2: ___________

> **Running on Gitpod**
1️.  Open repo in Gitpod
2.  Gitpod automatically:
      > Installs dependencies
      > Installs Playwright browsers
      > Runs Chromium tests
Re-run manually:
    npx playwright test
Open report:
    npm run test:report

**Repository Access**
  > Repository is Private
  > Access shared with LambdaTest certification reviewers as instructed


