

### **Scenario 1: Investigating API Route Handling**

-   **Breakpoint Location:** `src/app.ts` 
-   **Objective:** Investigating why a particular API route is returning a 404 error despite being defined in the Express app.

#### **Debugger Observations**
-   **Variable States:**
    - `routePath = "/api/v1/health"`
    - `routeHandler = [Function: healthCheckHandler]`
-   **Call Stack:**
    - `app.ts: line 45 - healthCheckRouteHandler()`
    - `app.ts: line 40 - app.get("/api/v1/health", healthCheckRouteHandler)`
    - `server.ts: line 22 - server.listen()`
-   **Behavior:** When accessing `/api/v1/health`, the server is responding with a 404 error. The expected behavior is a JSON response with the server status.

#### **Analysis**
-   What did you learn from this scenario?
    - The route is correctly defined in `app.ts`, but the handler is not being executed as expected.
-   Did you observe any unexpected behavior? If so, what might be the cause?
    - The server is not correctly parsing or recognizing the route, potentially due to missing middleware or incorrect app configuration.
-   Are there areas for improvement or refactoring in this part of the code?
    - Ensure that the route handler is properly linked to the Express app, and check if middleware like `express.json()` is included earlier in the request chain.
-   How does this enhance your understanding of the overall project?
    - This highlights the importance of verifying the correct setup of route handlers and middleware in the API.

---

### **Scenario 2: Testing Health Check Endpoint**

-   **Breakpoint Location:** `test/healthCheck.test.ts` 
-   **Objective:** Verifying the functionality of the health check endpoint with unit tests.

#### **Debugger Observations**
-   **Variable States:**
    - `status = "OK"`
    - `uptime = 12345`
    - `version = "1.0.0"`
-   **Call Stack:**
    - `healthCheck.test.ts: line 22 - testHealthCheck()`
    - `healthCheck.test.ts: line 10 - supertest(app).get("/api/v1/health").expect(200)`
-   **Behavior:** The test runs without errors but is not matching the expected output for the `version` field in the response.

#### **Analysis**
-   What did you learn from this scenario?
    - The health check endpoint is returning the expected status and uptime, but the `version` value might be incorrectly set in the response.
-   Did you observe any unexpected behavior? If so, what might be the cause?
    - The `version` value returned by the route may be hardcoded or missing from the response body.
-   Are there areas for improvement or refactoring in this part of the code?
    - Modify the health check endpoint to dynamically retrieve the version from the `package.json` file or environment variable to ensure it is correctly updated.
-   How does this enhance your understanding of the overall project?
    - Testing reveals potential gaps in how dynamic data (like versioning) is handled and can be addressed by making the code more flexible.

---

### **Scenario 3: Portfolio Performance Calculation Bug**

-   **Breakpoint Location:** `src/portfolio/portfolioPerformance.ts` 
-   **Objective:** Debugging the `calculatePortfolioPerformance()` function to ensure it calculates profit or loss correctly.

#### **Debugger Observations**
-   **Variable States:**
    - `initialInvestment = 10000`
    - `currentValue = 12000`
    - `profitOrLoss = 0.8333` (incorrect calculation)
-   **Call Stack:**
    - `portfolioPerformance.ts: line 35 - calculatePortfolioPerformance()`
    - `portfolioPerformance.test.ts: line 12 - testPortfolioPerformance()`
-   **Behavior:** The function is returning incorrect profit or loss, and the percentage change formula is applied incorrectly.

#### **Analysis**
-   What did you learn from this scenario?
    - The calculation for `profitOrLoss` is being performed as a ratio rather than the actual difference between `currentValue` and `initialInvestment`.
-   Did you observe any unexpected behavior? If so, what might be the cause?
    - The formula `initialInvestment / currentValue` is reversed and should instead be `currentValue - initialInvestment` to calculate the profit or loss.
-   Are there areas for improvement or refactoring in this part of the code?
    - Correct the profit or loss calculation and ensure the percentage change calculation is derived correctly as `(profitOrLoss / initialInvestment) * 100`.
-   How does this enhance your understanding of the overall project?
    - This scenario highlights the importance of ensuring calculations are logically consistent and correctly implemented, especially when financial data is involved.

---

This structure can be applied to any debugging situation you encounter. Each section gives clear insight into the issue, its root cause, and potential improvements.