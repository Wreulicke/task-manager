import babel from "rollup-plugin-babel";
import eslint from "rollup-plugin-eslint";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";

const env = (process.env) || {}
const m = {
  entry: "src/index.js",
  dest: "target/index.js",
  format: "umd",
  moduleName: "task-manager",
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV || "development")
    }),
    eslint({
      exclude: [
        "src/styles/**",
      ]
    }),
    babel({
      babelrc: false,
      presets: [
        ["es2015", {
          modules: false
        }],
        "stage-0",
        "react"
      ],
      exclude: "node_modules/**"
    }),
    commonjs(),
    (env.NODE_ENV === "production" && uglify()),
  ]
}
export default m;