from django.db import models

class Stuff(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    quantity = models.IntegerField(default=0, blank=True)

    class Meta:
        pass