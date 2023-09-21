import { successBody } from '@/common/utils';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginRequestDto, LoginSuccessResponseDto } from './dtos';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOkResponse({
    type: LoginSuccessResponseDto,
  })
  @Post('login')
  async login(@Body() body: LoginRequestDto) {
    const tokenBody = await this.authService.login(body);
    return successBody(tokenBody);
  }
}
