import {Application} from './Application';
import {Company} from './Company';

export interface Job {
    jobId: number;
    jobTitle: string;
    location: string;
    jopTag: string;
    jobCategoryId: string;
    description: string;
    mail: string;
    closingDate: Date;
    startDate: Date;
    salary;
    experience: string;
    excerpt: string;
    employerId: number;
    employer: Employer;
    jobTypeId: number;
    jobType: JobType;
    careerLevelId: number;
    careerLevel: CareerLevel;
    qualificationId: number;
    qualification: Qualification;
    jobCategoryDetails: JobCategoryDetails;
    applications: Application [];
    company: Company;
}

export interface Employer {
    employerId: number;
    firstName: string;
    userId: number;
}

export interface JobType {
    jobTypeId: number;
    title: string;
}

export interface CareerLevel {
    careerLevelId: number;
    title: string;
}

export interface Qualification {
    qualificationId: number;
    title: string;
}

export interface JobTag {
    jobTagId: number;
    title: string;
}

export interface JobCategoryDetails {
    jobId: string;
    jobCategoryId: number;
    jobCategory: JobCategory;

}

export interface JobCategory {
    jobCategoryId: number;
    title: string;
}
