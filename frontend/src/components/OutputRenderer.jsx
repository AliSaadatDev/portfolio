import HelpOutput from "./outputs/HelpOutput";
import ErrorOutput from "./outputs/ErrorOutput";
import ProfileOutput from "./outputs/ProfileOutput";
import SkillsOutput from "./outputs/SkillsOutput";
import ProjectsOutput from "./outputs/ProjectsOutput";
import ExperienceOutput from "./outputs/ExperienceOutput";
import ContactOutput from "./outputs/ContactOutput";

export default function OutputRenderer({ payload, onCommand }) {
  const { type, data, output } = payload;
  switch (type) {
    case "help": return <HelpOutput onCommand={onCommand} />;
    case "error": return <ErrorOutput lines={output} />;
    case "profile": return <ProfileOutput data={data} />;
    case "skills": return <SkillsOutput data={data} />;
    case "projects": return <ProjectsOutput data={data} />;
    case "experience": return <ExperienceOutput data={data} />;
    case "contact": return <ContactOutput data={data} />;
    default: return <ErrorOutput lines={["Unknown: " + type]} />;
  }
}