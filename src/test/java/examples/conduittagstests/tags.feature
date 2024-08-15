Feature: get all tags tests

    Background:
        * url baseUrl
        * path '/api/tags'

    Scenario: tag list contains github
        When method Get
        * def taglist = response
        Then status 200
        And match taglist.tags contains 'GitHub'

    Scenario: tag list 3rd array item is equal to coding
        When method Get
        Then status 200
        * def taglist = response
        And match taglist.tags[2] == 'Coding'
        
    Scenario: tag list array contains only strings and not null values
        When method Get
        Then status 200
        * def taglist = response
        And match taglist.tags[*] == '#notnull'
