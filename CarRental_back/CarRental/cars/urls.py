from django.urls import path
from .views import CarCreateView

urlpatterns = [
  path('upload/', CarCreateView.as_view(), name='car-upload'),
]