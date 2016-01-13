from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Food(models.Model):
	name = models.CharField(max_length=200)
	short_desc = models.TextField(max_length=1000, null=True)
	long_desc = models.TextField(max_length=10000, null=True)

	WINTER = "WI"
	SPRING = "SP"
	SUMMER = "SU"
	FALL = "FA"

	SEASONS = (
		(WINTER, "Winter"),
		(SPRING, "Spring"),
		(SUMMER, "Summer"),
		(FALL, "Fall"),
	)

	season = models.CharField(max_length=2, choices=SEASONS, default="SUMMER", null=True)
	image_src = models.URLField(null=True)
	area1_name = models.CharField(max_length=200)
	area2_name = models.CharField(max_length=200)

	recommended_months = models.CharField(max_length=100, null=True, blank=True)

	def __str__(self):
		return self.name

	def __unicode__(self):
		return self.name
