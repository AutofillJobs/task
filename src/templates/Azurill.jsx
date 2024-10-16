import React from 'react';

const Header = ({ basics }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 pb-2 text-center">
      <div>
        <div className="text-2xl font-bold">{basics.name}</div>
        <div className="text-base">{basics.headline}</div>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-sm">
        {basics.location && (
          <div className="flex items-center gap-x-1.5">
            <i className="fa fa-map-marker text-primary" />
            <div>{basics.location}</div>
          </div>
        )}
        {basics.phone && (
          <div className="flex items-center gap-x-1.5">
            <i className="fa fa-phone text-primary" />
            <a href={`tel:${basics.phone}`}>{basics.phone}</a>
          </div>
        )}
        {basics.email && (
          <div className="flex items-center gap-x-1.5">
            <i className="fa fa-envelope text-primary" />
            <a href={`mailto:${basics.email}`}>{basics.email}</a>
          </div>
        )}
        {basics.socialLinks?.map((link) => (
          <div key={link.platform} className="flex items-center gap-x-1.5">
            <i className={`fa fa-${link.platform.toLowerCase()} text-primary`} />
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.platform}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const Section = ({ title, items, renderItem }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold border-b-2 border-gray-300 mb-3">{title}</h2>
      <div className="space-y-4">
        {items.map((item) => renderItem(item))}
      </div>
    </section>
  );
};

const ExperienceItem = ({ experience }) => (
  <div key={experience.id} className="relative pl-4 border-l-2 border-gray-300">
    <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-gray-300" />
    <h3 className="font-bold">{experience.jobTitle}</h3>
    <div>{experience.companyName}</div>
    <div className="text-gray-600">
      {experience.startDate} - {experience.stillWorking ? 'Present' : experience.endDate}
    </div>
    <div className="text-gray-600">{experience.location}</div>
    <p className="mt-2">{experience.description}</p>
    {experience.skills?.length > 0 && (
      <div className="mt-2 flex flex-wrap gap-2">
        {experience.skills.map((skill) => (
          <span key={skill} className="bg-gray-100 px-2 py-1 rounded text-sm">
            {skill}
          </span>
        ))}
      </div>
    )}
  </div>
);

const EducationItem = ({ education }) => (
  <div key={education.id} className="relative pl-4 border-l-2 border-gray-300">
    <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-gray-300" />
    <h3 className="font-bold">{education.collegeName}</h3>
    <div>{education.courseName}</div>
    <div>{education.field}</div>
    <div className="text-gray-600">
      {education.startDate} - {education.stillStudying ? 'Present' : education.endDate}
    </div>
    <div className="text-gray-600">{education.location}</div>
    {education.grade && <div>Grade: {education.grade}</div>}
  </div>
);

const ProjectItem = ({ project }) => (
  <div key={project.id} className="relative pl-4 border-l-2 border-gray-300">
    <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-gray-300" />
    <h3 className="font-bold">{project.projectName}</h3>
    <div className="text-gray-600">
      {project.startDate} - {project.stillWorking ? 'Present' : project.endDate}
    </div>
    <p className="mt-2">{project.description}</p>
    {project.skills?.length > 0 && (
      <div className="mt-2 flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <span key={skill} className="bg-gray-100 px-2 py-1 rounded text-sm">
            {skill}
          </span>
        ))}
      </div>
    )}
    <div className="mt-2">
      {project.gitUrl && (
        <a
          href={project.gitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 text-blue-600 hover:underline"
        >
          GitHub
        </a>
      )}
      {project.hostUrl && (
        <a
          href={project.hostUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Live Demo
        </a>
      )}
    </div>
  </div>
);

export const Azurill = ({ data }) => {
    console.log("details",data)
  const basics = {
    name: `${data?.details?.firstName} ${data?.details.lastName}`,
    headline: data.details.degree,
    email: data.details.email,
    phone: data.details.phoneNumber,
    location: `${data.details.city}, ${data.details.state}, ${data.details.country}`,
    socialLinks: [
      { platform: 'LinkedIn', url: data.details.linkedinUrl },
      { platform: 'GitHub', url: data.details.githubUrl },
      { platform: 'Portfolio', url: data.details.portfolioUrl }
    ].filter(link => link.url)
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      <Header basics={basics} />
      
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="col-span-2">
          <Section
            title="Experience"
            items={data.workExperiences}
            renderItem={(exp) => <ExperienceItem experience={exp} />}
          />
          
          <Section
            title="Projects"
            items={data.projectExperiences}
            renderItem={(project) => <ProjectItem project={project} />}
          />
        </div>
        
        <div>
          <Section
            title="Education"
            items={data.educationExperiences}
            renderItem={(edu) => <EducationItem education={edu} />}
          />
        </div>
      </div>
    </div>
  );
};