from rest_framework import serializers
from .models import Car

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['id', 'dealer', 'make', 'fuel_type', 'car_type', 'capacity', 'price', 'image']
        read_only_fields = ['dealer']
