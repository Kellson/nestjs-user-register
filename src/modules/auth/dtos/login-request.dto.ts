import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginRequestDto {
  @ApiProperty({
    example: 'email@teste.com.br',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'Password test',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
