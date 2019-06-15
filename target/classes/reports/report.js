$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "User should login the Adactin Application",
  "description": "",
  "id": "user-should-login-the-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "To verify whether the check-outdate field accepts a later date than check in date - 102",
  "description": "",
  "id": "user-should-login-the-adactin-application;to-verify-whether-the-check-outdate-field-accepts-a-later-date-than-check-in-date---102",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@tc1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User verify that correct username is displayed on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User should location as in test data \"\u003clocation\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User should hotel as in test data \"\u003chotel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should room type as in test data \"\u003croomtype\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should no-of-rooms as in test data \"\u003cno of rooms\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User Enter check-in-date as in test data \"\u003c+7date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User Enter check-out-date as in test data \"\u003c+5date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User Verify that system gives an error message for check in date",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User Verify that system gives an error message for check out date",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User click the search button",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "user-should-login-the-adactin-application;to-verify-whether-the-check-outdate-field-accepts-a-later-date-than-check-in-date---102;",
  "rows": [
    {
      "cells": [
        "location",
        "hotel",
        "roomtype",
        "no of rooms",
        "+7date",
        "+5date"
      ],
      "line": 25,
      "id": "user-should-login-the-adactin-application;to-verify-whether-the-check-outdate-field-accepts-a-later-date-than-check-in-date---102;;1"
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1",
        "05/06/2019",
        "03/06/2019"
      ],
      "line": 26,
      "id": "user-should-login-the-adactin-application;to-verify-whether-the-check-outdate-field-accepts-a-later-date-than-check-in-date---102;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "To verify user should login the application - 101",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User should launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User should Validate the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enter the username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enter the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_should_launch_the_adactin_application()"
});
formatter.result({
  "duration": 1279175634,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_should_Validate_the_login_page()"
});
formatter.result({
  "duration": 66092090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 25
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 51
    }
  ],
  "location": "Stepdefinition_Adactin.user_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 276930505,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_enter_the_login_button()"
});
formatter.result({
  "duration": 1256857070,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "To verify whether the check-outdate field accepts a later date than check in date - 102",
  "description": "",
  "id": "user-should-login-the-adactin-application;to-verify-whether-the-check-outdate-field-accepts-a-later-date-than-check-in-date---102;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@tc1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User verify that correct username is displayed on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User should location as in test data \"Sydney\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User should hotel as in test data \"Hotel Creek\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should room type as in test data \"Standard\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should no-of-rooms as in test data \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User Enter check-in-date as in test data \"05/06/2019\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User Enter check-out-date as in test data \"03/06/2019\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User Verify that system gives an error message for check in date",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User Verify that system gives an error message for check out date",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User click the search button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_verify_that_correct_username_is_displayed_on_the_login_page()"
});
formatter.result({
  "duration": 46606507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 38
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_location_as_in_test_data(String)"
});
formatter.result({
  "duration": 118758830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Creek",
      "offset": 35
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_hotel_as_in_test_data(String)"
});
formatter.result({
  "duration": 123549337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Standard",
      "offset": 39
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_room_type_as_in_test_data(String)"
});
formatter.result({
  "duration": 120905590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_no_of_rooms_as_in_test_data(String)"
});
formatter.result({
  "duration": 87766705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05/06/2019",
      "offset": 42
    }
  ],
  "location": "Stepdefinition_Adactin.user_Enter_check_in_date_as_in_test_data(String)"
});
formatter.result({
  "duration": 160165152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03/06/2019",
      "offset": 43
    }
  ],
  "location": "Stepdefinition_Adactin.user_Enter_check_out_date_as_in_test_data(String)"
});
formatter.result({
  "duration": 153085662,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_Verify_that_system_gives_an_error_message_for_check_in_data()"
});
formatter.result({
  "duration": 34205943,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_Verify_that_system_gives_an_error_message_for_check_out_data()"
});
formatter.result({
  "duration": 36297000,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_click_the_search_button()"
});
formatter.result({
  "duration": 113818989,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "To check if error is reported if check-out date field is in the past - 103",
  "description": "",
  "id": "user-should-login-the-adactin-application;to-check-if-error-is-reported-if-check-out-date-field-is-in-the-past---103",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@tc1"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User verify that correct username is displayed on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User should location as in test data \"\u003clocation\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User should hotel as in test data \"\u003chotel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User should room type as in test data \"\u003croomtype\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User should no-of-rooms as in test data \"\u003cno of rooms\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User Enter check-in-date as in test data - before \"\u003c-date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User Enter check-out-date as in test data - before \"\u003c-todaydate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click the search button",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "user-should-login-the-adactin-application;to-check-if-error-is-reported-if-check-out-date-field-is-in-the-past---103;",
  "rows": [
    {
      "cells": [
        "location",
        "hotel",
        "roomtype",
        "no of rooms",
        "-date",
        "-todaydate"
      ],
      "line": 41,
      "id": "user-should-login-the-adactin-application;to-check-if-error-is-reported-if-check-out-date-field-is-in-the-past---103;;1"
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1",
        "26/05/2019",
        "23/05/2019"
      ],
      "line": 42,
      "id": "user-should-login-the-adactin-application;to-check-if-error-is-reported-if-check-out-date-field-is-in-the-past---103;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "To verify user should login the application - 101",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User should launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User should Validate the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enter the username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enter the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_should_launch_the_adactin_application()"
});
formatter.result({
  "duration": 203201494,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_should_Validate_the_login_page()"
});
formatter.result({
  "duration": 25747692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 25
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 51
    }
  ],
  "location": "Stepdefinition_Adactin.user_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 200727228,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_enter_the_login_button()"
});
formatter.result({
  "duration": 414711511,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "To check if error is reported if check-out date field is in the past - 103",
  "description": "",
  "id": "user-should-login-the-adactin-application;to-check-if-error-is-reported-if-check-out-date-field-is-in-the-past---103;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@tc1"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User verify that correct username is displayed on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User should location as in test data \"Sydney\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User should hotel as in test data \"Hotel Creek\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User should room type as in test data \"Standard\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User should no-of-rooms as in test data \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User Enter check-in-date as in test data - before \"26/05/2019\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User Enter check-out-date as in test data - before \"23/05/2019\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click the search button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_verify_that_correct_username_is_displayed_on_the_login_page()"
});
formatter.result({
  "duration": 31179383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 38
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_location_as_in_test_data(String)"
});
formatter.result({
  "duration": 99931417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Creek",
      "offset": 35
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_hotel_as_in_test_data(String)"
});
formatter.result({
  "duration": 124212248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Standard",
      "offset": 39
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_room_type_as_in_test_data(String)"
});
formatter.result({
  "duration": 99335666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_no_of_rooms_as_in_test_data(String)"
});
formatter.result({
  "duration": 60176054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "26/05/2019",
      "offset": 51
    }
  ],
  "location": "Stepdefinition_Adactin.user_Enter_check_in_date_as_in_test_data_before(String)"
});
formatter.result({
  "duration": 137722538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23/05/2019",
      "offset": 52
    }
  ],
  "location": "Stepdefinition_Adactin.user_Enter_check_out_date_as_in_test_data_before(String)"
});
formatter.result({
  "duration": 139639768,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_click_the_search_button()"
});
formatter.result({
  "duration": 79072208,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "To verify whether the select location should be match with search hotel page - 104",
  "description": "",
  "id": "user-should-login-the-adactin-application;to-verify-whether-the-select-location-should-be-match-with-search-hotel-page---104",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@tc1"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "User verify that correct username is displayed on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "User should location as in test data \"\u003clocation\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "User should hotel as in test data \"\u003chotel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User should room type as in test data \"\u003croomtype\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User should no-of-rooms as in test data \"\u003cno of rooms\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User should enter the today date \"\u003ctodaydate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User should enter the tomorrow date \"\u003ctoday+date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User should enter the no of Adults \"\u003cadults\u003e\" and number of childrens \"\u003cchild\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "User click the search button",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 55,
      "value": "#Then User should verify that search location shuold be exactly match with next page of select hotel location"
    }
  ],
  "line": 58,
  "name": "",
  "description": "",
  "id": "user-should-login-the-adactin-application;to-verify-whether-the-select-location-should-be-match-with-search-hotel-page---104;",
  "rows": [
    {
      "cells": [
        "location",
        "hotel",
        "roomtype",
        "no of rooms",
        "todaydate",
        "today+date",
        "adults",
        "child"
      ],
      "line": 59,
      "id": "user-should-login-the-adactin-application;to-verify-whether-the-select-location-should-be-match-with-search-hotel-page---104;;1"
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1",
        "01/06/2019",
        "02/06/2019",
        "1",
        "1"
      ],
      "line": 60,
      "id": "user-should-login-the-adactin-application;to-verify-whether-the-select-location-should-be-match-with-search-hotel-page---104;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "To verify user should login the application - 101",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User should launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User should Validate the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enter the username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enter the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_should_launch_the_adactin_application()"
});
formatter.result({
  "duration": 202647224,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_should_Validate_the_login_page()"
});
formatter.result({
  "duration": 39534128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 25
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 51
    }
  ],
  "location": "Stepdefinition_Adactin.user_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 221193748,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_enter_the_login_button()"
});
formatter.result({
  "duration": 423783687,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "To verify whether the select location should be match with search hotel page - 104",
  "description": "",
  "id": "user-should-login-the-adactin-application;to-verify-whether-the-select-location-should-be-match-with-search-hotel-page---104;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@tc1"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "User verify that correct username is displayed on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "User should location as in test data \"Sydney\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "User should hotel as in test data \"Hotel Creek\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User should room type as in test data \"Standard\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User should no-of-rooms as in test data \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User should enter the today date \"01/06/2019\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User should enter the tomorrow date \"02/06/2019\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User should enter the no of Adults \"1\" and number of childrens \"1\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "User click the search button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_verify_that_correct_username_is_displayed_on_the_login_page()"
});
formatter.result({
  "duration": 31393111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 38
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_location_as_in_test_data(String)"
});
formatter.result({
  "duration": 99586529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Creek",
      "offset": 35
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_hotel_as_in_test_data(String)"
});
formatter.result({
  "duration": 102053289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Standard",
      "offset": 39
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_room_type_as_in_test_data(String)"
});
formatter.result({
  "duration": 104843998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_no_of_rooms_as_in_test_data(String)"
});
formatter.result({
  "duration": 76434386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01/06/2019",
      "offset": 34
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_enter_the_today_date(String)"
});
formatter.result({
  "duration": 157287134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02/06/2019",
      "offset": 37
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_enter_the_tomorrow_date(String)"
});
formatter.result({
  "duration": 167398714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 36
    },
    {
      "val": "1",
      "offset": 64
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_enter_the_no_of_Adults_and_number_of_childrens(String,String)"
});
formatter.result({
  "duration": 208976098,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_click_the_search_button()"
});
formatter.result({
  "duration": 616794983,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 62,
  "name": "To verify whether the checkin and checkout date is match with nextpage - 105",
  "description": "",
  "id": "user-should-login-the-adactin-application;to-verify-whether-the-checkin-and-checkout-date-is-match-with-nextpage---105",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 61,
      "name": "@tc1"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "User verify that correct username is displayed on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "User should location as in test data \"\u003clocation\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "User should hotel as in test data \"\u003chotel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "User should room type as in test data \"\u003croomtype\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User should no-of-rooms as in test data \"\u003cno of rooms\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "User should enter the today date \"\u003ctodaydate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User should enter the tomorrow date \"\u003ctoday+date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User should enter the no of Adults \"\u003cadults\u003e\" and number of childrens \"\u003cchild\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 72,
      "value": "#Then verify the selected checkin date is match with nextpage"
    },
    {
      "line": 73,
      "value": "#Then verify the selected checkout date is match with nextpage"
    }
  ],
  "line": 74,
  "name": "User click the search button",
  "keyword": "Then "
});
formatter.examples({
  "line": 77,
  "name": "",
  "description": "",
  "id": "user-should-login-the-adactin-application;to-verify-whether-the-checkin-and-checkout-date-is-match-with-nextpage---105;",
  "rows": [
    {
      "cells": [
        "location",
        "hotel",
        "roomtype",
        "no of rooms",
        "todaydate",
        "today+date",
        "adults",
        "child"
      ],
      "line": 78,
      "id": "user-should-login-the-adactin-application;to-verify-whether-the-checkin-and-checkout-date-is-match-with-nextpage---105;;1"
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1",
        "01/06/2019",
        "02/06/2019",
        "1",
        "1"
      ],
      "line": 79,
      "id": "user-should-login-the-adactin-application;to-verify-whether-the-checkin-and-checkout-date-is-match-with-nextpage---105;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "To verify user should login the application - 101",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User should launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User should Validate the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enter the username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enter the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_should_launch_the_adactin_application()"
});
formatter.result({
  "duration": 300551584,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_should_Validate_the_login_page()"
});
formatter.result({
  "duration": 29499189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 25
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 51
    }
  ],
  "location": "Stepdefinition_Adactin.user_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 218556716,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_enter_the_login_button()"
});
formatter.result({
  "duration": 487094944,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "To verify whether the checkin and checkout date is match with nextpage - 105",
  "description": "",
  "id": "user-should-login-the-adactin-application;to-verify-whether-the-checkin-and-checkout-date-is-match-with-nextpage---105;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 61,
      "name": "@tc1"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "User verify that correct username is displayed on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "User should location as in test data \"Sydney\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "User should hotel as in test data \"Hotel Creek\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "User should room type as in test data \"Standard\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User should no-of-rooms as in test data \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "User should enter the today date \"01/06/2019\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User should enter the tomorrow date \"02/06/2019\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User should enter the no of Adults \"1\" and number of childrens \"1\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 72,
      "value": "#Then verify the selected checkin date is match with nextpage"
    },
    {
      "line": 73,
      "value": "#Then verify the selected checkout date is match with nextpage"
    }
  ],
  "line": 74,
  "name": "User click the search button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_verify_that_correct_username_is_displayed_on_the_login_page()"
});
formatter.result({
  "duration": 25487347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 38
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_location_as_in_test_data(String)"
});
formatter.result({
  "duration": 90881365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Creek",
      "offset": 35
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_hotel_as_in_test_data(String)"
});
formatter.result({
  "duration": 93017458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Standard",
      "offset": 39
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_room_type_as_in_test_data(String)"
});
formatter.result({
  "duration": 93689457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_no_of_rooms_as_in_test_data(String)"
});
formatter.result({
  "duration": 62114618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01/06/2019",
      "offset": 34
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_enter_the_today_date(String)"
});
formatter.result({
  "duration": 153285957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02/06/2019",
      "offset": 37
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_enter_the_tomorrow_date(String)"
});
formatter.result({
  "duration": 129135892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 36
    },
    {
      "val": "1",
      "offset": 64
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_enter_the_no_of_Adults_and_number_of_childrens(String,String)"
});
formatter.result({
  "duration": 165355855,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_click_the_search_button()"
});
formatter.result({
  "duration": 541569877,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 81,
  "name": "To verify whether the checkin and checkout date is match with nextpage - 106",
  "description": "",
  "id": "user-should-login-the-adactin-application;to-verify-whether-the-checkin-and-checkout-date-is-match-with-nextpage---106",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 80,
      "name": "@tc1"
    }
  ]
});
formatter.step({
  "line": 83,
  "name": "User verify that correct username is displayed on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "User should location as in test data \"\u003clocation\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "User should hotel as in test data \"\u003chotel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "User should room type as in test data \"\u003croomtype\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "User should no-of-rooms as in test data \"\u003cno of rooms\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "User should enter the today date \"\u003ctodaydate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "User should enter the tomorrow date \"\u003ctoday+date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "User should enter the no of Adults \"\u003cadults\u003e\" and number of childrens \"\u003cchild\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "User click the search button",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "verify that room enters in search page should be match with next page",
  "keyword": "Then "
});
formatter.examples({
  "line": 96,
  "name": "",
  "description": "",
  "id": "user-should-login-the-adactin-application;to-verify-whether-the-checkin-and-checkout-date-is-match-with-nextpage---106;",
  "rows": [
    {
      "cells": [
        "location",
        "hotel",
        "roomtype",
        "no of rooms",
        "todaydate",
        "today+date",
        "adults",
        "child"
      ],
      "line": 97,
      "id": "user-should-login-the-adactin-application;to-verify-whether-the-checkin-and-checkout-date-is-match-with-nextpage---106;;1"
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1",
        "01/06/2019",
        "02/06/2019",
        "1",
        "1"
      ],
      "line": 98,
      "id": "user-should-login-the-adactin-application;to-verify-whether-the-checkin-and-checkout-date-is-match-with-nextpage---106;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "To verify user should login the application - 101",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User should launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User should Validate the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enter the username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enter the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_should_launch_the_adactin_application()"
});
formatter.result({
  "duration": 274569621,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_should_Validate_the_login_page()"
});
formatter.result({
  "duration": 25904531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 25
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 51
    }
  ],
  "location": "Stepdefinition_Adactin.user_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 186628298,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_enter_the_login_button()"
});
formatter.result({
  "duration": 549749610,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "To verify whether the checkin and checkout date is match with nextpage - 106",
  "description": "",
  "id": "user-should-login-the-adactin-application;to-verify-whether-the-checkin-and-checkout-date-is-match-with-nextpage---106;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 80,
      "name": "@tc1"
    }
  ]
});
formatter.step({
  "line": 83,
  "name": "User verify that correct username is displayed on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "User should location as in test data \"Sydney\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "User should hotel as in test data \"Hotel Creek\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "User should room type as in test data \"Standard\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "User should no-of-rooms as in test data \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "User should enter the today date \"01/06/2019\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "User should enter the tomorrow date \"02/06/2019\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "User should enter the no of Adults \"1\" and number of childrens \"1\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "User click the search button",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "verify that room enters in search page should be match with next page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_verify_that_correct_username_is_displayed_on_the_login_page()"
});
formatter.result({
  "duration": 44441574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 38
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_location_as_in_test_data(String)"
});
formatter.result({
  "duration": 99951566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Creek",
      "offset": 35
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_hotel_as_in_test_data(String)"
});
formatter.result({
  "duration": 101253291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Standard",
      "offset": 39
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_room_type_as_in_test_data(String)"
});
formatter.result({
  "duration": 106113724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_no_of_rooms_as_in_test_data(String)"
});
formatter.result({
  "duration": 57543764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01/06/2019",
      "offset": 34
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_enter_the_today_date(String)"
});
formatter.result({
  "duration": 149189177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02/06/2019",
      "offset": 37
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_enter_the_tomorrow_date(String)"
});
formatter.result({
  "duration": 152873514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 36
    },
    {
      "val": "1",
      "offset": 64
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_enter_the_no_of_Adults_and_number_of_childrens(String,String)"
});
formatter.result({
  "duration": 147139602,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_click_the_search_button()"
});
formatter.result({
  "duration": 438991157,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.verify_that_room_enters_in_search_page_should_be_match_with_next_page()"
});
formatter.result({
  "duration": 34157351,
  "status": "passed"
});
});