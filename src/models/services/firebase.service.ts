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

    addItem(job: Job){
        return this.jobListRef.push(job);
    }

    /*removeItem(job: Job){
        this.jobListRef.remove(job);
    }*/
}