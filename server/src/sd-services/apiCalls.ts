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
          bh = await this.sendDataToDbScript(bh);
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
          bh = await this.getDataToDbScript(bh);
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
          bh = await this.deleteScript(bh);
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
          bh = await this.updateScript(bh);
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
          bh = await this.uploadImageScript(bh);
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

    if (!this.swaggerDocument['paths']['/GetImage/{image}']) {
      this.swaggerDocument['paths']['/GetImage/{image}'] = {
        get: {
          summary: 'Uploading files',
          description: 'Uploading files(images ,docs and pdf)',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/GetImage/{image}']['get'] = {
        summary: 'Uploading files',
        description: 'Uploading files(images ,docs and pdf)',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/GetImage/:image`,
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
          bh = await this.getImageScript(bh);
          //appendnew_next_sd_0VOGk5c2VVKdehBn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0VOGk5c2VVKdehBn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/Uploadpdf/{pdf}']) {
      this.swaggerDocument['paths']['/Uploadpdf/{pdf}'] = {
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
      this.swaggerDocument['paths']['/Uploadpdf/{pdf}']['post'] = {
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
      `${this.serviceBasePath}/Uploadpdf/:pdf`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: './pdf'.replace(/\\|\//g, sep),
        options: [{ name: 'pdf', maxCount: 1 }],
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
          bh = await this.uploadpdfScript(bh);
          //appendnew_next_sd_MJ8cfO2dRHx1hmQa
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_MJ8cfO2dRHx1hmQa');
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

  async sendDataToDbScript(bh) {
    try {
      bh.local.query = { name: bh.input.params.name };
      bh.res = { result: 'Success' };
      console.log('bh 22222222222222:', bh.input.params.name);
      bh = await this.sd_r7tTTKDaXf3meX7G(bh);
      //appendnew_next_sendDataToDbScript
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

  async getDataToDbScript(bh) {
    try {
      bh.local.query = {};
      bh.res = { result: 'Success' };
      console.log('bh 22222222222222:', bh.input.params.name);
      bh = await this.sd_1j4jVDQrHRtRZFtV(bh);
      //appendnew_next_getDataToDbScript
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

  async deleteScript(bh) {
    try {
      bh.local.query = { name: bh.input.params.name };
      bh.res = { result: 'Success' };
      console.log('bh 22222222222222:', bh.input.params.name);
      bh = await this.sd_crhjd0gK52DXEp5T(bh);
      //appendnew_next_deleteScript
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

  async updateScript(bh) {
    try {
      bh.local.query = { name: bh.input.params.name };
      bh.local.queryUpdateName = { $set: { name: bh.input.params.newName } };

      bh.res = { result: 'Success' };
      console.log('bh 22222222222222:', bh.input.params.name);
      bh = await this.sd_lqIbh2lmhJqwN7ZR(bh);
      //appendnew_next_updateScript
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

  async uploadImageScript(bh) {
    try {
      // bh.local.query ={ "name" : bh.input.params.name}
      console.log('bh 22222222222222:', bh.input.files.image[0]);
      bh.res = { result: 'Success' };
      bh.image = bh.input.files.image[0];
      // console.log("bh 22222222222222:",bh)bh.input.files.filename bh.input.files.path
      bh = await this.sd_mboKga4UK8LCiZPe(bh);
      //appendnew_next_uploadImageScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ksEaJFc9tdXArUkc');
    }
  }

  async sd_mboKga4UK8LCiZPe(bh) {
    try {
      bh.res = await MongoPersistance.getInstance().uploadFile(
        'sd_WsvhA7vgJzLYY1Ap',
        'Images',
        bh.image.path,
        bh.image.filename,
        {}
      );
      await this.sd_OxFwqkpVdMSbo41D(bh);
      //appendnew_next_sd_mboKga4UK8LCiZPe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mboKga4UK8LCiZPe');
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

  async getImageScript(bh) {
    try {
      bh.local.query = { filename: bh.input.params.image };
      // bh.res ={result:"Success"}
      // bh.image =bh.input.files.image[0]
      console.log('bh 22222222222222:', bh.input.params);
      // console.log("bh 22222222222222:",bh)bh.input.files.filename bh.input.files.path
      bh = await this.sd_G09SNnNkmc0UvGwe(bh);
      //appendnew_next_getImageScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4J9k1UuwfWI8y8aU');
    }
  }

  async sd_G09SNnNkmc0UvGwe(bh) {
    try {
      bh.res = await MongoPersistance.getInstance().downloadFile(
        'sd_WsvhA7vgJzLYY1Ap',
        'Images',
        bh.local.query,
        bh.metadata
      );
      bh = await this.afterGettingData(bh);
      //appendnew_next_sd_G09SNnNkmc0UvGwe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_G09SNnNkmc0UvGwe');
    }
  }

  async afterGettingData(bh) {
    try {
      console.log('afterGetting data :', bh.res);
      bh.res = bh.res.downloadStream;
      console.log('afterGetting data :', bh.res);
      await this.sd_NNVa4QHzoz7S3OX0(bh);
      //appendnew_next_afterGettingData
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sOYLl0wjuZmaOwnl');
    }
  }

  async sd_NNVa4QHzoz7S3OX0(bh) {
    try {
      bh.res.pipe(bh.web.res);
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NNVa4QHzoz7S3OX0');
    }
  }

  async uploadpdfScript(bh) {
    try {
      // bh.local.query ={ "name" : bh.input.params.name} .input.files.image[0]
      console.log('bh 22222222222222:', bh);
      bh.res = { result: 'Success' };
      // bh.image =bh.input.files.image[0]
      // console.log("bh 22222222222222:",bh)bh.input.files.filename bh.input.files.path
      await this.sd_iaPdQPkyY32xLbah(bh);
      //appendnew_next_uploadpdfScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0gDmKmZg4uwvGqHe');
    }
  }

  async sd_iaPdQPkyY32xLbah(bh) {
    try {
      bh.web.res.status(200).send('{"response ":"Uploaded Succefully"}');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iaPdQPkyY32xLbah');
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
