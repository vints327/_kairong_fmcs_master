import {
  routerReducer as routing,
} from 'react-router-redux'
import {
  combineReducers,
} from 'redux'


import tabListResult from './tabList'

import {
  loginResponse, Breadcrumb,
} from './common'


// bom
import {
  device,
  deviceModel,
  deviceType,
  // DevCheck,
  deviceBrand,
} from './device'
// bom
import {
  productOrder,
  productTask,
  productJob,
  productDist,
  Feeding,
} from './production'

// bom
import {
  UserAccount,
  UserGroup,
  UserAuth,
  UserRole,
} from './user'

import { AuthGroup, AuthCategory } from './auth'

const rootReducer = combineReducers( {
    routing,
    config: ( state = {} ) => state,
    tabListResult,

    loginResponse,
    Breadcrumb,

    device,
    deviceModel,
    deviceType,
    deviceBrand,
    productOrder,
    productTask,
    productJob,
    productDist,
    Feeding,

    UserAccount,
    UserGroup,
    UserAuth,
    UserRole,

    AuthGroup,
    AuthCategory,
} );

export default rootReducer;
