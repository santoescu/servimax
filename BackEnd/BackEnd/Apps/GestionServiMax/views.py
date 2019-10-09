from django.shortcuts import render

from rest_framework import generics

from BackEnd.Apps.GestionServiMax.models import Administrador, Cliente, Trabajador, Transaccion, Producto

from BackEnd.Apps.GestionServiMax.serializador import AdministradorSerializador, ClienteSerializador, TrabajadorSerializador, TransaccionSerializador, ProductoSerializador


# Create your views here.

class AdministradorLista(generics.ListCreateAPIView):
	queryset = Administrador.objects.all()
	serializer_class = AdministradorSerializador

class AdministradorDetalle(generics.RetrieveUpdateDestroyAPIView):
	queryset = Administrador.objects.all()
	serializer_class = AdministradorSerializador



class ClienteLista(generics.ListCreateAPIView):
	queryset = Cliente.objects.all()
	serializer_class = ClienteSerializador

class ClienteDetalle(generics.RetrieveUpdateDestroyAPIView):
	queryset = Cliente.objects.all()
	serializer_class = ClienteSerializador


class TrabajadorLista(generics.ListCreateAPIView):
	queryset = Trabajador.objects.all()
	serializer_class = TrabajadorSerializador

class TrabajadorDetalle(generics.RetrieveUpdateDestroyAPIView):
	queryset = Trabajador.objects.all()
	serializer_class = TrabajadorSerializador

class TransaccionLista(generics.ListCreateAPIView):
	queryset = Transaccion.objects.all()
	serializer_class = TransaccionSerializador

class TransaccionDetalle(generics.RetrieveUpdateDestroyAPIView):
	queryset = Transaccion.objects.all()
	serializer_class = TransaccionSerializador

class ProductoLista(generics.ListCreateAPIView):
	queryset = Producto.objects.all()
	serializer_class = ProductoSerializador

class ProductoDetalle(generics.RetrieveUpdateDestroyAPIView):
	queryset = Producto.objects.all()
	serializer_class = ProductoSerializador

