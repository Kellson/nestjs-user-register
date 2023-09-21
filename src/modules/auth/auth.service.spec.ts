import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { fakeUser } from '../user/mocks';
import { UsersService } from '../user/users.service';
import { AuthService } from './auth.service';
import { fakeLoginRequest, fakeLoginResponse } from './mocks';

describe('AuthService', () => {
  let authService: AuthService;
  let userRepository: Repository<UserEntity>;
  let usersService: UsersService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        UsersService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            findOne: jest.fn(() => fakeUser),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(() => fakeLoginResponse.body.token),
          },
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
    userRepository = module.get<Repository<UserEntity>>(
      getRepositoryToken(UserEntity),
    );
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
    expect(usersService).toBeDefined();
    expect(jwtService).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  describe('login', () => {
    it('login should return success', async () => {
      const res = await authService.login(fakeLoginRequest);
      expect(res).toStrictEqual(fakeLoginResponse.body);
    });

    it('login should throw UnauthorizedException if user does not exists', async () => {
      jest
        .spyOn(userRepository, 'findOne')
        .mockImplementationOnce(async () => undefined);
      await expect(authService.login(fakeLoginRequest)).rejects.toThrowError(
        new UnauthorizedException('Email e/ou senha inválidos(s)'),
      );
    });
  });
});
