from django.shortcuts import get_object_or_404, render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions, status
from django.contrib.auth.models import User
from .serializers import UserSerializer, PersonaSerializer, AgendaSerializer, ServicioSerializer, BoletaSerializer
from .models import Persona, Agenda, Servicio, Boleta
# Create your views here.

class ListUser(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAdminUser, permissions.IsAuthenticated]

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, id=None):
        item = User.objects.get(id=id)
        serializer = UserSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data})
        else:
            return Response({"status": "error", "data": serializer.errors})

    def get(self, request, id=None):
        if id:
            item = User.objects.get(id=id)
            serializer = UserSerializer(item)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
                        
        # return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_404_NOT_FOUND)
        
        items = User.objects.all()
        serializer = UserSerializer(items, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

    def delete(self, request, id=None):
        item = get_object_or_404(User, id=id)
        item.delete()
        return Response({"status": "success", "data": "User Deleted"})

class ListPersonas(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAdminUser, permissions.IsAuthenticated]

    def post(self, request):
        serializer = PersonaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response( serializer.data)
            #return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, idCliente=None):
        item = Persona.objects.get(idCliente=idCliente)
        serializer = PersonaSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data})
        else:
            return Response({"status": "error", "data": serializer.errors})

    def get(self, request, idCliente=None):
        if idCliente:
            item = Persona.objects.get(idCliente=idCliente)
            serializer = PersonaSerializer(item)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
                        
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_404_NOT_FOUND)
        
        items = Persona.objects.all()
        serializer = PersonaSerializer(items, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

    def delete(self, request, idCliente=None):
        item = get_object_or_404(Persona, idCliente=idCliente)
        item.delete()
        return Response({"status": "success", "data": "User Deleted"})

class ListAgenda(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAdminUser, permissions.IsAuthenticated]

    def post(self, request):
        serializer = AgendaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request, idAgenda=None):
        if idAgenda:
            item = Agenda.objects.get(idAgenda=idAgenda)
            serializer = AgendaSerializer(item)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
                        
            #return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_404_NOT_FOUND)
        
        items = Agenda.objects.all()
        serializer = AgendaSerializer(items, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

    def delete(self, request, idAgenda=None):
        item = get_object_or_404(Agenda, idAgenda=idAgenda)
        item.delete()
        return Response({"status": "success", "data": "User Deleted"})


class ListServicio(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAdminUser, permissions.IsAuthenticated]

    def post(self, request):
        serializer = ServicioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, idServicio=None):
        if idServicio:
            item = Servicio.objects.get(idServicio=idServicio)
            serializer = ServicioSerializer(item)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
                        
            #return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_404_NOT_FOUND)
        
        items = Servicio.objects.all()
        serializer = ServicioSerializer(items, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

    def delete(self, request, idServicio=None):
        item = get_object_or_404(Servicio, idServicio=idServicio)
        item.delete()
        return Response({"status": "success", "data": "User Deleted"})

class ListBoleta(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAdminUser, permissions.IsAuthenticated]

    def post(self, request):
        serializer = BoletaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, idServicio=None):
        if idServicio:
            item = Boleta.objects.get(idServicio=idServicio)
            serializer = BoletaSerializer(item)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
                        
            #return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_404_NOT_FOUND)
        
        items = Boleta.objects.all()
        serializer = BoletaSerializer(items, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)