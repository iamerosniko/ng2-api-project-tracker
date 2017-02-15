import { InMemoryDbService } from 'angular-in-memory-web-api';
export class ProjectDataService implements InMemoryDbService {
  createDb() {
    let projects = [
        { 
            id: 1,
            projectName: "sample 1",
            description: "desc",
            technology: ".Net Projects",
            owner: "eros niko"
        },
        {
            id: 2,
            projectName: "sample 2",
            description: "desc",
            technology: ".Net Projects",
            owner: "eros niko"
        }
    ];
    return {projects};
  }
}