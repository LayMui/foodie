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
git clone https://github.com/LayMui/food.git
cd food
npm start 
```

8. To add and update serenityJS library:
npm i @serenity-js/serenity-bdd --save-dev
npm i @serenity-js/core --save-dev
npm i @serenity-js/cucumber --save-dev
npm i @serenity-js/assertions --save-dev
npm i @serenity-js/console-reporter --save-dev

9. to add serenityJS with cucumber webdriverio framework
npm i @serenity-js/cucumber --save-dev
etc...

10. Add serenityJS-cucumber framework to config file wdio.conf.ts
Attempt to add screenplay (WIP)

Issues: 
```
TypeError: actor.attemptsTo is not a function
    at /Users/laymui/dev/taiger/foodie/test/step-definitions/SearchForRestaurant.steps.ts:14:9
    ```

tested on xcode 12
and node 14.7.6



**[LayMui-Toh]**
