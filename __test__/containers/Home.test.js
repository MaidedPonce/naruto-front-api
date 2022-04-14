import React from 'react'
import { mount } from 'enzyme'
import Home from "../../containers/Home"

describe(('Serie de pruebas a Home'), () => {
    const home = mount(<Home />)
    test('Comprobando si hay un home', () => {
        expect(home.length).toEqual(1)
    })
})

