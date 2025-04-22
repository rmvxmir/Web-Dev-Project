from django.shortcuts import render
from rest_framework import generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .models import Car, Dealer
from .serializers import CarSerializer, DealerSerializer

class IsCarPublisher(permissions.BasePermission):
    """
    Custom permission to only allow publishers of a car to delete it.
    """
    def has_object_permission(self, request, view, obj):
        # Check if user is authenticated
        if not request.user.is_authenticated:
            return False
            
        # Check if the authenticated user is the publisher of this car
        return obj.publisher == request.user

class CarCreateView(generics.CreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(publisher=self.request.user)

class CarGetView(generics.ListAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['fuel_type', 'car_type']
    ordering_fields = ['price']

@api_view(['DELETE'])
@permission_classes([permissions.IsAuthenticated, IsCarPublisher])
def car_delete(request, pk):
    try:
        car = Car.objects.get(pk=pk)
    except Car.DoesNotExist:
        return Response({'detail': 'Car not found.'}, status=status.HTTP_404_NOT_FOUND)

    if car.publisher != request.user:
        return Response({'detail': 'You do not have permission to delete this car.'}, status=status.HTTP_403_FORBIDDEN)

    car.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['PUT'])
@permission_classes([permissions.IsAuthenticated, IsCarPublisher])
def car_update(request, pk):
    try:
        car = Car.objects.get(pk=pk)
    except Car.DoesNotExist:
        return Response({'detail': 'Car not found.'}, status=status.HTTP_404_NOT_FOUND)

    if car.publisher != request.user:
        return Response({'detail': 'You do not have permission to update this car.'}, status=status.HTTP_403_FORBIDDEN)

    serializer = CarSerializer(car, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

## DEALER

# Create Dealer
class DealerCreateView(generics.CreateAPIView):
    queryset = Dealer.objects.all()
    serializer_class = DealerSerializer

# Read (List) Dealers
class DealerListView(generics.ListAPIView):
    queryset = Dealer.objects.all()
    serializer_class = DealerSerializer

# Read (Retrieve) Dealer by ID
class DealerDetailView(generics.RetrieveAPIView):
    queryset = Dealer.objects.all()
    serializer_class = DealerSerializer
    lookup_field = 'pk'

# Update Dealer
class DealerUpdateView(generics.UpdateAPIView):
    queryset = Dealer.objects.all()
    serializer_class = DealerSerializer
    lookup_field = 'pk'

# Delete Dealer
class DealerDeleteView(generics.DestroyAPIView):
    queryset = Dealer.objects.all()
    serializer_class = DealerSerializer
    lookup_field = 'pk'
    


