import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';

@Injectable()
export class VideosService {
  create(createVideoDto: CreateVideoDto) {
    return 'This action adds a new video';
  }

  findAll() {
    return `This action returns all videos`;
  }

  findOne(id: string) {
    return `This action returns a #${id} video`;
  }

  update(id: string, updateVideoDto: UpdateVideoDto) {
    return `This action updates a #${id} video`;
  }

  remove(id: string) {
    return `This action removes a #${id} video`;
  }
}
