import {Job} from './Job';
import {Photo} from './Photo';

export interface Company {
    companyId: number;
    companyName: string;
    companySlug: string;
    photoId: number;
    photo: Photo;
    companyLocation: string;
    tagLine: string;
    foundtionYear: string;
    companySize: string;
    companyMail: string;
    companyDescription: string;
    video: string;
    facebookUserName: string;
    phoneNumber: string;
    website: string;
    linkedInUserName: string;
    twitterUserName: string;
    industryId: string;
    industry: Industry;
    jobs?: Job[];
    jobSize: number;


}

export interface Industry {
    industryId: number;
    title: string;
}
