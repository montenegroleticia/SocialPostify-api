import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PrismaModule } from '../src/prisma/prisma.module';
import { PrismaService } from '../src/prisma/prisma.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, PrismaModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prisma = app.get(PrismaService);

    await prisma.publications.deleteMany();
    await prisma.medias.deleteMany();
    await prisma.posts.deleteMany();

    await app.init();
  });

  it('GET /health', () => {
    return request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect('I’m okay!');
  });

  it('GET /medias', () => {
    return request(app.getHttpServer()).get('/medias').expect(200).expect([]);
  });

  it('GET /posts', () => {
    return request(app.getHttpServer()).get('/posts').expect(200).expect([]);
  });

  it('GET /publications', () => {
    return request(app.getHttpServer())
      .get('/publications')
      .expect(200)
      .expect([]);
  });

  it('POST /medias', () => {
    return request(app.getHttpServer())
      .post('/medias')
      .send({
        title: 'Instagram',
        username: 'myusername',
      })
      .expect(201);
  });

  it('POST /posts', () => {
    return request(app.getHttpServer())
      .post('/posts')
      .send({
        title: 'Why you should have a guinea pig?',
        text: 'https://www.guineapigs.com/why-you-should-guinea',
      })
      .expect(201);
  });

  it('POST /publications', async () => {
    const media = await prisma.medias.create({
      data: {
        title: 'Instagram',
        username: 'myusername',
      },
    });

    const post = await prisma.posts.create({
      data: {
        title: 'Why you should have a guinea pig?',
        text: 'https://www.guineapigs.com/why-you-should-guinea',
      },
    });

    return request(app.getHttpServer())
      .post('/publications')
      .send({
        mediaId: media.id,
        postId: post.id,
        date: '2023-08-21T13:25:17.352Z',
      })
      .expect(201);
  });

  it('GET /media/:id', async () => {
    const media = await prisma.medias.create({
      data: {
        title: 'Instagram',
        username: 'myusername',
      },
    });

    return request(app.getHttpServer()).get(`/medias/${media.id}`).expect(200);
  });

  it('GET /posts/:id', async () => {
    const post = await prisma.posts.create({
      data: {
        title: 'Why you should have a guinea pig?',
        text: 'https://www.guineapigs.com/why-you-should-guinea',
      },
    });

    return request(app.getHttpServer()).get(`/posts/${post.id}`).expect(200);
  });

  it('GET /publications/:id', async () => {
    const media = await prisma.medias.create({
      data: {
        title: 'Instagram',
        username: 'myusername',
      },
    });

    const post = await prisma.posts.create({
      data: {
        title: 'Why you should have a guinea pig?',
        text: 'https://www.guineapigs.com/why-you-should-guinea',
      },
    });

    const publications = await prisma.publications.create({
      data: {
        mediaId: media.id,
        postId: post.id,
        date: '2023-08-21T13:25:17.352Z',
      },
    });

    return request(app.getHttpServer())
      .get(`/publications/${publications.id}`)
      .expect(200);
  });

  it('PUT /media/:id', async () => {
    const media = await prisma.medias.create({
      data: {
        title: 'Instagram',
        username: 'myusername',
      },
    });

    return request(app.getHttpServer())
      .put(`/medias/${media.id}`)
      .send({
        title: 'Instagram',
        username: 'myuser',
      })
      .expect(200);
  });

  it('PUT /posts/:id', async () => {
    const post = await prisma.posts.create({
      data: {
        title: 'Why you should have a guinea pig?',
        text: 'https://www.guineapigs.com/why-you-should-guinea',
      },
    });

    return request(app.getHttpServer())
      .put(`/posts/${post.id}`)
      .send({
        title: 'Why you should have a guinea?',
        text: 'https://www.guineapigs.com/why-you-should-guinea',
      })
      .expect(200);
  });

  it('PUT /publications/:id', async () => {
    const media = await prisma.medias.create({
      data: {
        title: 'Instagram',
        username: 'myusername',
      },
    });

    const post = await prisma.posts.create({
      data: {
        title: 'Why you should have a guinea pig?',
        text: 'https://www.guineapigs.com/why-you-should-guinea',
      },
    });

    const publications = await prisma.publications.create({
      data: {
        mediaId: media.id,
        postId: post.id,
        date: '2023-08-21T13:25:17.352Z',
      },
    });

    return request(app.getHttpServer())
      .put(`/publications/${publications.id}`)
      .send({
        mediaId: media.id,
        postId: post.id,
        date: '2023-10-21T13:25:17.352Z',
      })
      .expect(200);
  });

  it('DELETE /media/:id', async () => {
    const media = await prisma.medias.create({
      data: {
        title: 'Instagram',
        username: 'myusername',
      },
    });

    return request(app.getHttpServer())
      .delete(`/medias/${media.id}`)
      .expect(200);
  });

  it('DELETE /posts/:id', async () => {
    const post = await prisma.posts.create({
      data: {
        title: 'Why you should have a guinea pig?',
        text: 'https://www.guineapigs.com/why-you-should-guinea',
      },
    });

    return request(app.getHttpServer()).delete(`/posts/${post.id}`).expect(200);
  });

  it('DELETE /publications/:id', async () => {
    const media = await prisma.medias.create({
      data: {
        title: 'Instagram',
        username: 'myusername',
      },
    });

    const post = await prisma.posts.create({
      data: {
        title: 'Why you should have a guinea pig?',
        text: 'https://www.guineapigs.com/why-you-should-guinea',
      },
    });

    const publications = await prisma.publications.create({
      data: {
        mediaId: media.id,
        postId: post.id,
        date: '2023-08-21T13:25:17.352Z',
      },
    });

    return request(app.getHttpServer())
      .delete(`/publications/${publications.id}`)
      .expect(200);
  });
});
