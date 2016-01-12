from rest_framework import viewsets
from .models import Food
from .serializers import FoodSerializer

class FoodViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Food.objects.all()
	serializer_class = FoodSerializer