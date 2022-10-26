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
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../middleware/Middleware'; //_splitter_
import * as settings from '../../config/config'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class middleware {
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
    this.serviceName = 'middleware';
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
      instance = new middleware(
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
      //appendnew_flow_middleware_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: middleware');

    //appendnew_flow_middleware_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: middleware');
    //appendnew_flow_middleware_HttpIn
  }
  //   service flows_middleware

  async check(file: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          file: file,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_dcVKkfzEWldR1nGh(bh);
      //appendnew_next_check
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_07aHpkXJJbVMAfP8');
    }
  }

  //appendnew_flow_middleware_start

  async sd_dcVKkfzEWldR1nGh(bh) {
    try {
      // const util = require("util");
      // const multer = require("multer");
      // const { GridFsStorage } = require("multer-gridfs-storage");
      // const dbConfig = require("../config/db");

      // var storage = new GridFsStorage({
      //   url: dbConfig.url + dbConfig.database,
      //   options: { useNewUrlParser: true, useUnifiedTopology: true },
      //   file: (req, file) => {
      //     const match = ["image/png", "image/jpeg"];

      //     if (match.indexOf(file.mimetype) === -1) {
      //       const filename = `${Date.now()}-BK-${file.originalname}`;
      //       return filename;
      //     }

      //     return {
      //       bucketName: dbConfig.imgBucket,
      //       filename: `${Date.now()}-BK-${file.originalname}`
      //     };
      //   }
      // });

      // var uploadFiles = multer({ storage: storage }).single("file");
      // var uploadFilesMiddleware = util.promisify(uploadFiles);
      // module.exports = uploadFilesMiddleware;
      //appendnew_next_sd_dcVKkfzEWldR1nGh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dcVKkfzEWldR1nGh');
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
  //appendnew_flow_middleware_Catch
}
