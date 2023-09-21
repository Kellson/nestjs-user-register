import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class GetUserBodyDto {
  @ApiProperty({
    example: '1',
  })
  id: string;

  @ApiProperty({
    example: 'Name',
  })
  name: string;

  @ApiProperty({
    example: 'email@teste.com.br',
  })
  email: string;

  @ApiProperty({
    example: '2023-09-07T21:14:24.381Z',
  })
  createdAt: string;

  @ApiProperty({
    example: '2023-09-07T21:14:24.381Z',
  })
  updatedAt: string;

  @ApiPropertyOptional({
    example: '2023-09-07T21:14:24.381Z',
  })
  deletedAt?: string;
}

export class GetUserSuccessResponseDto {
  @ApiProperty({
    example: 200,
  })
  statusCode: number;

  @ApiProperty({
    type: () => GetUserBodyDto,
  })
  body: GetUserBodyDto;
}
