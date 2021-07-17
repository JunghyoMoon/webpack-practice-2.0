import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, "./src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "My React App",
            template: path.resolve(__dirname, "./src/index.html"),
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
    },
};
