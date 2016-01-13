from rest_framework import viewsets, renderers, filters
from .models import Food
from .serializers import FoodSerializer

class FoodViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Food.objects.all()
	serializer_class = FoodSerializer
	filter_backends = (filters.SearchFilter, filters.DjangoFilterBackend, )
	filter_fields = ('area1_name', 'area2_name', 'season', 'recommended_months',)
	search_fields = ('=area1_name', '=area2_name', '=season', '$recommended_months',)
