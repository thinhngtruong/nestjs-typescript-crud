import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

// Interface Defining the Shape of a Post
interface Post {
  title: string;
  body: string;
}

// Array of Posts
const posts: Array<Post> = [
  { title: 'THe First Post', body: 'The Body of the First Post' },
];

// Our Controller for "/posts"
@Controller('posts')
export class PostsController {
  @Get()
  index(): Array<Post> {
    return posts;
  }

  @Get(':id')
  // use the params decorator to get the params
  show(@Param() params): Post {
    const id = params.id;
    return posts[id];
  }

  @Post()
  // use body decorator to retrieve request body
  create(@Body() body: Post): Post {
    posts.push(body);
    return body;
  }

  @Put(':id')
  update(@Param() params, @Body() body: Post): Post {
    const id = params.id;
    posts[id] = body;
    return posts[id];
  }

  @Delete(':id')
  destroy(@Param() params): any {
    const id = params.id;
    const post = posts.splice(id, 1);
    return post;
  }
}
