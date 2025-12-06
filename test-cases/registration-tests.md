## Test case 1: Positive: Successful registration

**Description** : Verify that a user can successfully register with valid details.
**Preconditions"**: The registration page is accessible.
**Steps**:

1. Navigate to the registration page.
2. Fill in the registration form with valid details (username, email, Birth date, password, verify password, Public info).
3. Submit the registration form.
   **Expected result**: The user is registered successfully.
## *********************************************************************************
## Test case 2: Negative: Username cannot be empty

**Description** : Verify that a user cannot register without filling the "username" input field.
**Preconditions"**: The registration page is accessible.
**Steps**:

1. Navigate to the registration page.
2. Fill in the registration form with empty "username" field and fill the other fileds with valid details (email, Birth date, password, verify password, Public info).
3. Try to submit the registration form.
   **Expected result**: The "Sign In" button is disabled due to the missing "username" input field and the user cannot register.
## *********************************************************************************
## Test case 3: Negative: Email must be valid

**Description** : Verify that a user cannot register with invalid email.
**Preconditions"**: The registration page is accessible.
**Steps**:

1. Navigate to the registration page.
2. Fill in the username, fill invalid email (email must contain "@" and "." to be considered valid).
3. Try to submit the registration form.
   **Expected result**: The "Sign In" button is disabled due to the wrong email input field and the user cannot register.


## *********************************************************************************
## Test case 4: Negative: Passwords must match

**Description** : Verify that a user cannot register without filling the "username" input field.
**Preconditions"**: The registration page is accessible.
**Steps**:

1. Navigate to the registration page.
2. Fill in the registration form (correct username, email, Birth date, password), in field "Confirm Password" fill non matching password and fill "Public info" field correctly.
3. Try to submit the registration form.
   **Expected result**: The "Sign In" button is disabled and the user cannot register.
