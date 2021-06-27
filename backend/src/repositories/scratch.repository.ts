import { EntityRepository, Repository } from 'typeorm';
import ScratchEntity from '../modules/scratch/scratch.entity';

@EntityRepository(ScratchEntity)
export class ScratchRepository extends Repository<ScratchEntity> {}
