'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  
  // const { router, controller } = app;
  // router.get('/', controller.home.index);
  app.get('/', 'home.index');
  app.post("/schedule/webapi/ChargeCurInfo/listChargeCurInfo","listChargeCurInfo.result");
  app.post("/hello","hello.result");
};
