import { Module } from '@nestjs/common';
import { PlayersModule } from './Players/players.module';

@Module({
  imports: [PlayersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
