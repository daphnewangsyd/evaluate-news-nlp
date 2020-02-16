import {handleSubmit} from "../formHandler";

describe('Test Form Handler', ()=>{
    const event = { preventDefault: () => {} };
    beforeEach(() => {
        jest.spyOn(event, 'preventDefault');
    });
    test('It calls the handler', () =>{
        document.body.innerHTML = '<input id="name" type="text" name="input" value="Test" >';
        handleSubmit(event);
        expect(event.preventDefault).toBeCalled();
    });
});