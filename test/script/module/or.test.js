import or from "../../../src/script/module/or"
import test from "ava"
test("case null", t => {
  t.is(null::or(2), 2)
})
test("case undefined", t => {
  const o = {}
  t.is(o.x::or(0), 0)
})
test("case not null", t => {
  const o = 2
  t.is(o::or(0), 2)
})