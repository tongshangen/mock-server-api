'use strict';
const json = require('../json/listChargeCurInfo.json');

module.exports = app => {
    class listChargeCurInfoController extends app.Controller {
        * result() {
            const delay = new Promise(function (resolve) {
                setTimeout(() => {
                    resolve(true);
                }, 1000);
            });
            yield delay;
            this.ctx.body = json;
        }
    }
    return listChargeCurInfoController;
};
