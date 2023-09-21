import { fakeRequestBody } from '@/common/mocks';
import { Test, TestingModule } from '@nestjs/testing';
import {
  fakeDeleteUserResponse,
  fakeGetUserResponse,
  fakePostUserRequest,
  fakePostUserResponse,
  fakePutUserRequest,
  fakePutUserResponse,
  fakeUser,
} from './mocks';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersController: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            insert: jest.fn(() => fakeUser.id),
            update: jest.fn(),
            delete: jest.fn(),
            findOne: jest.fn(() => fakeUser),
          },
        },
      ],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
  });

  describe('post user', () => {
    it('post user should return success', async () => {
      const res = await usersController.post(fakePostUserRequest);
      expect(res).toStrictEqual(fakePostUserResponse);
    });
  });

  describe('put user', () => {
    it('put user should return success', async () => {
      const res = await usersController.put(
        fakePutUserRequest,
        fakeRequestBody,
      );
      expect(res).toStrictEqual(fakePutUserResponse);
    });
  });

  describe('get user', () => {
    it('get user should return success', async () => {
      const res = await usersController.get(fakeRequestBody);
      expect(res).toStrictEqual(fakeGetUserResponse);
    });
  });

  describe('delete user', () => {
    it('delete user should return success', async () => {
      const res = await usersController.delete(fakeRequestBody);
      expect(res).toStrictEqual(fakeDeleteUserResponse);
    });
  });
});
