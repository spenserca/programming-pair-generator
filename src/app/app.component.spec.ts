import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component;

  beforeEach(() => {
    component = new AppComponent();
  });

  it(`should have as title 'programming-pair-generator'`, () => {
    expect(component.title).toEqual('programming-pair-generator');
  });
});
