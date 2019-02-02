import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavUserAvatarComponent } from './side-nav-user-avatar.component';

describe('SideNavUserAvatarComponent', () => {
  let component: SideNavUserAvatarComponent;
  let fixture: ComponentFixture<SideNavUserAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavUserAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavUserAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
