from django.urls import path
from django.conf.urls import include

from . import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [

    path('users/', views.ListUser.as_view(), name="users"),
    path('users/<int:id>', views.ListUser.as_view(), name="users"),
    path('token-auth/', obtain_auth_token, name='token_auth'),
    path('cliente/', views.ListPersonas.as_view(), name="cliente"),
    path('cliente/<int:idCliente>', views.ListPersonas.as_view(), name="cliente"),
    path('agenda/', views.ListAgenda.as_view(), name="agenda"),
    path('agenda/<int:idAgenda>', views.ListAgenda.as_view(), name="agenda"),
    path('servicio/', views.ListServicio.as_view(), name="servicio"),
    path('servicio/<int:idServicio>', views.ListServicio.as_view(), name="servicio"),
    path('boleta/', views.ListBoleta.as_view(), name="boleta"),
    path('boleta/<int:idBoleta>', views.ListBoleta.as_view(), name="boleta")

]