## Test case 1: Positive: User profile loads successfully

**Description** : Verify user profile can load successfully
**Preconditions"**: The login page and Profile pages are accessible.
**Steps**:

1. Navigate to the login page.
2. Fill in correct user credentials.
3. Click on Sign in button
4. Wait to be redirected to Home page
5. While on Home page, navigate to "Profile" link
   **Expected result**: The user can successfully open their profile and see their username there.

## ******************************\*\*\*\*******************************

## Test case 2: Positive: Create new post from user profile

**Description** : User can create a new post from their profile page
**Preconditions"**: The login page, Home page, Profile and New Post pages are accessible.
**Steps**:

1. Navigate to the login page.
2. Fill in correct user credentials.
3. Click on Sign in button
4. Wait to be redirected to Home page
5. While on Home page, navigate to "Profile" link
6. Navigate and click on New Post button
7. Wait to be redirected to the New Post page
8. Click the Browse button
9. Upload the selected image
10. Enter post caption
11. Click on "Create post" button
    **Expected result**: The user sees "Post created!" message in the lower right corner of the page and is redirected to profile.

## ********************************\*\*\*********************************

## Test case 3: Positive: Post counter is working and the created post appears in profile (image visible)

**Description** : Assert the posts counter is working and the user can create a new visible post from their profile page.
**Preconditions"**: The login page, Home page, Profile and New Post pages are accessible.
**Steps**:

1. Login successfully
2. Wait to be redirected to Home page
3. While on Home page, navigate to "Profile" link
4. Check and count the posts before creating a new one
5. Navigate and click on New Post button
6. Wait to be redirected to the New Post page
7. Click the Browse button
8. Upload the selected image
9. Enter post caption
10. Click on "Create post" button
11. Check the post counter shows +1 post
12. Assert the new post is created and the image is visible
    **Expected result**: The post counter works correctly and the post is visible.

## ******************************\*\*\*\*******************************

## Test case 4: Positive: Create private post

**Description** : Assert the user can create a private post.
**Preconditions"**: The login page, Home page, Profile and New Post pages are accessible.
**Steps**:

1. Login successfully
2. Wait to be redirected to Home page
3. Navigate and click on "New Post" button
4. Wait to be redirected to the "New Post" page
5. Click the Browse button
6. Upload the selected image
7. Enter post caption
8. Click on the switch button to "Private".
9. Click on "Create post" button
10. The new post is created but only visible in the user profile.
    **Expected result**: The new private post is created.

## ******************************\*\*\*******************************

## Test case 5: Positive: Delete existing post from profile successfully

**Description** : Assert the user can delete their first post
**Preconditions"**: The login page, Home page, Profile pages are accessible.
**Steps**:

1. Login successfully
2. Wait to be redirected to Home page
3. Navigate and click on "Profile" link
4. Wait to be redirected to the "Profile" page
5. Open the first visible post
6. Click on "Delete" button
7. Confirm deletion (Click "Yes" button in modal)
8. Assert the post is deleted and not visible in user's profile.
   **Expected result**: The post is deleted successfully.
