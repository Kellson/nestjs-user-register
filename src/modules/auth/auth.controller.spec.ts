import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { fakeLoginRequest, fakeLoginResponse } from './mocks';

describe('AuthController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            login: jest.fn(() => fakeLoginResponse.body),
          },
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
  });

  describe('login user', () => {
    it('login user should return success', async () => {
      const res = await authController.login(fakeLoginRequest);
      expect(res).toStrictEqual(fakeLoginResponse);
    });
  });
});
