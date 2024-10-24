import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number; // 0 to 100
}

interface Project {
  title: string;
  description: string;
  link: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  name: string = 'Stefan Ganswint';
  tagline: string = 'Aspiring IT Professional & Web Developer';
  skills: Skill[] = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'Angular', level: 70 },
    { name: 'TypeScript', level: 70 },
    { name: 'Git', level: 90 },
  ];
  projects: Project[] = [
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      link: 'https://example.com/project2',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3.',
      link: 'https://example.com/project3',
    },
  ];
  experience: any[] = [
    {
      title: 'Front-End Developer',
      company: 'Tech Company',
      period: 'Jan 2023 - Present',
      description: 'Developed user-friendly web applications using Angular and TypeScript. Collaborated with designers to enhance UI/UX.'
    },
    {
      title: 'Intern Web Developer',
      company: 'Another Company',
      period: 'Jun 2022 - Dec 2022',
      description: 'Assisted in developing and maintaining client websites. Gained experience with HTML, CSS, and JavaScript.'
    },
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      period: 'Jan 2021 - May 2022',
      description: 'Completed multiple projects for clients, including websites and web applications. Focused on delivering high-quality code and design.'
    },
  ];
}
