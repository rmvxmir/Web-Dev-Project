from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Dealer(models.Model):
    name = models.CharField(max_length=100)
    logo = models.URLField(max_length=500)

    def __str__(self):
        return self.name

class Car(models.Model):
    image = models.URLField(max_length=500)
    make = models.CharField(max_length=100)
    fuel_type = models.CharField(max_length=50)
    car_type = models.CharField(max_length=50)
    capacity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    publisher = models.ForeignKey("users.CustomUser", on_delete=models.CASCADE, null=True)
    dealer = models.ForeignKey(Dealer, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.make} {self.car_type}"
