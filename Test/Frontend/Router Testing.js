/// Router Testing

import { createRouter, createWebHistory } from "vue-router";

test("router works", () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: "/", component: {} }]
  });

  expect(router).toBeDefined();
});


