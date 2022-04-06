import { Test, TestingModule } from '@nestjs/testing';
import { PostMapperServiceService } from './post-mapper-service.service';

describe('PostMapperServiceService', () => {
  let service: PostMapperServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostMapperServiceService],
    }).compile();

    service = module.get<PostMapperServiceService>(PostMapperServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
