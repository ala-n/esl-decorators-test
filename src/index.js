import './global';

import {ESLTrigger} from '@exadel/esl/modules/esl-trigger/core';
import {ESLToggleable} from '@exadel/esl/modules/esl-toggleable/core';

import {ESLDemoInherit} from './demo-inherit/demo-inherit';
import {ESLDemoThrottle} from './demo-throttle/demo-throttle';
import {ESLDemoAttribute} from './demo-attribute/demo-attribute';
import {ESLDemoBind} from './demo-bind/demo-bind';

ESLToggleable.register();
ESLTrigger.register();

ESLDemoAttribute.register();
ESLDemoThrottle.register();
ESLDemoInherit.register();
ESLDemoBind.register();
