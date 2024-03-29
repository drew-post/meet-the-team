import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from 'src/app/models/users.model';

import { TeamGridViewComponent } from './team-grid-view.component';

let exampleUser1: User = {
  gender:"male",
  name: {
    title:"Mr",
    first:"Adonai",
    last:"Nunes"
  },
  location: {
    street: {
      number:1227,
      name:"Rua Rio de Janeiro "
    },
    city:"Guarapuava",
    state:"Ceará",
    country:"Brazil",
    postcode:54807,
    coordinates: {
      latitude:"-68.9671",
      longitude:"-41.7292"
    },
    timezone: {
      offset:"-12:00",
      description:"Eniwetok, Kwajalein"
    }
  },
  email:"adonai.nunes@example.com",
  login:{
    uuid:"0b019537-63b4-41fb-b544-f1079c238d93",
    username:"brownfrog945",
    password:"flicks",
    salt:"ylSqg0TU",
    md5:"ef173397cf6d547481253ee7864d79b4",
    sha1:"056910b0c58c3c53c533e4d6bf67c9dbb8774439",sha256:"81cbe71ddff7ab54780850c97d70b7fd4f72db6087c5610fd20c68c1452f9e3e"
  },
  dob: {
    date:"1950-02-01T08:19:56.232Z",
    age:72
  },
  registered: {
    date:"2002-12-08T16:27:27.973Z",
    age:20
  },
  phone:"(57) 1258-6250",
  cell:"(90) 2124-1893",
  id: {
    name:"",
    value:"id"
  },
  picture: {
    large:"https://randomuser.me/api/portraits/men/46.jpg",
    medium:"https://randomuser.me/api/portraits/med/men/46.jpg",
    thumbnail:"https://randomuser.me/api/portraits/thumb/men/46.jpg"
  },
  nat:"BR"
}

let exampleUser2: User = {
  gender:"male",
  name: {
    title:"Mr",
    first:"Mustafa",
    last:"Taşlı"
  },
  location: {
    street: {
      number:4880,
      name:"Necatibey Cd"
    },
    city:"Aydın",
    state:"Aksaray",
    country:"Turkey",
    postcode:34905,
    coordinates: {
      latitude:"9.9563",
      longitude:"-168.2362"
    },
    timezone: {
      offset:"-3:30",
      description:"Newfoundland"
    }
  },
  email:"mustafa.tasli@example.com",
  login: {
    uuid:"f142371d-f4e1-4ac5-b81d-4aa5c2869d8c",
    username:"lazypeacock222",
    password:"smokey1",
    salt:"OQwUiHxJ",
    md5:"2af4a704f5b88485e0b76a64c19fdd25",
    sha1:"01c59320b242de8ab88d301d389727becd871b72",
    sha256:"eb286345075ebb37470e41c9a01b48e9a6e6954fb5ca76f146d8ca405715975e"
  },
  dob: {
    date:"1983-02-15T12:57:59.983Z",
    age:39
  },
  registered: {
    date:"2008-04-01T02:23:46.740Z",
    age:14
  },
  phone:"(275)-723-2586",
  cell:"(201)-101-6213",
  id: {
    name:"",
    value:"null"
  },
  picture: {
    large:"https://randomuser.me/api/portraits/men/39.jpg",
    medium:"https://randomuser.me/api/portraits/med/men/39.jpg",
    thumbnail:"https://randomuser.me/api/portraits/thumb/men/39.jpg"
  },
  nat:"TR"
}

let exampleResults: User[] = [exampleUser1, exampleUser2];

describe('TeamGridViewComponent', () => {
  let component: TeamGridViewComponent;
  let fixture: ComponentFixture<TeamGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamGridViewComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamGridViewComponent);
    component = fixture.componentInstance;
    component.users = exampleResults;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call fill grid member cards with information', () => {

    // Name field
    let name = fixture.debugElement.nativeElement.querySelector('p.grid-view__name');
    expect(name).toBeTruthy();

    // Image field
    let image = fixture.debugElement.nativeElement.querySelector('img.grid-view__image');
    expect(image).toBeTruthy();

    // City field
    let city = fixture.debugElement.nativeElement.querySelector('p.grid-view__city');
    expect(city).toBeTruthy();

    // Contact field
    let contactInfo = fixture.debugElement.nativeElement.querySelector('div.grid-view__contact-info');
    expect(contactInfo).toBeTruthy();

  });
});
