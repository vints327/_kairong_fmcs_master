import { ajax } from 'utils'

export const warning = ajax.fetchJSONByPost( 'api/warning' )
export default warning;
