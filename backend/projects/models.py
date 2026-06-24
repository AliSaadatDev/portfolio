from django.db import models

class Project(models.Model):
    title = models.CharField(
        max_length=100
    )
    description = models.TextField()
    skills = models.ManyToManyField(
        "skills.Skills"
    )
    github_url = models.URLField()

    live_url = models.URLField(
        blank=True,
        null=True
    )

    featured = models.BooleanField(
        default=False
    )

    image = models.ImageField(
        upload_to="projects/",
        blank=True,
        null=True
    )

    created_at = models.DateField()

    def __str__(self):
        return self.title