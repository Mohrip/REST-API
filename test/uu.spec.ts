import { Test as NewTest, TestingModule as NewTestingModule } from '@nestjs/testing';
import { UsersController as NewController } from './users.controller';
import { UsersService as NewService } from './users.service';

describe('NewController', () => {
  let controller: NewController;

  beforeEach(async () => {
    const module: NewTestingModule = await NewTest.createTestingModule({
      controllers: [NewController],
      providers: [NewService],
    }).compile();

    controller = module.get<NewController>(NewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
