import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndFilterBarComponent } from './search-and-filter-bar.component';

describe('SearchAndFilterBarComponent', () => {
  let component: SearchAndFilterBarComponent;
  let fixture: ComponentFixture<SearchAndFilterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchAndFilterBarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAndFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event when view button is clicked', () => {
    // Spy on method called when button is clicked
    component.ngOnInit();
    spyOn(component, 'toggleDisplay');

    // Identify button and click
    let button = fixture.debugElement.nativeElement.querySelector('button.search-and-filter__grid-view-icon');
    button.click();

    // Detect changes and expect changeDisplay() method to have been called
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.toggleDisplay).toHaveBeenCalled();
    });
  });

  it('should emit event when sort button is clicked', () => {
    // Spy on method called when button is clicked
    spyOn(component, 'sort');

    // Identify button and click
    let button = fixture.debugElement.nativeElement.querySelector('button.search-and-filter__sort-view-icon');
    button.click();

    // Detect changes and expect send() method to have been called
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.sort).toHaveBeenCalled();
    });
  });
});
