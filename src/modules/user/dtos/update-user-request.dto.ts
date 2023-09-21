import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserRequestDto {
  @ApiProperty({
    example: 'Nome teste',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
