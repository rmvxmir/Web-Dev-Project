from rest_framework import generics
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer


class CompanyListView(generics.ListCreateAPIView):
  queryset = Company.objects.all()
  serializer_class = CompanySerializer


class CompanyDetailView(generics.RetrieveAPIView):
  queryset = Company.objects.all()
  serializer_class = CompanySerializer
  lookup_field = 'id'


class VacancyListView(generics.ListCreateAPIView):
  queryset = Vacancy.objects.all()
  serializer_class = VacancySerializer


class VacancyDetailView(generics.RetrieveAPIView):
  queryset = Vacancy.objects.all()
  serializer_class = VacancySerializer
  lookup_field = 'id'


class TopVacanciesView(generics.ListAPIView):
  queryset = Vacancy.objects.all().order_by('-salary')[:10]
  serializer_class = VacancySerializer


class CompanyVacanciesView(generics.ListAPIView):
  serializer_class = VacancySerializer

  def get_queryset(self):
    company_id = self.kwargs['id']  
    return Vacancy.objects.filter(company_id=company_id)  
