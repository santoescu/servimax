from django.urls import path
from django.conf.urls import url

from BackEnd.Apps.GestionServiMax import views
from BackEnd.Apps.send import SendViews

from django.views.decorators.csrf import csrf_exempt



#Se crean las urls.

urlpatterns = [
	url(r'^Administrador$', views.AdministradorLista.as_view()),
	url(r'Administrador/(?P<pk>[0-9]+)$', views.AdministradorDetalle.as_view()),

	url(r'^Cliente$', views.ClienteLista.as_view()),
	url(r'Cliente/(?P<pk>[0-9]+)$', views.ClienteDetalle.as_view()),

	url(r'^Trabajador$', views.TrabajadorLista.as_view()),
	url(r'Trabajador/(?P<pk>[0-9]+)$', views.TrabajadorDetalle.as_view()),

	url(r'^Transaccion$', views.TransaccionLista.as_view()),
	url(r'Transaccion/(?P<pk>[0-9]+)$', views.TransaccionDetalle.as_view()),

	url(r'^Producto$', views.ProductoLista.as_view()),
	url(r'Producto/(?P<pk>[0-9]+)$', views.ProductoDetalle.as_view()),

	url(r'^Tiempo$', views.TiempoLista.as_view()),
	url(r'Tiempo/(?P<pk>[0-9]+)$', views.TiempoDetalle.as_view()),

	url(r'^Send$',  csrf_exempt(SendViews.send_view)),

	




]
