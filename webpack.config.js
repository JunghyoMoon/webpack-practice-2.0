const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/main.js",
    },
    output: {
        // path 모듈로 절대경로 생성?
        path: path.resolve("./dist"),
        // 이름을 아래와 같이 지정할 경우, entry가 여러개일 때 output을 동적으로 지정할 수 있다.
        filename: "[name].js",
    },
};
