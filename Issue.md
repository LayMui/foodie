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

**[LayMui-Toh]**
```