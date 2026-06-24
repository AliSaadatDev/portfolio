from profiles.models import Profile
from skills.models import Skills
from projects.models import Project
from experience.models import Experience

class BaseCommand:
    def execute(seld, *args):
        raise NotImplementedError
    
class HelpCommand(BaseCommand):

    def execute(self):
        return {
            "type": "help",
            "output": [
                "Available Commands:",
                "",
                "whoami",
                "skills",
                "projects",
                "experience",
                "contact",
                "clear",
                "help",
            ]
        }
    
class WhoAmICommand(BaseCommand):

    def execute(self):
        profile = Profile.objects.first()

        if not profile:
            return {
                "type": "error",
                "output": ["Profile not found."]
            }

        return {
            "type": "profile",
            "data": {
                "name": profile.full_name,
                "title": profile.title,
                "bio": profile.bio,
                "city": profile.city,
                "country": profile.country,
                "avatar": profile.avatar.url if profile.avatar else None,
            }
        }
    
class SkillsCommand(BaseCommand):

    def execute(self):

        skills = Skills.objects.all()

        return {
            "type": "skills",
            "data": [
                {
                    "name": skill.name,
                    "level": skill.level,
                }
                for skill in skills
            ]
        }
    
class ProjectsCommand(BaseCommand):

    def execute(self):

        projects = Project.objects.all()

        return {
            "type": "projects",
            "data": [
                {
                    "title": project.title,
                    "description": project.description,
                    "github": project.github_url,
                    "featured": project.featured,
                }
                for project in projects
            ]
        }
    
class ExperienceCommand(BaseCommand):

    def execute(self):

        experiences = Experience.objects.all()

        return {
            "type": "experience",
            "data": [
                {
                    "company": exp.company,
                    "position": exp.position,
                    "current": exp.current,
                }
                for exp in experiences
            ]
        }
    
class ContactCommand(BaseCommand):

    def execute(self):

        profile = Profile.objects.first()

        return {
            "type": "contact",
            "data": {
                "email": profile.email,
                "github": profile.github_url,
                "linkedin": profile.linkedin_url,
            }
        }
    

class ClearCommand(BaseCommand):

    def execute(self):
        return {
            "type": "clear"
        }