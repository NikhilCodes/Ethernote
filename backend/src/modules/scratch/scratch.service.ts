import { Injectable } from '@nestjs/common';
import { ScratchRepository } from '../../repositories/scratch.repository';

@Injectable()
export class ScratchService {
  constructor(private scratchRepository: ScratchRepository) {}

  async getScratchTextByUserId(userId) {
    return (
      (await this.scratchRepository.findOne({
        where: { user: userId },
        select: ['value'],
      })) ?? { value: '' }
    );
  }

  async saveScratchTextByUserId(text, userId) {
    if (!(await this.scratchRepository.findOne({ where: { user: userId } }))) {
      return this.scratchRepository.save({
        user: userId,
        value: text,
      });
    }
    return await this.scratchRepository.update(
      {
        user: userId,
      },
      {
        value: text,
      },
    );
  }
}
