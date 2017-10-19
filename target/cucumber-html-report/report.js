$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login;login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LoginSuccess"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Login form displayed",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enters username \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters password\"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should see the greeting message",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login;login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 13,
      "id": "login;login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "cainaisi@gmail.com",
        "test1234"
      ],
      "line": 14,
      "id": "login;login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login;login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LoginSuccess"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Login form displayed",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enters username \"cainaisi@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters password\"test1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should see the greeting message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Login_page()"
});
formatter.result({
  "duration": 9065912493,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_form_displayed()"
});
formatter.result({
  "duration": 425945284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cainaisi@gmail.com",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_enters_username(String)"
});
formatter.result({
  "duration": 1339729778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 21
    }
  ],
  "location": "LoginStepDefinition.user_enters_password(String)"
});
formatter.result({
  "duration": 182461629,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_the_Login_button()"
});
formatter.result({
  "duration": 123023802,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_see_the_greeting_message()"
});
formatter.result({
  "duration": 4094552889,
  "status": "passed"
});
formatter.after({
  "duration": 4521467260,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login;login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@LoginFailureWrongCredential"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Login form displayed",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enters username \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters password\"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user clicks the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user should see modal with \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login;login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "errorMessage"
      ],
      "line": 27,
      "id": "login;login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "cainaisi@gmail.com",
        "test12",
        "Incorrect Password"
      ],
      "line": 28,
      "id": "login;login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "cain@gmail.com",
        "test1234",
        "Incorrect Password"
      ],
      "line": 29,
      "id": "login;login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "cain@gmail.com",
        "test12",
        "Incorrect Password"
      ],
      "line": 30,
      "id": "login;login-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login;login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@LoginFailureWrongCredential"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Login form displayed",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enters username \"cainaisi@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters password\"test12\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user clicks the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user should see modal with \"Incorrect Password\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Login_page()"
});
formatter.result({
  "duration": 2129480296,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_form_displayed()"
});
formatter.result({
  "duration": 221391803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cainaisi@gmail.com",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_enters_username(String)"
});
formatter.result({
  "duration": 1463055803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test12",
      "offset": 21
    }
  ],
  "location": "LoginStepDefinition.user_enters_password(String)"
});
formatter.result({
  "duration": 177561284,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_the_Login_button()"
});
formatter.result({
  "duration": 127723852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrect Password",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_should_see_modal_with(String)"
});
formatter.result({
  "duration": 1169349531,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login;login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@LoginFailureWrongCredential"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Login form displayed",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enters username \"cain@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters password\"test1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user clicks the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user should see modal with \"Incorrect Password\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Login_page()"
});
formatter.result({
  "duration": 1918922272,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_form_displayed()"
});
formatter.result({
  "duration": 144279309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cain@gmail.com",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_enters_username(String)"
});
formatter.result({
  "duration": 1367670914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 21
    }
  ],
  "location": "LoginStepDefinition.user_enters_password(String)"
});
formatter.result({
  "duration": 222035753,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_the_Login_button()"
});
formatter.result({
  "duration": 147800099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrect Password",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_should_see_modal_with(String)"
});
formatter.result({
  "duration": 1126106865,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login;login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@LoginFailureWrongCredential"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Login form displayed",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enters username \"cain@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters password\"test12\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user clicks the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user should see modal with \"Incorrect Password\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Login_page()"
});
formatter.result({
  "duration": 2480648296,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_form_displayed()"
});
formatter.result({
  "duration": 187694618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cain@gmail.com",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_enters_username(String)"
});
formatter.result({
  "duration": 1351365136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test12",
      "offset": 21
    }
  ],
  "location": "LoginStepDefinition.user_enters_password(String)"
});
formatter.result({
  "duration": 225317926,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_the_Login_button()"
});
formatter.result({
  "duration": 196414815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrect Password",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_should_see_modal_with(String)"
});
formatter.result({
  "duration": 1131418470,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Failed login with empty credential",
  "description": "",
  "id": "login;failed-login-with-empty-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@LoginFailureEmptyCredential"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Login form displayed",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user enters username \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user enters password\"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user clicks the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user should see \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "login;failed-login-with-empty-credential;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "errorMessage"
      ],
      "line": 43,
      "id": "login;failed-login-with-empty-credential;;1"
    },
    {
      "cells": [
        "cainaisi@gmail.com",
        "",
        "Please enter your password"
      ],
      "line": 44,
      "id": "login;failed-login-with-empty-credential;;2"
    },
    {
      "cells": [
        "",
        "test1234",
        "Invalid Email"
      ],
      "line": 45,
      "id": "login;failed-login-with-empty-credential;;3"
    },
    {
      "cells": [
        "",
        "",
        "Invalid Email"
      ],
      "line": 46,
      "id": "login;failed-login-with-empty-credential;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 44,
  "name": "Failed login with empty credential",
  "description": "",
  "id": "login;failed-login-with-empty-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@LoginFailureEmptyCredential"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Login form displayed",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user enters username \"cainaisi@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user enters password\"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user clicks the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user should see \"Please enter your password\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Login_page()"
});
formatter.result({
  "duration": 2582108050,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_form_displayed()"
});
formatter.result({
  "duration": 158400790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cainaisi@gmail.com",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_enters_username(String)"
});
formatter.result({
  "duration": 1364228346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStepDefinition.user_enters_password(String)"
});
formatter.result({
  "duration": 93748148,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_the_Login_button()"
});
formatter.result({
  "duration": 101556938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your password",
      "offset": 17
    }
  ],
  "location": "LoginStepDefinition.user_should_see(String)"
});
formatter.result({
  "duration": 1146608988,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Failed login with empty credential",
  "description": "",
  "id": "login;failed-login-with-empty-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@LoginFailureEmptyCredential"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Login form displayed",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user enters username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user enters password\"test1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user clicks the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user should see \"Invalid Email\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Login_page()"
});
formatter.result({
  "duration": 2093524148,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_form_displayed()"
});
formatter.result({
  "duration": 388103111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_enters_username(String)"
});
formatter.result({
  "duration": 1147817877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 21
    }
  ],
  "location": "LoginStepDefinition.user_enters_password(String)"
});
formatter.result({
  "duration": 138935704,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_the_Login_button()"
});
formatter.result({
  "duration": 113716938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Email",
      "offset": 17
    }
  ],
  "location": "LoginStepDefinition.user_should_see(String)"
});
formatter.result({
  "duration": 1127244642,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Failed login with empty credential",
  "description": "",
  "id": "login;failed-login-with-empty-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@LoginFailureEmptyCredential"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Login form displayed",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user enters username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user enters password\"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user clicks the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user should see \"Invalid Email\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Login_page()"
});
formatter.result({
  "duration": 1426765432,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_form_displayed()"
});
formatter.result({
  "duration": 237445531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_enters_username(String)"
});
formatter.result({
  "duration": 1145537975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStepDefinition.user_enters_password(String)"
});
formatter.result({
  "duration": 77466074,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_the_Login_button()"
});
formatter.result({
  "duration": 120552296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Email",
      "offset": 17
    }
  ],
  "location": "LoginStepDefinition.user_should_see(String)"
});
formatter.result({
  "duration": 1172512790,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 49,
  "name": "Failed login due to invalid Email or Pasword format",
  "description": "",
  "id": "login;failed-login-due-to-invalid-email-or-pasword-format",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@LoginFailureFieldValidation"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "Login form displayed",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user enters username \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "user enters password\"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user clicks the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user should see \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 57,
  "name": "",
  "description": "",
  "id": "login;failed-login-due-to-invalid-email-or-pasword-format;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "errorMessage"
      ],
      "line": 58,
      "id": "login;failed-login-due-to-invalid-email-or-pasword-format;;1"
    },
    {
      "cells": [
        "cainaisi@gmail",
        "test1234",
        "Invalid Email"
      ],
      "line": 59,
      "id": "login;failed-login-due-to-invalid-email-or-pasword-format;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 59,
  "name": "Failed login due to invalid Email or Pasword format",
  "description": "",
  "id": "login;failed-login-due-to-invalid-email-or-pasword-format;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@LoginFailureFieldValidation"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "Login form displayed",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user enters username \"cainaisi@gmail\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "user enters password\"test1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user clicks the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user should see \"Invalid Email\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Login_page()"
});
formatter.result({
  "duration": 1938234074,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_form_displayed()"
});
formatter.result({
  "duration": 294239210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cainaisi@gmail",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_enters_username(String)"
});
formatter.result({
  "duration": 1309707062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 21
    }
  ],
  "location": "LoginStepDefinition.user_enters_password(String)"
});
formatter.result({
  "duration": 157299753,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_the_Login_button()"
});
formatter.result({
  "duration": 182488099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Email",
      "offset": 17
    }
  ],
  "location": "LoginStepDefinition.user_should_see(String)"
});
formatter.result({
  "duration": 1169563260,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Login using Facebook account",
  "description": "",
  "id": "login;login-using-facebook-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 62,
      "name": "@loginWithFB"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "Login form displayed",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "user clicks Login with Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "user should see popup",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "user enters valid FB credentials",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "user should be loggedin after popup closed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Login_page()"
});
formatter.result({
  "duration": 1933483062,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_form_displayed()"
});
formatter.result({
  "duration": 199868444,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_Login_with_Facebook()"
});
formatter.result({
  "duration": 150668642,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_see_popup()"
});
formatter.result({
  "duration": 24781037,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_valid_FB_credentials()"
});
formatter.result({
  "duration": 8422737383,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_loggedin_after_popup_closed()"
});
formatter.result({
  "duration": 8265596049,
  "status": "passed"
});
});