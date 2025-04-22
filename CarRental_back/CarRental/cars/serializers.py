from rest_framework import serializers
from .models import Car, Dealer

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['id', 'dealer', 'make', 'fuel_type', 'car_type', 'capacity', 'price', 'image']
        read_only_fields = ['id']

class DealerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dealer
        fields = '__all__'
