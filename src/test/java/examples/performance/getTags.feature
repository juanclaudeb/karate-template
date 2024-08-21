Feature: get all tags tests

Background:
    * url baseUrl
    * path '/api/tags'

Scenario: get list of tags
    When header karate-name = "Get list of tags"
    When method Get
    * def taglist = response
    Then status 200
