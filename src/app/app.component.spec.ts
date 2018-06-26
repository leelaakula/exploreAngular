import { TestBed, async } from '@angular/core/testing';
import { AppComponent, greet, compute, getCurrencies } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
  const component = new AppComponent();
  it('should increment the count', () => {
    component.clickMe();

    expect(component.count).toBe(1);
  });
});
describe('compute', () => {
  it('compute should return 0', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });
  it('compute should return 1', () => {
    const result = compute(1);
    expect(result).toBe(1);
  });
});
describe('greet', () => {
  it('it should contain name', () => {
    expect(greet('mosh')).toContain('mosh');
  });
});
describe('currencies', () => {
  it('it should contain shit', () => {
    expect(getCurrencies()).toContain('shit');
  });
});
