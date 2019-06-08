$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "User should login the Adactin Application",
  "description": "",
  "id": "user-should-login-the-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 336,
  "name": "To check whether “search order id ”query is working and displaying the relevant details. - 117",
  "description": "",
  "id": "user-should-login-the-adactin-application;to-check-whether-“search-order-id-”query-is-working-and-displaying-the-relevant-details.---117",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 335,
      "name": "@tc1"
    }
  ]
});
formatter.step({
  "line": 337,
  "name": "User verify that correct username is displayed on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 338,
  "name": "User should location as in test data \"\u003clocation\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 339,
  "name": "User should hotel as in test data \"\u003chotel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 340,
  "name": "User should room type as in test data \"\u003croomtype\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 341,
  "name": "User should no-of-rooms as in test data \"\u003cno of rooms\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 342,
  "name": "User should enter the today date \"\u003ctodaydate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "User should enter the tomorrow date \"\u003ctoday+date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 344,
  "name": "User should enter the no of Adults \"\u003cadults\u003e\" and number of childrens \"\u003cchild\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 345,
  "name": "User click the search button",
  "keyword": "Then "
});
formatter.step({
  "line": 346,
  "name": "User should click the radiobuttoin",
  "keyword": "And "
});
formatter.step({
  "line": 347,
  "name": "User should click the continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 348,
  "name": "User should enter the \"\u003cfn\u003e\"and\"\u003cln\u003e\"and\"\u003cba\u003e\"and \"\u003ccardnum\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 349,
  "name": "User should enter the card type \"\u003ctype\u003e\" \u0026 \"\u003cmonth\u003e\" \u0026 \"\u003cyear\u003e\" \u0026 \"\u003cccvnum\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 350,
  "name": "User should click the booknow button",
  "keyword": "Then "
});
formatter.step({
  "line": 351,
  "name": "User should generate the order number",
  "keyword": "Then "
});
formatter.step({
  "line": 352,
  "name": "User should click the Booked Itinerary button",
  "keyword": "When "
});
formatter.step({
  "line": 353,
  "name": "User should enter the order id and click the go button",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 354,
      "value": "#Then User Verify that the relevant details are displayed"
    }
  ],
  "line": 356,
  "name": "",
  "description": "",
  "id": "user-should-login-the-adactin-application;to-check-whether-“search-order-id-”query-is-working-and-displaying-the-relevant-details.---117;",
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
        "child",
        "fn",
        "ln",
        "ba",
        "cardnum",
        "type",
        "month",
        "year",
        "ccvnum"
      ],
      "line": 357,
      "id": "user-should-login-the-adactin-application;to-check-whether-“search-order-id-”query-is-working-and-displaying-the-relevant-details.---117;;1"
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "2",
        "01/06/2019",
        "02/06/2019",
        "1",
        "1",
        "thenu",
        "babu",
        "kh road",
        "1234567891234567",
        "VISA",
        "August",
        "2014",
        "1234"
      ],
      "line": 358,
      "id": "user-should-login-the-adactin-application;to-check-whether-“search-order-id-”query-is-working-and-displaying-the-relevant-details.---117;;2"
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
  "duration": 3160528700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_should_Validate_the_login_page()"
});
formatter.result({
  "duration": 483015530,
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
  "duration": 1446512218,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_enter_the_login_button()"
});
formatter.result({
  "duration": 3501588257,
  "status": "passed"
});
formatter.scenario({
  "line": 358,
  "name": "To check whether “search order id ”query is working and displaying the relevant details. - 117",
  "description": "",
  "id": "user-should-login-the-adactin-application;to-check-whether-“search-order-id-”query-is-working-and-displaying-the-relevant-details.---117;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 335,
      "name": "@tc1"
    }
  ]
});
formatter.step({
  "line": 337,
  "name": "User verify that correct username is displayed on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 338,
  "name": "User should location as in test data \"Sydney\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 339,
  "name": "User should hotel as in test data \"Hotel Creek\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 340,
  "name": "User should room type as in test data \"Standard\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 341,
  "name": "User should no-of-rooms as in test data \"2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 342,
  "name": "User should enter the today date \"01/06/2019\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "User should enter the tomorrow date \"02/06/2019\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 344,
  "name": "User should enter the no of Adults \"1\" and number of childrens \"1\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 345,
  "name": "User click the search button",
  "keyword": "Then "
});
formatter.step({
  "line": 346,
  "name": "User should click the radiobuttoin",
  "keyword": "And "
});
formatter.step({
  "line": 347,
  "name": "User should click the continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 348,
  "name": "User should enter the \"thenu\"and\"babu\"and\"kh road\"and \"1234567891234567\"",
  "matchedColumns": [
    8,
    9,
    10,
    11
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 349,
  "name": "User should enter the card type \"VISA\" \u0026 \"August\" \u0026 \"2014\" \u0026 \"1234\"",
  "matchedColumns": [
    12,
    13,
    14,
    15
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 350,
  "name": "User should click the booknow button",
  "keyword": "Then "
});
formatter.step({
  "line": 351,
  "name": "User should generate the order number",
  "keyword": "Then "
});
formatter.step({
  "line": 352,
  "name": "User should click the Booked Itinerary button",
  "keyword": "When "
});
formatter.step({
  "line": 353,
  "name": "User should enter the order id and click the go button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_verify_that_correct_username_is_displayed_on_the_login_page()"
});
formatter.result({
  "duration": 195148901,
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
  "duration": 686789654,
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
  "duration": 546260073,
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
  "duration": 1073340234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 41
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_no_of_rooms_as_in_test_data(String)"
});
formatter.result({
  "duration": 562224715,
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
  "duration": 855702678,
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
  "duration": 1149676118,
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
  "duration": 811791554,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_click_the_search_button()"
});
formatter.result({
  "duration": 6590722148,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_should_click_the_radiobuttoin()"
});
formatter.result({
  "duration": 366416953,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_should_click_the_continue_button()"
});
formatter.result({
  "duration": 1471583880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thenu",
      "offset": 23
    },
    {
      "val": "babu",
      "offset": 33
    },
    {
      "val": "kh road",
      "offset": 42
    },
    {
      "val": "1234567891234567",
      "offset": 55
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_enter_the_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 2701604520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VISA",
      "offset": 33
    },
    {
      "val": "August",
      "offset": 42
    },
    {
      "val": "2014",
      "offset": 53
    },
    {
      "val": "1234",
      "offset": 62
    }
  ],
  "location": "Stepdefinition_Adactin.user_should_enter_the_card_type(String,String,String,String)"
});
formatter.result({
  "duration": 2013814036,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_should_click_the_booknow_button()"
});
formatter.result({
  "duration": 393087511,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_should_generate_the_order_number()"
});
formatter.result({
  "duration": 7889619943,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_should_click_the_Booked_Itinerary_button()"
});
formatter.result({
  "duration": 1809130273,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition_Adactin.user_should_enter_the_order_id_and_click_the_go_button()"
});
formatter.result({
  "duration": 1745460929,
  "status": "passed"
});
});