import { UserEntity } from '../entities/user.entity';

export const fakeUser: UserEntity = {
  id: '8d57f094-8eba-482d-99b5-9bed4e554c04',
  email: 'teste@teste.com.br',
  name: 'Nome Teste',
  createdAt: new Date(2023, 0, 20),
  updatedAt: new Date(2023, 0, 20),
  password: '1234',
  deletedAt: null,
};
