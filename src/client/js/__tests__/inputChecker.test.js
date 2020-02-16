import {verifyInput} from '../inputChecker.js';

window.alert = () => {};  // provide an empty implementation for window.alert

test('It accepts correct input', () => {
   const result = verifyInput('This is a test only.');
   expect(result).toBeTruthy();
});

test('It rejects incorrect input', () => {
   const result = verifyInput('This is an error');
   expect(result).toBeFalsy();
});