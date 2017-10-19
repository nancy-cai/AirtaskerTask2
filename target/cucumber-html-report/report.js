$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/Login.feature");
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
  "duration": 10437927901,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_form_displayed()"
});
formatter.result({
  "duration": 304830025,
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
  "duration": 1371331161,
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
  "duration": 161907754,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_the_Login_button()"
});
formatter.result({
  "duration": 182164938,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_see_the_greeting_message()"
});
formatter.result({
  "duration": 4153850469,
  "status": "passed"
});
formatter.after({
  "duration": 4449643852,
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
  "duration": 2366446618,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_form_displayed()"
});
formatter.result({
  "duration": 270672197,
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
  "duration": 1338529580,
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
  "duration": 83190124,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_the_Login_button()"
});
formatter.result({
  "duration": 98313877,
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
  "duration": 1140336197,
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
  "duration": 2671766123,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_form_displayed()"
});
formatter.result({
  "duration": 188696889,
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
  "duration": 1364997136,
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
  "duration": 253351506,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_the_Login_button()"
});
formatter.result({
  "duration": 192097580,
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
  "duration": 1145321482,
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
  "duration": 2235580049,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_form_displayed()"
});
formatter.result({
  "duration": 157159902,
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
  "duration": 1406218271,
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
  "duration": 225805037,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_the_Login_button()"
});
formatter.result({
  "duration": 174185876,
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
  "duration": 1162163753,
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
  "duration": 2013298173,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_form_displayed()"
});
formatter.result({
  "duration": 332396642,
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
  "duration": 1426773334,
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
  "duration": 125883260,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_the_Login_button()"
});
formatter.result({
  "duration": 142008889,
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
  "duration": 1178412642,
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
  "duration": 1948736000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_form_displayed()"
});
formatter.result({
  "duration": 172090469,
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
  "duration": 1184696889,
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
  "duration": 125524938,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_the_Login_button()"
});
formatter.result({
  "duration": 96037926,
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
  "duration": 1138422123,
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
  "duration": 1860993185,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_form_displayed()"
});
formatter.result({
  "duration": 164408494,
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
  "duration": 1208390321,
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
  "duration": 120410074,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_the_Login_button()"
});
formatter.result({
  "duration": 162364444,
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
  "duration": 1131302716,
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
  "duration": 2092275358,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_form_displayed()"
});
formatter.result({
  "duration": 206985877,
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
  "duration": 1311786667,
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
  "duration": 154065777,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_the_Login_button()"
});
formatter.result({
  "duration": 149204543,
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
  "duration": 1135440198,
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
  "duration": 1916052148,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.login_form_displayed()"
});
formatter.result({
  "duration": 213294222,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_Login_with_Facebook()"
});
formatter.result({
  "duration": 277870617,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_see_popup()"
});
formatter.result({
  "duration": 39265185,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_valid_FB_credentials()"
});
formatter.result({
  "duration": 6368050567,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_loggedin_after_popup_closed()"
});
formatter.result({
  "duration": 8265359012,
  "status": "passed"
});
});