var results =[
    {
        "description": "should fail as greeting text is different|angularjs homepage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": [
            "Expected 'Hello Julie!' to equal 'Hello Julie hello!'."
        ],
        "trace": [
            "Error: Failed expectation\n    at UserContext.<anonymous> (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\specs\\example_spec.js:13:45)\n    at X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7"
        ],
        "browserLogs": [],
        "screenShotFile": "images\\should fail as greeting text is different-angularjs homepage.png",
        "timestamp": 1534696702893,
        "duration": 4330
    },
    {
        "description": "should greet the named user|angularjs homepage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1534696707767,
        "duration": 2260
    },
    {
        "description": "should contain log and pretty stack trace|angularjs homepage",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": [
            "Failed: unknown error: Runtime.evaluate threw exception: SyntaxError: Unexpected token throw\n  (Session info: chrome=68.0.3440.106)\n  (Driver info: chromedriver=2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform=Windows NT 10.0.17134 x86_64)"
        ],
        "trace": [
            "WebDriverError: unknown error: Runtime.evaluate threw exception: SyntaxError: Unexpected token throw\n  (Session info: chrome=68.0.3440.106)\n  (Driver info: chromedriver=2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform=Windows NT 10.0.17134 x86_64)\n    at Object.checkLegacyResponse (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\error.js:546:15)\n    at parseHttpResponse (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nFrom: Task: WebDriver.executeScript()\n    at thenableWebDriverProxy.schedule (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\webdriver.js:807:17)\n    at thenableWebDriverProxy.executeScript (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\webdriver.js:878:16)\n    at run (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\protractor\\built\\browser.js:59:33)\n    at ProtractorBrowser.to.(anonymous function) [as executeScript] (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\protractor\\built\\browser.js:67:16)\n    at UserContext.<anonymous> (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\specs\\example_spec.js:26:17)\n    at X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\nFrom: Task: Run it(\"should contain log and pretty stack trace\") in control flow\n    at UserContext.<anonymous> (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\specs\\example_spec.js:21:5)\n    at addSpecsToSuite (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\specs\\example_spec.js:3:1)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)"
        ],
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "console-api 371:40 \"This is some kind of warning!\"",
                "timestamp": 1534696711015,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "console-api 371:40 \"This is some kind of warning!\"",
                "timestamp": 1534696711217,
                "type": ""
            }
        ],
        "screenShotFile": "images\\should contain log and pretty stack trace-angularjs homepage.png",
        "timestamp": 1534696710055,
        "duration": 1662
    },
    {
        "description": "should list todos|todo list|angularjs homepage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1534696712107,
        "duration": 1600
    },
    {
        "description": "should display first todo with proper text|todo list|angularjs homepage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1534696713727,
        "duration": 1653
    },
    {
        "description": "should add a todo|todo list|angularjs homepage",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1534696715400,
        "duration": 2177
    },
    {
        "description": "should be displayed as pending test case|todo list|angularjs homepage",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Temporarily disabled with xit",
        "browserLogs": [],
        "screenShotFile": "images\\should be displayed as pending test case-todo list-angularjs homepage.png",
        "timestamp": 1534696717615,
        "duration": 0
    },
    {
        "description": "pending test case 1|pending describe|angularjs homepage",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images\\pending test case 1-pending describe-angularjs homepage.png",
        "timestamp": 1534696717642,
        "duration": 0
    },
    {
        "description": "pending test case 2|pending describe|angularjs homepage",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images\\pending test case 2-pending describe-angularjs homepage.png",
        "timestamp": 1534696717668,
        "duration": 0
    },
    {
        "description": "expect to fail as greeting text is different|second top level spec",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": [
            "Expected 'Hello Julie!' to equal 'Hello Julie hello!'."
        ],
        "trace": [
            "Error: Failed expectation\n    at UserContext.<anonymous> (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\specs\\example_spec.js:13:45)\n    at X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at X:\\fakeroot\\protractor-beautiful-reporter\\examples\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7"
        ],
        "browserLogs": [],
        "screenShotFile": "images\\should fail as greeting text is different-angularjs homepage.png",
        "timestamp": 1534697702893,
        "duration": 4330
    },
    {
        "description": "expect to greet the named user|second top level spec",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1534697707767,
        "duration": 2260
    },
    {
        "description": "expect to be displayed as pending test case|todo list|second top level spec",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "sessionId": "d8529d8cbc982710f41e39ceccfc6c59",
        "instanceId": 11864,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Temporarily disabled with xit",
        "browserLogs": [],
        "screenShotFile": "images\\should be displayed as pending test case-todo list-angularjs homepage.png",
        "timestamp": 1534697717615,
        "duration": 0
    }
];