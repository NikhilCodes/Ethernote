import { Body, Controller, Get, Put, Req } from '@nestjs/common';
import { Secure } from '../../decorators';
import { ScratchService } from './scratch.service';

@Controller('scratch')
export class ScratchController {
  constructor(private scratchService: ScratchService) {}

  @Secure()
  @Get()
  getScratchText(@Req() req) {
    return this.scratchService.getScratchTextByUserId(req.user.id);
  }

  @Secure()
  @Put()
  saveScratchText(@Req() req, @Body() scratchDto: { text: string }) {
    return this.scratchService.saveScratchTextByUserId(
      scratchDto.text,
      req.user.id,
    );
  }
}
