import { user123, User } from './exportingTypes';
import { times } from 'lodash';

function printUser(user: User) {
  console.log(user);
}

printUser(user123);

times(2);
