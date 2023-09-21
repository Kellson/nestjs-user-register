import { GenericSuccessResponseDto } from '@/common/dtos';
import { successBody } from '@/common/utils';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtGuard } from '../auth/jwt.guard';
import {
  CreateUserRequestDto,
  CreateUserSuccessResponseDto,
  GetUserSuccessResponseDto,
  UpdateUserRequestDto,
} from './dtos';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiCreatedResponse({
    type: CreateUserSuccessResponseDto,
  })
  @Post()
  async post(@Body() body: CreateUserRequestDto) {
    const res = await this.usersService.insert(body);
    return successBody({ id: res }, 201);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    type: GenericSuccessResponseDto,
  })
  @Put()
  @UseGuards(JwtGuard)
  async put(@Body() body: UpdateUserRequestDto, @Req() req: any) {
    await this.usersService.update(req.user.id, body);
    return successBody();
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    type: GenericSuccessResponseDto,
  })
  @Delete()
  @UseGuards(JwtGuard)
  async delete(@Req() req: any) {
    await this.usersService.delete(req.user.id);
    return successBody();
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    type: GetUserSuccessResponseDto,
  })
  @Get()
  @UseGuards(JwtGuard)
  async get(@Req() req: any) {
    const res = await this.usersService.findOne({ id: req.user.id });
    return successBody({ ...res, password: undefined });
  }
}
