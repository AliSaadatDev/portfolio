from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Profile
from .serializers import ProfileSerializer

class ProfileViewSet(ReadOnlyModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer