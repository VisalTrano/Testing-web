import {Job} from './Job';
import {Resume} from './Resume';

export interface Application {
    applicationId: number;
    date: Date;
    status: string;
    message: string;
    candidateId: number;
    candidate: Candidate;
    jobId: number;
    job: Job;
}

export interface Candidate {
    candidateId: number;
    firstName: string;
    lastName: string;
    userId: number;
    resumes: Resume[];
}
