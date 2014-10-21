import Ember from 'ember';
import momentjs from 'moment';

function ago(value, maybeInput, maybeOutput) {
  var length = arguments.length;
  var input, output;

  if (length === 1) {
    throw new TypeError('Invalid Number of arguments, expected atleast 1');
  } else if (length === 2 ) {
    input = 'LLLL';
  } else if (length > 3) {
    input  = maybeInput;
    output = maybeOutput;
  }

  return momentjs(value, input).fromNow();
}

export {
  ago
};

export default Ember.Handlebars.makeBoundHelper(ago);
