import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {HousingLocation} from '../housinglocation';

describe('HousingLocation', () => {
  let component: HousingLocation;
  let fixture: ComponentFixture<HousingLocation>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ HousingLocation ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HousingLocation);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});