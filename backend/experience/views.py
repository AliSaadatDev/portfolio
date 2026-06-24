from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Experience
from .serializers import ExperienceSerializer

class ProfileViewSet(ReadOnlyModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer