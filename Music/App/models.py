import audioop
from django.db import models
from django.utils import timezone

# Create your models here.
class Song(models.Model):
    title = models.TextField()
    artist = models.TextField()
    image = models.ImageField(upload_to='images/')
    audio_file = models.FileField(upload_to='audio/')
    audio_link = models.CharField(max_length=200, blank=True, null=True)
    lyrics = models.TextField(blank=True, null=True)
    duration = models.DurationField() 
    paginator_page = 2
    
    def __str__(self):
        return self.title