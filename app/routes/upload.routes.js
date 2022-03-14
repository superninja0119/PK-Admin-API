const { store } = require("../middlewares");
const controller = require("../controllers/upload.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/upload/image", store.array('images', 12), controller.uploadImage);
    app.get("/api/file/image/:imageName", controller.getImage)
};