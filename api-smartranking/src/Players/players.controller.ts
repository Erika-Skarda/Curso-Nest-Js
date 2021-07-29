import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';

@Controller('api/v1/players')
export class PlayersController {

  @Post()
  async createUpdatePlayers() {
    return JSON.stringify({
      "nome": "Erika"
    })
  }
}
