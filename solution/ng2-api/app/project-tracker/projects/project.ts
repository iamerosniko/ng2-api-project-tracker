import { UUID } from 'angular2-uuid';
export class Project {
    constructor (
        public id: UUID,
        public projectName: string,
        public description: string,
        public technology?: string,
        public owner?: string
    ){}
}