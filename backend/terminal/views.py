from rest_framework.decorators import api_view
from rest_framework.response import Response

from .engine import run_command


@api_view(["POST"])
def terminal_execute(request):
    command = request.data.get("command", "").strip()

    if not command:
        return Response({
            "type": "error",
            "output": ["No command provided.", "Type 'help' to see available commands."]
        })

    result = run_command(command)
    return Response(result)