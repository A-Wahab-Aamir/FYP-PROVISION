from unicodedata import category
from django.db import models

class Project(models.Model):
    projectID = models.IntegerField(primary_key=True)
    projectTitle =  models.CharField(max_length=100)
    projectDate = models.DateTimeField(auto_now=True)
    projectCategory  = models.CharField(max_length=50)

class Screens(models.Model):
    screenID = models.IntegerField(primary_key=True)
    projectID = models.ForeignKey(Project,on_delete=models.CASCADE)
    screenTitle = models.CharField(max_length=50)

class Controls(models.Model):
    controlID = models.IntegerField(primary_key=True)
    screenID = models.ForeignKey(Screens,on_delete=models.CASCADE)
    controlTitle = models.TextField()
    controlsType = models.TextField()

