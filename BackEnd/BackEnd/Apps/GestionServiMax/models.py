from django.db import models
from django import forms

# Create your models here.

class Administrador (models.Model):
    Id_Admin = models.CharField(max_length=10)
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
    Id_Cliente = models.CharField(max_length=10)
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
    Id_Trabajador = models.CharField(max_length=10)
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
    ID_Transaccion = models.CharField(max_length=10)
    Fecha = models.DateField()
    Tipos = (('C', 'Compra'), ('V', 'Venta'), ('E', 'Empeño'))
    Tipo = models.CharField(max_length=1, choices=Tipos, default='M')
    ID_Cliente = models.ForeignKey(Cliente, null = False, blank= False, on_delete=models.CASCADE)
    ID_Trabajadores = models.ForeignKey(Trabajador, null = False, blank= False, on_delete=models.CASCADE)
    ID_Admin = models.ForeignKey(Administrador, null = False, blank= False, on_delete=models.CASCADE)

    def obtenerDatosTransaccion(self):
        cadena = "{0} {1}, {2}"
        return cadena.format(self.ID_Transaccion, self.Tipo, self.ID_Cliente)

    def __str__(self):
        return self.obtenerDatosTransaccion()
    

class Producto(models.Model):
    Id_Producto = models.CharField(max_length = 12)
    ID_Transaccion = models.ForeignKey(Transaccion, null = False, blank= False, on_delete=models.CASCADE)
    Nombre = models.CharField(max_length = 20)
    Descripcion = models.TextField(blank = False, null = False)
    Precio_De_Compra = models.PositiveSmallIntegerField()
    Precio_De_Venta = models.PositiveSmallIntegerField()

    Tipos = (('J', 'Joya'), ('P', 'Producto'))
    Tipo = models.CharField(max_length=1, choices=Tipos, default='M')

    Kilates = models.DecimalField(decimal_places = 2, max_digits = 3)
    Kilogramos = models.DecimalField(decimal_places = 2, max_digits = 3)

    def obtenerDatosProducto(self):
       cadena = "{0} {1}, {2}"
       return cadena.format(self.Id_Producto, self.Nombre, self.Precio_De_Venta)

    def __str__(self):
        return self.obtenerDatosProducto()
