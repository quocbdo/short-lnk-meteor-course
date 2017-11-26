import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import { Links } from '../imports/api/links';
import '../imports/startup/simple-schema-configuration';

Meteor.startup(() => {
  // code to run on server at startup
  WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1);
    const link = Links.findOne({ _id });

    if (link) {
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
      Meteor.call('links.trackVisit', _id);
    } else {
      next()
    }
  });

  // WebApp.connectHandlers.use((req, res, next) => {
  //   console.log('This is from my custom middleware!');
  //   console.log(req.url, req.method, req.headers, req.query);
  //   // * Set HTTP status code
  //   // res.statusCode = 404;
  //   // * Set HTTP headers (appears in dev tools, Network > select line in Name >Headers)
  //   // res.setHeader('my-custom-header', 'Andrew was here');
  //   // * Set HTTP body
  //   // res.write('<h1>This is my middleware at work!</h1>');
  //   // * End HTTP request
  //   // res.end();
  //   next();
  // });
});

// request comes in
// run our middleware one at a time
// send them that page