"use strict";

const { test } = require("tap");
const { build } = require("../../helper");

test("Get Moves Success Response", async (t) => {
  const app = build(t);

  const res = await app.inject({
    url: "/A12",
  });

  t.equal(res.statusCode, 200);
  t.equal(res.headers["content-type"], "text/plain; charset=utf-8");
});

test("Get Moves Validation Fail Response", async (t) => {
  const app = build(t);

  const res = await app.inject({
    url: "/AO12",
  });

  t.equal(res.statusCode, 400);
});
