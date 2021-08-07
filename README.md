## Getting started with webdriverio cucumber framework
1. npm init to create the package.json
2. npm i @wdio/cli
3. Setup: 
```
npx wdio config
```
Ask a series of questions/options to config the webdriverio

4. To run
```
npx wdio run ./config/wdio.ios.app.conf.ts
```
it will install the dependencies and create the wdio.conf.ts

5. create a file tsconfig.json with the content copied
```
{
  "compilerOptions": {
    "types": ["node", "webdriverio/async", "@wdio/cucumber-framework", "expect-webdriverio"]
  }
}
```

6. run the test using the command:
```
npx wdio wdio.ios.conf.ts
```

7. Add npm i @wdio/appium-service --save-dev
```
Such a service eliminates the need to start appium manually before starting your tests. We should install this as a dev dependency:
```

Issues: 
```
No bundle URL 
Resolved by running the metro launcher
```

8. To add serenityJS library:
npm i @serenity-js/serenity-bdd --save-dev
npm i @serenity-js/core --save-dev
npm i @serenity-js/cucumber --save-dev
npm i @serenity-js/assertions --save-dev
npm i @serenity-js/console-reporter --save-dev

Issue:
```
TypeError: screenplay_1.SearchFor is not a function
    at /Users/laymui/dev/taiger/foodie/src/features/step-definitions/searchForRestaurant.steps.ts:16:40
    at step (/Users/laymui/dev/taiger/food
 ```
