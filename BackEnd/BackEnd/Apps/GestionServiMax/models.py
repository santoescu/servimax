from django.db import models
from django import forms
import datetime

# Create your models here.

class Administrador (models.Model):
    Id_Admin = models.CharField(max_length=10, primary_key=True)
    Primer_Apellido = models.CharField(max_length=35)
    Segundo_Apellido = models.CharField(max_length=35)
    Nombres = models.CharField(max_length=35)
    Celular = models.CharField(max_length=35)
    Mail = models.CharField(max_length=35)
    Clave = models.CharField(max_length=35, null = False, blank = False, default = '00000')
    Sexos = (('F', 'Femenino'), ('M', 'Masculino'))
    Sexo = models.CharField(max_length=1, choices=Sexos, default='M')


    def obtenerDatosAdmin(self):
        cadena = "{0} {1}, {2}"
        return cadena.format(self.Primer_Apellido, self.Nombres, self.Id_Admin)

    def __str__(self):
        return self.obtenerDatosAdmin()

class Cliente(models.Model):
    Id_Cliente = models.CharField(max_length=10, primary_key=True)
    Primer_Apellido = models.CharField(max_length=35)
    Segundo_Apellido = models.CharField(max_length=35)
    Nombres = models.CharField(max_length=35)
    Id_Admin = models.ForeignKey(Administrador, null = False, blank= False, on_delete=models.CASCADE)
    Celular = models.CharField(max_length=35)
    Mail = models.CharField(max_length=35)
    Sexos = (('F', 'Femenino'), ('M', 'Masculino'))
    Sexo = models.CharField(max_length=1, choices=Sexos, default='M')


    def obtenerDatosCliente(self):
        cadena = "{0} {1}, {2}"
        return cadena.format(self.Primer_Apellido, self.Nombres, self.Id_Admin)

    def __str__(self):
        return self.obtenerDatosCliente()

class Trabajador (models.Model):
    Id_Trabajador = models.CharField(max_length=10, primary_key=True)
    Primer_Apellido = models.CharField(max_length=35)
    Segundo_Apellido = models.CharField(max_length=35)
    Nombres = models.CharField(max_length=35)
    Id_Admin = models.ForeignKey(Administrador, null = False, blank= False, on_delete=models.CASCADE)
    Celular = models.CharField(max_length=35)
    Mail = models.CharField(max_length=35)
    Clave = models.CharField(max_length=35, null = False, blank = False, default = '00000')
    Sexos = (('F', 'Femenino'), ('M', 'Masculino'))
    Sexo = models.CharField(max_length=1, choices=Sexos, default='M')


    def obtenerDatosTrabajador(self):
        cadena = "{0} {1}, {2}"
        return cadena.format(self.Primer_Apellido, self.Nombres, self.Id_Admin)

    def __str__(self):
        return self.obtenerDatosTrabajador()

class Transaccion(models.Model):
    ID_Transaccion = models.AutoField(primary_key=True)
    Fecha = models.CharField(max_length=10,null=False,blank=False)
    FechaRetiro = models.CharField(max_length=10,null=False,blank=False, default = "")
    Tipo = models.CharField(max_length=1, default='C')
    ID_Cliente = models.ForeignKey(Cliente, null = False, blank= False, on_delete=models.CASCADE)
    ID_Trabajadores = models.ForeignKey(Trabajador, null = False, blank= False, on_delete=models.CASCADE)
    ID_Admin = models.ForeignKey(Administrador, null = False, blank= False, on_delete=models.CASCADE)

    def obtenerDatosTransaccion(self):
        cadena = "{0} {1}, {2}"
        return cadena.format(self.ID_Transaccion, self.Tipo, self.ID_Cliente)

    def __str__(self):
        return self.obtenerDatosTransaccion()
    

class Producto(models.Model):
    Id_Producto = models.AutoField(primary_key=True)
    ID_Transaccion = models.ForeignKey(Transaccion, null = False, blank= False, on_delete=models.CASCADE)
    Nombre = models.CharField(max_length = 20)
    Descripcion = models.TextField(blank = True, null = True)
    Precio_De_Compra = models.PositiveSmallIntegerField(blank = True, null = True)
    Precio_De_Venta = models.PositiveSmallIntegerField(blank = True, null = True)
    Interes_Del_Prodcto = models.DecimalField(decimal_places = 2, max_digits = 3,blank = True, null = True)

    Tipos = (('J', 'Joya'), ('P', 'Producto'))
    Tipo = models.CharField(max_length=1, choices=Tipos, default='M')

    Kilates = models.DecimalField(decimal_places = 2, max_digits = 3,blank = True, null = True)
    Kilogramos = models.DecimalField(decimal_places = 2, max_digits = 3,blank = True, null = True)

    def obtenerDatosProducto(self):
       cadena = "{0} {1}, {2}"
       return cadena.format(self.Id_Producto, self.Nombre, self.Precio_De_Venta)

    def __str__(self):
        return self.obtenerDatosProducto()

class TiempoLaborado(models.Model):
    fecha = models.CharField(max_length = 20)

    Id_Trabajador = models.ForeignKey(Trabajador, null = False, blank = False, on_delete = models.CASCADE)

    horas = models.DecimalField(decimal_places = 4, max_digits = 7)

    def obtenerDatosTiempo(self):
        cadena = "{0}, {1}"
        return cadena.format(self.fecha, self.horas)

    def __str__(self):
        return self.obtenerDatosTiempo()

class Cartera(models.Model):
    ID = models.AutoField(primary_key = True)
    Fecha = models.CharField(max_length=10,null=False,blank=False, default = "")
    Nombre = models.CharField(max_length = 20)
    Precio_De_Compra = models.PositiveSmallIntegerField(blank = True, null = True)
    Precio_De_Venta = models.PositiveSmallIntegerField(blank = True, null = True) 
    Ganacia = models.PositiveSmallIntegerField(blank = True, null = True)

    

    def obtenerDatosCartera(self):
        cadena = "{0}, {1}, {2}, {3},{4},{5}"
        return cadena.format(self.ID, self.Fecha, self.Nombre, self.Precio_De_Compra, self.Precio_De_Venta, self.Ganacia)
    def __str__(self):
        return self.obtenerDatosCartera()
