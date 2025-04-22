from django.urls import path
from .views import CarCreateView, car_update, CarGetView, car_delete, DealerDeleteView, DealerUpdateView, DealerCreateView, DealerDetailView, DealerListView

urlpatterns = [
    path('upload/', CarCreateView.as_view(), name='car-upload'),
    path('list/', CarGetView.as_view(), name='car-list'),
    path('update/<int:pk>/', car_update, name='car-update'),
    path('delete/<int:pk>/', car_delete, name='car-delete'),
    path('dealer/upload/', DealerCreateView.as_view(), name='dealer-upload'),
    path('dealer/', DealerListView.as_view(), name='dealer-list'),
    path('dealer/<int:pk>/', DealerDetailView.as_view(), name='dealer-id'),
    path('dealer/update/<int:pk>', DealerUpdateView.as_view(), name='dealer-update'),
    path('dealer/delete/<int:pk>', DealerDeleteView.as_view(), name='dealer-delete'),
]