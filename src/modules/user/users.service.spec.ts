import { fakeRequestBody } from '@/common/mocks';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import {
  fakePostUserRequest,
  fakePostUserResponse,
  fakePutUserRequest,
  fakeUser,
} from './mocks';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            save: jest.fn(() => fakeUser),
            create: jest.fn(() => ({})),
            softDelete: jest.fn(),
            findOne: jest.fn(() => fakeUser),
          },
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(usersService).toBeDefined();
  });

  describe('insert user', () => {
    it('insert user should return success', async () => {
      const res = await usersService.insert(fakePostUserRequest);
      expect(res).toStrictEqual(fakePostUserResponse.body.id);
    });
  });

  describe('update user', () => {
    it('update user should return success', async () => {
      const res = await usersService.update(
        fakeRequestBody.user.id,
        fakePutUserRequest,
      );
      expect(res).toBeUndefined();
    });
  });

  describe('findOne user', () => {
    it('findOne user should return success', async () => {
      const res = await usersService.findOne(fakeRequestBody.user);
      expect(res).toStrictEqual(fakeUser);
    });
  });

  describe('delete user', () => {
    it('delete user should return success', async () => {
      const res = await usersService.delete(fakeRequestBody.user.id);
      expect(res).toBeUndefined();
    });
  });
});
