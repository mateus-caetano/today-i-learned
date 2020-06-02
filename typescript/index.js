"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (res) {
    console.log(res.data);
});
