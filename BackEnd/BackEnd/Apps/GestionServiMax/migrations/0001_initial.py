# Generated by Django 2.2.5 on 2019-10-14 02:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Administrador',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Id_Admin', models.CharField(max_length=10)),
                ('Primer_Apellido', models.CharField(max_length=35)),
                ('Segundo_Apellido', models.CharField(max_length=35)),
                ('Nombres', models.CharField(max_length=35)),
                ('Celular', models.CharField(max_length=35)),
                ('Mail', models.CharField(max_length=35)),
                ('Sexo', models.CharField(choices=[('F', 'Femenino'), ('M', 'Masculino')], default='M', max_length=1)),
            ],
        ),
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Id_Cliente', models.CharField(max_length=10)),
                ('Primer_Apellido', models.CharField(max_length=35)),
                ('Segundo_Apellido', models.CharField(max_length=35)),
                ('Nombres', models.CharField(max_length=35)),
                ('Celular', models.CharField(max_length=35)),
                ('Mail', models.CharField(max_length=35)),
                ('Sexo', models.CharField(choices=[('F', 'Femenino'), ('M', 'Masculino')], default='M', max_length=1)),
                ('Id_Admin', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='GestionServiMax.Administrador')),
            ],
        ),
        migrations.CreateModel(
            name='Trabajador',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Id_Trabajador', models.CharField(max_length=10)),
                ('Primer_Apellido', models.CharField(max_length=35)),
                ('Segundo_Apellido', models.CharField(max_length=35)),
                ('Nombres', models.CharField(max_length=35)),
                ('Celular', models.CharField(max_length=35)),
                ('Mail', models.CharField(max_length=35)),
                ('Sexo', models.CharField(choices=[('F', 'Femenino'), ('M', 'Masculino')], default='M', max_length=1)),
                ('Id_Admin', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='GestionServiMax.Administrador')),
            ],
        ),
        migrations.CreateModel(
            name='Transaccion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ID_Transaccion', models.CharField(max_length=10)),
                ('Fecha', models.DateField()),
                ('Tipo', models.CharField(choices=[('C', 'Compra'), ('V', 'Venta'), ('E', 'Empeño')], default='M', max_length=1)),
                ('ID_Admin', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='GestionServiMax.Administrador')),
                ('ID_Cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='GestionServiMax.Cliente')),
                ('ID_Trabajadores', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='GestionServiMax.Trabajador')),
            ],
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Id_Producto', models.CharField(max_length=12)),
                ('Nombre', models.CharField(max_length=20)),
                ('Descripcion', models.TextField()),
                ('Precio_De_Compra', models.PositiveSmallIntegerField()),
                ('Precio_De_Venta', models.PositiveSmallIntegerField()),
                ('Tipo', models.CharField(choices=[('J', 'Joya'), ('P', 'Producto')], default='M', max_length=1)),
                ('Kilates', models.DecimalField(decimal_places=2, max_digits=3)),
                ('Kilogramos', models.DecimalField(decimal_places=2, max_digits=3)),
                ('ID_Transaccion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='GestionServiMax.Transaccion')),
            ],
        ),
    ]
