import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthenticationService } from './authentication.service';
import { MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const testConfig = {

  addUser: {
    positive: {
      firstName: 'test',
      lastName: 'testLast',
      userId: 'testUser',
      password: 'testPass'
    }
  },

  loginUser: {
    positive: {
      userId: 'testUser',
      password: 'testPass'
    }
  }
}

fdescribe('AuthenticationService', () => {
  let authService: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule, MatToolbarModule, 
        MatSnackBarModule, BrowserAnimationsModule],
      providers: [AuthenticationService],
    });
    authService = TestBed.get(AuthenticationService);
  });


  it('should be created Authenticate Service',
    inject([AuthenticationService], (service: AuthenticationService) => {
      expect(service).toBeTruthy();
    }));

  it('should register user data', fakeAsync(() => {
    let data = testConfig.addUser.positive;
    inject([AuthenticationService, HttpTestingController], (backend: HttpTestingController) => {
      const mockReq = backend.expectOne(authService.authServiceEndpoint);
      expect(mockReq.request.url).toEqual(authService.authServiceEndpoint, 'request url should match with json server api url');
      expect(mockReq.request.method).toBe('POST', 'Should handle requested method type');
      mockReq.flush(data);
      backend.verify();
    });
    authService.registerUser(data).subscribe((res: any) => {
      expect(res).toBeDefined();
      expect(res._body).toBe(data, 'data should be same');
    });
  }));

  it('should login user', fakeAsync(() => {
    let userData = testConfig.loginUser.positive;
    inject([AuthenticationService, HttpTestingController], (backend: HttpTestingController) => {
      const mockReq = backend.expectOne(authService.authServiceEndpoint);
      expect(mockReq.request.url).toEqual(authService.authServiceEndpoint, 'request url should match with json server api url');
      expect(mockReq.request.method).toBe('POST', 'Should handle requested method type');
      mockReq.flush(userData);
      backend.verify();
    });
    authService.loginUser(userData).subscribe((res: any) => {
      expect(res).toBeDefined();
      expect(res._body).toBe(userData, 'data should be same');
    });
  }));
});
