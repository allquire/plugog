import * as fs from 'fs';
import Plugog from './index';

fs.writeFileSync('/test', '');

const stream = fs.createWriteStream('./temp.log');

const plugog = new Plugog(stream);

const log = plugog.addPlugin('core');

log.i('Info Test.');

console.log('');

log.e('Error Test.');

console.log('');

log.o('Success Test.');

console.log('');
