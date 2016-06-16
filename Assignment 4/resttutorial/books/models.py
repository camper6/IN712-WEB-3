from django.db import models

# Create your models here.
class Book(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=200, blank=True, default='')
    author = models.CharField(max_length=100)
    intro = models.TextField()
    price = models.DecimalField(decimal_places=2, max_digits=6)
    url = models.URLField()

    class Meta:
        ordering = ('created',)
