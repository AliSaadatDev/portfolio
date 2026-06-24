from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from profiles.views import ProfileViewSet
from skills.views import SkillsViewSet
from projects.views import ProjectsViewSet
from experience.views import ExperienceViewSet

router = DefaultRouter()
router.register("profile", ProfileViewSet)
router.register("skills", SkillsViewSet)
router.register("projects", ProjectsViewSet)
router.register("experience", ExperienceViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('terminal/', include("terminal.urls")),
]
