import { Module } from '@nestjs/common';
import { ScratchController } from './scratch.controller';
import { ScratchService } from './scratch.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScratchRepository } from '../../repositories/scratch.repository';

@Module({
  controllers: [ScratchController],
  providers: [ScratchService],
  imports: [TypeOrmModule.forFeature([ScratchRepository]),]
})
export class ScratchModule {}
