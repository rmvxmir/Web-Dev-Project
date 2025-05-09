# Generated by Django 5.2 on 2025-04-22 14:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='car',
            old_name='name',
            new_name='brand',
        ),
        migrations.RemoveField(
            model_name='car',
            name='created_at',
        ),
        migrations.AddField(
            model_name='car',
            name='model',
            field=models.CharField(default='Unknown', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='car',
            name='price',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='car',
            name='year',
            field=models.IntegerField(default=2020),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='car',
            name='image',
            field=models.ImageField(upload_to='uploads/'),
        ),
    ]
