let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
import * as os from 'os'; //_splitter_
import { sep } from 'path'; //_splitter_
//append_imports_end
export class apiCalls {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'apiCalls';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new apiCalls(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_apiCalls_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: apiCalls');

    //appendnew_flow_apiCalls_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: apiCalls');

    if (!this.swaggerDocument['paths']['/sendDataToDb/{name}']) {
      this.swaggerDocument['paths']['/sendDataToDb/{name}'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/sendDataToDb/{name}']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/sendDataToDb/:name`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_rd9H4ycYTjHzKuIM(bh);
          //appendnew_next_sd_C5Gy4E9oEuGX4U44
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_C5Gy4E9oEuGX4U44');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getDataToDb']) {
      this.swaggerDocument['paths']['/getDataToDb'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getDataToDb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getDataToDb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_dcIOc9uN4jlR9o6A(bh);
          //appendnew_next_sd_dwmyHuPIqjRwd9zj
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_dwmyHuPIqjRwd9zj');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/delete/{name}']) {
      this.swaggerDocument['paths']['/delete/{name}'] = {
        delete: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/delete/{name}']['delete'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['delete'](
      `${this.serviceBasePath}/delete/:name`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_2doS9tCfJVww5oz1(bh);
          //appendnew_next_sd_JT86ZUVcpRuKAgUB
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JT86ZUVcpRuKAgUB');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/update/{name}/{newName}']) {
      this.swaggerDocument['paths']['/update/{name}/{newName}'] = {
        put: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/update/{name}/{newName}']['put'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['put'](
      `${this.serviceBasePath}/update/:name/:newName`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_va7mBhAgjKVVxV6x(bh);
          //appendnew_next_sd_OaqtsnifsK4c8Fjd
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_OaqtsnifsK4c8Fjd');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/UploadImage/{image}']) {
      this.swaggerDocument['paths']['/UploadImage/{image}'] = {
        post: {
          summary: 'Uploading files',
          description: 'Uploading files(images ,docs and pdf)',
          consumes: ['multipart/formdata'],
          produces: ['application/json'],
          parameters: [
            {
              in: 'body',
              name: 'new',
              description: 'image holder',
              required: true,
            },
          ],
          responses: {
            '200': { description: 'Succefully Uploaded' },
            '500': { description: 'Unexpected field' },
          },
        },
      };
    } else {
      this.swaggerDocument['paths']['/UploadImage/{image}']['post'] = {
        summary: 'Uploading files',
        description: 'Uploading files(images ,docs and pdf)',
        consumes: ['multipart/formdata'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'new',
            description: 'image holder',
            required: true,
          },
        ],
        responses: {
          '200': { description: 'Succefully Uploaded' },
          '500': { description: 'Unexpected field' },
        },
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/UploadImage/:image`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: './images'.replace(/\\|\//g, sep),
        options: [{ name: 'image', maxCount: 1 }],
      }),
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_ksEaJFc9tdXArUkc(bh);
          //appendnew_next_sd_Jb1Dirx623pRaS26
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Jb1Dirx623pRaS26');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_apiCalls_HttpIn
  }
  //   service flows_apiCalls

  //appendnew_flow_apiCalls_start

  async sd_rd9H4ycYTjHzKuIM(bh) {
    try {
      bh.local.query = { name: bh.input.params.name };
      bh.res = { result: 'Success' };
      console.log('bh 22222222222222:', bh.input.params.name);
      bh = await this.sd_r7tTTKDaXf3meX7G(bh);
      //appendnew_next_sd_rd9H4ycYTjHzKuIM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rd9H4ycYTjHzKuIM');
    }
  }

  async sd_r7tTTKDaXf3meX7G(bh) {
    try {
      bh.res = await MongoPersistance.getInstance().insertOne(
        'sd_WsvhA7vgJzLYY1Ap',
        'user',
        bh.local.query,
        {}
      );
      await this.sd_IQCQZIBkA1RcSHm2(bh);
      //appendnew_next_sd_r7tTTKDaXf3meX7G
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_r7tTTKDaXf3meX7G');
    }
  }

  async sd_IQCQZIBkA1RcSHm2(bh) {
    try {
      bh.web.res.status(200).send('{response :"Uploaded Succefully"}');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IQCQZIBkA1RcSHm2');
    }
  }

  async sd_dcIOc9uN4jlR9o6A(bh) {
    try {
      bh.local.query = {};
      bh.res = { result: 'Success' };
      console.log('bh 22222222222222:', bh.input.params.name);
      bh = await this.sd_1j4jVDQrHRtRZFtV(bh);
      //appendnew_next_sd_dcIOc9uN4jlR9o6A
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dcIOc9uN4jlR9o6A');
    }
  }

  async sd_1j4jVDQrHRtRZFtV(bh) {
    try {
      bh.res = await MongoPersistance.getInstance().find(
        'sd_WsvhA7vgJzLYY1Ap',
        'user',
        bh.local.query,
        {}
      );
      await this.sd_tRdUYBcE9Wc2scg6(bh);
      //appendnew_next_sd_1j4jVDQrHRtRZFtV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1j4jVDQrHRtRZFtV');
    }
  }

  async sd_tRdUYBcE9Wc2scg6(bh) {
    try {
      bh.web.res.status(200).send(bh.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tRdUYBcE9Wc2scg6');
    }
  }

  async sd_2doS9tCfJVww5oz1(bh) {
    try {
      bh.local.query = { name: bh.input.params.name };
      bh.res = { result: 'Success' };
      console.log('bh 22222222222222:', bh.input.params.name);
      bh = await this.sd_crhjd0gK52DXEp5T(bh);
      //appendnew_next_sd_2doS9tCfJVww5oz1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2doS9tCfJVww5oz1');
    }
  }

  async sd_crhjd0gK52DXEp5T(bh) {
    try {
      bh.res = await MongoPersistance.getInstance().removeOne(
        'sd_WsvhA7vgJzLYY1Ap',
        'user',
        bh.local.query,
        {}
      );
      await this.sd_IjPHDAQnGS8TEBzK(bh);
      //appendnew_next_sd_crhjd0gK52DXEp5T
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_crhjd0gK52DXEp5T');
    }
  }

  async sd_IjPHDAQnGS8TEBzK(bh) {
    try {
      bh.web.res.status(200).send('{response :"Succefully Deleted"}');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IjPHDAQnGS8TEBzK');
    }
  }

  async sd_va7mBhAgjKVVxV6x(bh) {
    try {
      bh.local.query = { name: bh.input.params.name };
      bh.local.queryUpdateName = { $set: { name: bh.input.params.newName } };

      bh.res = { result: 'Success' };
      console.log('bh 22222222222222:', bh.input.params.name);
      bh = await this.sd_lqIbh2lmhJqwN7ZR(bh);
      //appendnew_next_sd_va7mBhAgjKVVxV6x
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_va7mBhAgjKVVxV6x');
    }
  }

  async sd_lqIbh2lmhJqwN7ZR(bh) {
    try {
      bh.res = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_WsvhA7vgJzLYY1Ap',
        'user',
        bh.local.query,
        bh.local.queryUpdateName,
        {}
      );
      await this.sd_Vh8v2VCmtOzHvkuf(bh);
      //appendnew_next_sd_lqIbh2lmhJqwN7ZR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lqIbh2lmhJqwN7ZR');
    }
  }

  async sd_Vh8v2VCmtOzHvkuf(bh) {
    try {
      bh.web.res.status(200).send('{response :"Succefully Updated"}');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Vh8v2VCmtOzHvkuf');
    }
  }

  async sd_ksEaJFc9tdXArUkc(bh) {
    try {
      bh.local.query = { name: bh.input.params.name };
      bh.res = { result: 'Success' };
      console.log('bh 22222222222222:', bh);
      console.log('bh 22222222222222:', bh);
      await this.sd_OxFwqkpVdMSbo41D(bh);
      //appendnew_next_sd_ksEaJFc9tdXArUkc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ksEaJFc9tdXArUkc');
    }
  }

  async sd_OxFwqkpVdMSbo41D(bh) {
    try {
      bh.web.res.status(200).send('{"response ":"Uploaded Succefully"}');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OxFwqkpVdMSbo41D');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_apiCalls_Catch
}
