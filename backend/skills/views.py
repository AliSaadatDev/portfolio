from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Skills
from .serializers import SkillSerializer

class SkillsViewSet(ReadOnlyModelViewSet):
    queryset = Skills.objects.all()
    serializer_class = SkillSerializer