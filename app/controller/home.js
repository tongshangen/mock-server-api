'use strict';

// const Controller = require('egg').Controller;

// class HomeController extends Controller {
//   async index() {
//     const { ctx } = this;
//     ctx.body = 'hi, egg';
//   }
// }

// module.exports = HomeController;

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      yield new Promise(function (resolve) {
        setTimeout(() => {
          resolve();
        }, 500);
      });
      this.ctx.body = 'hi, egg';
    }
  }
  return HomeController;
};

