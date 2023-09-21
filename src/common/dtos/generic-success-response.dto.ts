import { ApiProperty } from '@nestjs/swagger';

export class GenericSuccessResponseDto {
  @ApiProperty({
    example: 200,
  })
  statusCode: number;
}
