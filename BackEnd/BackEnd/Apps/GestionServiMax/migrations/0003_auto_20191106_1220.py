# Generated by Django 2.2.5 on 2019-11-06 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('GestionServiMax', '0002_auto_20191105_1902'),
    ]

    operations = [
        migrations.AddField(
            model_name='producto',
            name='Interes_Del_Prodcto',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=3, null=True),
        ),
        migrations.AddField(
            model_name='transaccion',
            name='FechaRetiro',
            field=models.CharField(default='', max_length=10),
        ),
    ]
