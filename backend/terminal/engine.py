from .services import *
from .commands import (
    HelpCommand,
    WhoAmICommand,
    SkillsCommand,
    ProjectsCommand,
    ExperienceCommand,
    ContactCommand,
    ClearCommand,
)

COMMANDS = {
    "help": HelpCommand(),
    "whoami": WhoAmICommand(),
    "skills": SkillsCommand(),
    "projects": ProjectsCommand(),
    "experience": ExperienceCommand(),
    "contact": ContactCommand(),
    "clear": ClearCommand(),
}


def run_command(command: str):
    command = command.strip().lower()

    if command in COMMANDS:
        return COMMANDS[command].execute()

    return {
        "type": "error",
        "output": [
            f"Command '{command}' not found.",
            "Type 'help' to see available commands."
        ]
    }