from rest_framework import serializers

from .models import Food

class FoodSerializer(serializers.ModelSerializer):
	class Meta:
		model = Food
		read_only_fields = ("id", "name", "short_desc", "long_desc", "season", "image_src", "area1_name", "area2_name", "recommended_months")