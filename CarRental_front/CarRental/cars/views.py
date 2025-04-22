from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Car
from .serializers import CarSerializer

class CarCreateView(generics.CreateAPIView):
  queryset = Car.objects.all()
  serializer_class = CarSerializer
  permission_classes = [permissions.IsAuthenticated]

  def perform_create(self, serializer):
    serializer.save(dealer=self.request.user)