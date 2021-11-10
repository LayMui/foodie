ERROR webdriver: RequestError: connect ECONNREFUSED ::1:4723

Resolution:

```
Use node v.16.3.0
Odd-numbered Node releases (e.g. 17, 15, 13) are not meant to be used in production
More info here: https://nodejs.org/en/about/releases/
```

```
No bundle URL
Resolved by running the metro launcher
git clone https://github.com/LayMui/food.git
cd food
npm start or yarn start
```

Request failed with status 500 due to An unknown server-side error occurred while processing the command. Original error: Unable to start WebDriverAgent session because of xcodebuild failure: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to the remote server. Original error: connect ECONNREFUSED 127.0.0.1:8100

```
	Signing for "WebDriverAgentRunner"

cd /usr/local/lib/node_modules/appium/node_modules/appium-webdriveragent
open WebDriverAgent.xcodeproj in Xcode IDE

 xcodebuild -project WebDriverAgent.xcodeproj -scheme WebDriverAgentRunner -destination 'id=a12510a8c8ec79876d8e10f38da17fb97dc720c3' test


Nov 9, 2021:
```

Step "he wants to search for restaurant name Dolce" is not defined. You can ignore this error by setting cucumberOpts.ignoreUndefinedDefinitions as true.
[iPhone 11 iOS 14.5 #0-0] Step "he wants to search for restaurant name Dolce" is not defined. You can ignore this error by setting cucumberOpts.ignoreUndefinedDefinitions as true.

```

Nov 10, 2021:
```

[iPhone 11 iOS 14.5 #0-0] ConfigurationError: Jan can't BrowseTheWeb yet. Did you give them the ability to do so?
[iPhone 11 iOS 14.5 #0-0] ConfigurationError: Jan can't BrowseTheWeb yet. Did you give them the ability to do so?
[iPhone 11 iOS 14.5 #0-0] at Actor.abilityTo (/Users/a845751yara.com/poc/foodie/node_modules/@serenity-js/core/src/screenplay/actor/Actor.ts:47:19)
[iPhone 11 iOS 14.5 #0-0] at Function.as (/Users/a845751yara.com/poc/foodie/node_modules/@serenity-js/webdriverio/src/screenplay/abilities/BrowseTheWeb.ts:66:22)
[iPhone 11 iOS 14.5 #0-0] at AnonymousQuestion.body (/Users/a845751yara.com/poc/foodie/node_modules/@serenity-js/webdriverio/src/screenplay/questions/locators.ts:30:41)
[iPhone 11 iOS 14.5 #0-0] at AnonymousQuestion.answeredBy (/Users/a845751yara.com/poc/foodie/node_modules/@serenity-js/core/src/screenplay/Question.ts:232:21)
[iPhone 11 iOS 14.5 #0-0] at TargetElement.answeredBy (/Users/a845751yara.com/poc/foodie/node_modules/@serenity-js/webdriverio/src/screenplay/questions/targets.ts:363:14)
[iPhone 11 iOS 14.5 #0-0] at Actor.answer (/Users/a845751yara.com/poc/foodie/node_modules/@serenity-js/core/src/screenplay/actor/Actor.ts:129:43)
[iPhone 11 iOS 14.5 #0-0] at Enter.resolve (/Users/a845751yara.com/poc/foodie/node_modules/@serenity-js/webdriverio/src/screenplay/interactions/WebElementInteraction.ts:38:38)
[iPhone 11 iOS 14.5 #0-0] at Enter.performAs (/Users/a845751yara.com/poc/foodie/node_modules/@serenity-js/webdriverio/src/screenplay/interactions/Enter.ts:88:35)

```


10 Nov 2021:
```
Error: Can't call addValue on element with selector "~search-bar" because element wasn't found
```
**[LayMui-Toh]**
```
