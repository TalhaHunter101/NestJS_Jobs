import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsService } from './jobs.service';
import { JobSchema } from './schemas/job.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Job', schema: JobSchema }])],
    controllers: [JobsController],
    providers: [JobsService],
})
export class JobsModule { }
