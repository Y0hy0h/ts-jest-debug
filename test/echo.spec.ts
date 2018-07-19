import {echo} from "../src/echo";

describe('echo', () => {
    it('echoes', () => {
        expect(echo('repeat')).toEqual('repeat')
    })
})