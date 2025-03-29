import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { VideosService } from './videos.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { LoggerInterceptor } from 'src/utils/logger.interceptor';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from 'src/utils/media.handle';

@Controller('videos')
@ApiBearerAuth()
@UseInterceptors(LoggerInterceptor)
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Post()
  create(@Body() createVideoDto: CreateVideoDto) {
    return this.videosService.create(createVideoDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('avatar', { storage }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  @Get()
  findAll() {
    return this.videosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videosService.update(id, updateVideoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videosService.remove(id);
  }
}
