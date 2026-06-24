from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Experience
from .serializers import ExperienceSerializer

class ExperienceViewSet(ReadOnlyModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer