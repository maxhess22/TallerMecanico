from django.contrib import admin
from .models import Persona, Agenda, Servicio, Boleta
# Register your models here.

admin.site.register(Persona)
admin.site.register(Agenda)
admin.site.register(Servicio)
admin.site.register(Boleta)

