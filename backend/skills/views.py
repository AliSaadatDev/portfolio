from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Skills
from .serializers import SkillSerializer

class ProfileViewSet(ReadOnlyModelViewSet):
    queryset = Skills.objects.all()
    serializer_class = SkillSerializer