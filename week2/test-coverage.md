# Test Coverage
# **What is Test Coverage?** :point_down:
It is a technique to ensure that your tests are testing your code or how much of your code you exercised by running the test.


# **Benefits of Test Coverage**
- It can assure the quality of the test and defect prevention at early stages of project life cycle.
- It can help identify what portions of the code were actually touched for the release or fix.
- Determine the paths in your application that were not tested.
- Time, scope and cost can be kept under control.
- Gaps in requirements, test cases and defects at the unit level and code level can be found in an easy way.



![alt text](https://www.simform.com/wp-content/uploads/2018/03/Test-Coverage-cover.png)

# **Istanbul and nyc**
As for the relationship between istanbul and nyc; nyc did start separately, but we(istanbul) decided to merge the two projects together as Istanbul moved towards a 2.0 API ... the idea being that nyc would provide the command line interface to this new API
[was a response from one of the contributers](https://github.com/istanbuljs/nyc/issues/524)
Nyc command to use for html report
```json
{
    "scripts": {
        "test": "node ./test/exercise1.test.js | tap-spec",
        "cover": "nyc npm run test",
        "cover-icov": "nyc --reporter=lcov npm test"
    },
}
```
# **100 Percent Unit Test Coverage Is Not Enough !!**
Many people equate 100 percent unit test coverage with high code quality, but that is not enough. Code coverage tools only measure whether the tests execute the code; they make no judgment on the effectiveness of the tests.
