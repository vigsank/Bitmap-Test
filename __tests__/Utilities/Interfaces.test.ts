import {BitmapDescription, ErrorInfo} from '../../src/Utilities/Interfaces';
describe('Interfaces test', () => {
  it('test BitmapDescription Interface', () => {
    expect({rowLength: 1, columnHeight: 1} as BitmapDescription).toBeTruthy();
  });

  it('test ErrorInfo Interface', () => {
    expect({type: 1, message: 'Error'} as ErrorInfo).toBeTruthy();
  });
});
