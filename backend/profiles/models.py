from django.db import models

class Profile(models.Model):
    full_name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    bio = models.TextField()
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    email = models.EmailField()
    github_url = models.URLField()
    linkedin_url = models.URLField(
        blank=True,
        null=True
    )

    avatar = models.ImageField(
        upload_to="profile/"
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return self.full_name