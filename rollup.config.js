import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: {
    file: "dist/assets/index.js",
    format: "iife",
    name: "index",
  },

  plugins: [
    // handles the modules from node_modules
    nodeResolve({
      browser: true,
    }),

    // handles require()
    commonjs({
      sourceMap: true,
    }),

    // transpilation
    babel({
      include: ["**.js", "node_modules/**"],
      babelHelpers: "bundled",
      presets: ["@babel/preset-env"],
    }),

    // SCSS
    scss({
      // Filename to write all styles to
      output: "dist/assets/css/style.css",
      outputStyle: "compressed",
    }),

    // JS minification
    // terser(),
  ],
};
