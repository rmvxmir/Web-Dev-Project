from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
  is_dealer = models.BooleanField(default=False)  # add this field

  def __str__(self):
    return self.username