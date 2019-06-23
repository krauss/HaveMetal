import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Job } from '../../models/interfaces/job.interface';


@Injectable()
export class JobListService {

    private jobListRef = this.db.list<Job>('job-list');

    constructor(private db: AngularFireDatabase){ }

    getJobList() {
        return this.jobListRef;
    }

    addJob(job: Job){
        return this.jobListRef.push(job);
    }

    removeJob(job: Job){
        return this.jobListRef.remove(job.key);
    }

    editJob(job: Job){
        return this.jobListRef.update(job.key, job);
    }

    getJob(job_key: string){
        return this.db.object<Job>(job_key);
    }
}