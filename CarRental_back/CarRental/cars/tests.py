from django.test import TestCase

# Create your tests here.
from django.contrib.auth import get_user_model
from .models import Dealer, Car
from .serializers import DealerSerializer, CarSerializer

User = get_user_model()

class DealerModelTest(TestCase):
    def test_create_dealer(self):
        dealer = Dealer.objects.create(name="Test Dealer", logo="http://example.com/logo.png")
        self.assertEqual(dealer.name, "Test Dealer")
        self.assertEqual(dealer.logo, "http://example.com/logo.png")
        self.assertEqual(str(dealer), dealer.name)

class CarModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='user1', password='pass')
        self.dealer = Dealer.objects.create(name="Test Dealer", logo="http://example.com/logo.png")

    def test_create_car(self):
        car = Car.objects.create(
            image="http://example.com/car.jpg",
            make="Toyota",
            fuel_type="Gasoline",
            car_type="Sedan",
            capacity=5,
            price=25000.00,
            publisher=self.user,
            dealer=self.dealer,
        )
        self.assertEqual(car.make, "Toyota")
        self.assertEqual(car.fuel_type, "Gasoline")
        self.assertEqual(car.capacity, 5)
        self.assertEqual(car.price, 25000.00)
        self.assertEqual(car.dealer, self.dealer)
        self.assertEqual(str(car), "Toyota Sedan")

class DealerSerializerTest(TestCase):
    def test_serialize_dealer(self):
        dealer = Dealer.objects.create(name="Dealer 1", logo="http://example.com/logo.png")
        serializer = DealerSerializer(dealer)
        data = serializer.data
        self.assertEqual(data['name'], "Dealer 1")
        self.assertEqual(data['logo'], "http://example.com/logo.png")

    def test_deserialize_dealer(self):
        data = {'name': 'Dealer 2', 'logo': 'http://example.com/logo2.png'}
        serializer = DealerSerializer(data=data)
        self.assertTrue(serializer.is_valid())
        dealer = serializer.save()
        self.assertEqual(dealer.name, 'Dealer 2')

class CarSerializerTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='user1', password='pass')
        self.dealer = Dealer.objects.create(name="Test Dealer", logo="http://example.com/logo.png")

    def test_serialize_car(self):
        car = Car.objects.create(
            image="http://example.com/car.jpg",
            make="Honda",
            fuel_type="Diesel",
            car_type="SUV",
            capacity=7,
            price=35000.00,
            publisher=self.user,
            dealer=self.dealer,
        )
        serializer = CarSerializer(car)
        data = serializer.data
        self.assertEqual(data['make'], "Honda")
        self.assertEqual(data['fuel_type'], "Diesel")
        self.assertEqual(data['car_type'], "SUV")
        self.assertEqual(data['capacity'], 7)
        self.assertEqual(str(data['price']), "35000.00")  # Decimal serialized as string
        self.assertEqual(data['image'], "http://example.com/car.jpg")
        self.assertEqual(data['dealer'], self.dealer.id)

    def test_deserialize_car(self):
        data = {
            'make': 'BMW',
            'fuel_type': 'Electric',
            'car_type': 'Sedan',
            'capacity': 5,
            'price': '45000.00',
            'image': 'http://example.com/bmw.jpg',
            'dealer': self.dealer.id,
        }
        serializer = CarSerializer(data=data, context={'request': None})
        self.assertTrue(serializer.is_valid())
        car = serializer.save(publisher=self.user, dealer=self.dealer)  # dealer is read_only in serializer, so passed here
        self.assertEqual(car.make, 'BMW')
        self.assertEqual(car.dealer, self.dealer)
