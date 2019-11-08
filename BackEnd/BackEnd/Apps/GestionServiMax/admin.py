from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(Administrador)
admin.site.register(Cliente)
admin.site.register(Transaccion)
admin.site.register(Producto)
admin.site.register(Trabajador)
admin.site.register(TiempoLaborado)
admin.site.register(Cartera)