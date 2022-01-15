"use strict";

const { test } = require("tap");
const { build } = require("../../helper");

test("Get List Endpoint", async (t) => {
  const app = build(t);

  const res = await app.inject({
    url: "/",
  });

  t.equal(res.statusCode, 200);
  t.equal(res.headers["content-type"], "application/json; charset=utf-8");
});
