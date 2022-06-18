import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';

describe('PostsController', () => {
  let controller: PostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
    }).compile();

    controller = module.get<PostsController>(PostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call get all posts successfully', async () => {
    const result = [{ title: 'abc', body: 'The Body of abc' }];
    jest.spyOn(controller, 'index').mockImplementation(() => result);
    const posts = await controller.index();
    expect(posts).toBe(result);
    expect(posts.length).toBe(1);
  });
});
