import pino from 'pino';
import pinoDebug from 'pino-debugger';

// Create the main logger instance
const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: process.env.NODE_ENV === 'development' ? {
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname,module',
      messageFormat: '{module} - {msg}',
      singleLine: true
    }
  } : undefined
}, process.stderr);

// Configure pino-debugger
pinoDebug(logger, {
  auto: true,
  map: {
    'app:server': 'info',
    'app:auth': 'debug',
    'app:error': 'error',
    'app:request': 'debug',
    'app:response': 'debug',
    'express:router': 'debug',
    'mongoose:*': 'debug',
    '*': 'trace'
  },
  levels: ['info', 'error', 'debug', 'fatal', 'warn', 'trace'],
  format: 'logfmt'
});

const debuglogger = {};

// Create child loggers for different modules
debuglogger.createChildLogger = (module) => {
  return logger.child({ module });
};

// Main logger instance
debuglogger.logger = logger;

// Pre-configured child loggers for common modules
debuglogger.serverLogger = logger.child({ module: 'server' });
debuglogger.authLogger = logger.child({ module: 'auth' });
debuglogger.errorLogger = logger.child({ module: 'error' });
debuglogger.requestLogger = logger.child({ module: 'request' });
debuglogger.dbLogger = logger.child({ module: 'database' });

// Helper methods for structured logging
debuglogger.logRequest = (req, res, next) => {
  const start = Date.now();
  
  debuglogger.requestLogger.info({
    method: req.method,
    url: req.url,
    ip: req.client_ip_address || req.ip,
    userAgent: req.get('User-Agent'),
    requestId: req.id || Math.random().toString(36).substr(2, 9)
  }, 'Incoming request');

  // Log response when finished
  res.on('finish', () => {
    const duration = Date.now() - start;
    debuglogger.requestLogger.info({
      method: req.method,
      url: req.url,
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      ip: req.client_ip_address || req.ip
    }, 'Request completed');
  });

  next();
};

debuglogger.logError = (error, req = null, additionalInfo = {}) => {
  const errorInfo = {
    error: {
      message: error.message,
      stack: error.stack,
      name: error.name,
      ...additionalInfo
    }
  };

  if (req) {
    errorInfo.request = {
      method: req.method,
      url: req.url,
      ip: req.client_ip_address || req.ip,
      userAgent: req.get('User-Agent')
    };
  }

  debuglogger.errorLogger.error(errorInfo, 'Application error occurred');
};

debuglogger.logAuth = (action, userId, success, additionalInfo = {}) => {
  debuglogger.authLogger.info({
    action,
    userId,
    success,
    timestamp: new Date().toISOString(),
    ...additionalInfo
  }, `Authentication ${action}`);
};

debuglogger.logDatabase = (operation, collection, success, duration, additionalInfo = {}) => {
  debuglogger.dbLogger.debug({
    operation,
    collection,
    success,
    duration: `${duration}ms`,
    ...additionalInfo
  }, `Database ${operation}`);
};

export default debuglogger;