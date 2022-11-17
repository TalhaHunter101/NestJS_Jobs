import { Controller, Get, Put, Post, Delete, Patch, Param, Body } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsDTO } from './dtos/jobs.dtos';
import { Job } from './intefaces/job.interface';

@Controller('jobs')
export class JobsController {

    constructor(private readonly jobService: JobsService) { }

    @Get(':id')
    findAll(@Param("id") id): Promise<Job> {
        return this.jobService.find(id);
    }

    @Post()
    create(@Body() jobs: JobsDTO): Promise<Job> {

        // console.log(jobs);
        return this.jobService.create(jobs);
    }

    @Put(':id')
    update(@Param('id') id, @Body() jobs: JobsDTO): Promise<Job> {
        return this.jobService.update(id, jobs)
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Job> {
        return this.jobService.delete(id)
    }

}
