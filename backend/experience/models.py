from django.db import models

class Experience(models.Model):
    company = models.CharField(
        max_length=100
    )

    position = models.CharField(
        max_length=100
    )

    description = models.TextField()

    start_date = models.DateField()

    end_date = models.DateField(
        blank=True,
        null=True
    )

    current = models.BooleanField(
        default=False
    )

    def __str__(self):
        return f"{self.position} - {self.company}"

