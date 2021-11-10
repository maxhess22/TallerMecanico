from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Persona, Agenda, Servicio, Boleta

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email']

class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = ['idCliente','nombreCliente', 'emailCliente', 'telefono', 'contraseña']

class AgendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agenda
        fields = ['idAgenda','horario', 'fecha', 'marca', 'modelo', 'kilometraje', 'idCli']

class ServicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servicio
        fields = ['idServicio','mantencionGeneral', 'mecanicaGeneral', 'cambioAceite', 'precio', 'idAge']

class BoletaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Boleta
        fields = ['idBoleta','descripcion', 'valorUnitario', 'valorTotal', 'idServ']