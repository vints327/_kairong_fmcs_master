import { ajax } from 'utils'

export const inspect = ajax.fetchJSONByPost( 'api/inspect' )
export default inspect;
