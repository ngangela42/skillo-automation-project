## Test case 1: Positive: Valid user should login successfully

**Description** : Verify user can successfully logout
**Preconditions"**: The login page is accessible.
**Steps**:

1. Navigate to the login page.
2. Fill in the correct username or email and correct password.
3. Click on Sign In button
   **Expected result**: The user is logged in successfully and redirected to the Home page.



## Test case 2: Negative: Login should fail for wrongUsername/wrongPassword/emptyUsername/emptyPassword/

**Description** : Verify that a user cannot login with invalid credentials.
**Preconditions"**: The login page is accessible.
**Steps**:

1. Navigate to the login page.
2. Fill username or email from users.json file and fill password if username or email is not empty.
3. Click on Sign In button
   **Expected result**: The user is not logged in and remains on the registration page.
