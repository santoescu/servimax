from rest_framework import serializers
from BackEnd.Apps.GestionServiMax.models import Administrador, Cliente, Trabajador, Transaccion, Producto, TiempoLaborado

class AdministradorSerializador(serializers.ModelSerializer):
	class Meta:
		model = Administrador
		fields = ('Id_Admin', 'Primer_Apellido', 'Segundo_Apellido', 'Nombres', 'Celular', 'Mail', 'Clave', 'Sexo')

class ClienteSerializador(serializers.ModelSerializer):
	class Meta:
		model = Cliente
		fields = ('Id_Cliente', 'Primer_Apellido', 'Segundo_Apellido', 'Nombres', 'Id_Admin', 'Celular', 'Mail', 'Sexo')

class TrabajadorSerializador(serializers.ModelSerializer):
	class Meta:
		model = Trabajador
		fields = ('Id_Trabajador', 'Primer_Apellido', 'Segundo_Apellido', 'Nombres', 'Id_Admin', 'Celular', 'Mail', 'Clave', 'Sexo')


class TransaccionSerializador(serializers.ModelSerializer) :
	class Meta:
		model = Transaccion
		fields = ('ID_Transaccion', 'Fecha', 'Tipo', 'ID_Cliente', 'ID_Trabajadores', 'ID_Admin')


class ProductoSerializador(serializers.ModelSerializer):
	class Meta:
		model = Producto
		fields = ('Id_Producto', 'ID_Transaccion', 'Nombre', 'Descripcion', 'Precio_De_Compra', 'Precio_De_Venta', 'Tipo', 'Kilates', 'Kilogramos')

class TiempoSerializador(serializers.ModelSerializer):
	class Meta:
		model = TiempoLaborado
		fields = ('fecha', 'Id_Trabajador', 'horas', 'minutos', 'segundos')
