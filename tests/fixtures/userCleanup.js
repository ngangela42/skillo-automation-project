import { test as base } from "@playwright/test";

export const test = base.extend({
  cleanupUser: async ({ request }, use) => {
    let createdUser = null;

    await use(async (username) => {
      createdUser = username;
    });

    if (createdUser) {
      await request.delete(
        `http://training.skillo-bg.com:4300/api/users/${createdUser}`
      );
    }
  },
});
