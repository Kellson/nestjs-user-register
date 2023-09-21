import { ApiProperty } from '@nestjs/swagger';

class CreateUserResponseBody {
  @ApiProperty({
    example: '1',
  })
  id: number;
}

export class CreateUserSuccessResponseDto {
  @ApiProperty({
    example: 201,
  })
  statusCode: number;

  @ApiProperty({
    type: () => CreateUserResponseBody,
  })
  body: CreateUserResponseBody;
}
