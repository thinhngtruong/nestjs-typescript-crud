import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { posts } from '../src/posts/posts.controller';

describe('Cats', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET posts`, () => {
    return request(app.getHttpServer()).get('/posts').expect(200).expect(posts);
  });

  afterAll(async () => {
    await app.close();
  });
});
