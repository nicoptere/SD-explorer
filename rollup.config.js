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

  watch: {
    chokidar: {
      // if the chokidar option is given, rollup-watch will
      // use it instead of fs.watch. You will need to install
      // chokidar separately.
      //
      // this options object is passed to chokidar. if you
      // don't have any options, just pass `chokidar: true`
    },

    // include and exclude govern which files to watch. by
    // default, all dependencies will be watched
    exclude: ["node_modules/**", "python/***", "results/***"],
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
      // outputStyle: "compressed",
    }),

    // JS minification
    // terser(),
  ],
};
