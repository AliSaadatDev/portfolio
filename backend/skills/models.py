from django.db import models

class Skills(models.Model):
    name = models.CharField(
        max_length=50,
        unique=True
    )
    level = models.PositiveSmallIntegerField()
    order = models.PositiveIntegerField(
        default=0
    )

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.name