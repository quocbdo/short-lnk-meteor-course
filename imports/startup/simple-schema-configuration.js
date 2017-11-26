// All of Andrew Mead's client/Meteor apps have this config
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

SimpleSchema.defineValidationErrorTransform((e) => {
  return new Meteor.Error(400, e.message)
});

