import { ApiProperty } from '@nestjs/swagger';

class LoginResponseBody {
  @ApiProperty({
    example: 'abcde',
  })
  token: string;
}

export class LoginSuccessResponseDto {
  @ApiProperty({
    example: '200',
  })
  statusCode: number;

  @ApiProperty({
    type: () => LoginResponseBody,
  })
  body: LoginResponseBody;
}
